from crypt import methods
from flask import Flask, Blueprint, jsonify, request
from app.models import review
from flask_login import login_required, current_user
from ..models import Like
from ..models import db
from ..forms.like_form import LikeForm
from .auth_routes import validation_errors_to_error_messages


like_routes = Blueprint('likes', __name__)

#Get all likes
@like_routes.route('/')
def get_all():
    likes = Like.query.all()
    return { "likes": [l.to_dict() for l in likes] }


#Get likes by current user
@like_routes.route('/current')
@login_required
def get_current():
    likes = Like.query.filter(Like.user_id == current_user.id).all()
    return { "likes": [l.to_dict() for l in likes] }


#Post a like
@like_routes.route('/', methods=['POST'])
@login_required
def post_like():
    form = LikeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_like = Like(
                    user_id=form.user_id.data,
                    buisness_id=form.buisness_id.data,
                    like=form.like.data,
                    submit=form.submit.data
        )
        db.session.add(new_like)
        db.session.commit()
        return jsonify(new_like.to_dict()), 200

#TODO skipping edit a like for now

#Delete a Like
@like_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_like(id):
    delete_like = Like.query.filter(Like.id == id).first()
    if delete_like.user_id == current_user.id:
        db.session.delete(delete_like)
        db.session.commit()
        return jsonify({
        "message": "Business successfully deleted",
        "status-code": 200
    }), 200
    else:
        return {"errors": "Unauthorized"} , 401
