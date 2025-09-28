'use client'
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import TrackList from '@/components/TrackList';
import MyButton from '@/components/MyButton';
import { useSearchTracks } from '@/hooks/api/useSearchTracks';
import { useTracks } from '@/hooks/api/useTracks';
import { useDebounce } from '@/hooks/useDebounce';

export default function TracksListPage() {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const debouncedQuery = useDebounce(query, 500);

    const { data: searchReasults, isLoading: searchLoading } = useSearchTracks(debouncedQuery);
    const { data: tracks, isLoading: tracksLoading } = useTracks();

    const displayedTracks = debouncedQuery ? searchReasults : tracks;

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
                <div>
                    <input
                        type="text"
                        placeholder='Search ...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='w-full rounded-lg border border-gray-300 p-2 mt-4'
                    />
                </div>
                {tracksLoading || searchLoading ? (
                    <p className='text-center text-gray-500 mt-10'>Loading...</p>
                ) : (
                    displayedTracks && displayedTracks.length === 0 ? (
                        <p className='text-center text-gray-500 mt-10'>No tracks found</p>
                    ) : (
                        <TrackList tracks={displayedTracks ?? []} />
                    )
                )}
            </div>
        </div>
    )
}


//  { tracksLoading || searchLoading ? (
//                     <p className='text-center text-gray-500 mt-10'>Loading...</p>
//                 ) : (
//                     displayedTracks && displayedTracks.length === 0 ? 
//                         <p className='text-center text-gray-500 mt-10'>No tracks found</p> 
//                     ) : (
//                         <TrackList tracks={displayedTracks}
//                     )
//                 }