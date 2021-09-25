from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

users_joins_products = db.Table(
        "users_joins_products",

        db.Column("id", db.Integer, primary_key=True),
        db.Column('user_id', db.Integer, db.ForeignKey("users.id")),
        db.Column('product_id', db.Integer, db.ForeignKey("products.id")),
    )

users_joins_concerns = db.Table(
    "users_joins_concerns",

    db.Column("id", db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey("users.id")),
    db.Column('concern_id', db.Integer, db.ForeignKey("concerns.id")),
)

users_joins_skin_types = db.Table(
    "users_joins_skin_types",

    db.Column("id", db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey("users.id")),
    db.Column('skin_type_id', db.Integer, db.ForeignKey("skin_types.id")),
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    img_url = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    skin_types = db.relationship("SkinType", secondary = "users_joins_skin_types")

    concerns = db.relationship("Concern", secondary = "users_joins_concerns")

    routines = db.relationship("Product", secondary = "users_joins_products")

    def to_dict(self):
        concerns = [concern.id for concern in self.concerns]
        skin_types = [skin_type.id for skin_type in self.skin_types]
        routines = [product.id for product in self.routines]
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'email': self.email,
            'imgUrl': self.img_url,
            'concerns': concerns,
            'skinTypes': skin_types,
            'routines': routines
        }
