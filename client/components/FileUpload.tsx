"use client";
import { useRef } from "react";

interface FileUploadProps {
    setFile: (file: any) => void;
    accept: string;
    children: React.ReactNode;
}

export default function FileUpload({ setFile, accept, children }: FileUploadProps) {
    const ref = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    return (
        <div onClick={() => ref.current?.click()}>
            <input
                type="file"
                accept={accept}
                ref={ref}
                onChange={onChange}
            // className="hidden"
            />
            {children}
        </div>
    )
}
