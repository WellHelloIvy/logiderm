from flask import Blueprint
from app.models import Attribute

attributes_routes = Blueprint('attributes', __name__)

@attributes_routes.route('/')
def attributes():
    attributes = Attribute.query.all()
    return {'attributes': [attribute.to_dict() for attribute in attributes]}
