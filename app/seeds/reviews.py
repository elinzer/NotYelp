from app.models import business
from ..models import db
from ..models.review import Review
def seeded_reviews():
  demo_reviews = [
    Review(
      stars=5, review="This restaurant is amazing!", business_id=1, user_id=1
    ),
    Review(
      stars=2, review="This restaurant is not that good!", business_id=2, user_id=2
    ),
    Review(
      stars=1, review="This restaurant is really bad!", business_id=3, user_id=3
    ),
    Review(
      stars=3.5, review="This restaurant is okay-ish.", business_id=4, user_id=4
    ),
    Review(
      stars=4, review="This restaurant is good, minor issues!", business_id=5, user_id=5
    )
  ]

  for review in demo_reviews:
    db.session.add(review)
  db.session.commit()

def undo_reviews():
  Review.query.delete()
  db.session.commit()
