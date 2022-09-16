from sqlalchemy import func
from .db import db

class Business(db.Model):
  __tablename__ = "businesses"

  id = db.Column("id", db.Integer, primary_key = True)
  name = db.Column("name", db.String, nullable=False)
  address = db.Column("address", db.String, nullable=False)
  description = db.Column("description", db.String, nullable=False)
  url = db.Column("url", db.String, nullable=False)
  phone = db.Column("phone", db.Integer, nullable=False)
  state = db.Column("state", db.String, nullable=False)
  city = db.Column("city", db.String, nullable=False)
  zipcode = db.Column("zipcode", db.Integer, nullable=False)
  open_time = db.Column("open_time", db.Time, nullable=False)
  close_time = db.Column("close_time", db.Time, nullable=False)
  preview_image = db.Column("preview_image", db.String, nullable=False)

  created_at = db.Column("created_at", db.DateTime, default=func.now())
  updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

  owner_id = db.Column("owner_id", db.Integer, db.ForeignKey("users.id"))

  owner = db.relationship("User")
  reviews = db.relationship("Review", back_populates="business")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "address": self.address,
      "description": self.description,
      "url": self.url,
      "phone": self.phone,
      "state": self.state,
      "city": self.city,
      "zipcode": self.zipcode,
      "open_time": self.open_time.hour,
      "close_time": self.close_time.hour,
      "preview_image": self.preview_image,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
      "owner_id": self.owner_id,
    }
