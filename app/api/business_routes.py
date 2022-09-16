from pydoc import describe
from flask import Blueprint, request, jsonify
from app.models import db, Business
from ..forms.business_form import BusinessForm
from ..forms.edit_business_form import EditBusinessForm

business = Blueprint("business", __name__, url_prefix="/businesses")

#TODO: Have not tested routes live yet

#Get all Businesses
@business.route("/")
def all_businesses():
  businesses = Business.query.all()
  return {"businesses": [business.to_dict() for business in businesses]}
# TODO: Need to implement reviews under get business routes

#Create Business
@business.route("/", methods=["POST"])
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
      lat=form.lat.data,
      lng=form.lng.data,
      open_time=form.open_time.data,
      close_time=form.close_time.data
    )
    db.session.add(new_business)
    db.session.commit()
    return jsonify(new_business.to_dict()), 200

#Edit Business
@business.route("/<int:business_id>", methods=["PUT"])
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
    business.lat = form.lat.data,
    business.lng = form.lng.data,
    business.open_time = form.open_time.data,
    business.close_time = form.close_time.data,
    db.session.commit()
    return jsonify(business.to_dict()), 200

#Delete Business
@business.route("/<int:business_id>", methods=["DELETE"])
def delete_business(business_id):
  business = Business.query.filter(Business.id == business_id)
  db.session.delete(business)
  db.session.commit()
  return jsonify({
        "message": "Business successfully deleted",
        "status-code": 200
    }), 200
