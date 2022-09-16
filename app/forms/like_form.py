from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

def validate_like(form, field):
  if (field.data) < 1:
    raise ValidationError("Must be valid reaction")
  elif (field.data) > 3:
    raise ValidationError("Must be valid reaction")

class LikeForm(FlaskForm):
  user_id = IntegerField("User_Id", validators=[DataRequired()])
  business_id = IntegerField("Business_Id", validators=[DataRequired()])
  like = IntegerField("Like", validators=[DataRequired(), validate_like])
  submit = SubmitField("Submit")
