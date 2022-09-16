from flask_wtf import FlaskForm
from wtforms.fields import IntegerField, TextAreaField
from wtforms.validators import DataRequired, Length, NumberRange



class ReviewForm(FlaskForm):
    business_id = IntegerField('Business Id', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    stars = IntegerField('Stars', validators=[DataRequired(), NumberRange(1,5)])
    review = TextAreaField('Review', validators=[DataRequired(), Length(1,255)])
