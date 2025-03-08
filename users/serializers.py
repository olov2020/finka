from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model() # Получаем модель пользователя

# Сериализатор для пользователя
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    # Мета класс для указания модели и полей
    class Meta:
        model = User
        fields = ('id', 'email', 'password')
        read_only_fields = ('id')

    # Метод для создания пользователя
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    # Метод для обновления пользователя
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance