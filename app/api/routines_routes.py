from flask import Blueprint
from flask_login import login_required
from app.models import db, User, Routine

routine_routes = Blueprint('routines', __name__)
@routine_routes.route('/<int:routine_id>', methods=['DELETE'])
@login_required
def delete_from_routine(routine_id):
    routine = Routine.query.get(routine_id)
    user_id = routine.user_id
    db.session.delete(routine)
    db.session.commit()
    user = User.query.get(user_id)
    return user.to_dict()
