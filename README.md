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
