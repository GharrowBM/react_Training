import styles from "./UsersForm.module.css";
import { useState } from "react";

function UsersForm({ onAddUser }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userName.valid && userName.touched && userAge.valid && userAge.touched) {
      onAddUser({
        name: userName.value,
        age: userAge.value
      });
  
      setUserName({value: '', touched: false, valid: false})
      setUserAge({value: 0, touched: false, valid: false})
    }
  };

  const [userName, setUserName] = useState({
    value: "",
    valid: false,
    touched: false,
  });
  const [userAge, setUserAge] = useState({
    value: 0,
    valid: false,
    touched: false,
  });

  const userNameChangedHandler = (e) => {
    setUserName({
      value: e.target.value,
      touched: true,
      valid: e.target.value !== "",
    });
  };

  const userAgeChangedHandler = (e) => {
    setUserAge({
      value: +e.target.value,
      touched: true,
      valid: +e.target.value !== 0,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles["users-form"]}>
      <div className={styles["users-form-item"]}>
        <label htmlFor="userName">Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName.value}
          className={`${userName.touched ? styles["form-input-touched"] : ""} ${
            !userName.valid ? styles["form-input-invalid"] : ""
          }`}
          onChange={userNameChangedHandler}
        />
      </div>
      <div className={styles["users-form-item"]}>
        <label htmlFor="userAge">Age:</label>
        <input
          type="number"
          id="userAge"
          name="userAge"
          value={userAge.value}
          min='0'
          max='200'
          className={`${userAge.touched ? styles["form-input-touched"] : ""} ${
            !userAge.valid ? styles["form-input-invalid"] : ""
          }`}
          onChange={userAgeChangedHandler}
        />
      </div>
      <div className={styles["users-form-button-container"]}>
        <button disabled={!userName.valid || !userAge.valid}>Submit</button>
      </div>
    </form>
  );
}

export default UsersForm