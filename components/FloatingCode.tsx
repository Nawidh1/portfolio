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

const codeSymbols = [
  '</>',
  '{ }',
  '( )',
  '[ ]',
  '=>',
  '&&',
  '||',
  '++',
  '===',
  'fn()',
  'const',
  'let',
  'if',
  'for',
  '0x',
  '01',
  'npm',
  'git',
  '/**/',
  '::',
  '<%>',
  'API',
  'SQL',
  'CSS',
  'DOM',
]

function createInitialParticles(): CodeParticle[] {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    speed: 0.02 + Math.random() * 0.03,
    opacity: 0.1 + Math.random() * 0.2,
    size: 10 + Math.random() * 6,
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

    const animationInterval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          y: p.y - p.speed,
          x: p.x + Math.sin(p.y * 0.1) * 0.05,
          // Reset when off screen
          ...(p.y < -5
            ? {
                y: 105,
                x: Math.random() * 100,
                text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
              }
            : {}),
        }))
      )
    }, 50)

    return () => clearInterval(animationInterval)
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
            textShadow: '0 0 10px rgba(217, 119, 6, 0.3)',
          }}
        >
          {particle.text}
        </div>
      ))}
    </div>
  )
}
