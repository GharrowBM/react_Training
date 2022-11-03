import classes from "./TodoItem.module.scss";
import trash from '../assets/trash.svg'

function TodoItem({ todo, onDelete }) {
  const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 1)
  const dueDate = new Date(todo.dueDate)
  const remainingDays = (dueDate - today) / (1000 * 3600 * 24)

  const deleteTodoHandler = () => {
    onDelete(todo.id)
  }

  return (
    <div className={classes.todo}>
      <div>
      <h3>{todo.title}</h3>
      <span className={`${remainingDays < 0 ? classes.overdue : remainingDays <= 7 ? classes.almost : ''}`}>{remainingDays}</span>
      <button onClick={deleteTodoHandler}>
        <img src={trash} alt="Trash can Icon" />
      </button>
      </div>
      <p>{todo.description}</p>
    </div>
  );
}

export default TodoItem;
