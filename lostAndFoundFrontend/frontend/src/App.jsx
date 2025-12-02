import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {
  // Check if token exists
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div>
      {/* Show Navbar only if logged in */}
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        <Route 
          path="/login" 
          element={!isLoggedIn ? <Login onLoginSuccess={() => setIsLoggedIn(true)} /> : <Navigate to="/" />} 
        />

        <Route path="/register" element={<Register />} />
        
        <Route 
          path="/" 
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/add" 
          element={isLoggedIn ? <AddItem /> : <Navigate to="/login" />} 
        />
      </Routes>
    </div>
  );
}

export default App;