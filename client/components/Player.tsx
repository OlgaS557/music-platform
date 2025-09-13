'use client';
import Image from "next/image";
import Pause from "@/assets/icons/pause.svg";
import Play from "@/assets/icons/play.svg";
import Volume from "@/assets/icons/volume.svg";
import TrackProgress from "./TrackProgress";
import { usePlayerStore } from "@/app/shared/store/player.store";
import { useEffect, useRef } from "react";


export default function Player() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const { active, pause, volume, duration, currentTime,
        setPause, setCurrentTime, setDuration,
        setVolume } = usePlayerStore();

    useEffect(() => {
        if (!active) return;

        if (!audioRef.current) {
            audioRef.current = new Audio();
        }

        const audio = audioRef.current;
        audio.src = `http://localhost:5000/${active.audio}`;
        audio.volume = volume / 100;

        audio.onloadedmetadata = () => {
            setDuration(Math.ceil(audio.duration));
        };

        audio.ontimeupdate = () => {
            setCurrentTime(Math.ceil(audio.currentTime));
        };

        audio.onended = () => {
            setPause(true);
            setCurrentTime(0);
        };
      
        // авто-play если pause=false
        if (!pause) {
            audio.play().catch((err) => console.error("Play error:", err));
        }
    }, [active]);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            if (pause) { 
                await audio.play();
                setPause(false);
            } else {
                audio.pause();
                setPause(true);
            }
        } catch (err) {
            console.error("Error playing audio:", err);
        }
    };

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        const value = Number(e.target.value);
        audio.currentTime = value;
        setCurrentTime(value);
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        const value = Number(e.target.value);
        setVolume(value);
        if (audio) {
            audio.volume = value / 100;
        }
    };

    if (!active) return null;

    return (
        <div className="flex items-center fixed bottom-0 h-auto w-full bg-gray-200 pl-2.5 pr-2.5">
            <button onClick={togglePlay}>
                <Image
                    src={pause ? Play : Pause}
                    alt={pause ? "Play" : "Pause"}
                    width={100}
                    height={100}
                    className="cursor-pointer"
                />
            </button>
            <div className="grid grid-cols-1 p-3 w-50">
                <p className="text-xl font-semibold text-blue-700 ">{(active?.name)}</p>
                <p className="text-gray-600">{(active?.artist)}</p>
            </div>
            <TrackProgress left={currentTime} right={duration}
                onChange={changeCurrentTime}
            />
            <Image
                src={Volume} alt="Volume"
                className="cursor-pointer ml-auto"
            />
            <TrackProgress left={volume} right={100}
                onChange={changeVolume}
            />
        </div>
    )
}


