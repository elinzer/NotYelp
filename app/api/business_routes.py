from pydoc import describe
from flask import Blueprint, request, jsonify
from app.models import db, Business
from ..forms.business_form import BusinessForm
from datetime import time
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.aws import (upload_file_to_s3, allowed_file, get_unique_filename)


business_routes = Blueprint("businesses", __name__, url_prefix="/businesses")

import re

# Get all Businesses
@business_routes.route("/")
def all_businesses():
    businesses = Business.query.all()
    return {"businesses": [business.to_dict() for business in businesses]}


# Search Businesses
@business_routes.route("/search")
def search_businesses():
    query_name = request.args.get("name")
    businesses = Business.query.filter(Business.name.ilike(f"%{query_name}%")).all()
    return {"businesses": [business.to_dict() for business in businesses]}


# Get Business by ID
@business_routes.route("/<int:id>")
def get_business(id):
    business = Business.query.get(id)
    return business.to_dict()


# Create Business
@business_routes.route("/", methods=["POST"])
@login_required
def create_business():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    aws_url = upload["url"]

    form = BusinessForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_business = Business(
            owner_id=current_user.id,
            name=form.name.data,
            address=form.address.data,
            description=form.description.data,
            url=form.url.data,
            phone=form.phone.data,
            state=form.state.data,
            city=form.city.data,
            zipcode=form.zipcode.data,
            open_time=form.open_time.data,
            close_time=form.close_time.data,
            preview_image=aws_url
        )
        db.session.add(new_business)
        db.session.commit()
        return jsonify(new_business.to_dict()), 200
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Edit Business
@business_routes.route("/<int:business_id>", methods=["PUT"])
@login_required
def edit_business(business_id):
    form = BusinessForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        business = Business.query.get(business_id)
        if business.owner_id == current_user.id:
            business.name = form.name.data
            business.address = form.address.data
            business.description = form.description.data
            business.url = form.url.data
            business.phone = form.phone.data
            business.state = form.state.data
            business.city = form.city.data
            business.zipcode = form.zipcode.data
            business.open_time = form.open_time.data
            business.close_time = form.close_time.data
            business.preview_image = form.preview_image.data

            db.session.commit()
            return jsonify(business.to_dict()), 200
        else:
            return {"errors": "Unauthorized"}, 401
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Delete Business
@business_routes.route("/<int:business_id>", methods=["DELETE"])
@login_required
def delete_business(business_id):
    business = Business.query.filter(Business.id == business_id).first()
    if business.owner_id == current_user.id:
        db.session.delete(business)
        db.session.commit()
        return (
            jsonify({"message": "Business successfully deleted", "status-code": 200}),
            200,
        )
    else:
        return {"errors": "Unauthorized"}, 401
