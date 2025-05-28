import { useState } from "react";
// TODO: Import useDispatch from react-redux
// TODO: Import addRestaurant action from '../../store/restaurantPickerSlice'

const AddRestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    rating: 5,
  });

  // TODO: Initialize dispatch hook

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.cuisine.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    // TODO: Dispatch addRestaurant action with formData
    // Hint: dispatch(addRestaurant(formData))

    // Reset form
    setFormData({
      name: "",
      cuisine: "",
      rating: 5,
    });

    console.log("Restaurant added:", formData);
  };

  return (
    <div
      style={{
        border: "2px solid #4caf50",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px",
        backgroundColor: "#f8fff8",
      }}
    >
      <h2>➕ Add New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Restaurant Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Tony's Pizza"
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Cuisine Type:
            <input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleInputChange}
              placeholder="e.g., Italian, Mexican, Thai"
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Rating (1-5):
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "25px",
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
