from rest_framework import serializers
from blog.models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    pass

class PostSerializer(serializers.ModelSerializer):
    pass
