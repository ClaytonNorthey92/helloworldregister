from django.shortcuts import render
from localflavor.us.us_states import CONTIGUOUS_STATES
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.serializers import CreateUserSerializer

class CreateUserView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer

@api_view(['GET'])
def list_state_choices(request):
    return Response([state[0] for state in CONTIGUOUS_STATES])
