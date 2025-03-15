from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from .models import Transaction
from django.db.models import Sum
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


class TransactionSummaryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        total_expense = Transaction.objects.filter(user=user, type='expense').aggregate(total=Sum('sum'))['total'] or 0
        total_income = Transaction.objects.filter(user=user, type='income').aggregate(total=Sum('sum'))['total'] or 0
        
        # если нужно группировать по категориям
        expense_by_category = Transaction.objects.filter(user=user, type='expense').values('category').annotate(total=Sum('sum'))
        
        return Response({
            'total_expense': total_expense,
            'total_income': total_income,
            'expense_by_category': expense_by_category
        })