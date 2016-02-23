from django.db import models
from localflavor.us.us_states import CONTIGUOUS_STATES

from users.validators import validate_five_or_nine

class RegisterUser(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address_1 = models.CharField(max_length=100)
    address_2 = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2, choices=CONTIGUOUS_STATES)
    postal = models.CharField(max_length=9, validators=[validate_five_or_nine])
