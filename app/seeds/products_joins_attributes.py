from app.models import db
from app.models.product import products_joins_attributes


def seed_products_joins_attributes():
    db.session.execute(products_joins_attributes.insert().values(product_id = 1, attribute_id = 1))
    db.session.execute(products_joins_attributes.insert().values(product_id = 1, attribute_id = 2))
    db.session.execute(products_joins_attributes.insert().values(product_id = 2, attribute_id = 2))
    db.session.execute(products_joins_attributes.insert().values(product_id = 3, attribute_id = 5))
    db.session.execute(products_joins_attributes.insert().values(product_id = 3, attribute_id = 7))
    db.session.commit()


def undo_seed_products_joins_attributes():
    db.session.execute('TRUNCATE products_joins_attributes RESTART IDENTITY CASCADE;')
    db.session.commit()
