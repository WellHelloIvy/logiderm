from flask import Blueprint, request
from flask_login import login_required
from app.models import db, User, Routine

routines_routes = Blueprint('routines', __name__)

@routines_routes.route('/', methods=['POST'])
@login_required
def add_to_routine():
    data = request.get_json()
    routine = Routine(
        product_id = data['product_id'],
        user_id = data['user_id'],
        time = data['time']
    )
    user_id = data['user_id'];
    db.session.add(routine)
    db.session.commit()
    user = User.query.get(user_id)
    return user.to_dict()


@routines_routes.route('/<int:routine_id>', methods=['DELETE'])
@login_required
def delete_from_routine(routine_id):
    routine = Routine.query.get(routine_id)
    user_id = routine.user_id
    db.session.delete(routine)
    db.session.commit()
    user = User.query.get(user_id)
    return user.to_dict()
