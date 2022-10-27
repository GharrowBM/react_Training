import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import UserItem from "./UserItem";
import UsersForm from "./UsersForm";

function UsersBase() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined)

  const addUserHandler = (user) => {
    if (!users.find(u => u.name === user.name)) {
      setUsers((state) => [...state, { ...user }]);
    } else {
      setError({title: 'User already exists!', content: 'A user with that name already exists!'})
    }
  };

  const resetError = () => {
    setError(undefined)
  }

  return (
    <>
      {error ? <ErrorModal onErrorAcknowledged={resetError} title={error.title} content={error.content} /> : <></>}
      <div className="w-full flex gap-2">
        <UsersForm onAddUser={addUserHandler} />
        <div className="w-1/2">
          {users.map((u, i) => (
            <UserItem user={u} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default UsersBase;
