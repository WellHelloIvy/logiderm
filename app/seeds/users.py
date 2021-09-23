from app.models import db, User

def seed_users():
    demo = User(
        first_name='Demo', last_name='User', email='demo@gmail.com', password='password', img_url='https://images.pexels.com/photos/1407167/pexels-photo-1407167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    kristian = User(
        first_name='Kristian', last_name='Martinez', email='kmart@gmail.com', password='password', img_url='https://images.pexels.com/photos/1044054/pexels-photo-1044054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

    moiz = User(
        first_name='Moiz', last_name='Ahmad', email='wizkika@gmail.com', password='password', img_url='https://images.pexels.com/photos/5734194/pexels-photo-5734194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

    db.session.add(demo)
    db.session.add(kristian)
    db.session.add(moiz)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
