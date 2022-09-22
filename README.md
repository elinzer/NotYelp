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
![image](https://user-images.githubusercontent.com/101891232/191639887-0100d4ac-3dbd-4e54-ba63-d107664ea40a.png)
![image](https://user-images.githubusercontent.com/101891232/191639912-14ddad2d-8267-4b10-8370-0fccb5ea4d21.png)

# Business Details:
## Non-Business Owner
![image](https://user-images.githubusercontent.com/101891232/191640001-b443ecd2-625d-4584-ae60-1c8f2a3fa0c0.png)
## Business Owner
![image](https://user-images.githubusercontent.com/101891232/191640263-2cd34a60-528e-41f8-947e-432fd80ee41a.png)


# View my Reviews:
![image](https://user-images.githubusercontent.com/101891232/191640054-9a5859c0-dfb0-4165-8b93-a5b0f39810ce.png)

# Search Filter:
![image](https://user-images.githubusercontent.com/101891232/191640089-a0a2ef0d-c1af-4597-89fb-b35f1403c4b3.png)

# Create Business:
![image](https://user-images.githubusercontent.com/101891232/191640167-84c5a14a-bbc2-46ad-b363-fc7d034fdf4c.png)
