import { create } from "zustand";
import type { PlayerState} from "@/app/shared/types/player";


export const usePlayerStore = create<PlayerState>((set) => ({
    active: null,
    volume: 50,
    duration: 0,
    currentTime: 0,
    pause: true,
    
    setActive: (track) => set({active: track, pause: false, duration: 0, currentTime: 0}),
    setPause: (pause) => set({pause}),
    setVolume: (volume) => set({volume}),
    setDuration: (duration) => set({duration}),
    setCurrentTime: (time) => set({currentTime: time}),
}))