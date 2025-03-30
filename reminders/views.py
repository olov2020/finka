from rest_framework import generics, permissions
from .models import Reminder
from .serializers import ReminderSerializer

class ReminderCreateView(generics.ListCreateAPIView):
    serializer_class = ReminderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Reminder.objects.filter(spending__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()

class ReminderDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReminderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Reminder.objects.filter(spending__user=self.request.user)