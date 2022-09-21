from wtforms.validators import DataRequired, ValidationError, URL
import re
def validate_image(form,field):
  img_match = re.match(r'^https?:\/\/.*\.(?:png|jpg|jpeg)$', field.data)
  if not img_match:
    raise ValidationError("Image must be valid")
