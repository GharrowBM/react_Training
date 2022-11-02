import { PureComponent } from "react";

import classes from './User.module.scss'

class User extends PureComponent {

  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return (
      <li className={classes.user}>
        {this.props.user.name}
      </li>
    )
  }
}

export default User