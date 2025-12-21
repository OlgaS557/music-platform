import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "./api";

interface ICreateTrackDto {
    name: string;
    artist: string;
    text: string;
    picture?: File | null;
    audio?: File | null;
}

export const useCreateTrack = (options?: {
    onSuccess?: () => void;
    onError?: (error: unknown) => void;
}) => {
    return useMutation({
        mutationFn: async (data: ICreateTrackDto) => {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('artist', data.artist);
            formData.append('text', data.text);
            if(data.picture) {
                formData.append('picture', data.picture);
            }
            if(data.audio) {
                formData.append('audio', data.audio);
            }
            // const response = await axios.post("http://localhost:5000/tracks"
            // Для диплоя на Vercel:
            const response = await axios.post(`${API_URL}/tracks`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("API URL:", API_URL);
            return response.data;
        },
        onSuccess: options?.onSuccess,
        onError: options?.onError,
    });
};