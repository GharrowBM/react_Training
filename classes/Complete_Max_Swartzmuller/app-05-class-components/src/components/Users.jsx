import { PureComponent } from "react";
import User from "./User";

import classes from "./Users.module.scss";

class Users extends PureComponent {
  constructor() {
    super();
    this.state = {
      showUsers: false,
    };
  }

  toogleUsersHandler() {
    this.setState((state) => {
      return { showUsers: !state.showUsers };
    });
  }

  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toogleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        <ul className={classes['users-ul']}>
        {this.state.showUsers
          ? this.props.users.map((u) => <User key={u.id} user={u} />)
          : null}
        </ul>
      </div>
    );
  }
}

export default Users;
