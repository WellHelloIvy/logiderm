from flask import Blueprint
from app.models import Product, product

products_routes = Blueprint('products', __name__)

@products_routes.route('/')
def products():
    products = Product.query.all();
    return {'products': [product.to_dict() for product in products]}
