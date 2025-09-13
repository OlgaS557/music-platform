import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Albums List',
}

export default function AlbumsPage() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">Albums Page</h1>
                <p className="text-base text-gray-500">This is the albums page content.</p>
            </div>
        </>)
}
