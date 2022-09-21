from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError, URL
from .validators import validate_image
def validate_name(form, field):
  if len(field.data) > 25:
    raise ValidationError("Name must be less than 25 characters")
  elif len(field.data) < 0:
    raise ValidationError("Name must not be empty")

def validate_price(form, field):
  if (field.data) > 65:
    raise ValidationError("Price is too high")
  elif (field.data) < 0:
    raise ValidationError("Price cannot be negative")

class MenuItemForm(FlaskForm):
  name = StringField("Name", validators=[DataRequired(), validate_name])
  price = IntegerField("Price", validators=[DataRequired(), validate_price])
  business_id = IntegerField("Business_Id", validators=[DataRequired()])
  preview_image = StringField("preview_image", validators=[DataRequired(), validate_image])
  submit = SubmitField("Submit")
