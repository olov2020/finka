from rest_framework import generics, status, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, ChangePasswordSerializer, UserProfileSerializer, CustomTokenObtainPairSerializer
from .permissions import IsOwnerOrAdmin
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import viewsets
from django.contrib.auth import get_user_model

User = get_user_model()

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

# Представление изменения пароля пользователя
class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = ChangePasswordSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "Пароль успешно изменен."}, status=status.HTTP_200_OK)

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [IsOwnerOrAdmin]

    def get_queryset(self):
        user = self.request.user
        # Если пользователь - администратор, возвращаем всех
        if user.is_superuser:
            return User.objects.all()
        # Иначе, возвращаем только текущего пользователя
        return User.objects.filter(id=user.id)