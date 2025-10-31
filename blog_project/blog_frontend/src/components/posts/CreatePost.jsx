import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
