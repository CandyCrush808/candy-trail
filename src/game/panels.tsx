import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { achievements, gifts, memories, messages, quizQuestions } from "./data";
import { gameConfig, personal } from "./config";
import { useGame } from "./store";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Heart, Lock, RotateCcw, Sparkles } from "lucide-react";

export type PanelName = "mail" | "profile" | "lives" | "memories" | "achievements" | "games" | "gifts" | "secret" | null;

export function GamePanel({ panel, onClose }: { panel: PanelName; onClose: () => void }) {
  return <Dialog open={panel !== null} onOpenChange={v => !v && onClose()}><DialogContent className="game-panel max-h-[88dvh] overflow-y-auto border-none p-0 sm:max-w-2xl"><DialogTitle className="sr-only">{panel ?? "Game panel"}</DialogTitle><DialogDescription className="sr-only">Bestie Candy Adventure game panel</DialogDescription><div className="panel-inner">{panel === "mail" && <MailPanel />}{panel === "profile" && <ProfilePanel openPanel={() => {}} />}{panel === "lives" && <LivesPanel />}{panel === "memories" && <MemoryPanel />}{panel === "achievements" && <AchievementsPanel />}{panel === "games" && <GamesPanel />}{panel === "gifts" && <GiftsPanel />}{panel === "secret" && <SecretPanel />}</div></DialogContent></Dialog>;
}

