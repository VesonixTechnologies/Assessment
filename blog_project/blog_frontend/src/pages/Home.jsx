import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const token = localStorage.getItem("token");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Blog Platform 📝</h1>
      <p style={{ marginTop: "10px" }}>
        A simple blog application built with <b>Django REST Framework</b> and <b>React (Vite)</b>.
      </p>

      <div style={{ marginTop: "30px" }}>
        {token ? (
          <>
            <p>You're logged in! Start creating or exploring posts:</p>
            <Link to="/create">
              <button style={buttonStyle}>Create Post</button>
            </Link>
            <Link to="/posts" style={{ marginLeft: "10px" }}>
              <button style={buttonStyle}>View Posts</button>
            </Link>
          </>
        ) : (
          <>
            <p>New here? Create an account or log in to start blogging!</p>
            <Link to="/register">
              <button style={buttonStyle}>Register</button>
            </Link>
            <Link to="/login" style={{ marginLeft: "10px" }}>
              <button style={buttonStyle}>Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
};
