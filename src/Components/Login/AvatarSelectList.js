import { generateRandomEmoji } from "./RandomEmoji";
import { generateEmojis } from "./EmojiList";

const AvatarSelectList = (props) => {
  const emojis = generateEmojis();
  const randomEmoji = generateRandomEmoji();

  const avatarInputChangeHandler = (event) => {
    props.onSelectedAvatar(event.target.value);
  };

  return (
    <select onChange={avatarInputChangeHandler}>
      <option id="randomEmoji" value={randomEmoji} key="First Key">
        🎲Random avatar
      </option>

      {emojis.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default AvatarSelectList;
