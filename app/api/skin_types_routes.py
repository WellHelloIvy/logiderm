from flask import Blueprint
from app.models import SkinType, skin_type

skin_types_routes = Blueprint('skintypes', __name__)

@skin_types_routes.route('/')
def skin_types():
    skin_types = SkinType.query.all()
    return {'skinTypes': [skin_type.to_dict() for skin_type in skin_types]}
