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
        <Link to={"/masters/details/" + props.master.id + '?mode=details'}>Details</Link>
        <Link to={"/masters/edit/" + props.master.id + '?mode=edit'}>Edit</Link>
        <Link to={"/masters/delete/" + props.master.id + '?mode=delete'}>Delete</Link>
      </div>
    </li>
  );
}

export default Master;
