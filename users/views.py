from rest_framework import generics, status, permissions, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import (
    UserSerializer,
    ChangePasswordSerializer,
    UserProfileSerializer,
    CustomTokenObtainPairSerializer
)
from .permissions import IsOwnerOrAdmin

User = get_user_model()

# Представление регистрации пользователя
class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "message": "User registered successfully",
            "user": {
                "id": user.id,
                "email": user.email,
                "name": user.name,
                "surname": user.surname,
            }
        }, status=status.HTTP_201_CREATED)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class UserProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer
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
        return User.objects.filter(id=user.id)

class CustomRefreshTokenView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, refresh_token, format=None):
        try:
            refresh = RefreshToken(refresh_token)
            access_token = str(refresh.access_token)
            return Response({"access_token": access_token}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"detail": "Refresh token is invalid or expired. Logging out user."},
                status=status.HTTP_401_UNAUTHORIZED
            )