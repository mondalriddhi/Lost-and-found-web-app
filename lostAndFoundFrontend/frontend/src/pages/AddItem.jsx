import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    status: "LOST", // Default value
    dateLostorFound: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/items", formData); // Send to Backend
      alert("Item reported successfully!");
      navigate("/"); // Go back to Home
    } catch (error) {
      alert("Failed to report item.");
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ddd" }}>
      <h2>Report Lost/Found Item</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <input name="name" placeholder="Item Name (e.g. Blue Wallet)" onChange={handleChange} required />
        
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        
        <input name="category" placeholder="Category (e.g. Electronics)" onChange={handleChange} required />
        
        <input name="location" placeholder="Location (e.g. Library)" onChange={handleChange} required />
        
        <input type="date" name="dateLostorFound" onChange={handleChange} required />
        
        <select name="status" onChange={handleChange}>
          <option value="LOST">Lost</option>
          <option value="FOUND">Found</option>
        </select>

        <button type="submit" style={{ padding: "10px", background: "blue", color: "white", border: "none" }}>
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default AddItem;