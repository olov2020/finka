from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from django.utils.dateparse import parse_date
from .models import Earning
from .serializers import EarningSerializer
from rest_framework import status

class EarningCreateView(generics.ListCreateAPIView):
    serializer_class = EarningSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Earning.objects.filter(user=self.request.user)

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
        total_sum = sum(item.earning for item in queryset)
        return Response({
            "sum": total_sum,
            "data": serializer.data
        })

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Доход успешно удален"}, 
            status=status.HTTP_200_OK
        )

class EarningDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Earning.objects.all()
    serializer_class = EarningSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Доход успешно удален"}, 
            status=status.HTTP_200_OK
        )