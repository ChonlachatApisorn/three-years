'use client'


import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Home() {
const router = useRouter()
const [input, setInput] = useState('')

const [date, setDate] = useState('')
const [error, setError] = useState('')


const handleSubmit = () => {
  // Expected format yyyy-mm-dd (from HTML date input)
  if (date === '2023-02-05') {
    router.push('/second')
  } else {
    setError('ลองอีกครั้งนะค้าบบ ❌ (First date day)')
  }
}

return (
  <main className="relative w-full h-screen overflow-hidden">
    {/* Background Image */}
    <div className="bg-black opacity-50">
      <img
        src="/bg-main.jpeg"
        alt="background"
        className="absolute w-full h-full object-cover"
      />
    </div>
    {/* Overlay Center Content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-6 px-6 text-center">      
      <h1 className="text-white text-3xl md:text-5xl font-bold">
        ใส่วันที่ค้าบบบบบบบบ 🤍
      </h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="px-4 py-3 text-lg rounded-xl bg-white/90 backdrop-blur text-black"
      />
      <button
        onClick={handleSubmit}
        className="px-8 py-4 text-lg font-semibold text-white bg-black/70 rounded-2xl backdrop-blur hover:scale-105 transition"
      >
        Click here ✨
      </button>
      {error && (
        <p className="text-red-400 md:text-10px font-semibold">{error}</p>
      )}
    </div>
  </main>
)
}