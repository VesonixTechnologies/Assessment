import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> |{" "}
      {token ? (
        <>
          <Link to="/create">Create</Link> |{" "}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
