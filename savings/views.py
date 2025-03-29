from rest_framework import generics, permissions
from .models import Saving
from .serializers import SavingSerializer

class SavingCreateView(generics.ListCreateAPIView):
    queryset = Saving.objects.all()
    serializer_class = SavingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SavingDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SavingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Saving.objects.filter(user=self.request.user)