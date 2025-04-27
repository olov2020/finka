from django.urls import path
from .views import BalanceCreateView, BalanceDetailView

urlpatterns = [
    path('', BalanceCreateView.as_view(), name='balance-create'),
    path('<int:pk>/', BalanceDetailView.as_view(), name='balance-detail'),
]