'use client'

import TrackList from '@/components/TrackList';
import { useRouter } from 'next/navigation';
import MyButton from '@/components/MyButton';

export default function TracksListPage() {

    const router = useRouter();
    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-100 to-white'>
            <div className='container mx-auto w-900'>
                <div className="container mx-auto flex flex-row items-center justify-between pt-20">
                    <h1 className="text-4xl font-bold text-blue-700">Tracks list</h1>
                    <MyButton 
                        onClick={() => router.push('/tracks/create')}>
                        Download track
                    </MyButton>
                </div>
                <TrackList />
            </div>
        </div>
    )
}


