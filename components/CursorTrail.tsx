'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const particleIdRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    let fadeInterval: ReturnType<typeof setInterval>

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4,
        opacity: 1,
      }

      setParticles(prev => [...prev.slice(-12), newParticle])
    }

    const startFade = () => {
      fadeInterval = setInterval(() => {
        setParticles(prev => {
          if (prev.length === 0) return prev
          return prev
            .map(p => ({ ...p, opacity: p.opacity - 0.08 }))
            .filter(p => p.opacity > 0)
        })
      }, 50)
    }

    const handleVisibility = () => {
      clearInterval(fadeInterval)
      if (!document.hidden) startFade()
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    startFade()
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(fadeInterval)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity * 0.5,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}
