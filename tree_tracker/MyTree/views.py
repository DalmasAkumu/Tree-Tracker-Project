#from django.shortcuts import render
from rest_framework import viewsets
from .models import Tree, UserProfile
from .serializers import TreeSerializer, UserProfileSerializer

class TreeViewSet(viewsets.ModelViewSet):
    queryset = Tree.objects.all()
    serializer_class = TreeSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
