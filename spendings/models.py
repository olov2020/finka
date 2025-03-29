from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Spending(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='spendings')
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50)
    date = models.DateField()
    time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.price} Руб."