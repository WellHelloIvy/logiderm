from .db import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    name = db.Column(db.String(40), nullable=False)
    brand = db.Column(db.String(40), nullable=False)
    price = db.Column(db.Integer)
    ingredients = db.Column(db.String(5000), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'categoryId': self.category_id,
            'name': self.name,
            'brand': self.brand,
            'price': self.price,
            'ingredients': self.ingredients
        }
