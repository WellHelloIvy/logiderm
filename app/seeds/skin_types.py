from app.models import db, SkinType

def seed_skin_types():
    dry = SkinType(
        name='dry'),

    oily = SkinType(
        name='oily'),

    balanced = SkinType(
        name='balanced'),

    mature = SkinType(
        name='mature'),

    dehydrated = SkinType(
        name='dehydrated'),

    sensitive = SkinType(
        name='sensitive'),

    combination = SkinType(
        name='combination'),

    db.session.add(dry)
    db.session.add(oily)
    db.session.add(balanced)
    db.session.add(mature)
    db.session.add(dehydrated)
    db.session.add(sensitive)
    db.session.add(combination)

    db.session.commit()

def undo_skin_types():
    db.session.execute('TRUNCATE skin_types RESTART IDENTITY CASCADE;')
    db.session.commit()
