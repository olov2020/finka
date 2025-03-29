from rest_framework import serializers
from .models import Reminder

class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = ['id', 'spending', 'name', 'price', 'date', 'time', 'link']
        read_only_fields = ['id', 'time']