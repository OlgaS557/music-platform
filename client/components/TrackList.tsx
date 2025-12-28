"use client";
import type { ITrack } from "@/app/shared/types/track.interface";
import TrackItem from "./TrackItem";

interface TrackListProps {
    tracks: ITrack[];
}

export default function TrackList({tracks}: TrackListProps) {

    return (
        <div className="container mx-auto py-2.5">
            <div className="grid grid-row-1 sm:grid-row-2 md:grid-row-3 gap-3">
                {(tracks).map((track) => (
                    <TrackItem 
                        key={track._id}
                        track={track}
                    />
                ))}
            </div>
        </div>
    ) 
}

