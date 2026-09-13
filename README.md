# Bestie Candy Trails

Build a polished, highly interactive, responsive web-game website called:

"Bestie Candy Adventure"

The website is a cute, premium, candy-themed friendship adventure game created as a personalized experience for my female best friend.

IMPORTANT:

Do NOT make this look like a normal SaaS website, portfolio, dashboard, or landing page.

The entire website should feel like a real polished mobile/web game map.

Use the attached Candy Crush-style screenshots ONLY as visual inspiration for:

- winding level maps

- candy-themed environments

- colorful game UI

- level nodes

- character/profile positioning

- playful world design

- progression systems

DO NOT directly copy Candy Crush characters, logos, copyrighted assets, exact UI, or artwork.

Create an original visual identity.

==================================================

1. CORE EXPERIENCE

==================================================

The main page should feel like the player has entered a magical candy world.

The user should be able to:

- explore a large scrolling world map

- move through numbered levels

- click levels

- read a story for each level

- unlock memories

- receive messages in an inbox

- manage lives/health

- view their profile

- collect stars

- gain XP

- unlock achievements

- discover hidden gifts

- play small mini-games

- unlock new worlds

- discover a secret room

- eventually reach a special final friendship message

The experience should be:

Cute + playful + emotional + premium + interactive.

Avoid making it childish.

Use a sophisticated pastel color palette, beautiful illustrations, smooth animations, and polished game UI.

==================================================

2. VISUAL STYLE

==================================================

Overall style:

"Premium 3D candy fantasy game + cozy friendship scrapbook"

Use:

- pastel pink

- lavender

- soft purple

- cream

- mint green

- candy red

- peach

- subtle gold accents

Backgrounds should have:

- soft gradients

- candy hills

- trees

- flowers

- clouds

- lollipops

- candy houses

- stars

- butterflies

- small floating particles

Use large rounded shapes.

Use:

- soft shadows

- subtle glassmorphism

- glossy candy surfaces

- 3D-looking buttons

- rounded cards

- playful but elegant typography

- subtle highlights

- depth/parallax

Do NOT make the interface flat.

The environment should feel layered and alive.

==================================================

3. MAIN SCREEN / GAME MAP

==================================================

The homepage IS the game map.

Do not create a conventional hero section.

Create a large vertically scrollable candy world.

The player progresses through a winding path.

Example structure:

              WORLD 1

                 ⭐

               LEVEL 5

                  |

            🩷────┘

           /

        LEVEL 4

           |

           🩷

           |

        LEVEL 3

           \

            🩷────🩷

                 LEVEL 2

                    |

                 LEVEL 1

The path should curve naturally.

Use a candy-colored path with:

- pink stripes

- white highlights

- glowing edges

- small decorative stars

The path should visually connect every level.

The camera/map should feel similar to a mobile game world map.

==================================================

4. LEVEL NODES

==================================================

Each level is represented by a large circular candy button.

States:

LOCKED:

- muted colors

- lock icon

- slightly darker appearance

CURRENT:

- larger than other nodes

- glowing

- pulsing animation

- character standing next to it

- "PLAY" or "EXPLORE" indicator

COMPLETED:

- bright candy color

- 1–3 stars

- small crown/checkmark

- subtle glow

When hovering over a level:

- scale up slightly

- sparkle animation

- show level number

- show short title

Example:

LEVEL 07

"The Chocolate Bridge"

⭐⭐⭐

Clicking the level opens its story modal.

==================================================

5. STORY SYSTEM

==================================================

Every level should have a story.

Each story should be short, cute, and engaging.

Example:

LEVEL 07

"The Chocolate Bridge"

"The bridge to the next candy kingdom has collapsed!

Only the bravest bestie can help rebuild it."

Show:

[ character illustration ]

⭐⭐⭐

[ PLAY LEVEL ]

[ BACK ]

The story modal should have:

- level number

- title

- illustration

- story text

- objectives

- reward

- stars

