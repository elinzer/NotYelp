from ..models import db
from app.models import MenuItem

def seeded_menuitems():
  demo_menuitems = [
    MenuItem(
      name="Basil Pesto Pizza slice", business_id=1,price=7, preview_image="https://silveroak.com/wp-content/uploads/2020/03/Recipe-Basil-Pesto-Pizza.jpg"
    ),
    MenuItem(
      name="Margherita pizza slice", business_id=1, price=5, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/yzL7kfT2xaCwdeNU8iiN4A/o.jpg"
    ),
    MenuItem(
      name="Cheesy Sicilian slice", business_id=1, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PVPARzZ7TRIdrcujv8vSbQ/o.jpg"
    ),
    MenuItem(
      name="Cheesy Sicilian pepperoni", business_id=1, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/TN1oPyvQZ45dNNKx24Jlwg/o.jpg"
    ),
    MenuItem(
      name="Vegetable pizza slice", business_id=1, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/7kH3W8r2fXRAZTFoqJgoiw/o.jpg"
    ),
    MenuItem(
      name="Spicy peperoni cups slice", business_id=2, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/UWyGItCLux78b166nOP2JA/o.jpg"
    ),
    MenuItem(
      name="Original Margherita Slice", business_id=2, price=7, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/josGbKOx0TGB5d2n5cZTVw/o.jpg"
    ),
    MenuItem(
      name="Vegetable pizza slice", business_id=2, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Ro20Rf3ZPiXVoQjFI_TEPA/o.jpg"
    ),
    MenuItem(
      name="Clam slice", business_id=2, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/E_0glsWoAEqDXL1hyVDMRw/o.jpg"
    ),
    MenuItem(
      name="Rustic Double Pepperoni slice", business_id=2, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Ro20Rf3ZPiXVoQjFI_TEPA/o.jpg"
    ),
    MenuItem(
      name="Plain Slice", business_id=3, price=4, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/74aPspsE4O4P8-qiTEHzzQ/o.jpg"
    ),
    MenuItem(
      name="Pepperoni Slice", business_id=3, price=5, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/BMUuVQCxbNFfTj6Z-jjdhA/o.jpg"
    ),
    MenuItem(
      name="White Pie", business_id=3, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/FM3u-KH_qLyBxC6wFb5ALQ/o.jpg"
    ),
    MenuItem(
      name="Vegan Ceasar Salad", business_id=3, price=11, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/XugSgaGx-JcMbv2vj9U2Og/o.jpg"
    ),
    MenuItem(
      name="Sicilian Pie", business_id=3, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/OSLoDY2taTz8ggNqoIgG0w/o.jpg"
    ),
    MenuItem(
      name="Classic Margherita Pie", business_id=4, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/oULNnZNLLoBe7v7DPJcZew/o.jpg"
    ),
    MenuItem(
      name="Classic Italian Sausage Pie", business_id=4, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/dmb6Gd0MDfdGQYnTBPf1-g/o.jpg"
    ),
    MenuItem(
      name="Cobb Salad", business_id=4, price=13, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/mvuRnBdQryrUUnPvNoMQsQ/o.jpg"
    ),
    MenuItem(
      name="Caprese Salad", business_id=4, price=13, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Xsyw8jGHXmDK0zmRyBAcAQ/o.jpg"
    ),
    MenuItem(
      name="Buffalo Chicken Pie", business_id=4, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/TqvJZeQ_AXirEsUF3bjuLw/o.jpg"
    ),
    MenuItem(
      name="Ceasar Salad Pie", business_id=5, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/yKF_YNH4n2eaoAwr12GnyQ/o.jpg"
    ),
    MenuItem(
      name="Chicken Bacon Ranch Pie", business_id=5, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/gBau_-ynl2wlaMTJm6y-Hw/o.jpg"
    ),
    MenuItem(
      name="Spinach Pinwheels", business_id=5, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PAT0GQ70DbJJjf5hmbfU0w/o.jpg"
    ),
    MenuItem(
      name="Baked-Ziti Pie", business_id=5, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/UuILWzpZ8LDR0ez1HdXDvQ/o.jpg"
    ),
    MenuItem(
      name="Chicken Rolls", business_id=5, price=12, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/MbIVV47y-spKHgBXQvTqVA/o.jpg"
    ),


  ]

  for menuitem in demo_menuitems:
    db.session.add(menuitem)
    db.session.commit()

def undo_menuitems():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
