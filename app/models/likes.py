from sqlalchemy import func
from .db import db

class Like(db.Model):
  __tablename__ = "likes"

  id = db.Column("id", db.Integer, primary_key = True)
  like = db.Column("like", db.Integer, nullable=False)

  user_id = db.Column("user_id", db.Integer)

  def to_dict(self):
    return {
      "id": self.id,
      "like": self.like,
      "user_id": self.user_id,
      "business_id": self.business_id
    }
