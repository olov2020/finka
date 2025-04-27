from rest_framework import generics, permissions
from .models import Saving
from .serializers import SavingSerializer
from rest_framework import status
from rest_framework.response import Response

class SavingCreateView(generics.ListCreateAPIView):
    queryset = Saving.objects.all()
    serializer_class = SavingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Накопление успешно удалено"}, 
            status=status.HTTP_200_OK
        )

class SavingDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SavingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Saving.objects.filter(user=self.request.user)
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Накопление успешно удалено"}, 
            status=status.HTTP_200_OK
        )