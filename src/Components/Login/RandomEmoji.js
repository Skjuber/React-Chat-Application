export function generateRandomEmoji(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  const randomEmoji = list[randomIndex];
  return randomEmoji;
}
