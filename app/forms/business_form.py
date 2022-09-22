from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, DecimalField, TimeField
from wtforms.validators import DataRequired, ValidationError, URL, Regexp
from .validators import validate_image, validate_zipcode

def validate_name(form, field):
  if len(field.data) > 25:
    raise ValidationError("Name must be less than 25 characters")
  elif len(field.data) < 5:
    raise ValidationError("Name must be at least 5 characters")

def validate_address(form, field):
  if len(field.data) > 50:
    raise ValidationError("Address must be less than 50 characters")
  elif len(field.data) < 6:
    raise ValidationError("Address must be at least 6 characters")

def validate_phone(form, field):
  if len(str(field.data)) != 10:
    raise ValidationError("Phone must be 10 numbers")

def validate_city(form, field):
  if len(field.data) > 35:
    raise ValidationError("City must be less than 35 characters")
  elif len(field.data) < 5:
    raise ValidationError("City must be at least 5 characters")

def validate_time(form, field):
  if (field.data.hour) > 24:
    raise ValidationError("Time must be valid")
  elif (field.data.hour) < 0:
    raise ValidationError("Time must be valid")


class BusinessForm(FlaskForm):
  owner_id = IntegerField("owner_id", validators=[DataRequired()])
  name = StringField("name", validators=[DataRequired(), validate_name])
  address = StringField("address", validators=[DataRequired(), validate_address])
  url = StringField("url", validators=[DataRequired()])
  description = StringField("description", validators=[DataRequired()])
  phone = StringField("phone", validators=[DataRequired(), validate_phone])
  state = StringField("State", validators=[DataRequired()])
  city = StringField("city", validators=[DataRequired(), validate_city])
  zipcode = StringField("zipcode", validators=[DataRequired(), validate_zipcode])
  open_time = TimeField("open_time", validators=[DataRequired(), validate_time])
  close_time = TimeField("close_time", validators=[DataRequired(), validate_time])
  preview_image = StringField("preview_image", validators=[DataRequired(), validate_image])
  submit = SubmitField("Submit")
