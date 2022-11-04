import TodoItem from './TodoItem'
import classes from './TodoList.module.scss'

function TodoList({todos, error, loading, onDeleteTodo}) {

  const deleteTodoHandler = (id) => {
    onDeleteTodo(id)
  }
  
  let content = <p>No todos yet...</p>
  if (loading) content = <p>Loading...</p>
  else if (error) content = <p>An error occured...</p>
  else if (todos.length > 0) content = todos.map((t, i) => <TodoItem todo={t} key={i} onDelete={deleteTodoHandler} />)

  return <div className={classes['todo-list']}>
    {content}
  </div>
}

export default TodoList