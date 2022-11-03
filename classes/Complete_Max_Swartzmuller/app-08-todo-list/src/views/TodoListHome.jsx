import axios from 'axios'
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import classes from "./TodoListHome.module.scss";

const BASE_FIREBASE_URL =
  "https://fir-react-todo-list-default-rtdb.europe-west1.firebasedatabase.app/";

function TodoListHome() {
  const [todos, setTodos] = useState([]);
 
  const transformTodos = (todosObj) => {
    let formattedTodos = [];

    for (const key in todosObj) {
      formattedTodos.push({ id: key, ...todosObj[key] });
    }

    setTodos(formattedTodos);
  };

  const {loading, error, sendRequest: fetchTodos} = useHttp({ url: BASE_FIREBASE_URL + "todos.json" }, transformTodos);

  const todoAddHandler = async (todo) => {
    try {
      const response = await axios.post(BASE_FIREBASE_URL + "todos.json", todo);

      if (response.status === 200) {
        fetchTodos();
      }
    } catch (error) {
    }
  };

  const todoDeleteHandler = async (todoId) => {
    try {
      const response = await axios.delete(
        BASE_FIREBASE_URL + `todos/${todoId}.json`
      );

      if (response.status === 200) {
        fetchTodos();
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      fetchTodos();
    }, 50);

    return () => {
      clearTimeout(identifier);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <TodoForm onAddTodo={todoAddHandler} />
      <TodoList
        todos={todos}
        error={error}
        loading={loading}
        onDeleteTodo={todoDeleteHandler}
      />
    </div>
  );
}

export default TodoListHome;
