from django.db import models
from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager

# Класс для управления пользователями
class UserManager(BaseUserManager): 
    def create_user(self, email, password=None, **extra_fields): # Метод для создания пользователя
        if not email: # Проверяем что email был передан
            raise ValueError("Email must be set")
        
        email = self.normalize_email(email) # Приводим email в корректный вид
        user = self.model(email=email, **extra_fields) # Создаем экземпляр пользователя
        user.set_password(password) # Устанавливаем пароль в хэшированном виде
        user.save(using=self._db) # Сохраняем пользователя в базу данных
        return user

class User(AbstractBaseUser):
    email = models.EmailField(unique=True, verbose_name="Email")
    name = models.CharField(max_length=64, verbose_name="Name", default="")
    surname = models.CharField(max_length=64, verbose_name="Surname", default="")

    objects = UserManager()  # Менеджер пользователей

    USERNAME_FIELD = 'email'  # Используем email для аутентификации
    REQUIRED_FIELDS = ['name', 'surname']  # Обязательные поля, кроме email

    def __str__(self):
        return self.email