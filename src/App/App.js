import { Provider } from "react-redux";
import { store } from "../store/index.ts";
import RestaurantPicker from "../components/RestaurantPicker.tsx";
import RestaurantList from "../components/RestaurantList.tsx";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>🍽️ Restaurant Picker</h1>
          <p>Can't decide where to eat? Let us pick for you!</p>

          <RestaurantPicker />
          <RestaurantList />
          {/* TODO: Interns should add the AddRestaurantForm component here */}
        </header>
      </div>
    </Provider>
  );
}

export default App;
