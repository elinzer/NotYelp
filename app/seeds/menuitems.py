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
      name="Cheesy Sicilian pepperoni", business_id=2, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/TN1oPyvQZ45dNNKx24Jlwg/o.jpg"
    ),
    MenuItem(
      name="Vegetable pizza slice", business_id=2, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/7kH3W8r2fXRAZTFoqJgoiw/o.jpg"
    ),
    MenuItem(
      name="Spicy peperoni cups slice", business_id=2, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/UWyGItCLux78b166nOP2JA/o.jpg"
    ),
    MenuItem(
      name="Original Margherita Slice", business_id=3, price=7, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/josGbKOx0TGB5d2n5cZTVw/o.jpg"
    ),
    MenuItem(
      name="Vegetable pizza slice", business_id=3, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Ro20Rf3ZPiXVoQjFI_TEPA/o.jpg"
    ),
    MenuItem(
      name="Clam slice", business_id=3, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/E_0glsWoAEqDXL1hyVDMRw/o.jpg"
    ),
    MenuItem(
      name="Rustic Double Pepperoni slice", business_id=4, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Ro20Rf3ZPiXVoQjFI_TEPA/o.jpg"
    ),
    MenuItem(
      name="Plain Slice", business_id=4, price=4, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/74aPspsE4O4P8-qiTEHzzQ/o.jpg"
    ),
    MenuItem(
      name="Pepperoni Slice", business_id=4, price=5, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/BMUuVQCxbNFfTj6Z-jjdhA/o.jpg"
    ),
    MenuItem(
      name="White Pie", business_id=5, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/FM3u-KH_qLyBxC6wFb5ALQ/o.jpg"
    ),
    MenuItem(
      name="Vegan Ceasar Salad", business_id=5, price=11, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/XugSgaGx-JcMbv2vj9U2Og/o.jpg"
    ),
    MenuItem(
      name="Sicilian Pie", business_id=5, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/OSLoDY2taTz8ggNqoIgG0w/o.jpg"
    ),
    MenuItem(
      name="Classic Margherita Pie", business_id=6, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/oULNnZNLLoBe7v7DPJcZew/o.jpg"
    ),
    MenuItem(
      name="Classic Italian Sausage Pie", business_id=6, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/dmb6Gd0MDfdGQYnTBPf1-g/o.jpg"
    ),
    MenuItem(
      name="Cobb Salad", business_id=6, price=13, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/mvuRnBdQryrUUnPvNoMQsQ/o.jpg"
    ),
    MenuItem(
      name="Caprese Salad", business_id=7, price=13, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Xsyw8jGHXmDK0zmRyBAcAQ/o.jpg"
    ),
    MenuItem(
      name="Buffalo Chicken Pie", business_id=7, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/TqvJZeQ_AXirEsUF3bjuLw/o.jpg"
    ),
    MenuItem(
      name="Ceasar Salad Pie", business_id=7, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/yKF_YNH4n2eaoAwr12GnyQ/o.jpg"
    ),
    MenuItem(
      name="Chicken Bacon Ranch Pie", business_id=8, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/gBau_-ynl2wlaMTJm6y-Hw/o.jpg"
    ),
    MenuItem(
      name="Spinach Pinwheels", business_id=8, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PAT0GQ70DbJJjf5hmbfU0w/o.jpg"
    ),
    MenuItem(
      name="Baked-Ziti Pie", business_id=8, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/UuILWzpZ8LDR0ez1HdXDvQ/o.jpg"
    ),
    MenuItem(
      name="Chicken Rolls", business_id=9, price=12, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/MbIVV47y-spKHgBXQvTqVA/o.jpg"
    ),
    MenuItem(
      name="Classic Margherita Pie", business_id=9, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/HwBGvrCIY2_tc-_odpx5vg/o.jpg"
    ),
    MenuItem(
      name="Custom Pie", business_id=9, price=30, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/URzbIt2bQQtkYqgfFcN2kg/o.jpg"
    ),
    MenuItem(
      name="Vodka Slice", business_id=10, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/YeKgh571kw3VZw0ytjHiaQ/o.jpg"
    ),
    MenuItem(
      name="Mushroom Pie", business_id=10, price=30, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/KztIhNMTvM-CG80tzHU6Dg/o.jpg"
    ),
    MenuItem(
      name="Plain Pie", business_id=10, price=27, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/DZRXSjqu_MdSiZk0j0di3g/o.jpg"
    ),
    MenuItem(
      name="Personal Marinara Pie", business_id=11, price=14, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/cQfPkCJMTVdoNQ4u5WRH0g/o.jpg"
    ),
    MenuItem(
      name="Square Pie", business_id=11, price=22, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/WoDOuZNJn_IyhY-GhU8L-g/o.jpg"
    ),
    MenuItem(
      name="Chicken Pizza Pie", business_id=11, price=14, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/XWfn2u4i-m4rNwPNDjOzbw/o.jpg"
    ),
    MenuItem(
      name="Supreme Pie", business_id=12, price=22, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/c8A6m3waSZt1lzAFKRpQNA/o.jpg"
    ),
    MenuItem(
      name="Margerita Pie", business_id=12, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/2UhatnPPe01Fm-IOajKG6Q/o.jpg"
    ),
    MenuItem(
      name="Bruschette", business_id=12, price=5, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/OeQMEcSr2y3VEmfhXw3WQw/o.jpg"
    ),
    MenuItem(
      name="Sausage & Peppers Pie", business_id=13, price=30, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/w0taZk-vWDHYeia1bwdbdw/o.jpg"
    ),
    MenuItem(
      name="Alla Vodka Pie", business_id=13, price=37, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/fDVIjn_eyS0OH1ZPOIZiig/o.jpg"
    ),
    MenuItem(
      name="Margherita Pizza", business_id=13, price=30, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/L6lAx2lB9YQ08svNnAZjDA/o.jpg"
    ),
    MenuItem(
      name="Margherita Pie", business_id=14, price=30, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/RuGBecywCFGcu_xoIlTeOg/o.jpg"
    ),
    MenuItem(
      name="Buffalo Chicken Slice", business_id=14, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/ZZu-9mfBZfNW2F8NsAXgAg/o.jpg"
    ),
    MenuItem(
      name="Chicken Roll", business_id=14, price=8, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/z-eGxj81bd0jL8sb59RbDA/o.jpg"
    ),
    MenuItem(
      name="Grandma Slice", business_id=15, price=7, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/30RyK67NuaCxdi6dT5koBA/o.jpg"
    ),
    MenuItem(
      name="Basil Pesto Margherita Slice", business_id=15, price=8, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/9jkOLaBRbqYR868qyvCCiA/o.jpg"
    ),
    MenuItem(
      name="Garlic Knots", business_id=15, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/6VsnipjPEcnfJNfuAO0zqQ/o.jpg"
    ),
    MenuItem(
      name="Barboncino Pizza Pie", business_id=16, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/BJn67gw6qrxna25LH_rF0g/o.jpg"
    ),
    MenuItem(
      name="Barboncino Pizza Pie", business_id=16, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/BJn67gw6qrxna25LH_rF0g/o.jpg"
    ),
    MenuItem(
      name="Barboncino Pizza Pie", business_id=16, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/BJn67gw6qrxna25LH_rF0g/o.jpg"
    ),
    MenuItem(
      name="", business_id=17, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/VPHL__qviVsUIpTK86yU_w/o.jpg"
    ),
    MenuItem(
      name="", business_id=17, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/VPHL__qviVsUIpTK86yU_w/o.jpg"
    ),
    MenuItem(
      name="", business_id=17, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/VPHL__qviVsUIpTK86yU_w/o.jpg"
    ),
    MenuItem(
      name="Speck Pie", business_id=18, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/JsI5wgrouclnIm_jXb0QFA/o.jpg"
    ),
    MenuItem(
      name="Marinara Pie", business_id=18, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/ZkIU1VjyzFIn851iQQne8g/o.jpg"
    ),
    MenuItem(
      name="Basil Pesto Pepperoni Pie", business_id=18, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/zzqiDnVR89C4AsqSYl7qDg/o.jpg"
    ),
    MenuItem(
      name="The Big Al Pie", business_id=19, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/lKgjUzcVtvHnjrh941dMQQ/o.jpg"
    ),
    MenuItem(
      name="MVP Pie", business_id=19, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/_NqXrJfOzu1uSsfD6fLAwQ/o.jpg"
    ),
    MenuItem(
      name="Roni Overload Pie", business_id=19, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/d04TiE0ucWE-hC5BGTCBTQ/o.jpg"
    ),
    MenuItem(
      name="Grandma Slice", business_id=20, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/jab93Z0WLfispVnIKXCHxw/o.jpg"
    ),
    MenuItem(
      name="Heart Pie", business_id=20, price=27, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/dAUwZbEo4vleZ33tdQ-BNA/o.jpg"
    ),
    MenuItem(
      name="Williamsburg Pie", business_id=20, price=27, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/fv73eC518cfLysLzwIe7Rg/o.jpg"
    ),
    MenuItem(
      name="Sausage Pie", business_id=21, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/tx3_Jq3zjZdikbkZde4NrA/o.jpg"
    ),
    MenuItem(
      name="Regular Pie", business_id=21, price=22, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/NWukecG1Sm83wSRRW6p2Dw/o.jpg"
    ),
    MenuItem(
      name="Chicken Calzone", business_id=21, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/XGibb92Mg0fxUsIImPmL0g/o.jpg"
    ),
    MenuItem(
      name="Round Sausage Pie", business_id=22, price=25, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/2ig0pOSER31HV0syh3fRFA/o.jpg"
    ),
    MenuItem(
      name="Sicilian Pie", business_id=22, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/OSLoDY2taTz8ggNqoIgG0w/o.jpg"
    ),
    MenuItem(
      name="Pepperoni Slice", business_id=22, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/4HJEuA7sCTQquvWujjGdlQ/o.jpg"
    ),
    MenuItem(
      name="Sausage Pepperoni Pie", business_id=23, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/KTE5ESiwIay6mrlSTtt8OQ/o.jpg"
    ),
    MenuItem(
      name="Supreme Pie", business_id=23, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/SGWjMUa86-PT-8FtDTHCiw/o.jpg"
    ),
    MenuItem(
      name="Supreme Sicilian Slice", business_id=23, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/JYYlqstrNzjJSswttUDFMA/o.jpg"
    ),
    MenuItem(
      name="Regular Slice", business_id=24, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/WLFWft10Crw6xRGf5zSqiw/o.jpg"
    ),
    MenuItem(
      name="Special Pie", business_id=24, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/bT4bu5c5_zI1RKbp8N5lKg/o.jpg"
    ),
    MenuItem(
      name="White Clam Pie", business_id=24, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/RoV7Wj3jfLr1ox3PDbMvcg/o.jpg"
    ),
    MenuItem(
      name="Regular Pizza Pie", business_id=25, price=22, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/uhzQLNaNDwgy4CJGgSJw7w/o.jpg"
    ),
    MenuItem(
      name="New Haven Pie", business_id=25, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/rlHL2hNq2K-CTgmr9DLdNA/o.jpg"
    ),
    MenuItem(
      name="Pepperoni Pie", business_id=25, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/V9fppMYhyvWZHINHTqcXjA/o.jpg"
    ),
    MenuItem(
      name="Chicago Style Pie", business_id=26, price=28, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PgHCe0dfC1MloU26y-ajYA/o.jpg"
    ),
    MenuItem(
      name="White Pizza", business_id=26, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/dIWlE3i-_qlWPeUB8XumNw/o.jpg"
    ),
    MenuItem(
      name="Red Pie", business_id=26, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/43h3Er-Hy9wmTpV2RHp0Jw/o.jpg"
    ),
    MenuItem(
      name="Mashed Potato Pie", business_id=27, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/pTuk_nQcienfa6ovdYX-2Q/o.jpg"
    ),
    MenuItem(
      name="Fresh Tomato Pie", business_id=27, price=23, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/sKj-JLN4OmPNDqE6jIggXA/o.jpg"
    ),
    MenuItem(
      name="White Slice", business_id=27, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PLQeVHQay_xVzzXLzQEtmA/o.jpg"
    ),
    MenuItem(
      name="Regular Pie", business_id=28, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/VFH9XqMRpSrS-eGocJ_ogg/o.jpg"
    ),
    MenuItem(
      name="Slice of New Haven", business_id=28, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/LUYXMz0wkPqRYaYE2RouYA/o.jpg"
    ),
    MenuItem(
      name="Veggie Pie", business_id=28, price=6, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/x6PfgxljG1DXsTFYIpr11g/o.jpg"
    ),
    MenuItem(
      name="New Haven Delight", business_id=29, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/2R50lA5NFBqZPJ2zkRgoug/o.jpg"
    ),
    MenuItem(
      name="Custom Pie", business_id=29, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/y1MsKHgeMTvlv4bxqMZaGA/o.jpg"
    ),
    MenuItem(
      name="Tomato Basil Pie", business_id=29, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/77cTNC9odrqZ39KO5gxCgA/o.jpg"
    ),
    MenuItem(
      name="New Haven Special", business_id=30, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/iBO-a3Q13jPUmGpCO5U9dg/o.jpg"
    ),
    MenuItem(
      name="Half n' Half", business_id=30, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PRwH9sUTjGb-dP1b8A8SrQ/o.jpg"
    ),
    MenuItem(
      name="Regular Pie", business_id=30, price=26, preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/IO2R6spCGXiLnREEdQaciQ/o.jpg"
    ),



  ]

  for menuitem in demo_menuitems:
    db.session.add(menuitem)
    db.session.commit()

def undo_menuitems():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
