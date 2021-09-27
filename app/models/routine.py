from .db import db

class Routine(db.Model):
    __tablename__ = "routines"

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    time = db.Column('time', db.Integer)

    def to_dict(self):
        
        return {
            'id': self.id,
            'productId': self.product_id,
            'userId': self.user_id,
            'time': self.time
        }

