from .db import db
from sqlalchemy import func


class Review(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    stars = db.Column(db.Integer)
    review = db.Column(db.String(255))

    created_at = db.Column("created_at", db.DateTime, default=func.now())
    updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())


    business = db.relationship("Business", back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')
