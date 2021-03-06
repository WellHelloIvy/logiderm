import os
from flask import Flask, request, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.categories_routes import categories_routes
from .api.products_routes import products_routes
from .api.attributes_routes import attributes_routes
from .api.concerns_routes import concerns_routes
from .api.skin_types_routes import skin_types_routes
from .api.routines_routes import routines_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(categories_routes, url_prefix='/api/categories')
app.register_blueprint(products_routes, url_prefix='/api/products')
app.register_blueprint(attributes_routes, url_prefix='/api/attributes')
app.register_blueprint(concerns_routes, url_prefix='/api/concerns')
app.register_blueprint(skin_types_routes, url_prefix='/api/skintypes')
app.register_blueprint(routines_routes, url_prefix='/api/routines')
db.init_app(app)
Migrate(app, db)

CORS(app)

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)

@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
