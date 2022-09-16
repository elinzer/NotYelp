from flask import Flask, Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..models import Review
from ..models import db
from ..forms.review_form import ReviewForm
# from flask_login import current_user


review_routes = Blueprint('reviews', __name__)

#Get all Reviews
@review_routes.route('/')
def get_all():
    reviews = Review.query.all()
    return { "reviews": [r.to_dict() for r in reviews] }

#Get a single review
@review_routes.route('/<id>')
def get_single(id):
    review = Review.query.get(id)
    return review.to_dict()


#Create a review
@review_routes.route('/', methods=['POST'])
@login_required
def create_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
                        stars=form.stars.data,
                        review=form.review_body.data,
                        business_id=form.business_id.data,
                        user_id=current_user.id,
                        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return {'errors': form.errors}, 422


#Update Review
@review_routes.route('/<int:id>', methods=['PUT'])
def update_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    review = Review.query.get(id)

    if form.validate_on_submit():
        review.review = form.review.data
        review.stars = form.stars.data
        db.session.commit()
        return review.to_dict()
    else:
        return {'errors': form.errors}, 422

#Delete Review
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    delete_review = Review.query.filter(Review.id == id).first()
    if delete_review.user_id == current_user.id:
        db.session.delete(delete_review)
        db.session.commit()
        return jsonify({
        "message": "Business successfully deleted",
        "status-code": 200
    }), 200
    else:
        return {'Message': 'Unable to delete this review, This review belongs to another user.'}
