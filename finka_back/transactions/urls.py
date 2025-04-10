from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, TransactionSummaryView

router = DefaultRouter()
router.register(r'', TransactionViewSet, basename='transactions')

urlpatterns = [
    path('', include(router.urls)),
    path('summary/', TransactionSummaryView.as_view(), name='transaction-summary'),
]