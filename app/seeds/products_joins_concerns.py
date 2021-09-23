from app.models import db
from app.models.product import products_joins_concerns


def seed_products_joins_concerns():
    db.session.execute(products_joins_concerns.insert().values(product_id = 1, concern_id = 1))
    db.session.execute(products_joins_concerns.insert().values(product_id = 1, concern_id = 4))
    db.session.execute(products_joins_concerns.insert().values(product_id = 2, concern_id = 9))
    db.session.execute(products_joins_concerns.insert().values(product_id = 3, concern_id = 1))
    db.session.execute(products_joins_concerns.insert().values(product_id = 4, concern_id = 7))
    db.session.commit()


def undo_seed_products_joins_concerns():
    db.session.execute('TRUNCATE products_joins_concerns RESTART IDENTITY CASCADE;')
    db.session.commit()
