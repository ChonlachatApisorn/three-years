'use client'
import { useEffect, useState } from 'react'

const img = Array.from({ length: 170 }, (_, i) => `/grid/img${i + 1}.jpeg`);

export default function SecondPage() {
const [showMessage, setShowMessage] = useState(true)

useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 2000)
    return () => clearTimeout(timer)
}, [])

return (
    <main className="relative w-full h-screen overflow-hidden bg-black">

        {/* Infinite Scroll Container */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="scroll-down-wrapper">
                <Grid />
                <Grid />
            </div>
        </div>

        {/* Message */}
        <div className="relative z-10 flex items-center justify-center h-full">
            <h1
                className={`text-white text-xl md:text-xl font-bold transition-opacity duration-[2000ms] ${
                showMessage ? 'opacity-100' : 'opacity-0'
            }`}
            >
                Our memories 🫶🏻🤍✨
            </h1>
        </div>
    </main>
    )
}

function Grid() {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 p-3">
            {[...img, ...img, ...img].map((img, i) => (
            <div key={i} className="w-full aspect-square overflow-hidden rounded-2xl">
                <img
                    src={img}
                    className="w-full h-full object-cover block"
                />
            </div>
            ))}
        </div>
    )
}