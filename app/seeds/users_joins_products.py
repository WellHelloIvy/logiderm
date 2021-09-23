from app.models import db
from app.models.user import users_joins_products


def seed_users_joins_products():
    db.session.execute(users_joins_products.insert().values(user_id = 1, product_id = 1))
    db.session.execute(users_joins_products.insert().values(user_id = 1, product_id = 3))
    db.session.execute(users_joins_products.insert().values(user_id = 2, product_id = 3))
    db.session.execute(users_joins_products.insert().values(user_id = 3, product_id = 4))
    db.session.execute(users_joins_products.insert().values(user_id = 3, product_id = 5))
    db.session.commit()


def undo_seed_users_joins_products():
    db.session.execute('TRUNCATE users_joins_products RESTART IDENTITY CASCADE;')
    db.session.commit()
