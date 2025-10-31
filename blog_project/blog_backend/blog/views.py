from rest_framework import viewsets, permissions, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from blog.models import Post, Comment
from blog.serializers import PostSerializer, CommentSerializer



# Post CRUD + Like Feature
class PostViewSet(viewsets.ModelViewSet):
    pass

# Comments
class CommentViewSet(viewsets.ModelViewSet):
    pass