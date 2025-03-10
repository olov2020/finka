from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model() # Получаем модель пользователя

# Сериализатор для пользователя
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    # Мета класс для указания модели и полей
    class Meta:
        model = User
        fields = ['id', 'email', 'phone', 'first_name', 'last_name', 'date_of_birth', 'password']

    # Метод для создания пользователя
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            phone=validated_data['phone'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            date_of_birth=validated_data['date_of_birth'],
            password=validated_data['password']
        )
        return user