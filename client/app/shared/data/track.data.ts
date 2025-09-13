import type { ITrack } from '@/app/shared/types/track.interface';

export const tracksItems: ITrack[] = [
    {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Description of Track 1',
        listens: 100,
        picture: '/images/track1.jpg',
        audio: '/audio/track1.mp3',
        comments: [
            {
                _id: 'c1',
                username: 'User1',
                text: 'Great track!'
            }
        ]
    },
    {
        _id: '2',
        name: 'Track 2',
        artist: 'Artist 2',
        text: 'Description of Track 2',
        listens: 200,
        picture: '/images/track2.jpg',
        audio: '/audio/track2.mp3',
        comments: []
    },
    {
        _id: '3',
        name: 'Track 3',
        artist: 'Artist 3',
        text: 'Description of Track 3',
        listens: 300,
        picture: '/images/track3.jpg',
        audio: '/audio/track3.mp3',
        comments: [
            {
                _id: 'c2',
                username: 'User2',
                text: 'Amazing track!'
            },
            {
                _id: 'c3',
                username: 'User3',
                text: 'Loved it!'
            }
        ]
    }
];