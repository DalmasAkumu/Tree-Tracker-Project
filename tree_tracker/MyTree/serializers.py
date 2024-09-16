from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Tree, UserProfile

class TreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']  # Adjust as needed

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()  # Handle nested user data

    class Meta:
        model = UserProfile
        fields = ['user', 'other_profile_field_1', 'other_profile_field_2', 'bio', 'profile_picture']
