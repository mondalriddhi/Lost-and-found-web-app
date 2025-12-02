import { Link, useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Delete the badge
    setIsLoggedIn(false); // Update App state
    navigate("/login"); // Go to login page
  };

  return (
    <nav style={{ padding: "15px", background: "#333", color: "white", display: "flex", gap: "20px" }}>
      <h2>Lost & Found</h2>
      <div style={{ marginLeft: "auto", display: "flex", gap: "15px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/add" style={{ color: "white", textDecoration: "none" }}>Report Item</Link>
        <button onClick={handleLogout} style={{ padding: "5px 10px", cursor: "pointer" }}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;