from xml.dom import ValidationErr
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, DecimalField, TimeField
from wtforms.validators import DataRequired, ValidationError, URL

def validate_name(form, field):
  if len(field.data) > 25:
    raise ValidationError("Name must be less than 25 characters")
  elif len(field.data) < 0:
    raise ValidationError("Name must not be empty")

def validate_address(form, field):
  if len(field.data) > 50:
    raise ValidationError("Address must be less than 50 characters")
  elif len(field.data) < 6:
    raise ValidationError("Address must be valid")

def validate_phone(form, field):
  if len(field.data) is not 10:
    raise ValidationError("Phone must be 10 numbers")

def validate_state(form, field):
  if len(field.data) > 15:
    raise ValidationError("State must be less than 15 characters")
  elif len(field.data) < 0:
    raise ValidationError("State must not be empty")

def validate_city(form, field):
  if len(field.data) > 35:
    raise ValidationError("City must be less than 35 characters")
  elif len(field.data) < 0:
    raise ValidationError("City must not be empty")

def validate_zipcode(form, field):
  if len(field.data) is not 5:
    raise ValidationError("Zipcode must be valid")

def validate_time(form, field):
  if (field.data) > 24:
    raise ValidationError("Time must be valid")
  elif (field.data) < 0:
    raise ValidationError("Time must be valid")

def validate_image(form, field):
  pass

class BusinessForm(FlaskForm):
  owner_id = IntegerField("Owner_Id", validators=[DataRequired()])
  name = StringField("Name", validators=[DataRequired(), validate_name])
  address = StringField("Address", validators=[DataRequired(), validate_address])
  url = StringField("Url", validators=[DataRequired(), URL()])
  phone = IntegerField("Phone", validators=[DataRequired(), validate_phone])
  state = StringField("State", validators=[DataRequired(), validate_state])
  city = StringField("City", validators=[DataRequired(), validate_city])
  zipcode = IntegerField("Zipcode", validators=[DataRequired(), validate_zipcode])
  open_time = TimeField("Open_Time", validators=[DataRequired(), validate_time])
  close_time = TimeField("Close_Time", validators=[DataRequired(), validate_time])
  preview_image = StringField("preview_image", validators=[DataRequired()])
  submit = SubmitField("Submit")
