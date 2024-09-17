from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import TreeViewSet, UserProfileViewSet, UserViewSet, get_tree_ndvi

# Create a router and register our viewsets
router = DefaultRouter()
router.register(r'trees', TreeViewSet)
router.register(r'users', UserViewSet)
router.register(r'users', UserProfileViewSet)

# URLs provided by the router
urlpatterns = [
    path('', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/tree-ndvi/<str:lat>/<str:lon>/', get_tree_ndvi, name='get_tree_ndvi'),
]
