import { notFound } from "next/navigation";
import TrackDetails from "./TrackDetails";
import type { ITrack } from "@/app/shared/types/track.interface";
import type { Metadata } from "next";

interface TrackIdPageProps {
    params: Promise<{ trackId: string }>;
}

async function getTrack(trackId: string): Promise<ITrack> {
    const res = await fetch(`http://localhost:5000/tracks/${trackId}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch track");;
    return res.json();
};

export async function generateMetadata({ params }: TrackIdPageProps): Promise<Metadata> {
    const { trackId } = await params;

    const track: ITrack = await getTrack(trackId);
    if (!track) return { title: "Track not found" };

    return {
        title: `${track.name} - ${track.artist} | Music Platform`,
        description: track.text || "Listen to this track",
    };
};

export default async function TrackIdPage({ params }: TrackIdPageProps) {
    const { trackId } = await params;
    const track: ITrack = await getTrack(trackId);
    if (!track) return notFound();

    return <TrackDetails trackId={track._id} />
}


