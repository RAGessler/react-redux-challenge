import { configureStore } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
}

interface RestaurantPickerState {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  isSpinning: boolean;
}

const initialState: RestaurantPickerState = {
  restaurants: [
    { id: "1", name: "Pizza Palace", cuisine: "Italian", rating: 4.5 },
    { id: "2", name: "Sushi Zen", cuisine: "Japanese", rating: 4.8 },
    { id: "3", name: "Burger Barn", cuisine: "American", rating: 4.2 },
  ],
  selectedRestaurant: null,
  isSpinning: false,
};

const restaurantPickerSlice = createSlice({
  name: "restaurantPicker",
  initialState,
  reducers: {
    addRestaurant: (state, action: PayloadAction<Omit<Restaurant, "id">>) => {
      const newRestaurant: Restaurant = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.restaurants.push(newRestaurant);
    },
    removeRestaurant: (state, action: PayloadAction<string>) => {
      state.restaurants = state.restaurants.filter(
        (restaurant) => restaurant.id !== action.payload
      );
    },
    selectRandomRestaurant: (state) => {
      if (state.restaurants.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * state.restaurants.length
        );
        state.selectedRestaurant = state.restaurants[randomIndex];
      }
    },
    setSpinning: (state, action: PayloadAction<boolean>) => {
      state.isSpinning = action.payload;
    },
    clearSelection: (state) => {
      state.selectedRestaurant = null;
    },
    // TODO: Interns should add a reducer to update restaurant rating
  },
});

export const {
  addRestaurant,
  removeRestaurant,
  selectRandomRestaurant,
  setSpinning,
  clearSelection,
} = restaurantPickerSlice.actions;

// Configure the store
export const store = configureStore({
  reducer: {
    restaurantPicker: restaurantPickerSlice.reducer,
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default restaurantPickerSlice.reducer;
