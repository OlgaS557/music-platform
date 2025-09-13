"use client";
import { useAddComment } from "@/hooks/api/useAddComment";
import { useFormField } from "@/hooks/useFormField";
import MyButton from "@/components/MyButton";

interface CommentFormProps {
    trackId: string;
    onSuccess?: () => void;
}

export default function CommentForm({ trackId, onSuccess}: CommentFormProps) {
    const username = useFormField('');
    const text = useFormField('');

    const addComment = useAddComment({
        onSuccess: () => {
            username.setValue('');
            text.setValue('');

            if (onSuccess) onSuccess();
        },
        onError: (error) => {
            console.log(error);
            alert("Error while adding comment. Try again.");
        }
    });

    const handleSubmit = () => {
        if (!username.value.trim() || !text.value.trim()) return;

        addComment.mutate({
            username: username.value,
            text: text.value,
            trackId,
        })
    };

    return (
        <div className="container mx-auto mt-6">
            <input
                id="trackName"
                placeholder="Your name"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={username.value}
                onChange={username.onChange}
            />
            <textarea
                id="trackComment"
                placeholder="Comment"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                value={text.value}
                onChange={text.onChange}
            />
            <MyButton onClick={handleSubmit}>
                {addComment.isPending ? 'Adding...' : 'Add Comment'}
            </MyButton>
        </div>
    )
}