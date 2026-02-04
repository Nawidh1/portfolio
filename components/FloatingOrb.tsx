'use client'

import { useEffect, useState, useRef } from 'react'

const ORB_BASE_X = 80
const ORB_BASE_Y = 80
const MAGNET_RADIUS = 120
const PULL_STRENGTH = 0.08

export default function FloatingOrb() {
  const [position, setPosition] = useState({ x: ORB_BASE_X, y: ORB_BASE_Y })
  const [isCharged, setIsCharged] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const rafRef = useRef<number>()
  const posRef = useRef({ x: ORB_BASE_X, y: ORB_BASE_Y })
  const mouseRef = useRef({ x: 0, y: 0 })
  const lastRenderedPosRef = useRef({ x: ORB_BASE_X, y: ORB_BASE_Y })
  const chargeTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const MOVE_THRESHOLD = 2

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const tick = () => {
      const { x: mx, y: my } = mouseRef.current
      const dx = mx - posRef.current.x
      const dy = my - posRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < MAGNET_RADIUS && distance > 5) {
        const force = (1 - distance / MAGNET_RADIUS) * PULL_STRENGTH
        posRef.current.x += dx * force
        posRef.current.y += dy * force
      }

      // Soft return toward base position
      posRef.current.x += (ORB_BASE_X - posRef.current.x) * 0.02
      posRef.current.y += (ORB_BASE_Y - posRef.current.y) * 0.02

      // Clamp so it doesn't leave the viewport
      posRef.current.x = Math.max(24, Math.min(window.innerWidth - 24, posRef.current.x))
      posRef.current.y = Math.max(24, Math.min(window.innerHeight - 24, posRef.current.y))

      // Only trigger re-render when position changed enough (avoids update depth / RAF storm)
      const moveX = Math.abs(posRef.current.x - lastRenderedPosRef.current.x)
      const moveY = Math.abs(posRef.current.y - lastRenderedPosRef.current.y)
      if (moveX >= MOVE_THRESHOLD || moveY >= MOVE_THRESHOLD) {
        lastRenderedPosRef.current = { x: posRef.current.x, y: posRef.current.y }
        setPosition({ ...lastRenderedPosRef.current })
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [isMounted])

  const handleClick = () => {
    if (chargeTimeoutRef.current) clearTimeout(chargeTimeoutRef.current)
    setIsCharged(true)
    chargeTimeoutRef.current = setTimeout(() => {
      chargeTimeoutRef.current = undefined
      setIsCharged(false)
    }, 600)
  }

  useEffect(() => {
    return () => {
      if (chargeTimeoutRef.current) clearTimeout(chargeTimeoutRef.current)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      className="fixed z-40 cursor-pointer select-none"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Interactive orb"
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div
        className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
          isCharged ? 'scale-150' : 'hover:scale-125'
        }`}
      >
        {/* Outer glow */}
        <div
          className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
            isCharged ? 'bg-amber-400/60 scale-150' : 'bg-amber-500/30'
          }`}
        />
        {/* Mid glow */}
        <div
          className={`absolute inset-[-4px] rounded-full blur-md transition-all duration-300 ${
            isCharged ? 'bg-amber-400/50' : 'bg-amber-500/20'
          }`}
        />
        {/* Core */}
        <div
          className={`relative w-full h-full rounded-full border-2 transition-all duration-300 ${
            isCharged
              ? 'bg-amber-300 border-amber-200 shadow-lg shadow-amber-400/50'
              : 'bg-amber-500/90 border-amber-400/50'
          }`}
        />
      </div>
    </div>
  )
}
