from ..models import db
from app.models import Business
from datetime import time

def seeded_businesses():
  demo_businesses = [
    Business(
      owner_id=1, name="Lombardi's Pizza", address="Mulberry St & Mott St", description="Demo Description 1", url="http://www.firstpizza.com/", phone='2129417994', state="New York", city="Nolita", zipcode=10012,  open_time=time(hour=9), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/UZ6V_hobp1KpYDPOHNoCKw/l.jpg"
    ),
    Business(
      owner_id=1, name="Noodle World", address="700 W Valley Blvd", description="Demo Description 2", url="http://noodleworld.com", phone='6262938800', state="California", city="Alhambra", zipcode=91803,open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/TdnDgqw0VpKFgZIDukAcEQ/o.jpg"
    ),
    Business(
      owner_id=1, name="Hae Jang Chon", address="3821 W 6th St", description="Demo Description 3", url="https://haejangchon.iorderfoods.com/", phone='2133898777', state="California", city="Los Angeles", zipcode=90020,  open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/utraQPqRWf9B9j3pp-5YtQ/o.jpg"
    ),
    Business(
      owner_id=1, name="Miller's Seawall Grill", address="1824 Seawall Blvd", description="Demo Description 4", url="https://millersseawallgrillgalveston.com/", phone='4097638777', state="Texas", city="Galveston", zipcode=77550, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/5RzR9PqF_pPGIPrLBldvXw/o.jpg"
    ),
    Business(
      owner_id=1, name="The Eagle", address="1314 Bardstown Rd", description="Demo Description 5", url="http://eaglerestaurant.com", phone='5024988420', state="Kentucky", city="Louisville", zipcode=40204, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/LQNWsgwyV9Q97OGrn8mvPg/o.jpg"
    ),
  ]

  for business in demo_businesses:
    db.session.add(business)
  db.session.commit()

def undo_businesses():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
