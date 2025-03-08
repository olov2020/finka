from django.urls import path
from .views import TransactionCreateView

urlpatterns = [
    path('add/', TransactionCreateView.as_view(), name='transaction-add'),
]