from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.views import PostViewSet, CommentViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register('posts', PostViewSet)
router.register('comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
