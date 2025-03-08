from django.db import models
from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager

# Класс для управления пользователями
class UserManager(BaseUserManager): 
    def create_user(self, email, password=None): # Метод для создания пользователя
        if not email: # Проверяем что email был передан
            raise ValueError("Email must be set")
        
        email = self.normalize_email(email) # Приводим email в корректный вид
        user = self.model(email=email) # Создаем экземпляр пользователя
        user.set_password(password) # Устанавливаем пароль в хэшированном виде
        user.save(using=self._db) # Сохраняем пользователя в базу данных
        return user

    def create_superuser(self, email, password=None, **extra_fields): # Метод для создания суперпользователя
        extra_fields.setdefault("is_staff", True) # Устанавливаем параметр is_staff в True, то есть даем доступ в админку
        extra_fields.setdefault("is_superuser", True) # Даем права суперпользователя

        # Проверяем параметры
        if extra_fields.get("is_staff") is not True: 
            raise ValueError("Superuser must have is_staff=True")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self.create_user(email, password, **extra_fields) # Создаем и возвращаем экземпляр суперпользователя

# Класс пользователя
class User(AbstractBaseUser):
    # Поля пользователя: email, пароль
    email = models.EmailField(unique=True, verbose_name="Email")
    password = models.CharField(max_length=128, verbose_name="Password")

    objects = UserManager() # Устанавливаем через что создается пользователь

    USERNAME_FIELD = 'email' # Меняем логин на email
    REQUIRED_FIELDS = [] # Поля которые обязательны для заполнения, в данном случае не указываем потому что email - обязательное поле

    def __str__(self): # Метод для отображения пользователя в админке
        return self.email