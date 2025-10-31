import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
       
      </form>
    </div>
  );
}
