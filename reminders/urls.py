from django.urls import path
from .views import ReminderCreateView, ReminderDetailView

urlpatterns = [
    path('', ReminderCreateView.as_view()),
    path('<int:pk>/', ReminderDetailView.as_view()),
]