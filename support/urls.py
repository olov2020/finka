from django.urls import path
from .views import SupportMessageCreateView

urlpatterns = [
    path('', SupportMessageCreateView.as_view(), name='support-list-create'),
]