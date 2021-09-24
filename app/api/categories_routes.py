from flask import Blueprint
from app.models import Category, category

categories_routes = Blueprint('categories', __name__)

@categories_routes.route('/')
def categories():
    categories = Category.query.all()
    return {'categories': [category.to_dict() for category in categories]}