- play button

The story should progressively become more personal.

==================================================

6. CHAPTER / WORLD SYSTEM

==================================================

Create multiple worlds.

WORLD 1:

🌸 Friendship Garden

Levels 1–5

Visual:

- flowers

- butterflies

- pink candy

- small houses

- pastel sky

WORLD 2:

🍭 Candy Town

Levels 6–10

Visual:

- candy houses

- lollipops

- candy shops

- colorful streets

WORLD 3:

🍫 Chocolate Forest

Levels 11–15

Visual:

- chocolate trees

- glowing mushrooms

- chocolate rivers

- mysterious atmosphere

WORLD 4:

🌙 Midnight Memory Forest

Levels 16–20

Visual:

- stars

- moon

- fireflies

- purple trees

WORLD 5:

🎀 Bestie Wonderland

Levels 21–25

Visual:

- ribbons

- hearts

- balloons

- magical candy structures

WORLD 6:

👑 Forever Kingdom

Levels 26–30

Visual:

- magical castle

- rainbow

- fireworks

- giant candy gate

Each world should have a different environment.

When a new world is unlocked:

show a large animated transition:

"NEW WORLD UNLOCKED!"

with particles, stars, and candy effects.

==================================================

7. TOP GAME HUD

==================================================

Create a floating game HUD at the top.

Do NOT make it look like a standard website navbar.

It should look like a game interface.

LEFT:

Envelope / Inbox button

💌

Show notification badge:

3

Clicking opens the Bestie Inbox.

CENTER:

Large circular profile/avatar.

The avatar should overlap the HUD slightly.

Under/near the avatar:

player name

Example:

"BESTIE"

The profile button should have:

- circular frame

- glossy border

- subtle glow

- hover animation

RIGHT:

❤️ Lives

Example:

❤️ 5/5

Clicking opens the lives panel.

Show:

- current lives

- max lives

- countdown until next life

- progress

Example:

❤️❤️❤️❤️❤️

Next life:

08:32

==================================================

8. BESTIE INBOX

==================================================

The inbox should be called:

"Bestie Mail"

Clicking the envelope opens a beautiful floating panel.

Messages should look like game notifications.

Example:

💌 BESTIE MAIL

────────────────────

🔴 YOU

"Open this after Level 5 👀"

⭐ CANDY KINGDOM

"A new world has been unlocked!"

🎁 SECRET

"You received a surprise!"

📸 MEMORY

"A new memory has been discovered!"

Unread messages should have:

- red/pink badge

- subtle glow

Opening a message should trigger a small animation.

Some messages should remain locked until the player reaches specific levels.

==================================================

9. PROFILE

==================================================

Clicking the central avatar opens the player's profile.

Profile should feel like a game character screen.

Show:

Avatar

BESTIE

Level 12

BESTIE XP

████████████░░

1,240 / 1,500 XP

Statistics:

⭐ Stars Collected

🎮 Levels Completed

🎁 Gifts Found

📸 Memories Unlocked

🏆 Achievements

Also show an achievements section.

==================================================

10. LIVES / HEALTH

==================================================

Right-side heart button.

Example:

❤️ 4/5

Clicking opens:

YOUR LIVES

❤️ ❤️ ❤️ ❤️ 🖤

Next life:

07:43

Progress bar

The timer should actually count down.

When the timer reaches zero:

increase lives if below maximum.

Persist this using localStorage.

==================================================

11. XP SYSTEM

==================================================

Create a Bestie XP system.

The player earns XP for:

Completing levels

+100 XP

Opening special messages

+25 XP

Finding hidden gifts

+50 XP

Unlocking memories

+75 XP

Completing mini-games

+100 XP

Perfect level

+150 XP

Show XP animation:

+100 XP ✨

floating upward and fading.

Level up when enough XP is collected.

==================================================

12. STAR SYSTEM

==================================================

Each level can award:

⭐

⭐⭐

⭐⭐⭐

Based on performance.

