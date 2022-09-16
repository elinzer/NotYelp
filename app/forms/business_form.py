from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, DecimalField, TimeField
from wtforms.validators import DataRequired

class BusinessForm(FlaskForm):
  owner_id = IntegerField("Owner_Id")
  name = StringField("Name", validators=[DataRequired()])
  address = StringField("Address")
  url = StringField("Url")
  phone = IntegerField("Phone")
  state = StringField("State")
  city = StringField("City")
  zipcode = IntegerField("Zipcode")
  open_time = TimeField("Open_Time")
  close_time = TimeField("Close_Time")
  preview_image = StringField("preview_image")
  submit = SubmitField("Submit")
