from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    edgar = User(
        username="Edgar L.", hashed_password="password", email="edgarl@aa.io", profile_image="")
    hazel = User(
        username="Hazel G.", hashed_password="password", email="hazelg@aa.io", profile_image="")
    el = User(
        username="El L.", hashed_password="password", email="ell@aa.io", profile_image="")
    giordan = User(
        username="Giordan M.", hashed_password="password", email="giordanm@aa.io", profile_image="")
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(edgar)
    db.session.add(hazel)
    db.session.add(el)
    db.session.add(giordan)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
