export const personal = {
  herName: "[HER_NAME]",
  yourName: "[YOUR_NAME]",
  memory1: "[MEMORY_1]",
  memory2: "[MEMORY_2]",
  insideJoke1: "[INSIDE_JOKE_1]",
  insideJoke2: "[INSIDE_JOKE_2]",
  favoriteColor: "[FAVORITE_COLOR]",
  favoriteCandy: "[FAVORITE_CANDY]",
  favoriteCharacter: "[FAVORITE_CHARACTER]",
  specialMessage: "[SPECIAL_MESSAGE]",
} as const;

export const gameConfig = {
  title: "Bestie Candy Adventure",
  playerLabel: "BESTIE",
  maxLives: 5,
  lifeRefillMs: 10 * 60 * 1000,
  xpPerPlayerLevel: 500,
  secretGiftRequirement: 5,
} as const;
