from rest_framework import viewsets, permissions, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from users.models import User
from users.serializers import RegisterSerializer, UserSerializer

# Register User
class RegisterView(generics.CreateAPIView):
    pass

# User Info
class UserView(generics.RetrieveAPIView):
    pass