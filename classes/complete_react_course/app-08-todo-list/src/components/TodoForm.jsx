import { useState } from "react";
import classes from "./TodoForm.module.scss";

function TodoForm(props) {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(todayStr);

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.onAddTodo({
      title,
      description,
      dueDate: new Date(dueDate),
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div>
        <div className={classes["form-item"]}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={classes["form-item"]}>
          <label htmlFor="dueDate">Due date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className={classes["form-item"]}>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className={classes.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default TodoForm;
