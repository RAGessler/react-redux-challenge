import { useSelector, useDispatch } from "react-redux";
import {
  selectRandomRestaurant,
  setSpinning,
  clearSelection,
} from "../store/restaurantPickerSlice.ts";
import { RootState } from "../store";

const RestaurantPicker = () => {
  //Initializing the dispatch hook
  const dispatch = useDispatch();

  const { selectedRestaurant, isSpinning, restaurants } = useSelector(
    (state: RootState) => state.restaurantPicker
  );

  const handlePickRestaurant = () => {
    if (restaurants.length === 0) {
      alert("No restaurants available! Add some restaurants first.");
      return;
    }

    dispatch(setSpinning(true));

    setTimeout(() => {
      dispatch(selectRandomRestaurant());
      dispatch(setSpinning(false));
    }, 2000);
  };

  const handleClearSelection = () => {
    dispatch(clearSelection());
  };

  return (
    <div
      style={{
        border: "3px solid #ff6b6b",
        borderRadius: "15px",
        padding: "30px",
        margin: "20px",
        backgroundColor: "#fff5f5",
        textAlign: "center",
        minHeight: "200px",
      }}
    >
      <h2>🎲 Restaurant Picker</h2>

      {isSpinning ? (
        <div
          style={{ fontSize: "24px", animation: "spin 0.5s linear infinite" }}
        >
          🎯 Picking your restaurant...
        </div>
      ) : selectedRestaurant ? (
        <div
          style={{
            backgroundColor: "#e8f5e8",
            border: "2px solid #4caf50",
            borderRadius: "10px",
            padding: "20px",
            margin: "10px 0",
          }}
        >
          <h3>🎉 Your Restaurant Choice:</h3>
          <h2 style={{ color: "#2e7d32", margin: "10px 0" }}>
            {selectedRestaurant.name}
          </h2>
          <p>
            <strong>Cuisine:</strong> {selectedRestaurant.cuisine}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {selectedRestaurant.rating}/5
          </p>
        </div>
      ) : (
        <div style={{ fontSize: "18px", color: "#666" }}>
          Click the button below to pick a random restaurant!
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePickRestaurant}
          disabled={isSpinning}
          style={{
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "25px",
            padding: "15px 30px",
            fontSize: "18px",
            cursor: isSpinning ? "not-allowed" : "pointer",
            marginRight: "10px",
            opacity: isSpinning ? 0.6 : 1,
          }}
        >
          {isSpinning ? "Picking..." : "🎲 Pick Random Restaurant"}
        </button>

        {selectedRestaurant && (
          <button
            onClick={handleClearSelection}
            style={{
              backgroundColor: "#757575",
              color: "white",
              border: "none",
              borderRadius: "25px",
              padding: "15px 30px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Clear Selection
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantPicker;
