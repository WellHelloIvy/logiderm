from app.models import db
from app.models.user import users_joins_skin_types


def seed_users_joins_skin_types():
    db.session.execute(users_joins_skin_types.insert().values(user_id = 1, skin_type_id = 1))
    db.session.execute(users_joins_skin_types.insert().values(user_id = 2, skin_type_id = 7))
    db.session.execute(users_joins_skin_types.insert().values(user_id = 3, skin_type_id = 1))
    db.session.execute(users_joins_skin_types.insert().values(user_id = 3, skin_type_id = 4))
    db.session.commit()


def undo_seed_users_joins_skin_types():
    db.session.execute('TRUNCATE users_joins_skin_types RESTART IDENTITY CASCADE;')
    db.session.commit()
