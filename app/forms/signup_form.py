import re
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, Email
from app.models import User


def user_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def username_exists(form, field):
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def validate_password(form, field):
    password = field.data
    regex_eight_min = "^.{8,}$"
    regex_lower_case = "^.*[a-z]+.*$"
    regex_upper_case = "^.*[A-Z]+.*$"
    regex_digit = "^.*\d+.*$"
    regex_special = "^.*[@$!%*?&]+.*$"

    eight_matches = re.fullmatch(regex_eight_min, password)
    lower_case_matches = re.fullmatch(regex_lower_case, password)
    upper_case_matches = re.fullmatch(regex_upper_case, password)
    digit_matches = re.fullmatch(regex_digit, password)
    special_matches = re.fullmatch(regex_special, password)

    errors = []

    if not eight_matches and len(password):
        errors.append("Must be at least 8 characters")
    if not lower_case_matches and len(password):
        errors.append("Must contain at least one lower case character")
    if not upper_case_matches and len(password):
        errors.append("Must contain at least one upper case character")
    if not digit_matches and len(password):
        errors.append("Must contain at least one digit")
    if not special_matches and len(password):
        errors.append("Must contain at least one special character (@, $, !, %, *, ?, &)")

    if len(errors):
        raise ValidationError(errors)


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('password', validators=[DataRequired(), validate_password])
