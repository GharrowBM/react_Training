import {useState} from 'react'

export default function ToDo({id, name, isDone, todos, deleteTask, setTodos}) {

  function setIsDone(id) {
  
      let tmpArray = [...todos]
      tmpArray[id].isDone = !tmpArray[id].isDone
      setTodos(tmpArray)
   

  }

  function editTask(id, newName) { 
    let tmpArray = [...todos]
    tmpArray[id].name = newName
    setTodos(tmpArray) 
  }

  return (
      <tr>
        <td>{id}</td>
        <td>
          {name}
        </td>
        <td>
          <input type="checkbox" name="task-complete" id="task-complete" checked={isDone} onChange={() => setIsDone(id)}/>
        </td>
        <td>
        <div className="d-flex justify-content-around">
                      <button className="btn btn-info">Editer</button>
          <button className="btn btn-danger" onClick={() => deleteTask(id)}>Supprimer</button>
            </div>
        </td>
    </tr>
  );
}
