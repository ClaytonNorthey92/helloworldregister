from django.db import models
from localflavor.us.us_states import CONTIGUOUS_STATES

from users.validators import validate_five_or_nine

class RegisterUser(models.Model):
    COUNTRY_CHOICES = (('US', 'United States'),)

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address_1 = models.CharField(max_length=100)
    address_2 = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2, choices=CONTIGUOUS_STATES)
    postal = models.IntegerField(max_length=9, validators=[validate_five_or_nine])
    country = models.CharField(max_length=2, choices=COUNTRY_CHOICES)
    created = models.DateTimeField(auto_now_add=True)
