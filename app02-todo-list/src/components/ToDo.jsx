import {useState} from 'react'

export default function ToDo({id, name, isDone, todos, setTodos}) {

  function setIsDone(id) {
    console.log("---testing setIsDone function---")
      console.log("Element modified:")
      console.log(todos[id])
      let tmpArray = [...todos]
      tmpArray[id].isDone = !tmpArray[id].isDone
      setTodos(tmpArray)
      console.log(`new todos:`)
      console.log(todos)

  }

  function deleteTask(id) {
    console.log("---testing deleteTask function---")
    console.log("Element modified:")
    console.log(todos[id])
    let tmpArray = [...todos]
    tmpArray.splice(id, 1)
    console.log(`tmpArray:`)
    console.log(tmpArray)
    setTodos(tmpArray)
    console.log(`new todos:`)
    console.log(todos)

  }

  function editTask(id, newName) {
    console.log("---testing editTask function---")
    console.log("Element modified:")
    console.log(todos[id])
    let tmpArray = [...todos]
    tmpArray[id].name = newName
    setTodos(tmpArray)
    console.log(`new todos:`)
    console.log(todos)
  }

  const [taskName, setTaskName] = useState(name)

  return (
      <tr>
        <td>{id}</td>
        <td>
          <input type="text" name="task-name" id="task-name" value={taskName} onChange={(e) => setTaskName(e.currentTarget.value)}/>
        </td>
        <td>
          <input type="checkbox" name="task-complete" id="task-complete" checked={isDone} onChange={() => setIsDone(id)}/>
        </td>
        <td>
        <div className="d-flex justify-content-around">
                      <button className="btn btn-info" onClick={() => editTask(id, taskName)}>Editer</button>
          <button className="btn btn-danger" onClick={() => deleteTask(id)}>Supprimer</button>
            </div>
        </td>
    </tr>
  );
}
