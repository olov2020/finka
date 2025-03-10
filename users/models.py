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
    email = models.EmailField(unique=True, verbose_name="Email")
    phone = models.CharField(max_length=16, unique=True, verbose_name="Phone number", default="")
    first_name = models.CharField(max_length=64, verbose_name="First name", default="")
    last_name = models.CharField(max_length=64, verbose_name="Last name", default="")
    date_of_birth = models.DateField(verbose_name="Date of birth", blank=True, null=True)
    password = models.CharField(max_length=128, verbose_name="Password")

    objects = UserManager() # Устанавливаем через что создается пользователь

    USERNAME_FIELD = 'email' # Меняем логин на email
    REQUIRED_FIELDS = ['phone', 'first_name', 'last_name', 'date_of_birth'] # Поля которые обязательны для заполнения, в данном случае не указываем потому что email - обязательное поле

    def __str__(self): # Метод для отображения пользователя в админке
        return self.email