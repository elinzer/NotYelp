# Welcome to NotYelp, clone of Yelp
Definitely not Yelp

## This project was developed utilizing:

* ####  Backend: Python/Flask

* #### Frontend: React/Redux/JS/HTML/CSS

* #### DB: SQLAlchemy

* ####  Hosted on Heroku
[NotYelp](https://notyelp.herokuapp.com/)

## Wiki Links:

* [Database Schema](https://github.com/elinzer/NotYelp/wiki/DB-Schema)
* [Features](https://github.com/elinzer/NotYelp/wiki/User-Stories)
* [API Routes](https://github.com/elinzer/NotYelp/wiki/API-Routes)
* [Redux State Shape](https://github.com/elinzer/NotYelp/wiki/Redux-State-Shape)

***

## How to run NotYelp Locally:
* Clone the repository in your terminal: ```git clone https://github.com/elinzer/NotYelp.git```
* cd into NotYelp folder and run ```pipenv install```
* Open two terminal paths for both NotYelp and react-app.
* Under NotYelp run ```pipenv shell`` then ```flask run```, for react-app run ```npm install```
* Create a ```.env``` file under the root of the backend folder with the following contents:
```
REACT_APP_BASE_URL=http://localhost:5000
```
* In the terminal under NotYelp, migrate and seed files as follows:
```
flask db upgrade
flask seed all
```
* Now, run ```flask run``` under NotYelp and ```npm start``` under react-app

### Your local host should be running with full functionality now!

***

# Home Page:

![Splash](https://user-images.githubusercontent.com/93215380/191871014-40ad0e94-4044-45bb-9a24-72f26f08209a.PNG)

# Business Details:
## Non-Business Owner
![image](https://user-images.githubusercontent.com/93215380/192047087-b22e375c-f10c-4876-8204-996a8266e60c.png)
## Business Owner
![image](https://user-images.githubusercontent.com/93215380/192047216-3dd0a196-d7e0-4628-b8d6-a5a4c20087e6.png)


# View my Reviews:
![image](https://user-images.githubusercontent.com/93215380/192047485-781736b7-6d7f-430f-9282-79fad748c977.png)

# Search Filter:
![image](https://user-images.githubusercontent.com/101891232/191640089-a0a2ef0d-c1af-4597-89fb-b35f1403c4b3.png)

# Create Business:
![image](https://user-images.githubusercontent.com/93215380/192047855-9a5f22ee-d22f-4f80-942c-a0a392f87f0b.png)
