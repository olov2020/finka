from django.urls import re_path
from . import views

urlpatterns = [
    re_path('login', views.login),
    re_path('signup', views.signup),
    re_path('test_token', views.test_token),
    re_path('change_username', views.change_username),
    re_path('change_email', views.change_email),
    re_path('change_password', views.change_password),
]