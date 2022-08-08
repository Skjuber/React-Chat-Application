import { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  console.log(username);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const onSubmitUsernameHandler = () => {
    const enteredUsername = username;

    if (enteredUsername.trim().length === 0) {
      alert("USERNAME CANNOT BE EMPTY!");

      return;
    }

    //e.preventDefault();
    // sruši se kad napravim ovo ;
    else console.log(enteredUsername);
    props.onLogin(enteredUsername);
  };

  return (
    <div>
      <div className="Login">
        <h5>Log In with your username</h5>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={usernameChangeHandler}
        />
        <button onClick={onSubmitUsernameHandler} className="LoggedInButton">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
