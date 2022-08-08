import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  console.log(username);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const onSubmitUsernameHandler = () => {
    //e.preventDefault();
    // sruši se kad napravim ovo ;
    const enteredUsername = username;
    console.log(enteredUsername);
    props.onLogin(enteredUsername);
  };

  return (
    <div>
      <div className="App-header">
        <h2>
          Log In with your username
          <input
            type="text"
            placeholder="Log with your username"
            value={username}
            onChange={usernameChangeHandler}
          />
          <button onClick={onSubmitUsernameHandler} className="LoggedInButton">
            Log in
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Login;
