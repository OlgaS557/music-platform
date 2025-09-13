'use client';

import StepWrapper from '@/components/StepWrapper';
import MyButton from '@/components/MyButton';
import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import { useFormField } from '@/hooks/useFormField';
import { useCreateTrack } from '@/hooks/api/useCreateTrack';
import { useRouter } from 'next/navigation';

export default function CreateTrackPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState<File | null>(null);
    const [audio, setAudio] = useState<File | null>(null);
    const name = useFormField('');
    const artist = useFormField('');
    const text = useFormField('');

    const router = useRouter();

    const nextStep = () => {
        if (activeStep >= 2) {
            return;
        }
        setActiveStep((prev) => prev + 1);
    }
    const prevStep = () => {
        if (activeStep <= 0) {
            return;
        }
        setActiveStep((prev) => prev - 1);
    }

    const createTrack = useCreateTrack({
        onSuccess: () => {
            alert("Track successfully created!");
            router.push("/tracks");
        },
        onError: (error) => {
            console.log(error);
            alert("Error while created track. Try again.");
        },
    });

    const handleSubmit = () => {
        createTrack.mutate({
            name: name.value,
            artist: artist.value,
            text: text.value,
            picture,
            audio,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            <div className='container mx-auto w-900 p-20'>
                <StepWrapper activeStep={activeStep}>
                    {activeStep === 0 &&
                        <form>
                            <h2>Step 1: Info Track</h2>
                            <input
                                {...name}
                                type="text"
                                placeholder="Track Name"
                                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            />
                            <input
                                {...artist}
                                type="text"
                                placeholder="Artist Name"
                                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            />
                            <textarea
                                {...text}
                                placeholder="Track Description"
                                rows={3}
                                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            />
                        </form>
                    }
                    {activeStep === 1 &&
                        <FileUpload
                            setFile={setPicture}
                            accept="image/*"
                        >
                            <button>Upload cover</button>
                        </FileUpload>
                    }
                    {activeStep === 2 &&
                        <FileUpload
                            setFile={setAudio}
                            accept="audio/*"
                        >
                            <button>Upload audio</button>
                        </FileUpload>
                    }
                </StepWrapper>

                <div className='flex justify-between mt-6'>
                    <MyButton onClick={prevStep}>Back</MyButton>
                    {activeStep < 2 ? (
                        <MyButton onClick={nextStep}>Forward</MyButton>
                    ) : (
                        <MyButton onClick={handleSubmit}>
                            {createTrack.isPending ? "Uploading..." : "Submit"}
                        </MyButton>
                    )}
                    
                </div>
            </div>
        </div>
    );
}
