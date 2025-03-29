from django.urls import path
from .views import SavingCreateView, SavingDetailView

urlpatterns = [
    path('', SavingCreateView.as_view()),
    path('<int:pk>/', SavingDetailView.as_view()),
]