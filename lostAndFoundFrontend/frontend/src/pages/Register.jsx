import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Calling the Backend API
      await api.post("/auth/register", formData);
      alert("Registration Successful! Please Login.");
      navigate("/login"); // Sending them to Login page
    } catch (error) {
      alert("Registration Failed! Username might be taken.");
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <input name="username" placeholder="Username" onChange={handleChange} required padding="10px" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required padding="10px" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required padding="10px" />

        <button type="submit" style={{ padding: "10px", background: "green", color: "white", cursor: "pointer" }}>
          Register
        </button>
      </form>
      
      {/* Link to go back to Login */}
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Register;