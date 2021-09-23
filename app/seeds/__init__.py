from flask.cli import AppGroup
from .users import seed_users, undo_users
from .skin_types import seed_skin_types, undo_skin_types
from .products import seed_products, undo_products
from .attributes import seed_attributes, undo_attributes
from .categories import seed_categories, undo_categories
from .concerns import seed_concerns, undo_concerns
from .users_joins_products import seed_users_joins_products, undo_seed_users_joins_products
from .users_joins_concerns import seed_users_joins_concerns, undo_users_joins_concerns
from .users_joins_skin_types import seed_users_joins_skin_types, undo_seed_users_joins_skin_types
from .products_joins_attributes import seed_products_joins_attributes, undo_seed_products_joins_attributes
from .products_joins_concerns import seed_products_joins_concerns, undo_seed_products_joins_concerns

seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    seed_users()
    seed_skin_types()
    seed_users_joins_skin_types()
    seed_categories()
    seed_products()
    seed_users_joins_products()
    seed_attributes()
    seed_concerns()
    seed_products_joins_concerns()
    seed_users_joins_concerns()
    seed_products_joins_attributes()

@seed_commands.command('undo')
def undo():
    undo_users()
    undo_skin_types()
    undo_seed_users_joins_skin_types()
    undo_products()
    undo_seed_users_joins_products()
    undo_categories()
    undo_attributes()
    undo_seed_products_joins_attributes()
    undo_concerns()
    undo_seed_products_joins_concerns()
    undo_users_joins_concerns()

