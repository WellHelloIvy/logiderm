from .db import db

class SkinType(db.Model):
    __tablename__ = 'skin_types'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

    users = db.relationship("User", secondary = "users_joins_skin_types", back_populates = 'skin_types')
