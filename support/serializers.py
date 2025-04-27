from rest_framework import serializers
from .models import SupportMessage

class SupportMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportMessage
        fields = ['id', 'message', 'tg', 'created_at']
        read_only_fields = ['id', 'created_at']