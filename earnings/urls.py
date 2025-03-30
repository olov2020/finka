from django.urls import path
from .views import EarningCreateView, EarningDetailView

urlpatterns = [
    path('', EarningCreateView.as_view()),
    path('<int:pk>', EarningDetailView.as_view()),
]