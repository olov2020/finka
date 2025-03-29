from django.db import models
from django.conf import settings

class Earning(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='earnings')
    name = models.CharField(max_length=100)
    earning = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} — {self.earning}"