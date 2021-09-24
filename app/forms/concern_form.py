from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class ConcernForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    concern_id = IntegerField('concern_id', validators=[DataRequired()])
