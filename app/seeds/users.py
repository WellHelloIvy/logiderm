from app.models import db, User

def seed_users():
    demo = User(
        username='demo', email='demo@gmail.com', password='password')
    kristian = User(
        username='kmart', email='kmart@gmail.com', password='password')
    moiz = User(
        username='wizkika', email='wizkika@gmail.com', password='password')

    db.session.add(demo)
    db.session.add(kristian)
    db.session.add(moiz)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
