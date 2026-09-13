export type World = { id: number; name: string; subtitle: string; levels: [number, number]; theme: string; icon: string };
export type Level = { id: number; world: number; title: string; story: string; objective: string; xpReward: number };
export type Mail = { id: string; from: string; icon: string; subject: string; body: string; unlockAt: number };
export type Memory = { id: string; type: string; title: string; caption: string; note: string; unlockAt: number; emoji: string };
export type Gift = { id: string; level: number; icon: string; label: string; xp: number };
export type Achievement = { id: string; icon: string; title: string; detail: string; target: number; metric: "levels" | "gifts" | "stars" | "messages" | "memories" | "xp" };
export type QuizQuestion = { question: string; options: [string, string]; response: string };
export type GameState = {
  currentLevel: number; completedLevels: number[]; stars: Record<number, number>; xp: number; lives: number;
  lastLifeTime: number; openedMessages: string[]; collectedGifts: string[]; quizScores: number[]; soundOn: boolean;
};
