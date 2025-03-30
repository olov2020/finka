from django.db import models
from django.conf import settings

class Saving(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="savings")
    name = models.CharField(max_length=100)
    saving = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}: {self.saving}"