"use client";

import type { ITrack } from "@/app/shared/types/track.interface"
import PauseIcon from "@/assets/icons/pause.svg";
import PlayIcon from "@/assets/icons/play.svg";
import DeleteIcon from "@/assets/icons/deleteIcon.svg";
import tiger from "@/assets/img/tiger.png";
import Image from "next/image";     
import { useRouter } from "next/navigation";
import { usePlayerStore } from "@/app/shared/store/player.store";
import { formatTime } from "@/utils/formatTime";


interface TrackItemProps {
    track: ITrack;
}

export default function TrackItem({ track }: TrackItemProps) {
    const router = useRouter();

    const active = usePlayerStore((s) => s.active);
    const pause = usePlayerStore((s) => s.pause);
    const setActive = usePlayerStore((s) => s.setActive);
    const setPause = usePlayerStore((s) => s.setPause);
    const currentTime = usePlayerStore((s) => s.currentTime);
    const duration = usePlayerStore((s) => s.duration)

  const isCurrent = active?._id === track._id;
  const isPlaying = isCurrent && !pause;

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // не переходить на страницу при клике по кнопке
    if (isCurrent) {
      // если это тот же трек — просто тумблер play/pause
      setPause(!pause);
    } else {
      // если другой трек — делаем его активным и запускаем
      setActive(track);
      setPause(false);
    }
  };

    return (
        <div className={`flex items-center p-2.5 m-4 rounded-lg shadow-md transition-shadow duration-300 ${
            isCurrent ? "bg-blue-100 shadow-lg" : "bg-white hover:shadow-lg"
            }`}
            onClick={() => router.push(`/tracks/${track._id}`)} role="button">
            {/* Play/Pause */}
            <button onClick={handlePlayClick} className="mr-4">
                <Image
                    src={isPlaying ? PauseIcon : PlayIcon}
                    alt={isPlaying ? "Pause" : "Play"}
                    width={30}
                    height={30}
                    className="cursor-pointer"
                />
            </button>
            {/*Cover + Info*/}
            <div className="flex items-center cursor-pointer">
                <Image 
                    width={50} 
                    height={50} 
                    src={track.picture ? 'http://localhost:5000/'  +  track.picture : tiger} 
                    alt={track.name}
                    style={{ height: "50px", width: "auto" }}
                />
                <div className="flex-1 ml-4 w-50">
                    <h2 className="text-xl font-semibold text-blue-700">{track.name}</h2>
                    <p className="text-gray-600">{track.artist}</p>
                </div>
            </div>
            {/*Current time/Duration + Delete button*/}
            <div className="flex items-center ml-auto gap-4">
                {isCurrent && (
                    <div className="text-sm text-gray-700">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                )}
                <button className="ml-auto"
                    onClick={(e) => e.stopPropagation()}
                    //TODO: delete track
                >
                    <Image src={DeleteIcon} alt="Delete" width={20} height={20}
                        className="cursor-pointer"
                    />
                </button >
            </div>

        </div>
    )
}
