from rest_framework import viewsets, permissions
from django_filters.rest_framework import DjangoFilterBackend
from .models import Transaction
from .serializers import TransactionSerializer
from .filters import TransactionFilter

class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    filter_backends = [DjangoFilterBackend]
    filterset_class = TransactionFilter

    def get_queryset(self):
        user = self.request.user
        if user.is_superuser:
            return Transaction.objects.all()
        return Transaction.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)