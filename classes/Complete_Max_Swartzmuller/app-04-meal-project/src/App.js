import Header from "./components/shared/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Meals />
      </main>
    </div>
  );
}

export default App;
