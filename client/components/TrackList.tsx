"use client";
import TrackItem from "./TrackItem";
import { useTracks } from "@/hooks/api/useTracks";

export default function TrackList() {
    const {data: tracks, isLoading, isError, error} = useTracks();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {(error as Error).message}</p>

    return (
        <div className="container mx-auto py-2.5">
            <div className="grid grid-row-1 sm:grid-row-2 md:grid-row-3 gap-3">
                {(tracks ?? []).map((track) => (
                    <TrackItem 
                        key={track._id}
                        track={track}
                    />
                ))}
            </div>
        </div>
    ) 
}

