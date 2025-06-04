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
    { id: "0", name: "Pizza Palace", cuisine: "Italian", rating: 4.5 },
    { id: "1", name: "Sushi Zen", cuisine: "Japanese", rating: 4.8 },
    { id: "2", name: "Burger Barn", cuisine: "American", rating: 4.2 },
  ],
  selectedRestaurant: null,
  isSpinning: false,
};

const restaurantPickerSlice = createSlice({
  name: "restaurantPicker",
  initialState,
  reducers: {
    //Hint: Use this reducer to add a new restaurant
    addRestaurant: (state, action: PayloadAction<Omit<Restaurant, "id">>) => {
      const newRestaurant: Restaurant = {
        ...action.payload,
        id: state.restaurants.length.toString(),
      };
      state.restaurants.push(newRestaurant);
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
  },
});

export const {
  addRestaurant,
  selectRandomRestaurant,
  setSpinning,
  clearSelection,
} = restaurantPickerSlice.actions;

export default restaurantPickerSlice.reducer;
