#from django.shortcuts import render
from rest_framework import viewsets
from .models import Tree, UserProfile
from .serializers import TreeSerializer, UserProfileSerializer, UserSerializer
from django.contrib.auth.models import User

class TreeViewSet(viewsets.ModelViewSet):
    queryset = Tree.objects.all()
    serializer_class = TreeSerializer



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def create(self, request, *args, **kwargs):
        # Custom logic if needed
        return super().create(request, *args, **kwargs)

    
    