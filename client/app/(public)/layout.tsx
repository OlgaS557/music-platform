'use client'
import Navbar from '@/components/Navbar'
import Player from '@/components/Player'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className='pb-20'>
            <Navbar />
            {children}
            <Player />
        </div>
    ) 
}
