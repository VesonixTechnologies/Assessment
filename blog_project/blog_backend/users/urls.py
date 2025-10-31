from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import RegisterView, UserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='login'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/user/', UserView.as_view(), name='user'),
]
