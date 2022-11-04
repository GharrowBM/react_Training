import UsersContext from '../store/users-context';
import classes from './UserFinder.module.scss'

import Users from "./Users";

const { PureComponent } = require("react");



class UserFinder extends PureComponent {
  static contextType = UsersContext

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      filteredUsers: []
    }
  }

  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users
    })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter(x => x.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) 
      })
    }
  }

  searchChangeHandler(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <>
      <div className={classes.finder}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
      </div>
      <Users users={this.state.filteredUsers} />
      </>
    )
  }
}

export default UserFinder