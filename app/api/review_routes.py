from flask import Flask, Blueprint
from ..models import Review


review_routes = Blueprint('reviews', __name__)

#Get all Reviews
@review_routes.route('/')
def get_all():
    reviews = Review.query.all()
    return { "reviews": [r.to_dict() for r in reviews] }

#Get a single review

@review_routes.route('/<id>')
def get_single(id):
    review = Review.query.filter(Review.id == id)
    return review.to_dict()
