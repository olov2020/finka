from django.contrib import admin
from .models import Spending

@admin.register(Spending)
class SpendingAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'name', 'price', 'category', 'date', 'time')