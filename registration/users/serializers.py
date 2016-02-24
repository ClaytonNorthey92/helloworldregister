from rest_framework import serializers

from users.models import RegisterUser

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterUser
        fields = ('first_name', 'last_name', 'country', 'state',
                  'postal', 'address_1', 'address_2', 'country')
