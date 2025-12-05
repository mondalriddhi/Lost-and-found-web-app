// import { useState } from "react";
// import api from "../services/api";
// import { useNavigate } from "react-router-dom";

// function AddItem() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     category: "",
//     location: "",
//     status: "LOST", // Default value
//     dateLostorFound: "",
//   });
  
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/items", formData); // Send to Backend
//       alert("Item reported successfully!");
//       navigate("/"); // Go back to Home
//     } catch (error) {
//       alert("Failed to report item.");
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ddd" }}>
//       <h2>Report Lost/Found Item</h2>
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
//         <input name="name" placeholder="Item Name (e.g. Blue Wallet)" onChange={handleChange} required />
        
//         <textarea name="description" placeholder="Description" onChange={handleChange} required />
        
//         <input name="category" placeholder="Category (e.g. Electronics)" onChange={handleChange} required />
        
//         <input name="location" placeholder="Location (e.g. Library)" onChange={handleChange} required />
        
//         <input type="date" name="dateLostorFound" onChange={handleChange} required />
        
//         <select name="status" onChange={handleChange}>
//           <option value="LOST">Lost</option>
//           <option value="FOUND">Found</option>
//         </select>

//         <button type="submit" style={{ padding: "10px", background: "blue", color: "white", border: "none" }}>
//           Submit Report
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddItem;

import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    status: "LOST",
    dateLostorFound: "",
  });

  const [imageFile, setImageFile] = useState(null); // New State for Image
  const [loading, setLoading] = useState(false); // To show "Uploading..."
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Get the actual file object
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create a FormData object (Required for sending files)
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("location", formData.location);
      data.append("status", formData.status);
      data.append("dateLostorFound", formData.dateLostorFound);
      
      // 2. Append the file if it exists
      if (imageFile) {
        data.append("image", imageFile);
      }

      // 3. Send to Backend
      // Axios automatically detects FormData and sets the correct headers
      await api.post("/items", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Item reported successfully!");
      navigate("/");
    } catch (error) {
      alert("Failed to report item.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ddd" }}>
      <h2>Report Lost/Found Item</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <input name="name" placeholder="Item Name" onChange={handleChange} required style={{ padding: "8px" }} />
        
        <textarea name="description" placeholder="Description" onChange={handleChange} required style={{ padding: "8px" }} />
        
        <input name="category" placeholder="Category" onChange={handleChange} required style={{ padding: "8px" }} />
        
        <input name="location" placeholder="Location" onChange={handleChange} required style={{ padding: "8px" }} />
        
        <input type="date" name="dateLostorFound" onChange={handleChange} required style={{ padding: "8px" }} />
        
        <select name="status" onChange={handleChange} style={{ padding: "8px" }}>
          <option value="LOST">Lost</option>
          <option value="FOUND">Found</option>
        </select>

        {/* NEW: File Input */}
        <div style={{ border: "1px dashed #ccc", padding: "10px" }}>
            <label>Upload Photo (Optional): </label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          style={{ padding: "10px", background: loading ? "#ccc" : "blue", color: "white", border: "none" }}
        >
          {loading ? "Uploading..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
}

export default AddItem;