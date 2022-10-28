import Header from "./components/shared/Header";
import AvailableMeals from "./components/shared/meals/AvailableMeals";
import MealsSummary from "./components/shared/meals/MealsSummary";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
