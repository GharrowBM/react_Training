import ToDoList from "./components/ToDoList";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [arrToDos, setArrToDos] = useState([{
    name: 'Tâche test',
    isDone: false
  }]);
  const [input, setInput] = useState("");

  return (
    <div className="App container">
      <h1>React ToDo List</h1>
      <div className="row">
        <input
          className="col"
          type="text"
          name="new-todo"
          id="new-todo"
          placeholder="Nouvelle tâche..."
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button
          className="col-lg-2 btn btn-secondary"
          onClick={() =>
            setArrToDos([...arrToDos, {name: input, isDone: false }])
          }
        >
          Ajouter
        </button>
      </div>
      <ToDoList arrToDos={arrToDos} setArrToDos={setArrToDos} />
    </div>
  );
}

export default App;
