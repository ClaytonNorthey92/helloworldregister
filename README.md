# helloworldregister
#### A web application to register users and then view them. Found [here](http://cnorthey.pythonanywhere.com/).

### Major technologies used:
- [Django](https://www.djangoproject.com/)  _a python framework used for server-side software development_
- [React](https://facebook.github.io/react/) _a client-side library to create web components_
- [SQLite](https://www.sqlite.org/) _(laugh it up) a relational database meant for small amounts of traffic_


### Getting started/installation
1. clone the repository ```git clone https://github.com/ClaytonNorthey92/helloworldregister.git```
2. install python dependencies (you may want to use a [virtual environment](https://virtualenv.readthedocs.org/en/latest/) for this) ```pip install -r requirements.txt```
3. install node dependencies ```npm install```
4. install bower dependencies ```bower install```
5. migrate the database schema ```python manage.py migrate``` 
6. to run the web application locally, ```python manage.py runserver```, this will run on port 8000 by default

#### Note: For production
- make sure you run ```python manage.py collectstatic```, this collects the static files and puts them all in a certain directory for serving