function PanelHeading({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) { return <header className="panel-heading"><span>{icon}</span><div><p>BESTIE CANDY ADVENTURE</p><h2>{title}</h2><small>{subtitle}</small></div></header>; }

function MailPanel() { const { state, dispatch } = useGame(); return <><PanelHeading icon="💌" title="Bestie Mail" subtitle="Little notes from across the candy worlds" /><div className="mail-list">{messages.map(m => { const locked = m.unlockAt > state.currentLevel; const opened = state.openedMessages.includes(m.id); return <motion.button key={m.id} whileTap={{ scale: .98 }} className={`mail-item ${locked ? "locked" : ""}`} disabled={locked} onClick={() => dispatch({ type: "OPEN_MAIL", id: m.id })}><span className="mail-icon">{locked ? <Lock /> : m.icon}</span><span><b>{locked ? "LOCKED MESSAGE" : m.from}</b><strong>{locked ? `Reach Level ${m.unlockAt}` : m.subject}</strong>{opened && !locked && <em>{m.body}</em>}</span>{!opened && !locked && <i />}</motion.button>; })}</div></>; }

function ProfilePanel({ openPanel: _openPanel }: { openPanel: (p: PanelName) => void }) { const { state, dispatch, starsTotal, unlockedMemories } = useGame(); const level = Math.floor(state.xp / gameConfig.xpPerPlayerLevel) + 1; const xpIn = state.xp % gameConfig.xpPerPlayerLevel; return <><PanelHeading icon="👤" title={gameConfig.playerLabel} subtitle={`Bestie Level ${level}`} /><div className="profile-orbit"><div className="profile-avatar">B</div><strong>{state.xp.toLocaleString()} BESTIE XP</strong><div className="xp-track"><i style={{ width: `${xpIn / gameConfig.xpPerPlayerLevel * 100}%` }} /></div><small>{xpIn} / {gameConfig.xpPerPlayerLevel} to next level</small></div><div className="stat-grid"><Stat icon="⭐" value={starsTotal} label="Stars" /><Stat icon="🎮" value={state.completedLevels.length} label="Levels" /><Stat icon="🎁" value={state.collectedGifts.length} label="Gifts" /><Stat icon="📸" value={unlockedMemories} label="Memories" /></div><div className="profile-note"><Sparkles /><p><b>Made for {personal.herName}</b><br />by {personal.yourName}, with a suspicious amount of sugar.</p></div><Button variant="outline" className="w-full" onClick={() => { if (confirm("Reset the whole adventure and return to Level 1?")) dispatch({ type: "RESET" }); }}><RotateCcw /> Reset progress</Button></>; }
function Stat({ icon, value, label }: { icon: string; value: number; label: string }) { return <div><span>{icon}</span><b>{value}</b><small>{label}</small></div>; }

function LivesPanel() {
  const { state } = useGame();
  const [, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const remaining = Math.max(0, gameConfig.lifeRefillMs - (Date.now() - state.lastLifeTime));
  const min = Math.floor(remaining / 60000);
  const sec = Math.floor((remaining % 60000) / 1000);
  const progress = Math.min(100, Math.max(0, 100 - (remaining / gameConfig.lifeRefillMs) * 100));
  return <><PanelHeading icon="💗" title="Your Lives" subtitle="Rest, recharge, adventure again" /><div className="big-hearts">{Array.from({ length: gameConfig.maxLives }, (_, i) => <Heart key={i} className={i < state.lives ? "filled" : ""} />)}</div>{state.lives < gameConfig.maxLives ? <><p className="timer-label">Next life in</p><div className="life-timer">{String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}</div><div className="xp-track"><i style={{ width: `${progress}%` }} /></div></> : <div className="full-lives">Full hearts. Big adventure energy!</div>}</>;
}

function GiftsPanel() {
  const { state, dispatch } = useGame();
  const nextGift = gifts.find(g => !state.collectedGifts.includes(g.id) && g.level > state.currentLevel);
  return <><PanelHeading icon="🎁" title="Bestie Gifts" subtitle="Little surprises hidden along the candy trail" /><div className="memory-grid">{gifts.map(g => { const collected = state.collectedGifts.includes(g.id); const unlocked = g.level <= state.currentLevel; return <article key={g.id} className={`memory-card ${!unlocked ? "memory-locked" : ""}`}><div className="memory-photo">{collected ? g.icon : unlocked ? <button className="gift-collect-button" aria-label={`Collect ${g.label}`} onClick={() => dispatch({ type: "GIFT", id: g.id })}>🎁</button> : <Lock />}</div><span>{collected ? "COLLECTED" : unlocked ? `LEVEL ${g.level}` : `LEVEL ${g.level}`}</span><h3>{g.label}</h3><p>{collected ? `+${g.xp} XP earned.` : unlocked ? "A hidden gift is waiting on the map." : `Reach Level ${g.level} to reveal this gift.`}</p></article>; })}</div>{nextGift && <p className="text-center text-sm opacity-70">Next hidden gift: Level {nextGift.level} ✨</p>}</>;
}

function MemoryPanel() { const { state } = useGame(); return <><PanelHeading icon="📸" title="Memory Lane" subtitle="A scrapbook that grows with your journey" /><div className="memory-grid">{memories.map(m => { const unlocked = m.unlockAt <= state.currentLevel; return <article key={m.id} className={`memory-card ${unlocked ? "" : "memory-locked"}`}><div className="memory-photo">{unlocked ? m.emoji : <Lock />}</div><span>{unlocked ? m.type : `LEVEL ${m.unlockAt}`}</span><h3>{unlocked ? m.title : "Memory locked"}</h3><p>{unlocked ? m.caption : `Reach Level ${m.unlockAt} to reveal this page.`}</p>{unlocked && <small>{m.note}</small>}</article>; })}</div></>; }

function AchievementsPanel() { const { achievementValue } = useGame(); return <><PanelHeading icon="🏆" title="Achievements" subtitle="Tiny trophies for a legendary duo" /><div className="achievement-list">{achievements.map(a => { const value = achievementValue(a.metric); const done = value >= a.target; return <article key={a.id} className={done ? "done" : ""}><span>{done ? a.icon : <Lock />}</span><div><h3>{a.title}</h3><p>{a.detail}</p><div className="mini-track"><i style={{ width: `${Math.min(100, value / a.target * 100)}%` }} /></div><small>{Math.min(value, a.target)} / {a.target}</small></div></article>; })}</div></>; }

function GamesPanel() { const [game, setGame] = useState<"menu" | "match" | "quiz">("menu"); return <><PanelHeading icon="🎮" title="Sugar Arcade" subtitle="Play together, collect a little extra XP" />{game === "menu" ? <div className="game-choices"><button onClick={() => setGame("match")}><span>🍬</span><b>Candy Match</b><small>Find all six pairs</small></button><button onClick={() => setGame("quiz")}><span>💗</span><b>Bestie Quiz</b><small>Important friendship science</small></button></div> : game === "match" ? <CandyMatch back={() => setGame("menu")} /> : <BestieQuiz back={() => setGame("menu")} />}</>; }

const icons = ["🍬", "🍓", "🧁", "🍭", "⭐", "💗"];
function CandyMatch({ back }: { back: () => void }) { const { dispatch } = useGame(); const [cards] = useState(() => [...icons, ...icons].sort(() => Math.random() - .5)); const [open, setOpen] = useState<number[]>([]); const [matched, setMatched] = useState<number[]>([]); const [won, setWon] = useState(false); function pick(i: number) { if (open.includes(i) || matched.includes(i) || open.length === 2) return; const n = [...open, i]; setOpen(n); if (n.length === 2) { const first = cards[n[0]]; const second = cards[n[1]]; setTimeout(() => { if (first !== undefined && first === second) { const next = [...matched, ...n]; setMatched(next); if (next.length === 12) { setWon(true); dispatch({ type: "XP", amount: 100 }); } } setOpen([]); }, 550); } } return <div><Button variant="ghost" onClick={back}>← Games</Button><div className="match-grid">{cards.map((c, i) => <button aria-label={`Candy card ${i + 1}`} key={i} className={open.includes(i) || matched.includes(i) ? "flipped" : ""} onClick={() => pick(i)}>{open.includes(i) || matched.includes(i) ? c : "?"}</button>)}</div>{won && <div className="game-result">Perfect match! +100 XP ✨</div>}</div>; }

function BestieQuiz({ back }: { back: () => void }) { const { dispatch } = useGame(); const [index, setIndex] = useState(0); const [answers, setAnswers] = useState<number[]>([]); const done = index >= quizQuestions.length; const q = quizQuestions[index]; function answer(n: number) { if (!q) return; const next = [...answers, n]; setAnswers(next); if (index === quizQuestions.length - 1) dispatch({ type: "QUIZ", score: next.filter(v => v === 1).length }); setIndex(index + 1); } return <div><Button variant="ghost" onClick={back}>← Games</Button>{done ? <div className="quiz-result"><span>💞</span><h3>Scientifically inseparable.</h3><p>You completed vital friendship research. +100 XP</p></div> : q ? <div className="quiz"><small>QUESTION {index + 1} / {quizQuestions.length}</small><h3>{q.question}</h3><div>{q.options.map(o => <Button key={o} variant="candy" onClick={() => answer(q.options.indexOf(o))}>{o}</Button>)}</div><p>{index > 0 ? quizQuestions[index - 1]?.response ?? "Choose with complete honesty-ish." : "Choose with complete honesty-ish."}</p></div> : null}</div>; }

function SecretPanel() { return <><PanelHeading icon="✨" title="The Secret Room" subtitle="You noticed the things hidden in plain sight" /><div className="secret-content"><div>💗</div><h3>A tiny truth</h3><p>The rarest treasure in every world was never candy, crowns, or stars. It was having someone who makes the ordinary feel like an adventure.</p><strong>You found it.</strong></div></>; }
