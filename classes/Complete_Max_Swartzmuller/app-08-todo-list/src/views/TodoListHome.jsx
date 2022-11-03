import axios from 'axios'
import { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import classes from './TodoListHome.module.scss'

const BASE_FIREBASE_URL = 'https://fir-react-todo-list-default-rtdb.europe-west1.firebasedatabase.app/'

function TodoListHome() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const todoAddHandler = async (todo) => {
    try {
      const response = await axios.post(BASE_FIREBASE_URL + 'todos.json', todo)

      if (response.status === 200) {
        fetchTodos()
      }
    } catch (error) {
      setError(error.message)
    }
  }

  const fetchTodos = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get(BASE_FIREBASE_URL + 'todos.json')

      if (response.status === 200) {
        let formattedTodos = []

        for (const key in response.data) {
          formattedTodos.push({id: key, ...response.data[key]})
        }

        setTodos(formattedTodos)
      }

    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  const todoDeleteHandler = async (todoId) => {
    try {
      const response = await axios.delete(BASE_FIREBASE_URL + `todos/${todoId}.json`)

      if (response.status === 200) {
        fetchTodos()
      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    const identifier = setTimeout(() => {
      fetchTodos()
    }, 50)

    return () => {
      clearTimeout(identifier)
    }
  }, [])

  return <div className={classes.wrapper}>
    <TodoForm onAddTodo={todoAddHandler}/>
    <TodoList todos={todos} error={error} loading={loading} onDeleteTodo={todoDeleteHandler}/>
  </div>
}

export default TodoListHome