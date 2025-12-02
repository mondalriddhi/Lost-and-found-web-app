import { useState } from "react";
import api from "../services/api"; 
import { Link } from "react-router-dom";

function Login({onLoginSuccess}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Stop page refresh
    try {
      // Send POST request to Spring Boot
      const response = await api.post("/auth/login", {
        username: username,
        password: password,
      });

      // If successful, the response is the Token String
      localStorage.setItem("token", response.data); // Save to browser
      setMessage("Login Successful! Token saved.");
      onLoginSuccess();
      console.log("Token:", response.data);
      
    } catch (error) {
      setMessage("Login Failed! Check credentials.");
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", margin: "10px", width: "100%" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", margin: "10px", width: "100%" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>
        New here? <Link to="/register">Create an Account</Link>
      </p>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;