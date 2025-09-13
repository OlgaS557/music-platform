"use client";
//Progress line, time (left- time passed in seconds left side, right- total duration in seconds right time,
// volume(left - current volume, right - max volume(100)),)
interface TrackProgressProps {
    left: number; 
    right: number; 
    onChange: (e: any) => void;
}

export default function TrackProgress({left, right, onChange}: TrackProgressProps) {

    return(
        <div className="flex items-center w-full ml-5">
            <input 
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
                
            />
            <div>
                {left} / {right}
            </div>

        </div>
    )
}
