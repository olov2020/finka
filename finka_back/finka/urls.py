from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'), # login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # update token
    path('api/register/', RegistrationView.as_view(), name='register'), # registration
]