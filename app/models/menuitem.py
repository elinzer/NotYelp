from .db import db

class MenuItem(db.Model):
  __tablename__ = "menu_items"

  id = db.Column("id", db.Integer, primary_key = True)
  name = db.Column("name", db.String, nullable=False)
  price = db.Column("price", db.Integer, nullable=False)
  preview_image = db.Column("preview_image", db.String, nullable=False)

  business_id = db.Column("business_id", db.Integer, db.ForeignKey('businesses.id'), nullable=False)

  business = db.relationship("Business")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "price": self.price,
      "preview_image": self.preview_image
    }
