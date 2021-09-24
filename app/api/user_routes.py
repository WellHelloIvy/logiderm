from flask import Blueprint
from flask_login import login_required
from app.models import db, User
from app.models.user import users_joins_concerns

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:user_id>/concerns/<int:concern_id>', methods=['POST'])
@login_required
def add_user_concern(user_id, concern_id):
    db.session.execute(users_joins_concerns.insert().values(user_id = user_id, concern_id = concern_id))
    db.session.commit()

