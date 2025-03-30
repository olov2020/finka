from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Balance
from .serializers import BalanceSerializer
from django_filters.rest_framework import DjangoFilterBackend

class BalanceCreateView(generics.ListCreateAPIView):
    serializer_class = BalanceSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Balance.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class BalanceDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BalanceSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'balance', 'start_date', 'end_date']

    def get_queryset(self):
        return Balance.objects.filter(user=self.request.user)