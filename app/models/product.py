from .db import db

products_joins_concerns = db.Table(
    "products_joins_concerns",

    db.Column("id", db.Integer, primary_key=True),
    db.Column('product_id', db.Integer, db.ForeignKey("products.id")),
    db.Column('concern_id', db.Integer, db.ForeignKey("concerns.id")),
)

products_joins_attributes = db.Table(
    "products_joins_attributes",

    db.Column("id", db.Integer, primary_key=True),
    db.Column('product_id', db.Integer, db.ForeignKey("products.id")),
    db.Column('attribute_id', db.Integer, db.ForeignKey("attributes.id")),
)

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    brand = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer)
    ingredients = db.Column(db.String(5000), nullable=False)
    img = db.Column(db.String(100))

    categories = db.relationship("Category", back_populates= "products")

    attributes = db.relationship("Attribute", secondary = "products_joins_attributes")

    concerns = db.relationship("Concern", secondary = "products_joins_concerns")

    routines = db.relationship("Routine", back_populates= "products")

    def to_dict(self):
        attributes = [attribute.id for attribute in self.attributes]
        concerns = [concern.id for concern in self.concerns]
        return {
            'id': self.id,
            'categoryId': self.category_id,
            'name': self.name,
            'brand': self.brand,
            'price': self.price,
            'ingredients': self.ingredients,
            'img': self.img,
            'attributes': attributes,
            'concerns': concerns
    }
