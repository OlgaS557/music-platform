'use client';
import useSWR from "swr";
import MyButton from "@/components/MyButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CommentForm from "./CommentForm";
import type { IComment } from "@/app/shared/types/track.interface";
import { API_URL } from "@/hooks/api/api";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TrackDetails({ trackId }: { trackId: string }) {
     const router = useRouter();

    const {data: track, mutate} = useSWR(`${API_URL}/tracks/${trackId}`, fetcher);

    if(!track) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white ">
            <div className="container mx-auto w-900 p-10">
                <MyButton
                    onClick={() => router.push('/tracks')}>
                    back to tracks
                </MyButton>
                <div className="p-4 bg-white rounded-lg shadow-md mt-10">
                    <div className="flex items-center">
                        <Image
                            // src={`${API_URL}/${track.picture}`}
                            src={track.picture}
                            alt={track.name}
                            width={200}
                            height={200}                                                     
                        />
                        <div className="ml-5">
                            <h1 className="text-2xl font-bold text-blue-700">Track's name - {track.name}</h1>
                            <p className="text-gray-600">Artist - {track.artist}</p>
                            <div className="mt-4">
                                <span className="text-gray-500">Listens: {track.listens}</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-6">Text</h2>
                    <p className="mt-2">{track.text}</p>
                    <h2 className="text-xl font-semibold mt-6">Comments</h2>
                    <CommentForm trackId={track._id} onSuccess={mutate}/>
                    <div>
                        {track.comments.map((comment: IComment) => (
                            <div key={comment._id} className="mt-4 p-4 bg-gray-100 rounded-md shadow-sm">
                                <div>Autor - {comment.username}</div>
                                <div>Comment - {comment.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}