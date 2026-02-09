'use client'

import { useEffect, useState } from 'react'

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

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    let particleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        opacity: 1,
      }

      setParticles(prev => [...prev.slice(-20), newParticle])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMounted])

  // Single fade interval when mounted (no dependency on particles to avoid effect loop)
  useEffect(() => {
    if (!isMounted) return

    const fadeInterval = setInterval(() => {
      setParticles(prev => {
        if (prev.length === 0) return prev
        return prev
          .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter(p => p.opacity > 0)
      })
    }, 30)

    return () => clearInterval(fadeInterval)
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
            opacity: particle.opacity * 0.6,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(217, 119, 6, ${particle.opacity * 0.5})`,
          }}
        />
      ))}
    </div>
  )
}
