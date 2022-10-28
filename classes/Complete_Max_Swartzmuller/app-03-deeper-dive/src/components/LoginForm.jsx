import { useReducer } from "react";
import classes from "./LoginForm.module.scss";

const EMAIL_CHANGED = "[LoginForm] EMAIL_CHANGED";
const PASSWORD_CHANGED = "[LoginForm] PASSWORD_CHANGED";

function LoginForm({ onLogin }) {
  const initialState = {
    valid: false,
    values: {
      email: {
        value: "",
        valid: false,
        touched: false,
      },
      password: {
        value: "",
        valid: false,
        touched: true,
      },
    },
  };

  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return {
          ...state,
          values: {
            email: {
              value: action.payload,
              touched: true,
              valid: action.payload !== "",
            },
            password: { ...state.values.password },
          },
          valid:
            state.values.password.valid &&
            state.values.password.touched &&
            action.payload !== "",
        };

      case PASSWORD_CHANGED:
        return {
          ...state,
          values: {
            password: {
              value: action.payload,
              touched: true,
              valid: action.payload !== "",
            },
            email: { ...state.values.email },
          },
          valid:
            state.values.email.valid &&
            state.values.email.touched &&
            action.payload !== "",
        };

      default:
        return state;
    }
  };

  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();

    onLogin(formState.values.email.value, formState.values.password.value);
  };

  const emailChangedHandler = (e) => {
    dispatchForm({ type: EMAIL_CHANGED, payload: e.target.value });
  };

  const passwordChangedHandler = (e) => {
    dispatchForm({ type: PASSWORD_CHANGED, payload: e.target.value });
  };

  return (
    <form className={classes["login-form"]} onSubmit={submitHandler}>
      <div className={classes["login-form-item"]}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.values.email.value}
          onChange={emailChangedHandler}
        />
      </div>
      <div className={classes["login-form-item"]}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.values.password.value}
          onChange={passwordChangedHandler}
        />
      </div>
      <div>
        <button disabled={!formState.valid}>Log In</button>
      </div>
    </form>
  );
}

export default LoginForm;
