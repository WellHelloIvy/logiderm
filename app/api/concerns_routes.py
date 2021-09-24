from flask import Blueprint
from app.models import Concern, concern

concerns_routes = Blueprint('concern', __name__)

@concerns_routes.route('/')
def concerns():
    concerns = Concern.query.all()
    return {'concerns': [concern.to_dict() for concern in concerns]}
