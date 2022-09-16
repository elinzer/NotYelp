from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, DecimalField, TimeField
from wtforms.validators import DataRequired, NumberRange, URL

class EditBusinessForm(FlaskForm):
  owner_id = IntegerField("Owner_Id")
  name = StringField("Name", validators=[DataRequired()])
  address = StringField("Address", validators=[DataRequired()])
  url = StringField("Url", validators=[DataRequired(), URL()])
  phone = IntegerField("Phone", validators=[DataRequired()])
  state = StringField("State", validators=[DataRequired()])
  city = StringField("City", validators=[DataRequired()])
  zipcode = IntegerField("Zipcode", validators=[DataRequired()])
  lat = DecimalField("Latitude", validators=[DataRequired(), NumberRange(-90,90)])
  lng = DecimalField("Longitude", validators=[DataRequired(), NumberRange(-180,180)])
  open_time = TimeField("Open_Time", validators=[DataRequired()])
  close_time = TimeField("Close_Time", validators=[DataRequired()])
  previewImage = StringField("PreviewImage", validators=[DataRequired()])
  submit = SubmitField("Submit")