Completed levels should display their stars.

Example:

LEVEL 08

⭐⭐⭐

Perfect!

Stars should contribute to the profile statistics.

==================================================

13. MEMORY LANE

==================================================

Create a "Memory Lane" section accessible from the profile or map.

This should feel like an interactive scrapbook.

Unlocked memories:

📸 PHOTO

😂 FUNNY MOMENT

💬 INSIDE JOKE

🎵 SONG

💌 SPECIAL MESSAGE

Locked memories should appear blurred or covered.

Example:

🔒 MEMORY LOCKED

"Reach Level 10 to unlock"

When unlocked:

MEMORY UNLOCKED ✨

Show:

- image

- title

- short caption

- date if available

- personal message

Use placeholder images/assets initially so they can easily be replaced later.

==================================================

14. HIDDEN GIFTS

==================================================

Place collectible gift boxes around the map.

Examples:

🎁

💌

💎

⭐

🧁

Some should be slightly hidden behind:

- trees

- candy structures

- clouds

- decorations

Clicking one:

🎁 SECRET FOUND!

+50 XP

Then reveal the reward.

Track collected gifts using localStorage.

==================================================

15. SECRET ROOM

==================================================

Add a mysterious locked door somewhere on the map.

Label:

🔒 SECRET ROOM

Do NOT explain exactly how to unlock it.

The player should discover that collecting hidden hearts/gifts unlocks it.

For example:

Collect 5 hidden hearts.

Then the door changes:

✨ SECRET ROOM UNLOCKED ✨

Clicking opens a special secret page/modal.

Inside:

- special animation

- stars

- hearts

- personal message

- surprise content

==================================================

16. MINI GAMES

==================================================

Add a small "Games" area.

Create at least 2 simple mini-games.

GAME 1:

🍬 Candy Match

A simple 3x3 or 4x4 matching game.

GAME 2:

💗 Bestie Quiz

Questions such as:

"Who is more likely to be late?"

"Who starts random conversations?"

"Who would survive a zombie apocalypse?"

"Who is more chaotic?"

Answers should produce:

- score

- funny response

- XP reward

Make the questions easy to customize in one data file.

==================================================

17. ACHIEVEMENTS

==================================================

Create an achievement system.

Examples:

🏆 FIRST ADVENTURE

Complete Level 1

😂 CHAOS DUO

Unlock 5 funny memories

💌 MESSAGE MASTER

Open 10 messages

🎁 TREASURE HUNTER

Find 5 hidden gifts

⭐ CANDY CONQUEROR

Complete World 1

💗 BESTIE FOREVER

Reach the final level

Achievements should have:

- unlocked state

- locked state

- progress indicator

==================================================

18. COMPANION CHARACTER

==================================================

Add a cute companion character.

Possible style:

- bunny

- cat

- bear

- tiny magical creature

The companion should follow the player's position on the map.

It should have small speech bubbles.

Examples:

"Let's gooo! 🍭"

"Wait... what's that? 👀"

"We found a secret!"

"You're almost there!"

"LEVEL COMPLETE!! 🎉"

The companion should occasionally react to map interactions.

==================================================

19. MAP INTERACTIONS

==================================================

The map should NOT feel static.

Add:

- floating candy particles

- moving clouds

- butterflies

- fireflies

- sparkles

- swaying trees

- floating hearts

- subtle background movement

When clicking a candy:

small bounce animation.

When clicking a level:

sparkles.

When completing a level:

confetti.

When unlocking a world:

large celebration animation.

==================================================

20. FINAL LEVEL

==================================================

The final level should NOT simply say "Level 30 completed."

Make it emotionally meaningful.

Final location:

🏰 FOREVER KINGDOM

A beautiful candy castle.

Final level:

LEVEL 30

"The Bestie Ending"

After completing it, show:

✨ CONGRATULATIONS ✨

"You completed the Bestie Adventure."

⭐⭐⭐⭐⭐

