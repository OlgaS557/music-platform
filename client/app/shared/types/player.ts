import type { ITrack } from "./track.interface";


export interface PlayerState {
    active: null | ITrack;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;

    setActive: (track: ITrack) => void;
    setPause: (pause: boolean) => void;
    setVolume: (volume: number) => void;
    setDuration: (duration: number) => void;
    setCurrentTime: (time: number) => void;
}