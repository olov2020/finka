from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator
from django.utils import timezone

type_choices = [('income', 'Доход'), ('expense', 'Расход')]  # Варианты выбора типа транзакции

# Класс для транзакций
class Transaction(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE, 
        related_name='transactions'
    )  # Пользователь, который создал транзакцию
    name = models.CharField(max_length=100, default="")  # Название транзакции
    amount = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(0.01)]
    )  # Количество вещей транзакции (должно быть > 0)
    sum = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0.01)]
    )  # Сумма транзакции (должна быть > 0)
    currency = models.CharField(max_length=10, default="RUB")  # Валюта
    category = models.CharField(max_length=100, default="")  # Категория транзакции
    date = models.DateField(default=timezone.now)  # Дата транзакции
    type = models.CharField(max_length=10, choices=type_choices, default='income')  # Тип транзакции (доход или расход)
    comment = models.TextField(blank=True)  # Комментарий к транзакции

    def __str__(self):
        return f"{self.user} - {self.name} - {self.amount} - {self.sum} {self.currency} - {self.category} - {self.date} - {self.type} - {self.comment}"