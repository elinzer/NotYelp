from ..models import db
from ..models import Business
from datetime import time
def seeded_businesses():
  demo_businesses = [
    Business(
      owner_id=1, name="Lombardi's Pizza", address="Mulberry St & Mott St", description="Demo Description 1", url="http://www.firstpizza.com/", phone=2129417994, state="New York", city="Nolita", zipcode=10012, lat=40.723360, lng=-73.995700, open_time=time(hour=9), close_time=time(hour=17)
    ),
    Business(
      owner_id=1, name="Noodle World", address="700 W Valley Blvd", description="Demo Description 2", url="http://noodleworld.com", phone=6262938800, state="California", city="Alhambra", zipcode=91803, lat=34.077780, lng=-118.131050, open_time=time(hour=8), close_time=time(hour=17)
    ),
    Business(
      owner_id=1, name="Hae Jang Chon", address="3821 W 6th St", description="Demo Description 3", url="https://haejangchon.iorderfoods.com/", phone=2133898777, state="California", city="Los Angeles", zipcode=90020, lat=34.063880, lng=-118.306050, open_time=time(hour=8), close_time=time(hour=17)
    ),
    Business(
      owner_id=1, name="Miller's Seawall Grill", address="1824 Seawall Blvd", description="Demo Description 4", url="https://millersseawallgrillgalveston.com/", phone=4097638777, state="Texas", city="Galveston", zipcode=77550, lat=29.293290, lng=-94.784490, open_time=time(hour=8), close_time=time(hour=17)
    ),
    Business(
      owner_id=1, name="The Eagle", address="1314 Bardstown Rd", description="Demo Description 5", url="http://eaglerestaurant.com", phone=5024988420, state="Kentucky", city="Louisville", zipcode=40204, lat=38.2347619, lng=-85.7147857, open_time=time(hour=8), close_time=time(hour=17)
    ),
  ]

  for business in demo_businesses:
    db.session.add(business)
  db.session.commit()

def undo_businesses():
  Business.query.filter(Business.owner_id == 1).delete()
  db.session.commit()
