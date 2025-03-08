from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import UserSerializer

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "message": "User registered successfully",
            "user": {
                "id": user.id,
                "email": user.email,
            }
        }, status=status.HTTP_201_CREATED)