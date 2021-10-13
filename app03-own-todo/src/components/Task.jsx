import { useState } from 'react'
import '../styles/Task.css'

export default function Task({id, name, isDone, isEdited, tasks, setTasks}) {

    function deleteTask(id) {
        let tmpArray = [...tasks]
        tmpArray.splice(id, 1)
        setTasks(tmpArray)
    }

    function switchCompletion(id) {
        let tmpArray = [...tasks]
        tmpArray[id].isDone = !tmpArray[id].isDone
        setTasks(tmpArray)
    }

    function switchEdition(id) {
        let tmpArray = [...tasks]        
        if (tmpArray[id].isEdited) changeTaskName(id, editingTaskName)
        tmpArray[id].isEdited = !tmpArray[id].isEdited
        console.log(tmpArray)
        setTasks(tmpArray)
    }

    function changeTaskName(id, newName) {
        let tmpArray = [...tasks]
        tmpArray[id].name = newName
        setTasks(tmpArray)
    }

    const [editingTaskName, setETN] = useState(name)

    return(
        <div className="todo-task">
                       <button className={isDone ? "btn-task-checked" : "btn-task-unchecked"} onClick={() => switchCompletion(id)}>
                {isDone? "☒" : "☐"}
            </button>
            <div className="task-name">
                {isEdited? <input type="text" value={editingTaskName} onChange={(e) => {setETN(e.currentTarget.value)}}/> : name}
            </div>
            <button className="btn-task-edit" onClick={() => switchEdition(id)}>
                {isEdited? "Confirm" : "Edit"}
            </button>
            <button className="btn-task-delete" onClick={() => deleteTask(id)}>
                Delete
            </button>
        </div>
    )
}