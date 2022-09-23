from wtforms.validators import DataRequired, ValidationError, URL
import re
def validate_image(form,field):
  img_match = re.match(r'^https?:\/\/.*\.(?:png|jpg|jpeg)$', field.data)
  if not img_match:
    raise ValidationError("Image must end in .png/.jpg/.jpeg")


def validate_zipcode(form,field):
  zip_match = re.match(r'^\d{5}$', field.data)
  if not zip_match:
    raise ValidationError("Zipcode must be 5 digits")
