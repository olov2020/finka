from django.db import models
from spendings.models import Spending

class Reminder(models.Model):
    spending = models.ForeignKey(Spending, on_delete=models.CASCADE, related_name="reminders")
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    date = models.DateField()
    link = models.URLField(blank=True, null=True)
    time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name