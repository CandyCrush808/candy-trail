import { personal } from "./config";
import type { Achievement, Gift, Level, Mail, Memory, QuizQuestion, World } from "./types";

export const worlds: World[] = [
  { id: 1, name: "Friendship Garden", subtitle: "Where every adventure begins", levels: [1, 5], theme: "garden", icon: "🌸" },
  { id: 2, name: "Candy Town", subtitle: "A little sweetness around every corner", levels: [6, 10], theme: "town", icon: "🍭" },
  { id: 3, name: "Chocolate Forest", subtitle: "Brave hearts follow the cocoa trail", levels: [11, 15], theme: "chocolate", icon: "🍫" },
  { id: 4, name: "Midnight Memory Forest", subtitle: "Old stories glow brightest at night", levels: [16, 20], theme: "midnight", icon: "🌙" },
  { id: 5, name: "Bestie Wonderland", subtitle: "Where chaos becomes magic", levels: [21, 25], theme: "wonderland", icon: "🎀" },
  { id: 6, name: "Forever Kingdom", subtitle: "The best part was the journey together", levels: [26, 30], theme: "kingdom", icon: "👑" },
];

const levelNames = [
  "The Beginning", "Petal Parade", "The Giggly Gate", "Butterfly Promise", "Garden Tea Party",
  "Lollipop Lane", "The Chocolate Bridge", "Sprinkle Market", "Marshmallow Mix-Up", "Town of Tiny Surprises",
  "Cocoa Crossing", "Mushroom Whispers", "The Fudge Maze", "Caramel Campfire", "Brave Bestie Trail",
  "Moonlit Notes", "The Starlight Scrapbook", "Firefly Secret", "Midnight Melody", "Wish Upon Our Star",
  "Ribbon Run", "Balloon Boulevard", "The Chaos Carousel", "Heart-Shaped Detour", "Wonderland Promise",
  "Rainbow Arrival", "The Golden Gate", "Crown of Memories", "Castle of Us", "The Bestie Ending",
];

const storyBits = [
  "A tiny candy seed is waiting for two besties to help it bloom.", "The flower path has lost its colors. A little laughter should bring them back.",
  `A gate only opens for the perfect inside joke: ${personal.insideJoke1}.`, "A shy butterfly has a friendship promise to deliver.",
  "The garden table is set, but five sugar stars have rolled away.", "The town lights flicker as a lollipop parade prepares to begin.",
  "The bridge to the next candy kingdom has collapsed. Only the bravest bestie can rebuild it.", "Sprinkles are everywhere—and somehow that feels exactly right.",
  "Two marshmallow twins switched every sign in town. Follow the giggles.", "A secret parcel is waiting at the sweetest address.",
  "The cocoa river is warm, winding, and full of tiny stepping stones.", "Glowing mushrooms whisper a clue about a hidden gift.",
  "The fudge maze changes whenever someone says, ‘I know the way.’", "Share a story by the caramel fire to reveal the path.",
  "The forest grows dark, but a true bestie never explores alone.", "A moonbeam has folded itself into a tiny note for you.",
  `A page marked ${personal.memory1} shimmers inside an old scrapbook.`, "Follow the fireflies; they remember every ridiculous moment.",
  "A familiar song drifts between the violet trees.", "Make a wish—but save one for your bestie.",
  "A runaway ribbon is tying the whole world into bows.", "The balloons know exactly who is more chaotic.",
  `The carousel only spins when someone mentions ${personal.insideJoke2}.`, "The scenic route turns out to be the best one.",
  "Wonderland keeps one promise: the adventure gets better together.", "A rainbow road appears beyond the clouds.",
  "The kingdom gate asks for stars, courage, and one truly terrible joke.", `Every tower holds a piece of ${personal.memory2}.`,
  "The castle doors open to a room built from shared stories.", "One last path leads to the reason this world was made.",
];

const levelObjective = (index: number): string =>
  index % 3 === 0 ? "Find the three hidden sugar stars" : index % 3 === 1 ? "Help your companion clear the path" : "Complete the bestie challenge";

export const levels: Level[] = levelNames.map((title, i) => ({
  id: i + 1,
  world: Math.floor(i / 5) + 1,
  title,
  story: storyBits[i] ?? "A new bestie adventure is waiting to begin.",
  objective: levelObjective(i),
  xpReward: i === 29 ? 250 : 100,
}));

export const messages: Mail[] = [
  { id:"m1", from:"YOU", icon:"💗", subject:"Your adventure starts here", body:`Hey ${personal.herName}—I made a tiny world for us. Start with Level 1.`, unlockAt:1 },
  { id:"m2", from:"YOU", icon:"👀", subject:"Open after Level 5", body:"Okay, you finished the garden. Candy Town has been waiting for you.", unlockAt:6 },
  { id:"m3", from:"CANDY KINGDOM", icon:"⭐", subject:"A new world unlocked!", body:"The gates opened because your friendship sparkle levels are unusually high.", unlockAt:6 },
  { id:"m4", from:"SECRET", icon:"🎁", subject:"Something is hidden", body:"The decorations are not always just decorations…", unlockAt:3 },
  { id:"m5", from:"MEMORY LANE", icon:"📸", subject:"A memory appeared", body:`A little page called ${personal.memory1} is ready for you.`, unlockAt:5 },
  { id:"m6", from:"BUNBUN", icon:"🐰", subject:"Forest rules", body:"Rule one: snacks. Rule two: do not trust suspiciously neat fudge paths.", unlockAt:11 },
  { id:"m7", from:"MIDNIGHT POST", icon:"🌙", subject:"For when you need it", body:"Some people make every ordinary day feel worth remembering.", unlockAt:16 },
  { id:"m8", from:"YOU", icon:"😂", subject:"Certified chaos", body:`I still cannot believe ${personal.insideJoke2}. Actually, yes I can.`, unlockAt:19 },
  { id:"m9", from:"WONDERLAND", icon:"🎀", subject:"Almost there", body:"The castle can see you now. Keep going, Bestie.", unlockAt:24 },
  { id:"m10", from:"FOREVER KINGDOM", icon:"👑", subject:"The final invitation", body:"The castle doors will open when you arrive together.", unlockAt:26 },
  { id:"m11", from:"YOU", icon:"💌", subject:"One last thing", body:personal.specialMessage, unlockAt:30 },
];

