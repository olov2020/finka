from rest_framework import serializers
from .models import Spending

class SpendingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spending
        fields = ['id', 'name', 'price', 'category', 'date', 'time']
        read_only_fields = ['id', 'time']