from app.models import db
from app.models.user import users_joins_concerns


def seed_users_joins_concerns():
    db.session.execute(users_joins_concerns.insert().values(user_id = 1, concern_id = 1))
    db.session.execute(users_joins_concerns.insert().values(user_id = 1, concern_id = 2))
    db.session.execute(users_joins_concerns.insert().values(user_id = 2, concern_id = 12))
    db.session.execute(users_joins_concerns.insert().values(user_id = 3, concern_id = 5))
    db.session.execute(users_joins_concerns.insert().values(user_id = 3, concern_id = 7))
    db.session.commit()


def undo_users_joins_concerns():
    db.session.execute('TRUNCATE users_joins_concerns RESTART IDENTITY CASCADE;')
    db.session.commit()
