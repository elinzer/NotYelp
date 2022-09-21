from ..models import db
from app.models import Business
from datetime import time

def seeded_businesses():
  demo_businesses = [
    Business(
      owner_id=1, name="Lombardi's Pizza", address="Mulberry St & Mott St", description="Demo Description 1", url="http://www.firstpizza.com/", phone='2129417994', state="New York", city="Nolita", zipcode=10012,  open_time=time(hour=9), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/UZ6V_hobp1KpYDPOHNoCKw/l.jpg"
    ),
    Business(
      owner_id=2, name="Joes Pizza", address="7 Carmine St", description="West Village locals have depended on this counter-service pizzeria for quick slices since 1975.", url="qmenu.us", phone='6262938800', state="New York", city="New York", zipcode=10014,open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/1TvTRG9HFmEGaTSBMcUBhA/o.jpg"
    ),
    Business(
      owner_id=3, name="Prince Street Pizza", address="27 Prince St", description="Prince Street Best Pizza", url="https://princestreetpizzanyc.com/", phone='9179050006', state="New York", city="New York", zipcode=11365,  open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PfI8oV4ct9ZJZNtUhSS8DQ/o.jpg"
    ),
    Business(
      owner_id=4, name="NY Pizza Suprema", address="413 8th Ave", description="Great Pizza Place! Come Visit!", url="http://www.nypizzasuprema.com", phone='2125948939', state="New York", city="New York", zipcode=10001, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/x78cnfWW2ykv8pIFBL5_hw/o.jpg"
    ),
    Business(
      owner_id=5, name="East Village Pizza", address="145 1st Ave", description="East Village Pizza known for our pepperoni slice!", url="http://www.eastvillagepizza.net", phone='5024988420', state="New York", city="New York", zipcode=10003, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/TLUzV4AGq4n4wEGxeWRDBQ/o.jpg"
    ),
    Business(
      owner_id=1, name="Nolita Pizza", address="68 Kenmare St", description="Nolita Pizza known for our pepperoni slice!", url="https://nolitapizzanyc.com", phone='3479792986', state="New York", city="New York", zipcode=10012, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/HGcUMCWUXjR2AW5pDemN7g/o.jpg"
    ),
    Business(
      owner_id=2, name="2 Bros Pizza", address="72 Nassau St", description="DOLLAR SLICES!", url="https://www.2brospizza.com", phone='5024988420', state="New York", city="Brooklyn", zipcode=10028, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/rNvm9HBRdwJESbObUT2FKQ/o.jpg"
    ),
    Business(
      owner_id=3, name="Roberta’s", address="6 Grand St", description="Known for our pepperoni slice!", url="https://www.robertaspizza.com", phone='5024988420', state="New York", city="New York", zipcode=10003, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/rdK-sou4FgwoUAy1FFRBCw/o.jpg"
    ),
    Business(
      owner_id=4, name="Grimaldi's Pizzeria", address="1 Front St", description="Best Pizza Place", url="http://grimaldispizzeria.com", phone='3476876910', state="New York", city="Brooklyn", zipcode=11201, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Rxz04yxreCJcr9Wmu0LUSA/o.jpg"
    ),
    Business(
      owner_id=5, name="Lombardo's of Bay Ridge", address="279 71st St", description="Brooklyn Style Pizza!", url="https://lombardos-of-bay-ridge.business.site/", phone='7182387100', state="New York", city="Brooklyn", zipcode='11209', open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/1Lv82d_QZtwAfNlFE1yPzw/o.jpg"
    ),
    Business(
      owner_id=1, name="Roccos' Coal Brick Oven Pizza", address="115-10 Rockaway Beach Blvd", description="Coal Brick Oven Pizza by the beach!", url="https://www.roccoscoalovenpizza.com/", phone='9292097966', state="New York", city="Rockaway Beach", zipcode=11694, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/zkmC0y2EFB_mIoP0cbZZAQ/o.jpg"
    ),
    Business(
      owner_id=2, name="Roberta's", address="261 Moore St", description="Pizzas -- Lots of them", url="https://www.robertaspizza.com/", phone='7184171118', state="New York", city="Brooklyn", zipcode=11206, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/abL53M6hw-6qRyxD0qijxg/o.jpg"
    ),
    Business(
      owner_id=3, name="Salsa Pizzeria", address="40 Clifford Pl", description="Best pizza ever!", url="https://www.salsapizzeria.com/", phone='3475424680', state="New York", city="Brooklyn", zipcode=11222, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/ssjYUXaAYEZuw2fYqA12zg/o.jpg"
    ),
    Business(
      owner_id=4, name="Dellarocco's Brick Oven Pizza", address="214 Hicks St ", description="Famous for serving authentic wood fired Neapolitan pizzas", url="https://www.dellaroccospizza.com/", phone='(718) 858-1010', state="New York", city="New York", zipcode=10003, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/RGsip2vQXryVUbOrXfYBkQ/o.jpg"
    ),
    Business(
      owner_id=5, name="Giordano's", address="130 E Randolph", description="Famous Stuffed Pizza", url="http://giordanos.com", phone='3126161200', state="Chicago", city="Randolph", zipcode=60601, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/OalRgOyfThOHIqY5A83_fQ/o.jpg"
    ),
    Business(
      owner_id=1, name="Coalfire Pizza", address="1321 W Grand Ave", description="Coalfire is the best pizza in Chicago!", url="https://coalfirechicago.com/", phone='3122262625', state="Chicago", city="Illinois", zipcode=60642, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/m6u0tAqXG27uwft3YElUxA/o.jpg"
    ),
    Business(
      owner_id=2, name="Lou Malnati's Pizzeria", address="439 N Wells St", description="Best Pizza around town!", url="https://www.loumalnatis.com/chicago-river-north", phone='3128289800', state="Chicago", city="Illinois", zipcode=60654, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/FXGmfo6Dv7Wb4RDrSOYJrg/o.jpg"
    ),
    Business(
      owner_id=3, name="Robert's Pizza & Dough Company", address="465 N McClurg", description="A savory slice of pizza heaven.", url="https://www.robertspizzacompany.com/", phone='3122651328', state="Chicago", city="Illinois", zipcode=60611, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/PUOTRI7rptKfiwY3XVB8Cw/o.jpg"
    ),
    Business(
      owner_id=4, name="Stix n Brix Wood Fired Pizza", address="218 W 33rd St", description="Wood fired pizza restaurant", url="https://stixnbrix33.com/", phone='3122650219', state="Chicago", city="Illinois", zipcode=60616, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/m1wMSVQQ5hzTbNj7OMQKGg/o.jpg"
    ),
    Business(
      owner_id=5, name="Paulie Gee's Logan Square", address="2451 N Milwaukee Ave", description="woodfired neo-Neapolitan and Detroit inspired.", url="https://pauliegee.com/logan-square", phone='7733601072', state="Chicago", city="Illinois", zipcode=60647, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/1D2yidgGT53BiJYoFzNy9g/o.jpg"
    ),
    Business(
      owner_id=1, name="Bonci", address="161 N Sangamon St", description="Grab a quick slice of pizza", url="https://bonciusa.com/", phone='3122434016', state="Chicago", city="Illinois", zipcode=60607, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/C_FcbQ_oq_oTHLdNYPUpfg/o.jpg"
    ),
    Business(
      owner_id=2, name="Little Rendezvous", address="256 Pratt St", description="coal-fired brick oven pizza", url="https://thelittlevous.com/", phone='2032350110', state="Connecticut", city="Meriden", zipcode=13221, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/rFvx1PEYldbioVduSPU63A/o.jpg"
    ),
    Business(
      owner_id=3, name="Frank Pepe Pizzeria Napoletana", address="157 Wooster St", description="Known for our White Clam Pizza!", url="https://order.pepespizzeria.com/", phone='2038655762', state="Connecticut", city="New Haven", zipcode=16511, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/RoV7Wj3jfLr1ox3PDbMvcg/o.jpg"
    ),
    Business(
      owner_id=4, name="Modern Apizza", address="874 State St", description="Best of the New Haven pizzas.", url="http://www.modernapizza.com/", phone='2037765306', state="Connecticut", city="New Haven", zipcode=10323, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/puBniII3gGDuT_g-6P-JCQ/o.jpg"
    ),
    Business(
      owner_id=5, name="Zuppardi's Apizza", address="179 Union Ave", description="Every pizza is hand made!", url="https://zuppardisapizza.com/", phone='2039341949', state="Connecticut", city="New Haven", zipcode=14303, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/c7058o2C1PvcLqEcPIhKbA/o.jpg"
    ),
    Business(
      owner_id=1, name="Sally's Apizza", address="237 Wooster St", description="Renown for thin crust pizza!", url="https://www.sallysapizza.com/", phone='2036245271', state="Connecticut", city="New Haven", zipcode=10323, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/cJAMf5MJoFO9eeh61Qggbg/o.jpg"
    ),
    Business(
      owner_id=2, name="Pizza House", address="89 Howe St", description="Great Pizza! Come Visit!", url="pizza.com", phone='2038653345', state="Connecticut", city="New Haven", zipcode=16511, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/Ycorgw6fQhZGabxPpGeLzA/o.jpg"
    ),
    Business(
      owner_id=3, name="LouEddie's Pizza", address="28561 State Hwy 18", description="We specialize in Homemade Artisan Pizza", url="https://www.loueddiespizza.com/", phone='9093364931', state="California", city="Skyforest", zipcode=92385, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/yVI-OJ-W3bLriZTf5-jxPg/o.jpg"
    ),
    Business(
      owner_id=4, name="Mr G's Pizza", address="1220 S Diamond Bar Blvd Ste H", description="Three essential qualities of delicious cuisine", url="https://www.mrgspizzeria.net/", phone='9095989400', state="California", city="Diamond Bar", zipcode=91765, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/EsWmGlAEl8bfDrha7Vuf9w/o.jpg"
    ),
    Business(
      owner_id=5, name="Petrilli's Pizza", address="110 S Mountain Ave Ste F", description="Great Pizza Spot!", url="http://www.petrillispizza.com/", phone='9099818114', state="California", city="Upland", zipcode=91786, open_time=time(hour=8), close_time=time(hour=17), preview_image="https://s3-media0.fl.yelpcdn.com/bphoto/yEK5yzvcPnxFV9pEJJBNgQ/o.jpg"
    ),
  ]

  for business in demo_businesses:
    db.session.add(business)
  db.session.commit()

def undo_businesses():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
