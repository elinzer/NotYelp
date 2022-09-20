from flask import Blueprint, request, jsonify
from app.models import db, MenuItem, Business
from ..forms.menu_item_form import MenuItemForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

menuitem_routes = Blueprint("menuitems", __name__, url_prefix="/items")

#Get all MenuItems
@menuitem_routes.route("/")
def all_menuitems():
    menuitems = MenuItem.query.all()
    return {"menuitems": [m.to_dict() for m in menuitems]}

#Create MenuItem
@menuitem_routes.route("/", methods=["POST"])
@login_required
def create_menuitem():
    form = MenuItemForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_menuitem = MenuItem(
            name=form.name.data,
            business_id = form.business_id.data,
            price=form.price.data,
            preview_image=form.preview_image.data,
        )
        db.session.add(new_menuitem)
        db.session.commit()
        return jsonify(new_menuitem.to_dict()), 200
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# Delete MenuItem
@menuitem_routes.route("/<int:menuitem_id>", methods=["DELETE"])
@login_required
def delete_menuitem(menuitem_id):
    menuitem = MenuItem.query.filter(MenuItem.id == menuitem_id).first()
    db.session.delete(menuitem)
    db.session.commit()
    return (
            jsonify({"message": "Business successfully deleted", "status-code": 200}),
            200,
        )
