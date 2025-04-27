from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/account/', include('users.urls')),
    path('api/spendings/', include('spendings.urls')),
    path('api/earnings/', include('earnings.urls')),
    path('api/balance/', include('balance.urls')),
    path('api/savings/', include('savings.urls')),
    path('api/reminders/', include('reminders.urls')),
    path('api/analytics/', include('analytics.urls')),
    path('api/help/', include('support.urls')),
]
