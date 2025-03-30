from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    UserRegistrationView,
    CustomTokenObtainPairView,
    UserProfileView,
    CustomRefreshTokenView
)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('refresh_token/<str:refresh_token>/', CustomRefreshTokenView.as_view(), name='refresh_token'),
    path('', UserProfileView.as_view(), name='account'),
]