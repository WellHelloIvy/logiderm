from .db import db

class Concern(db.Model):
    __tablename__ = 'concerns'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }
