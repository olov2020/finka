from rest_framework import serializers
from .models import Balance

class BalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Balance
        fields = ['id', 'user', 'name', 'balance', 'start_date', 'end_date', 'time']
        read_only_fields = ['id', 'time']