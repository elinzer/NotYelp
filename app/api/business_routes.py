from pydoc import describe
from flask import Blueprint, request, jsonify
from app.models import db, Business
from ..forms.business_form import BusinessForm
from ..forms.edit_business_form import EditBusinessForm
from flask_login import current_user, login_required

business_routes = Blueprint("businesses", __name__, url_prefix="/businesses")

#TODO: Have not tested routes live yet

#Get all Businesses
# TODO: Need to implement reviews under GET business routes
@business_routes.route("/")
def all_businesses():
  businesses = Business.query.all()
  return {"businesses": [business.to_dict() for business in businesses]}

#Create Business
@business_routes.route("/", methods=["POST"])
@login_required
def create_business():
  form = BusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_business = Business(
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
      preview_image=form.preview_image.data
    )
    db.session.add(new_business)
    db.session.commit()
    return jsonify(new_business.to_dict()), 200
  else:
    return {'errors': form.errors}

#Edit Business
@business_routes.route("/<int:business_id>", methods=["PUT"])
@login_required
def edit_business(business_id):
  form = EditBusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    business = Business.query.get(business_id)
    business.address = form.address.data,
    business.description = form.description.data,
    business.url = form.url.data,
    business.phone = form.phone.data,
    business.state = form.state.data,
    business.city = form.city.data,
    business.zipcode = form.zipcode.data,
    business.open_time = form.open_time.data,
    business.close_time = form.close_time.data,
    business.preview_image = form.preview_image.data
    db.session.commit()
    return jsonify(business.to_dict()), 200
  else:
    return {'errors': form.errors}

#Delete Business
@business_routes.route("/<int:business_id>", methods=["DELETE"])
@login_required
def delete_business(business_id):
  business = Business.query.filter(Business.id == business_id).first()
  db.session.delete(business)
  db.session.commit()
  return jsonify({
        "message": "Business successfully deleted",
        "status-code": 200
    }), 200
