import React, { useState, Fragment } from "react";
import { generateRandomEmoji } from "./RandomEmoji";
import { generateEmojis } from "./EmojiList";

import "./Login.css";

const Login = (props) => {
  const emojis = generateEmojis();
  const randomEmoji = generateRandomEmoji(emojis);

  const [username, setUsername] = useState("");
  const [channel_ID, setChannel_ID] = useState("jIDs4AJl2weIBKOD");
  const [avatar, setAvatar] = useState(randomEmoji);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const channel_IDChangeHandler = (event) => {
    setChannel_ID(event.target.value);
  };

  const avatarChangeHandler = (event) => {
    setAvatar(event.target.value);
  };

  const onSubmitUsernameHandler = () => {
    const enteredUsername = username;
    const enteredAvatar = avatar;
    const enteredChannel = channel_ID;

    if (enteredUsername.trim().length === 0) {
      alert("USERNAME CANNOT BE EMPTY!");

      return;
    }

    if (channel_ID.trim().length != 16) {
      alert("Invalid Channel ID!");

      return;
    }

    //e.preventDefault();
    // sruši se kad napravim ovo ;
    else props.onLogin(enteredUsername, enteredAvatar, enteredChannel);
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
          <option id="randomEmoji" value={randomEmoji} key="First Key">
            🎲Random avatar
          </option>

          {emojis.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter your channelID"
          value={channel_ID}
          onChange={channel_IDChangeHandler}
        />

        <button onClick={onSubmitUsernameHandler}>Log in</button>
      </div>
      <div></div>
    </Fragment>
  );
};

export default Login;
