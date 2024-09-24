#from django.shortcuts import render
import logging
from rest_framework import viewsets
from .models import Tree, UserProfile
from .serializers import TreeSerializer, UserProfileSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .agro_api import get_ndvi_data

logger = logging.getLogger('MyTree') 

class TreeViewSet(viewsets.ModelViewSet):
    queryset = Tree.objects.all()
    serializer_class = TreeSerializer

    def list(self, request, *args, **kwargs):
        logger.info("Tree list accessed")
        return super().list(request, *args, **kwargs)



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def create(self, request, *args, **kwargs):
        # Custom logic if needed
        return super().create(request, *args, **kwargs)
    
@api_view(['GET'])
def get_tree_ndvi(request, lat, lon):
    """
    Fetch NDVI data for a tree's location using latitude and longitude
    """
    ndvi_data = get_ndvi_data(lat, lon)
    if ndvi_data:
        return Response(ndvi_data, status=200)
    else:
        return Response({"error": "Unable to fetch NDVI data"}, status=400)

    
    