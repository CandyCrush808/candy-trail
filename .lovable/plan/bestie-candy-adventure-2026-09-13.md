# Bestie Candy Adventure

## Goal
Build the home page as a polished, vertically scrolling candy-world game map rather than a conventional website. The experience will begin at Level 1, guide the player through six visually distinct worlds, and preserve progress locally across refreshes.

## Experience
- Add a short animated loading screen, then position the map near the current level.
- Build six layered candy environments with 30 connected level nodes, distinct world landmarks, parallax scenery, particles, a striped path, hidden gifts, and a companion creature.
- Give locked, current, and completed levels clear states. Opening a level shows its story, objectives, reward, and play action.
- Completing levels awards 1–3 stars and XP, consumes a life, unlocks the next level, reveals eligible memories/messages/achievements, celebrates world unlocks, and scrolls toward the new current level.
- Make Level 30 lead to the emotional Bestie Ending and a final surprise message.

## Game Systems
- Floating game HUD: Bestie Mail, centered avatar/profile, lives counter, sound toggle, and compact secondary game controls.
- Bestie Mail with unread, read, and progress-locked messages.
- Profile with XP progress, totals, achievements, Memory Lane access, settings, and reset progress.
- Five-life system with a live countdown and automatic refill persisted across visits.
- Memory scrapbook with unlocked and blurred locked entries.
- Ten collectible gifts, including the hidden-heart requirement for the Secret Room.
- Ten achievements with progress and unlock feedback.
- Candy Match mini-game and a ten-question Bestie Quiz, both awarding XP.
- Sound controller that never autoplays and uses replaceable sound hooks.

## Customization
- Centralize names, favorite details, inside jokes, final message, and placeholder personal copy in one configuration file.
- Keep worlds, levels, stories, messages, memories, gifts, achievements, and quiz questions in separate typed game-data modules.
- Use generated-looking CSS scenery and clearly replaceable memory placeholders; no copied characters, logos, or artwork.

## Visual Direction
- Original premium candy fantasy: rose pink, lavender, mint, cream, berry red, peach, and restrained gold.
- Dimensional candy surfaces, glossy highlights, soft shadows, atmospheric gradients, rounded game controls, layered scenery, and scrapbook details.
- A refined display face for world and story titles plus a highly readable rounded sans-serif for controls and body copy.
- Motion will communicate state: path flow, current-level pulse, companion movement, gift opening, XP float, confetti, world transition, and final celebration. Reduced-motion preferences will be respected.

## Responsive Behavior
- Desktop and tablet use a centered game-map canvas with ambient scenery extending outward.
- Mobile becomes a true edge-to-edge game view with a compact HUD, large touch targets, and full-width bottom-sheet panels.
- Stable map dimensions and responsive node positioning prevent collisions while preserving the winding progression.

## Technical Approach
- Use React, TypeScript, TanStack Start/Vite, Tailwind v4 design tokens, existing accessible UI primitives, and Lucide icons.
- Add Motion for React for coordinated transitions and canvas-confetti for lightweight celebrations.
- Split the experience into focused map, HUD, panel, progression, effects, and mini-game components.
- Store versioned player state in localStorage with safe defaults and a single reducer/provider so all systems stay synchronized.
- Add route-specific metadata for the game page.

## Validation
- Verify level completion/unlocking, stars, XP, lives/refill timer, mail, memories, gifts, achievements, Secret Room, both mini-games, reset, and persistence after refresh.
- Check keyboard focus, accessible labels, reduced motion, panel behavior, and no overlaps at desktop and mobile sizes.
- Exercise the complete progression path through the final ending using a test/reset mechanism available in profile settings.
