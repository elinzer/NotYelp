from sqlalchemy import func
from .db import db
from datetime import datetime

class Business(db.Model):
  __tablename__ = "businesses"

  id = db.Column("id", db.Integer, primary_key = True)
  name = db.Column("name", db.String, nullable=False)
  address = db.Column("address", db.String, nullable=False)
  description = db.Column("description", db.String, nullable=False)
  url = db.Column("url", db.String, nullable=False)
  phone = db.Column("phone", db.String, nullable=False)
  state = db.Column("state", db.String, nullable=False)
  city = db.Column("city", db.String, nullable=False)
  zipcode = db.Column("zipcode", db.String, nullable=False)
  open_time = db.Column("open_time", db.Time, nullable=False)
  close_time = db.Column("close_time", db.Time, nullable=False)
  preview_image = db.Column("preview_image", db.String, nullable=False)

  created_at = db.Column("created_at", db.DateTime, default=func.now())
  updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

  owner_id = db.Column("owner_id", db.Integer, db.ForeignKey("users.id"))

  owner = db.relationship("User")
  reviews = db.relationship("Review", back_populates="business", cascade="all, delete")
  likes = db.relationship("Like", back_populates="business", cascade="all, delete")
  menuitems = db.relationship("MenuItem", back_populates="business", cascade="all, delete")

  def to_dict(self):

    is_open = False
    if self.open_time <= self.close_time:
      is_open = self.open_time <= datetime.utcnow().time() <= self.close_time
    else:
      is_open = self.open_time <= datetime.utcnow().time() or datetime.utcnow().time() <= self.close_time

    return {
      "id": self.id,
      "name": self.name,
      "address": self.address,
      "description": self.description,
      "url": self.url,
      "phone": "({}) {}-{}".format(self.phone[0:3], self.phone[3:6], self.phone[6::]),
      "state": self.state,
      "city": self.city,
      "zipcode": self.zipcode,
      "open_time": self.open_time.isoformat(timespec='minutes'),
      "close_time": self.close_time.isoformat(timespec='minutes'),
      "format_open":self.open_time.strftime("%I:%M %p"),
      "format_close":self.close_time.strftime("%I:%M %p"),
      "preview_image": self.preview_image,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
      "owner_id": self.owner_id,
      "review_ids": [review.id for review in self.reviews],
      "like_ids": [like.id for like in self.likes],
      "menuitem_ids": [menuitem.id for menuitem in self.menuitems],
      "open_status": is_open,
      "avg_rating": (sum([review.stars for review in self.reviews]) / len(self.reviews)) if len(self.reviews) > 0 else 0
    }
