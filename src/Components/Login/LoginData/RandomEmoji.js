import { generateEmojis } from "./EmojiList";

export function generateRandomEmoji() {
  const emojis = generateEmojis();

  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  return randomEmoji;
}
