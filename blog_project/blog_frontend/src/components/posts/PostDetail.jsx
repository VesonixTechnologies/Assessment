import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  const loadPost = async () => {
    const res = await api.get(`posts/${id}/`);
    setPost(res.data);
  };

  useEffect(() => {
    loadPost();
  }, [id]);

  const handleLike = async () => {
    await api.post(`posts/${id}/like/`);
    loadPost();
  };

  const handleComment = async (e) => {
    e.preventDefault();
    await api.post("comments/", { post: id, content: comment });
    setComment("");
    loadPost();
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>By {post.author_name}</p>
      <button onClick={handleLike}>👍 {post.likes_count} Likes</button>

      <h3>Comments</h3>

      <form onSubmit={handleComment}>
      </form>
    </div>
  );
}
