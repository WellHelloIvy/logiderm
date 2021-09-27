from app.models import db, User
from faker import Faker
fake = Faker()

def seed_users():
    demo = User(
        first_name='Demo', last_name='User', email='demo@gmail.com', password='password', img_url='https://i.imgur.com/U7CabUY.png')
    kristian = User(
        first_name='Kristian', last_name='Martinez', email='kmart@gmail.com', password='password', img_url='https://images.pexels.com/photos/1044054/pexels-photo-1044054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

    moiz = User(
        first_name='Moiz', last_name='Ahmad', email='wizkika@gmail.com', password='password', img_url='https://images.pexels.com/photos/5734194/pexels-photo-5734194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')


    db.session.add(demo)
    db.session.add(kristian)
    db.session.add(moiz)

    for i in range(10):
        user= User(
            first_name=f'{fake.first_name_nonbinary()}',last_name=f'{fake.last_name_nonbinary()}', email=f'{fake.ascii_free_email()}', password=f'!{fake.password(length=9, special_chars=False, upper_case=True, lower_case=True, digits=True)}', img_url='https://i.imgur.com/U7CabUY.png'
        )
        db.session.add(user)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
