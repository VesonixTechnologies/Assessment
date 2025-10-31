import React, { useState } from "react";
import api from "../../services/api";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        
      </form>
    </div>
  );
}
