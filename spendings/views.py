from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError
from .models import Spending
from .serializers import SpendingSerializer
from django.utils.dateparse import parse_date
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

class SpendingCreateView(generics.ListCreateAPIView):
    serializer_class = SpendingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Spending.objects.filter(user=user)

        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')

        if start_date and end_date:
            try:
                start = parse_date(start_date)
                end = parse_date(end_date)
                if not start or not end:
                    raise ValueError
            except ValueError:
                raise ValidationError("Некорректный формат даты. Используйте YYYY-MM-DD")

            queryset = queryset.filter(date__range=[start, end])

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        total_sum = sum(item.price for item in queryset)
        return Response({
            "sum": total_sum,
            "data": serializer.data
        })

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SpendingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Spending.objects.all()
    serializer_class = SpendingSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user', 'name', 'price', 'category', 'date']

    def get_queryset(self):
        return Spending.objects.filter(user=self.request.user)