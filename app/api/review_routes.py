from crypt import methods
from flask import Flask, Blueprint, jsonify
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
def create_review():
    form = ReviewForm()
    if form.validate_on_submit():
        new_review = Review(
                        stars=form.stars.data,
                        review=form.review_body.data,
                        business_id=form.business_id.data,
                        user_id=form.user_id.data,
                        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return {'errors': form.errors}, 422


#Update Review
@review_routes.route('/<id>', methods=['PUT'])
def update_review(id):
    form = ReviewForm()
    review = Review.query.get(id)

    if form.validate_on_submit():
        review.review = form.review.data
        review.stars = form.stars.data
        db.session.commit()
        return review.to_dict()
    else:
        return {'errors': form.errors}, 422
