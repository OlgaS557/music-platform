'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { menuItems } from "@/app/shared/data/navbar.data";

export default function Navbar() {
    const [open, setOpen] = useState(false);    
    const router = useRouter();

    return (
        <>
            {/* Кнопка открытия меню */}
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md focus:outline-none"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
            >
                ☰
            </button>
            {/* Затемнение фона при открытом меню */}
            <div
                className={`fixed inset-0 bg-black bg-black/30 z-40 transition-opacity duration-300 ${open ? 'block' : 'hidden'}`}
                onClick={() => setOpen(false)}
            />
            {/* Drawer Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
                aria-label="Sidebar menu"
            >
                <div className="flex flex-col h-full p-6 space-y-4">
                    <button
                        className="self-end text-2xl text-gray-400 hover:text-gray-700"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                    {menuItems.map(({ href, label}, index) => (
                        <a
                            key={href}
                            className="text-lg font-semibold hover:text-blue-600 duration-500 hover:translate-x-1 cursor-pointer"
                            onClick={() => {
                                router.push(href);
                                setOpen(false);
                            } }
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </aside>
        </>
    );
}



