from app.models import db, Concern

def seed_concerns():
    dryness = Concern(
        name='dryness')

    dullness = Concern(
        name='dullness')

    texture = Concern(
        name='texture')

    redness = Concern(
        name='redness')

    fine_lines = Concern(
        name='fine_lines')

    pores = Concern(
        name='pores')

    anti_aging = Concern(
        name='anti_aging')

    oiliness = Concern(
        name='oiliness')

    acne = Concern(
        name='acne')

    hyperpigmentation = Concern(
        name='hyperpigmentation')

    dark_circles = Concern(
        name='dark_circles')

    scarring = Concern(
        name='scarring')

    blackheads = Concern(
        name='blackheads')

    db.session.add(dryness)
    db.session.add(dullness)
    db.session.add(texture)
    db.session.add(redness)
    db.session.add(fine_lines)
    db.session.add(pores)
    db.session.add(anti_aging)
    db.session.add(oiliness)
    db.session.add(acne)
    db.session.add(hyperpigmentation)
    db.session.add(dark_circles)
    db.session.add(scarring)
    db.session.add(blackheads)

    db.session.commit()

def undo_concerns():
    db.session.execute('TRUNCATE concerns RESTART IDENTITY CASCADE;')
    db.session.commit()
