from ..models import db
from app.models import MenuItem

def seeded_menuitems():
  demo_menuitems = [
    MenuItem(
      name="Basil Pesto Pizza", price=11.5, preview_image="https://silveroak.com/wp-content/uploads/2020/03/Recipe-Basil-Pesto-Pizza.jpg"
    ),
    MenuItem(
      name="Chicken Noodle Soup", price=12, preview_image="https://recipesworthrepeating.com/wp-content/uploads/2016/08/Asian-Chicken-noodle-Soup-2.jpg"
    ),
    MenuItem(
      name="Marinated bulgogi", price=14, preview_image="https://www.maangchi.com/wp-content/uploads/2012/11/bulgogi_charcoal.jpg"
    ),
    MenuItem(
      name="Fish and chips", price=14.5, preview_image="https://www.laxshopdine.com/wp-content/uploads/2019/05/CK9A4011.jpg"
    ),
    MenuItem(
      name="Fried chicken", price=16, preview_image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg"
    ),
  ]

  for menuitem in demo_menuitems:
    db.session.add(menuitem)
    db.session.commit()

def undo_menuitems():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
