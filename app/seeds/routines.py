from app.models import db, Routine
from random import randint


def seed_routines():

    for i in range(13):
        product_list = []

        for j in range(15):
            product_id_value = randint(1,60)
            time_value = randint(1,3)
            if product_id_value not in product_list:
                product_list.append(product_id_value)
                routine = Routine(
                    product_id=product_id_value, user_id=1 + i, time=time_value
                )
                db.session.add(routine)


    db.session.commit()


def undo_seed_routines():
    db.session.execute('TRUNCATE routines RESTART IDENTITY CASCADE;')
    db.session.commit()
