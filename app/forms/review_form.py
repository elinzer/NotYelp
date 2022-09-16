from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, SubmitField, TextAreaField
from wtforms.validators import DataRequired



class ReviewForm(FlaskForm):
    review_body = TextAreaField('Review Body', validators=[DataRequired()])
    business_id = IntegerField('Business Id', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    stars = IntegerField('Stars', validators=[DataRequired()])
    review = StringField('Review', validators=[DataRequired()])
