from app.models import db, Category

def seed_categories():
    cleanser = Category(
        name='cleanser')

    moisturizer = Category(
        name='moisturizer')

    treatment = Category(
        name='treatment')

    sunscreen = Category(
        name='sunscreen')

    db.session.add(cleanser)
    db.session.add(moisturizer)
    db.session.add(treatment)
    db.session.add(sunscreen)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
