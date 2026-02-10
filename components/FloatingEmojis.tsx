'use client'

import { useEffect, useState } from 'react'

interface EmojiParticle {
  id: number
  x: number
  y: number
  emoji: string
  speed: number
  rotation: number
  rotationSpeed: number
  size: number
  opacity: number
}

const cuteEmojis = ['✨', '💚', '⭐', '🌟', '💫', '🎨', '🚀', '💻', '🎯', '🔥', '💡', '🎉', '😊', '👨‍💻', '⚡']

function createInitialEmojis(): EmojiParticle[] {
  return Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    emoji: cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)],
    speed: 0.01 + Math.random() * 0.02,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2,
    size: 16 + Math.random() * 12,
    opacity: 0.3 + Math.random() * 0.4,
  }))
}

export default function FloatingEmojis() {
  const [emojis, setEmojis] = useState<EmojiParticle[]>(createInitialEmojis)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const animationInterval = setInterval(() => {
      setEmojis(prev =>
        prev.map(e => ({
          ...e,
          y: e.y - e.speed,
          x: e.x + Math.sin(e.y * 0.05) * 0.03,
          rotation: e.rotation + e.rotationSpeed,
          // Reset when off screen
          ...(e.y < -5
            ? {
                y: 105,
                x: Math.random() * 100,
                emoji: cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)],
                rotation: Math.random() * 360,
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
      {emojis.map(emoji => (
        <div
          key={emoji.id}
          className="absolute select-none transition-all duration-300"
          style={{
            left: `${emoji.x}%`,
            top: `${emoji.y}%`,
            opacity: emoji.opacity,
            fontSize: `${emoji.size}px`,
            transform: `rotate(${emoji.rotation}deg)`,
            filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))',
            animation: 'float 6s ease-in-out infinite',
            animationDelay: `${emoji.id * 0.2}s`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation, 0deg));
          }
        }
      `}</style>
    </div>
  )
}
