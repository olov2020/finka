from django.urls import path, include
from .views import UserRegistrationView, CustomTokenObtainPairView, UserProfileView, ChangePasswordView, UserViewSet
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'', UserViewSet, basename='user')  # Роутер для CRUD операций

urlpatterns = [
    path('crud/', include(router.urls)),

    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
]