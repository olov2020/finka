from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .utils import predict_next_month_sum

class AnalyticsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        forecast = predict_next_month_sum(request.user, months=12)
        return Response(forecast)