const memoryTypes = ["PHOTO", "FUNNY MOMENT", "INSIDE JOKE", "SONG", "SPECIAL MESSAGE"];
const memoryTitles = [personal.memory1, "The Laugh We Couldn’t Stop", personal.insideJoke1, "Our Unofficial Theme Song", "A Note For You", personal.memory2, "Main Character Moment", personal.insideJoke2, "The Longest Voice Note", "That Random Tuesday", "Bestie Energy", "Still My Favorite"];
const memoryCaptions = ["A placeholder for a photo worth keeping.", "Zero context. Maximum laughter.", "Nobody else would understand—and that is the point.", "The song that turns any room into our movie scene.", "For the days you forget how loved you are."];
const memoryEmojis = ["📸", "😂", "💬", "🎵", "💌"];

export const memories: Memory[] = Array.from({ length: 12 }, (_, i) => ({
  id: `memory-${i + 1}`,
  type: memoryTypes[i % memoryTypes.length] ?? "PHOTO",
  title: memoryTitles[i] ?? `Bestie Memory ${i + 1}`,
  caption: memoryCaptions[i % memoryCaptions.length] ?? "A memory worth keeping.",
  note: `Replace this with your personal memory ${i + 1}.`,
  unlockAt: Math.min(30, 2 + i * 2),
  emoji: memoryEmojis[i % memoryEmojis.length] ?? "💌",
}));

const giftIcons = ["🎁", "💗", "💎", "⭐", "🧁"];
const giftLabels = ["Pocket Promise", "Hidden Heart", "Sugar Gem", "Lucky Star", "Bestie Cupcake"];

export const gifts: Gift[] = [2,4,7,10,13,16,19,22,26,29].map((level, i) => ({
  id: `gift-${i + 1}`,
  level,
  icon: giftIcons[i % giftIcons.length] ?? "🎁",
  label: giftLabels[i % giftLabels.length] ?? "Bestie Gift",
  xp: 50,
}));

export const achievements: Achievement[] = [
  {id:"first",icon:"🏆",title:"First Adventure",detail:"Complete Level 1",target:1,metric:"levels"},
  {id:"garden",icon:"🌸",title:"Garden Graduate",detail:"Complete World 1",target:5,metric:"levels"},
  {id:"treasure",icon:"🎁",title:"Treasure Hunter",detail:"Find 5 hidden gifts",target:5,metric:"gifts"},
  {id:"message",icon:"💌",title:"Message Master",detail:"Open 8 messages",target:8,metric:"messages"},
  {id:"memory",icon:"📸",title:"Memory Keeper",detail:"Unlock 8 memories",target:8,metric:"memories"},
  {id:"star",icon:"⭐",title:"Star Collector",detail:"Collect 30 stars",target:30,metric:"stars"},
  {id:"xp",icon:"✨",title:"Sparkle Specialist",detail:"Earn 2,000 XP",target:2000,metric:"xp"},
  {id:"forest",icon:"🌙",title:"Night Explorer",detail:"Complete Level 20",target:20,metric:"levels"},
  {id:"candy",icon:"🍭",title:"Candy Conqueror",detail:"Complete Level 25",target:25,metric:"levels"},
  {id:"forever",icon:"💗",title:"Bestie Forever",detail:"Reach the final level",target:30,metric:"levels"},
];

export const quizQuestions: QuizQuestion[] = [
  ["Who is more likely to be late?","Me","Her","Time is merely a suggestion."], ["Who starts random conversations?","Me","Her","Silence never stood a chance."],
  ["Who survives a zombie apocalypse?","Me","Her","Together—with snacks and questionable plans."], ["Who is more chaotic?","Me","Her","The evidence has been sealed."],
  ["Who sends the longest voice notes?","Me","Her","A podcast, basically."], ["Who chooses the snacks?","Me","Her","A position of enormous responsibility."],
  ["Who laughs at the worst time?","Me","Her","Professional composure: unavailable."], ["Who says ‘five more minutes’?","Me","Her","Five is a flexible number."],
  ["Who remembers tiny details?","Me","Her","That is bestie superpower behavior."], ["Who would plan the trip?","Me","Her","One plans. Both improvise."],
].map(([question,a,b,response]) => ({
  question: question ?? "Who is the ultimate bestie?",
  options: [a ?? "Me", b ?? "Her"] as [string, string],
  response: response ?? "Besties always win.",
}));
