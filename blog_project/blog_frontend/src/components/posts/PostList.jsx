import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("posts/").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      
    </div>
  );
}
