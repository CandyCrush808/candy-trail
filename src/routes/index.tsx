import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Heart, Mail, Trophy, Camera, Gamepad2, Gift, Volume2, VolumeX, UserRound, Sparkles, X } from "lucide-react";
import { GameMap } from "@/game/map";
import { GamePanel, type PanelName } from "@/game/panels";
import { GameProvider, useGame } from "@/game/store";
import { gameConfig, personal } from "@/game/config";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <GameProvider>
      <BestieGame />
    </GameProvider>
  );
}

function BestieGame() {
  const { state, unreadCount, secretUnlocked, dispatch } = useGame();
  const [panel, setPanel] = useState<PanelName>(null);
  const [celebration, setCelebration] = useState<string | null>(null);

  useEffect(() => {
    if (!celebration) return;
    const timer = window.setTimeout(() => setCelebration(null), 2600);
    return () => window.clearTimeout(timer);
  }, [celebration]);

  const open = (next: PanelName) => setPanel(next);

  return (
    <div className="bestie-game min-h-screen overflow-x-hidden">
      <div className="game-topbar" role="banner">
        <button className="hud-button mail-button" aria-label="Open Bestie Mail" onClick={() => open("mail")}>
          <Mail />
          {unreadCount > 0 && <span className="hud-badge">{unreadCount}</span>}
        </button>

        <div className="hud-profile-wrap">
          <button className="hud-profile" aria-label="Open profile" onClick={() => open("profile")}>
            <span>🐰</span>
          </button>
          <small>{gameConfig.playerLabel}</small>
        </div>

        <button className="hud-lives" aria-label="Open lives" onClick={() => open("lives")}>
          <span className="heart-row">
            {Array.from({ length: gameConfig.maxLives }, (_, i) => (
              <Heart key={i} className={i < state.lives ? "heart-filled" : "heart-empty"} />
            ))}
          </span>
          <b>{state.lives}/{gameConfig.maxLives}</b>
        </button>
      </div>

      <div className="game-side-tools" aria-label="Game menu">
        <button aria-label="Memories" onClick={() => open("memories")}><Camera /></button>
        <button aria-label="Achievements" onClick={() => open("achievements")}><Trophy /></button>
        <button aria-label="Games" onClick={() => open("games")}><Gamepad2 /></button>
        <button aria-label="Gifts" onClick={() => open("memories")}><Gift /></button>
        <button aria-label={state.soundOn ? "Mute sound" : "Enable sound"} onClick={() => dispatch({ type: "SOUND" })}>
          {state.soundOn ? <Volume2 /> : <VolumeX />}
        </button>
      </div>

      <div className="game-brand" aria-hidden="true">
        <Sparkles />
        <span>BESTIE</span>
        <strong>CANDY ADVENTURE</strong>
      </div>

      <GameMap
        onSecret={() => open(secretUnlocked ? "secret" : null)}
        onCelebrate={setCelebration}
      />

      <GamePanel panel={panel} onClose={() => setPanel(null)} />

      {celebration && (
        <div className="world-celebration" role="status" aria-live="polite">
          <button aria-label="Close celebration" onClick={() => setCelebration(null)}><X /></button>
          <Sparkles />
          <strong>{celebration}</strong>
          <span>Keep going, {personal.herName} ✨</span>
        </div>
      )}
    </div>
  );
}
