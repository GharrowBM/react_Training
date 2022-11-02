import { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import classes from './TodoListHome.module.scss'

function TodoListHome() {
  const [todos, setTodos] = useState([])

  const todoAddHandler = async (todo) => {
    setTodos(prev => [...prev, todo])
  }

  const todoDeleteHandler = async (todoId) => {
    setTodos(prev => [...prev.filter(t => t.id !== todoId)])
  }

  return <div className={classes.wrapper}>
    <TodoForm onAddTodo={todoAddHandler}/>
    <TodoList todos={todos} onDeleteTodo={todoDeleteHandler}/>
  </div>
}

export default TodoListHome