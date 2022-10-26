import {useState} from 'react'
import ToDo from './ToDo'

export default function ToDoList() {

  const [todos, setTodos] = useState([{
    name: "Test",
    isDone: false
  }])

  const [inputValue, setInputValue] = useState('')

  function deleteTask(id) {   
    let tmpArray = [...todos]
    tmpArray.splice(id, 1)
    setTodos(tmpArray)
    console.log(todos)
  }

  return (
    <>
      <div className="container">
        <h1>React ToDo List</h1>
        <div className="row">
          <input
            type="text"
            className="col"
            name="input-new-task"
            id="input-new-task"
            placeholder="Nouvelle tâche..."
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <button className="col btn btn-primary" onClick={() => setTodos([...todos, {name: inputValue, isDone: false}])}>Ajouter</button>
        </div>
        <div className="row">
          {todos.length}  Task(s)
        </div>
        <table className="table text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Tâche</th>
              <th>Complétion</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {todos.map((todo, index) => <ToDo key={index} id={index} {...todo} todos={todos} deleteTask={deleteTask} setTodos={setTodos}/>)}
          </tbody>
        </table>
      </div>
    </>
  );
}
