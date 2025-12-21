import { useQuery } from "@tanstack/react-query";
import type { ITrack } from "@/app/shared/types/track.interface";
import axios from "axios";
import { API_URL } from "./api";

const fetchTracks = async (): Promise<ITrack[]> => {
    const {data} = await axios.get(`${API_URL}/tracks`);
    return data;
}

export const useTracks = () => {
    return useQuery<ITrack[], Error>({
        queryKey:['tracks'],
        queryFn: fetchTracks,
        // staleTime: 5 * 60 * 1000, // 5 minutes
        staleTime: 0,
    });
};