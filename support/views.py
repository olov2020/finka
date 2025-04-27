from rest_framework import generics, permissions
from .models import SupportMessage
from .serializers import SupportMessageSerializer
from rest_framework import status
from rest_framework.response import Response

class SupportMessageCreateView(generics.ListCreateAPIView):
    queryset = SupportMessage.objects.all().order_by('-created_at')
    serializer_class = SupportMessageSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"detail": "Ваше сообщение успешно отправлено"},
            status=status.HTTP_201_CREATED
        )