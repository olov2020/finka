from django.urls import path
from .views import SpendingCreateView, SpendingDetailView

urlpatterns = [
    path('', SpendingCreateView.as_view()),
    path('<int:pk>/', SpendingDetailView.as_view()),
]