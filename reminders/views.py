from rest_framework import generics, permissions
from .models import Reminder
from .serializers import ReminderSerializer
from rest_framework import status
from rest_framework.response import Response
from .models import Spending

class ReminderCreateView(generics.ListCreateAPIView):
    serializer_class = ReminderSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Reminder.objects.all()

    def get_queryset(self):
        return Reminder.objects.filter(spending__user=self.request.user)

    def perform_create(self, serializer):
        spending = Spending.objects.create(
            user  = self.request.user,
            name  = serializer.validated_data['name'],
            price = serializer.validated_data['price'],
            date  = serializer.validated_data['date'],
        )
        serializer.save(spending=spending)
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Напоминание успешно удалено"}, 
            status=status.HTTP_200_OK
        )

class ReminderDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReminderSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Reminder.objects.all()
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Напоминание успешно удалено"}, 
            status=status.HTTP_200_OK
        )