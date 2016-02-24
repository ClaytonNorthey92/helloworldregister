from django.core.exceptions import ValidationError
from localflavor.us.us_states import CONTIGUOUS_STATES

def validate_five_or_nine(value):
    if len(value) not in [5,9]:
        raise ValidationError('Length must be either 5 or 9.')

def validate_us_state(value):
    if value not in CONTIGUOUS_STATES:
        raise ValidationError('{} is not a valid US state'.format(value))
