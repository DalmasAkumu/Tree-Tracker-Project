from rest_framework import serializers
from .models import Tree, UserProfile

class TreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

