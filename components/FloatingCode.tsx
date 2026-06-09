'use client'

import { useEffect, useState } from 'react'

interface CodeParticle {
  id: number
  x: number
  y: number
  text: string
  speed: number
  opacity: number
  size: number
}

const codeSymbols = ['</>', '{ }', '=>', '&&', 'fn()', 'const', 'git', 'API', 'SQL', 'CSS']

function createInitialParticles(count = 6): CodeParticle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    speed: 0.015 + Math.random() * 0.02,
    opacity: 0.08 + Math.random() * 0.14,
    size: 10 + Math.random() * 4,
  }))
}

export default function FloatingCode() {
  const [particles, setParticles] = useState<CodeParticle[]>(createInitialParticles)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    let intervalId: ReturnType<typeof setInterval>

    const start = () => {
      intervalId = setInterval(() => {
        setParticles(prev =>
          prev.map(p => ({
            ...p,
            y: p.y - p.speed,
            x: p.x + Math.sin(p.y * 0.1) * 0.03,
            ...(p.y < -5
              ? {
                  y: 105,
                  x: Math.random() * 100,
                  text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
                }
              : {}),
          }))
        )
      }, 100)
    }

    const handleVisibility = () => {
      clearInterval(intervalId)
      if (!document.hidden) start()
    }

    start()
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      clearInterval(intervalId)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute font-mono text-emerald-500 select-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            fontSize: `${particle.size}px`,
          }}
        >
          {particle.text}
        </div>
      ))}
    </div>
  )
}
