import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface CreateCommentDto {
    username: string;
    text: string;
    trackId: string;
}

export const useAddComment = (options?: {
    onSuccess?: () => void;
    onError?: (error: unknown) => void;
}) => {
    return useMutation({
        mutationFn: async (data: CreateCommentDto) => {
            const response = await axios.post("http://localhost:5000/tracks/comment", data);
            return response.data;
        },
        onSuccess: options?.onSuccess,
        onError: options?.onError,
    });
};