Then reveal:

"But honestly...

this wasn't really a game.

It was a collection of our memories."

Then show:

"Thank you for being my bestie. 💗"

Add a button:

[ ONE MORE SURPRISE ]

This button opens the final personalized message.

Make this section visually beautiful with:

- fireworks

- floating hearts

- stars

- glowing castle

- soft music option

- confetti

==================================================

21. NAVIGATION

==================================================

Keep navigation minimal.

Primary interactions:

💌 Inbox

👤 Profile

❤️ Lives

Secondary navigation can appear as floating game buttons:

🏆 Achievements

📸 Memories

🎮 Games

🎁 Gifts

Do not use a traditional desktop navbar.

==================================================

22. RESPONSIVE DESIGN

==================================================

The website must work beautifully on:

Desktop

Laptop

Tablet

Mobile

Mobile should feel like a real mobile game.

On mobile:

- map fills screen

- HUD remains compact

- profile stays centered

- inbox left

- lives right

- map scrolls vertically

- story modals become bottom sheets/full-screen panels

Do not simply shrink the desktop layout.

Design mobile intentionally.

==================================================

23. CAMERA / MAP EXPERIENCE

==================================================

The map should feel like a game world.

Implement:

- vertical scrolling

- smooth scrolling

- parallax layers

- background movement

- animated level path

When the user enters the page, automatically position the camera near the current level.

When a level is completed, smoothly scroll toward the next level.

Use smooth transitions rather than abrupt movement.

==================================================

24. SOUND

==================================================

Add optional sound effects.

Do NOT autoplay audio without user interaction.

Provide:

🔊 sound toggle

Possible effects:

- candy click

- level click

- reward

- achievement

- level completion

- world unlock

- gift discovery

Use placeholder audio paths that can easily be replaced.

==================================================

25. DATA ARCHITECTURE

==================================================

Keep all customizable game content separate from UI components.

Create data structures for:

levels

worlds

stories

messages

memories

gifts

achievements

quiz questions

mini-games

player stats

Example:

levels = [

 {

   id: 1,

   world: 1,

   title: "The Beginning",

   story: "...",

   stars: 3,

   unlocked: true,

   xpReward: 100

 }

]

Make it very easy for me to modify:

- names

- stories

- messages

- photos

- memories

- quiz questions

- rewards

without changing the main UI code.

==================================================

26. LOCAL STORAGE

==================================================

Use localStorage for the demo.

Persist:

currentLevel

completedLevels

stars

xp

lives

lastLifeTime

openedMessages

unlockedMemories

collectedGifts

achievements

quizScores

secretRoomUnlocked

If the page is refreshed, progress should remain.

Add a reset progress option inside the profile/settings area.

==================================================

27. TECHNOLOGY

==================================================

Use:

React

TypeScript

Vite

Tailwind CSS

Use clean component architecture.

Suggested components:

GameHUD

Inbox

Profile

LivesPanel

GameMap

World

LevelNode

StoryModal

MemoryLane

Gift

AchievementPanel

MiniGames

BestieQuiz

CandyMatch

Companion

SecretRoom

WorldUnlock

LevelComplete

FinalEnding

ParticleEffects

SoundController

Use reusable components.

Avoid one huge App.tsx file.

==================================================

28. ANIMATIONS

==================================================

Use Framer Motion if available.

Animations should include:

- level hover

- candy bounce

- heart pulse

- profile floating

- modal entrance

- XP floating

- star collection

- gift opening

- confetti

- world transition

- character movement

- background parallax

- message opening

- achievement unlock

Animations should feel smooth and premium.

Do NOT over-animate every element.

Use animation to communicate interaction.

==================================================

29. UI DETAILS

==================================================

Buttons should feel like game buttons.

Example:

[ 🍭 PLAY LEVEL ]

Use:

- rounded pill/candy shapes

- subtle 3D extrusion

- highlight

- shadow

- pressed state

Cards should have:

- rounded corners

