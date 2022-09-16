from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, DecimalField, TimeField
from wtforms.validators import DataRequired

class BusinessForm(FlaskForm):
  owner_id = IntegerField("Owner_Id", validators=[DataRequired()])
  name = StringField("Name", validators=[DataRequired()])
  address = StringField("Address", validators=[DataRequired()])
  url = StringField("Url", validators=[DataRequired()])
  phone = IntegerField("Phone", validators=[DataRequired()])
  state = StringField("State", validators=[DataRequired()])
  city = StringField("City", validators=[DataRequired()])
  zipcode = IntegerField("Zipcode", validators=[DataRequired()])
  open_time = TimeField("Open_Time", validators=[DataRequired()])
  close_time = TimeField("Close_Time", validators=[DataRequired()])
  preview_image = StringField("preview_image", validators=[DataRequired()])
  submit = SubmitField("Submit")
