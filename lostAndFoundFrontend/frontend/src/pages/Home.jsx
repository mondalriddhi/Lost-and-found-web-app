import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // This runs automatically when the page loads
    const fetchItems = async () => {
      try {
        const response = await api.get("/items"); // The token is attached automatically
        setItems(response.data);
      } catch (err) {
        setError("Failed to fetch items. Are you logged in?");
        console.error(err);
      }
    };

    fetchItems();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lost & Found Items</h2>
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
            <h3>{item.name}</h3>
            <p><strong>Status:</strong> {item.status}</p>
            <p>{item.description}</p>
            <p><em>Location: {item.location}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;