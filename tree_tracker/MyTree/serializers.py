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
        fields = ['id', 'username', 'email', 'password']  # Include 'id' for identification
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True}  # Optional: ensure email is required
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()  # Handle nested user data

    class Meta:
        model = UserProfile
        fields = ['user', 'other_profile_field_1', 'other_profile_field_2', 'bio', 'profile_picture']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user_serializer = UserSerializer(data=user_data)
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.save()
        # Create the UserProfile instance
        user_profile = UserProfile.objects.create(user=user, **validated_data)
        return user_profile
