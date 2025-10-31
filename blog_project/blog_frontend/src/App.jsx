import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PostList from "./components/posts/PostList";
import PostDetail from "./components/posts/PostDetail";
import CreatePost from "./components/posts/CreatePost";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}
