# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TreeViewSet, UserProfileViewSet

# Create a router and register our viewsets
router = DefaultRouter()
router.register(r'trees', TreeViewSet)
router.register(r'users', UserProfileViewSet)

# URLs provided by the router
urlpatterns = [
    path('', include(router.urls)),
]
