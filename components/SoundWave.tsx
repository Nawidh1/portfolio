'use client'

import { useEffect, useState } from 'react'

export default function SoundWave() {
  const [bars, setBars] = useState<number[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setBars(Array.from({ length: 5 }, () => Math.random() * 100))
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      setBars(Array.from({ length: 5 }, () => 20 + Math.random() * 80))
    }, 150)

    return () => clearInterval(interval)
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-1 h-8 p-2 bg-neutral-900/80 rounded-lg border border-neutral-800">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-1 bg-emerald-500 rounded-full transition-all duration-150"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  )
}
