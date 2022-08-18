import React, { useState, Fragment } from "react";
import { generateRandomEmoji } from "./RandomEmoji";
import { generateEmojis } from "./EmojiList";

import "./Login.css";

const Login = (props) => {
  const emojis = generateEmojis();
  const randomEmoji = generateRandomEmoji(emojis);

  const [username, setUsername] = useState("");

  const [avatar, setAvatar] = useState(randomEmoji);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const avatarChangeHandler = (event) => {
    setAvatar(event.target.value);
  };

  const onSubmitUsernameHandler = () => {
    const enteredUsername = username;
    const enteredAvatar = avatar;

    if (enteredUsername.trim().length === 0) {
      alert("USERNAME CANNOT BE EMPTY!");

      return;
    }

    //e.preventDefault();
    // sruši se kad napravim ovo ;
    else props.onLogin(enteredUsername, enteredAvatar);
  };

  return (
    <Fragment>
      <div className="login">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={usernameChangeHandler}
        />
        <select onChange={avatarChangeHandler}>
          <option value={randomEmoji}>🎲👤</option>
          {emojis.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        <button onClick={onSubmitUsernameHandler}>Log in</button>
      </div>
      <div></div>
    </Fragment>
  );
};

export default Login;
