from .db import db

class Attribute(db.Model):
    __tablename__ = 'attributes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

    products = db.relationship("Product", secondary = "products_joins_attributes", back_populates = 'attributes')
