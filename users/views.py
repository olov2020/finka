from rest_framework import generics, status, permissions
from rest_framework.response import Response
from .serializers import UserSerializer
from .serializers import CustomTokenObtainPairSerializer
from .serializers import UserProfileSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Представление регистрации пользователя
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
                "phone": user.phone,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "date_of_birth": user.date_of_birth
            }
        }, status=status.HTTP_201_CREATED)

# Представление получения токена пользователя для авторизации
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

# Представление профиля пользователя
class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user