- soft shadows

- translucent/glossy surfaces

- playful borders

Use custom CSS where necessary to create candy-like surfaces.

==================================================

30. TYPOGRAPHY

==================================================

Use a playful display font for:

- world names

- level titles

- special messages

Use a clean readable font for:

- body text

- stats

- buttons

- menus

Do not use overly childish fonts everywhere.

==================================================

31. LOADING SCREEN

==================================================

Create a short game loading screen.

Example:

🍭

BESTIE

CANDY

ADVENTURE

"Preparing your adventure..."

Loading bar

Then transition into the map.

==================================================

32. CURSOR / INTERACTION

==================================================

On desktop, interactive elements should feel responsive.

Add subtle:

- hover scale

- glow

- sparkle

- click feedback

Optional custom candy cursor if it doesn't negatively affect usability.

==================================================

33. ACCESSIBILITY

==================================================

Maintain:

- readable text

- sufficient contrast

- keyboard navigation

- focus states

- reduced-motion support

Animations should respect prefers-reduced-motion.

==================================================

34. PERFORMANCE

==================================================

The website should feel smooth.

Avoid unnecessarily huge images.

Lazy-load memory images.

Use CSS transforms for animations.

Avoid excessive DOM elements for particles.

Keep animations performant.

==================================================

35. DESIGN PHILOSOPHY

==================================================

The website should make the user feel:

"Wait... this isn't just a website."

It should feel like:

I am entering a tiny candy world.

I have a character.

I have a journey.

I have levels.

I have memories.

I have secrets to discover.

I have messages waiting for me.

I want to keep clicking to see what happens.

The emotional progression should be:

CURIOUS

↓

PLAYFUL

↓

EXPLORING

↓

NOSTALGIC

↓

SURPRISED

↓

EMOTIONAL

↓

"THAT WAS SO CUTE"

==================================================

36. IMPORTANT PERSONALIZATION

==================================================

Do NOT hardcode the experience around generic "female" stereotypes.

Make it personal, cute, playful, and friendship-focused.

Use placeholders that I can easily customize:

[HER_NAME]

[YOUR_NAME]

[MEMORY_1]

[MEMORY_2]

[INSIDE_JOKE_1]

[INSIDE_JOKE_2]

[FAVORITE_COLOR]

[FAVORITE_CANDY]

[FAVORITE_CHARACTER]

[SPECIAL_MESSAGE]

Create a central configuration file so I can change these values easily.

==================================================

37. INITIAL DEMO CONTENT

==================================================

Create 30 levels across 6 worlds.

For the first demo, populate them with fictional but cute stories.

Do not leave the page empty.

Create:

- 30 level nodes

- 6 worlds

- 10+ messages

- 10+ memories using placeholders

- 10 achievements

- 10 hidden gifts

- 10 quiz questions

- working XP

- working stars

- working lives

- working level unlocks

- working localStorage

Start the player at Level 1.

Unlock Level 2 after completing Level 1.

Lock subsequent levels.

==================================================

38. FINAL RESULT

==================================================

The final result should look like a professionally designed indie mobile game adapted into a web experience.

It should NOT look like:

- a dashboard

- a normal website

- a portfolio

- a generic AI-generated landing page

- a basic CRUD app

It should look like:

"Candy game × interactive friendship story × cozy scrapbook × adventure map"

Make the visual hierarchy strong.

Prioritize the map and game experience over traditional website sections.

Create polished placeholder artwork using CSS/gradients/simple original illustrations where actual assets are unavailable.

Make everything interactive and functional, not just visual mockups.

Before finishing, make sure:

- every major button works

- levels unlock correctly

- XP updates

- stars update

- lives work

- inbox works

- profile works

- achievements work

- gifts can be collected

- memories unlock

- secret room unlocks

- mini-games work

- progress persists after refresh

- responsive layout works

- final level can be reached

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a6cc6134-32c2-4cc9-9fcd-103ebaf52d21).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
