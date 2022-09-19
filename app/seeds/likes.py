from app.models import Like
from ..models import db

def seeded_likes():
    demo_likes = [
    Like(like=3, user_id=1, business_id=1),
    Like(like=3, user_id=1, business_id=2),
    Like(like=2, user_id=2, business_id=1),
    Like(like=1, user_id=1, business_id=3),
    Like(like=3, user_id=3, business_id=1),
    ]
    for like in demo_likes:
        db.session.add(like)
    db.session.commit()

def undo_likes():
  db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
  db.session.commit()
