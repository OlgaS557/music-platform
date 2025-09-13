
import { notFound } from "next/navigation";
import TrackDetails from "./TrackDetails";
import type { ITrack } from "@/app/shared/types/track.interface";

interface TrackIdPageProps {
    params: {trackId: string};
}

async function getTrack({params}: TrackIdPageProps) {
  const res = await fetch(`http://localhost:5000/tracks/${params.trackId}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateMetadata({ params }: TrackIdPageProps) {
  const track: ITrack = await getTrack({ params});
  if (!track) return { title: "Track not found" };

  return {
    title: `${track.name} | Music Platform`,
    description: track.text || "Listen to this track",
  };
};

export default async function TrackIdPage({params}: TrackIdPageProps) {
    const track: ITrack = await getTrack({ params});
    if (!track) return notFound();
    // const {trackId} = await params;
    // const res = await fetch(`http://localhost:5000/tracks/${trackId}`, {
    //     cache: "no-store", // чтобы не кешировался запрос
    // });
    // if (!res.ok) return notFound();
    // const track: ITrack = await res.json();

    return <TrackDetails trackId={track._id} />
}


