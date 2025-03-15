from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'user', 'name', 'amount', 'sum', 'currency', 'category', 'date', 'type', 'comment']
        read_only_fields = ['id', 'user']