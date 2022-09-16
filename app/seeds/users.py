from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profile_image="https://cdn1.dotesports.com/wp-content/uploads/2018/08/11151637/128fb6e6-7b6a-4b25-8b16-6e562f9c288d.jpg")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', profile_image="https://cdn1.dotesports.com/wp-content/uploads/2018/08/11151637/128fb6e6-7b6a-4b25-8b16-6e562f9c288d.jpg")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profile_image="https://cdn1.dotesports.com/wp-content/uploads/2018/08/11151637/128fb6e6-7b6a-4b25-8b16-6e562f9c288d.jpg")
    edgar = User(
        username="Edgar L.", password="password", email="edgarl@aa.io", profile_image="https://cdn1.dotesports.com/wp-content/uploads/2018/08/11151637/128fb6e6-7b6a-4b25-8b16-6e562f9c288d.jpg")
    hazel = User(
        username="Hazel G.", password="password", email="hazelg@aa.io", profile_image="https://cdn1.dotesports.com/wp-content/uploads/2018/08/11151637/128fb6e6-7b6a-4b25-8b16-6e562f9c288d.jpg")
    el = User(
        username="El L.", password="password", email="ell@aa.io", profile_image="https://cdn1.dotesports.com/wp-content/uploads/2018/08/11151637/128fb6e6-7b6a-4b25-8b16-6e562f9c288d.jpg")
    giordan = User(
        username="Giordan M.", password="password", email="giordanm@aa.io", profile_image="https://cdn1.dotesports.com/wp-content/uploads/2018/08/11151637/128fb6e6-7b6a-4b25-8b16-6e562f9c288d.jpg")
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
