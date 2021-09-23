from app.models import db, Attribute

def seed_attributes():
    cruelty_free = Attribute(
        name='cruelty_free')

    vegan = Attribute(
        name='vegan')

    silicone_free = Attribute(
        name='silicone_free')

    paraben_free = Attribute(
        name='paraben_free')

    fragrance_free = Attribute(
        name='fragrance_free')

    alcohol_free = Attribute(
        name='alcohol_free')

    oil_free = Attribute(
        name='oil_free')

    uv_protection = Attribute(
        name='uv_protection')

    db.session.add(cruelty_free)
    db.session.add(vegan)
    db.session.add(silicone_free)
    db.session.add(paraben_free)
    db.session.add(fragrance_free)
    db.session.add(alcohol_free)
    db.session.add(oil_free)
    db.session.add(uv_protection)

    db.session.commit()

def undo_attributes():
    db.session.execute('TRUNCATE attributes RESTART IDENTITY CASCADE;')
    db.session.commit()
