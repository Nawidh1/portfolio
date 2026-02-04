'use client'

import { useEffect, useState, useRef } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      if (rafRef.current != null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = documentHeight <= 0 ? 0 : window.scrollY
        const value = documentHeight <= 0 ? 0 : (scrolled / documentHeight) * 100
        setProgress(Math.min(100, Math.max(0, value)))
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-900 z-[100]">
        <div
          className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side progress indicator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
        <div className="w-1 h-32 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="w-full bg-amber-500 rounded-full transition-all duration-150"
            style={{ height: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-amber-500 font-mono">{Math.round(progress)}%</span>
      </div>
    </>
  )
}
