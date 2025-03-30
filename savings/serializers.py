from rest_framework import serializers
from .models import Saving

class SavingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saving
        fields = ['id', 'name', 'saving', 'date', 'time']
        read_only_fields = ['id', 'time']