import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "John" },
  { id: "u2", name: "Mark" },
  { id: "u3", name: "Sophie" },
];

function App() {

  const usersContext = {
    users: DUMMY_USERS
  }

  return (<UsersContext.Provider value={usersContext}>
  <UserFinder />
  </UsersContext.Provider>);
}

export default App;
