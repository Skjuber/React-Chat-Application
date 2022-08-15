import { useState } from "react";

import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");

  const [avatar, setAvatar] = useState("👨‍🌾");

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
    <div>
      <div class="login">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={usernameChangeHandler}
        />
        <select onChange={avatarChangeHandler}>
          <option value="👨‍🌾">👨‍🌾</option>
          <option value="👩‍🌾">👩‍🌾</option>
          <option value="👨‍⚕️">👨‍⚕️</option>
          <option value="👨‍🎓">👨‍🎓</option>
          <option value="👩‍🎓">👩‍🎓</option>
          <option value="👨‍🏫">👨‍🏫</option>
          <option value="👨‍⚖️">👨‍⚖️</option>
          <option value="🧑‍⚖️">🧑‍⚖️</option>
          <option value="👨‍🍳">👨‍🍳</option>
          <option value="👩‍🍳">👩‍🍳</option>
          <option value="👨‍🔧">👨‍🔧</option>
          <option value="👩‍🔧">👩‍🔧</option>
          <option value="👨‍💻">👨‍💻</option>
          <option value="👨‍🚀">👨‍🚀</option>
          <option value="👨‍🎨">👨‍🎨</option>
          <option value="👨‍✈️">👨‍✈️</option>
          <option value="👨‍🚒">👨‍🚒</option>
          <option value="👩‍🚒">👩‍🚒</option>
          <option value="👮">👮</option>
          <option value="👮‍♀️">👮‍♀️</option>
          <option value="💂‍♂️">💂‍♂️</option>
          <option value="💂‍♀️">💂‍♀️</option>
          <option value="🤱">🤱</option>
          <option value="👩‍🍼">👩‍🍼</option>
          <option value="👨‍🍼">👨‍🍼</option>
          <option value="🤰">🤰</option>
          <option value="👳‍♂️">👳‍♂️</option>
          <option value="👳‍♀️">👳‍♀️</option>
          <option value="🧕">🧕</option>
          <option value="👨‍🏭">👨‍🏭</option>
          <option value="👩‍🏭">👩‍🏭</option>
          <option value="👨‍💼">👨‍💼</option>
          <option value="👩‍💼">👩‍💼</option>
          <option value="👨‍🔬">👨‍🔬</option>
          <option value="👩‍🔬">👩‍🔬</option>
          <option value="🦄">🦄</option>
          <option value="🐀">🐀</option>
          <option value="🦁">🦁</option>
          <option value="🦊">🦊</option>
          <option value="🦝">🦝</option>
          <option value="💀">💀</option>
          <option value="🐶">🐶</option>
          <option value="🦓">🦓</option>
          <option value="🤖">🤖</option>
          <option value="🎅">🎅</option>
          <option value="🧝">🧝</option>
          <option value="☃️">☃️</option>
          <option value="😈">😈</option>
          <option value="👽">👽</option>
          <option value="👾">👾</option>
          <option value="🕵️">🕵️</option>
          <option value="👹">👹</option>
          <option value="🤡">🤡</option>
          <option value="🧙">🧙</option>
          <option value="🧛">🧛</option>
          <option value="🧞">🧞</option>
          <option value="🌚">🌚</option>
          <option value="👻">👻</option>
          <option value="🎃">🎃</option>
          <option value="👨‍🎤">👨‍🎤</option>
          <option value="👩‍🎤">👩‍🎤</option>
          <option value="🍕">🍕</option>
          <option value="🏴">🏴</option>
          <option value="🗽">🗽</option>
          <option value="🤿">🤿</option>
          <option value="🥶">🥶</option>
          <option value="🏂">🏂</option>
          <option value="✝️">✝️</option>
          <option value="🏴‍☠️">🏴‍☠️</option>
          <option value="👅">👅</option>
          <option value="🕴️">🕴️</option>
          <option value="🏄‍♂️">🏄‍♂️</option>
          <option value="🤹‍♂️">🤹‍♂️</option>
          <option value="🍀">🍀</option>
          <option value="🏀">🏀</option>
          <option value="⚽">⚽</option>
          <option value="🤵">🤵</option>
          <option value="👰">👰</option>
          <option value="🎩">🎩</option>
          <option value="💐">💐</option>
          <option value="💰">💰</option>
          <option value="♟️">♟️</option>
          <option value="🥋">🥋</option>
          <option value="🎤">🎤</option>
          <option value="🥳">🥳</option>
          <option value="🌟">🌟</option>
          <option value="🎎">🎎</option>
          <option value="🔮">🔮</option>
          <option value="📿">📿</option>
          <option value="📚">📚</option>
          <option value="💶">💶</option>
          <option value="💵">💵</option>
          <option value="🐢">🐢</option>
          <option value="🦖">🦖</option>
          <option value="🦕">🦕</option>
          <option value="🐲">🐲</option>
          <option value="🐍">🐍</option>
          <option value="🐊">🐊</option>
          <option value="🦍">🦍</option>
          <option value="🦧">🦧</option>
          <option value="🕸️">🕸️</option>
          <option value="🦂">🦂</option>
          <option value="🐨">🐨</option>
          <option value="🕷️">🕷️</option>
          <option value="🐗">🐗</option>
          <option value="🦥">🦥</option>
          <option value="🦩">🦩</option>
          <option value="🦜">🦜</option>
          <option value="🐣">🐣</option>
        </select>

        <button onClick={onSubmitUsernameHandler}>Log in</button>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
