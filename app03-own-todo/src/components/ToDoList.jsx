import { useState } from "react"
import '../styles/ToDoList.css'
import {baseTasks} from '../datas/baseTasks'
import Task from './Task'

export default function ToDoList() {

    function addTask(taskName) {
        setTasks([...tasks, {
            name: taskName,
            isDone : false,
            isEdited : false
        }])
    }

    const [tasks, setTasks] = useState(baseTasks)
    const [newTaskName, setNTN] = useState('')

    return (<>
        <div className="todo-list">
            <div className="todo-head">
                <input type="text" name="new-task" id="new-task" placeholder="Nouvelle tâche..." value={newTaskName} onChange={(e) => setNTN(e.currentTarget.value)}/>
                <button onClick={() => {if (!(tasks.some(task => task.name === newTaskName))) addTask(newTaskName)}}>+</button>
            </div>
            <div className="todo-body">
                {tasks.map((task, index) => <Task key={index} id={index} {...task} tasks={tasks} setTasks={setTasks}/>
                )}
            </div>
        </div>
    </>)
}