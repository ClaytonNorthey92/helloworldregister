from django.core.exceptions import ValidationError

def validate_five_or_nine(value):
    if len(value) not in [5,9]:
        raise ValidationError('Length must be either 5 or 9.')