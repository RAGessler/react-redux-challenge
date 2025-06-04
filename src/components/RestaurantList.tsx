import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

const RestaurantList = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector(
    (state: RootState) => state.restaurantPicker
  );

  return (
    <div
      style={{
        border: "2px solid #2196f3",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px",
        backgroundColor: "#f3f8ff",
      }}
    >
      <h2>🍴 Available Restaurants ({restaurants.length})</h2>

      {restaurants.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          No restaurants available. Add some restaurants to get started!
        </p>
      ) : (
        <div style={{ display: "grid", gap: "10px" }}>
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 5px 0" }}>{restaurant.name}</h3>
                <p style={{ margin: "0", color: "#666" }}>
                  {restaurant.cuisine} • ⭐ {restaurant.rating}/5
                </p>
              </div>
              {/* For an extra challenge, create a button that removes the specific restaurant */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
