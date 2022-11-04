import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";

const IS_LOGIN_STORAGE_KEY = "isLoggedIn";

function HomeView() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should check credentials here

    localStorage.setItem(IS_LOGIN_STORAGE_KEY, true);
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(IS_LOGIN_STORAGE_KEY);
    setLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem(IS_LOGIN_STORAGE_KEY) === "true") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {loggedIn ? (
        <div className="w-2/3 mx-auto my-2 shadow-lg rounded-lg p-4">
          <p className="text-center text-3xl font-semibold">Welcome Back!</p>
          <br />
          <div className="flex justify-center">
            <button
              className="p-1 px-2 bg-blue-700 text-white shadow rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150"
              onClick={logoutHandler}
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <LoginForm onLogin={loginHandler} />
      )}
    </>
  );
}

export default HomeView;
