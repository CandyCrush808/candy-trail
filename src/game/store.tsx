import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from "react";
import { gameConfig } from "./config";
import { gifts, levels, messages } from "./data";
import type { GameState } from "./types";

const STORAGE_KEY = "bestie-candy-adventure-v1";
const initialState: GameState = { currentLevel:1, completedLevels:[], stars:{}, xp:0, lives:5, lastLifeTime:Date.now(), openedMessages:[], collectedGifts:[], quizScores:[], soundOn:true };
type Action = {type:"LOAD";state:GameState}|{type:"COMPLETE";level:number;stars:number}|{type:"OPEN_MAIL";id:string}|{type:"GIFT";id:string}|{type:"XP";amount:number}|{type:"LIFE_TICK";now:number}|{type:"QUIZ";score:number}|{type:"SOUND"}|{type:"RESET"};
function reducer(state:GameState, action:Action):GameState {
  if(action.type==="LOAD") return action.state;
  if(action.type==="RESET") return {...initialState,lastLifeTime:Date.now()};
  if(action.type==="SOUND") return {...state,soundOn:!state.soundOn};
  if(action.type==="XP") return {...state,xp:state.xp+action.amount};
  if(action.type==="OPEN_MAIL") return state.openedMessages.includes(action.id)?state:{...state,openedMessages:[...state.openedMessages,action.id],xp:state.xp+25};
  if(action.type==="GIFT") return state.collectedGifts.includes(action.id)?state:{...state,collectedGifts:[...state.collectedGifts,action.id],xp:state.xp+(gifts.find(g=>g.id===action.id)?.xp??50)};
  if(action.type==="QUIZ") return {...state,quizScores:[...state.quizScores,action.score],xp:state.xp+100};
  if(action.type==="COMPLETE") {
    if(state.completedLevels.includes(action.level)) return {...state,stars:{...state.stars,[action.level]:Math.max(state.stars[action.level]??0,action.stars)}};
    const next=Math.min(levels.length,action.level+1); return {...state,currentLevel:Math.max(state.currentLevel,next),completedLevels:[...state.completedLevels,action.level],stars:{...state.stars,[action.level]:action.stars},xp:state.xp+(levels[action.level-1]?.xpReward??100)+(action.stars===3?50:0),lives:Math.max(0,state.lives-1),lastLifeTime:state.lives===gameConfig.maxLives?Date.now():state.lastLifeTime};
  }
  if(action.type==="LIFE_TICK" && state.lives<gameConfig.maxLives){const elapsed=action.now-state.lastLifeTime;const gained=Math.floor(elapsed/gameConfig.lifeRefillMs);if(gained>0)return {...state,lives:Math.min(gameConfig.maxLives,state.lives+gained),lastLifeTime:state.lastLifeTime+gained*gameConfig.lifeRefillMs};}
  return state;
}
type Store={state:GameState;dispatch:React.Dispatch<Action>;hydrated:boolean;starsTotal:number;unlockedMemories:number;unreadCount:number;secretUnlocked:boolean;achievementValue:(metric:string)=>number};
const Ctx=createContext<Store|null>(null);
export function GameProvider({children}:{children:React.ReactNode}){const [state,dispatch]=useReducer(reducer,initialState);const [hydrated,setHydrated]=useReducer(()=>true,false);useEffect(()=>{try{const saved=localStorage.getItem(STORAGE_KEY);if(saved)dispatch({type:"LOAD",state:{...initialState,...JSON.parse(saved)}})}catch{}setHydrated()},[]);useEffect(()=>{if(hydrated)localStorage.setItem(STORAGE_KEY,JSON.stringify(state))},[state,hydrated]);useEffect(()=>{const id=window.setInterval(()=>dispatch({type:"LIFE_TICK",now:Date.now()}),1000);return()=>clearInterval(id)},[]);const starsTotal=Object.values(state.stars).reduce((a,b)=>a+b,0);const unlockedMemories=Math.min(12,Math.floor(state.currentLevel/2));const unreadCount=messages.filter(m=>m.unlockAt<=state.currentLevel&&!state.openedMessages.includes(m.id)).length;const secretUnlocked=state.collectedGifts.length>=gameConfig.secretGiftRequirement;const achievementValue=useCallback((metric:string)=>metric==="levels"?state.completedLevels.length:metric==="gifts"?state.collectedGifts.length:metric==="stars"?starsTotal:metric==="messages"?state.openedMessages.length:metric==="memories"?unlockedMemories:state.xp,[state,starsTotal,unlockedMemories]);const value=useMemo(()=>({state,dispatch,hydrated,starsTotal,unlockedMemories,unreadCount,secretUnlocked,achievementValue}),[state,hydrated,starsTotal,unlockedMemories,unreadCount,secretUnlocked,achievementValue]);return <Ctx.Provider value={value}>{children}</Ctx.Provider>}
export function useGame(){const value=useContext(Ctx);if(!value)throw new Error("useGame must be inside GameProvider");return value}
