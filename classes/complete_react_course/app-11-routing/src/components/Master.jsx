import classes from "./Master.module.scss";
import { Link } from "react-router-dom";

function Master(props) {
  return (
    <li className={classes["dog-item"]}>
      <div className={classes.details}>
        <div className={classes.fullname}>
          <h3>{props.master.firstname}</h3>
          <h3>{props.master.lastname}</h3>
        </div>
        <span>{props.master.email}</span>
        <span>{props.master.phone}</span>
      </div>
      <div className={classes.actions}>
        <Link to={"/masters/details/" + props.master.id}>Details</Link>
        <Link to={"/masters/edit/" + props.master.id}>Edit</Link>
        <Link to={"/masters/delete/" + props.master.id}>Delete</Link>
      </div>
    </li>
  );
}

export default Master;
