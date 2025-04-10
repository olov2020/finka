from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from django.contrib.auth import get_user_model

User = get_user_model()

class UserCRUDTests(APITestCase):
    def test_create_user(self):
        url = reverse('user-list')
        data = {
            "email": "test@example.com",
            "password": "testpassword"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn("email", response.data)

    def test_list_users(self):
        User.objects.create_user(email="test2@example.com", password="testpassword")
        url = reverse('user-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(isinstance(response.data, list))

    def test_update_user(self):
        user = User.objects.create_user(email="test3@example.com", password="testpassword")
        url = reverse('user-detail', kwargs={'pk': user.pk})
        data = {"email": "updated@example.com"}
        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["email"], "updated@example.com")

    def test_delete_user(self):
        user = User.objects.create_user(email="test4@example.com", password="testpassword")
        url = reverse('user-detail', kwargs={'pk': user.pk})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)