'use client'

import { useEffect, useState, useRef } from 'react'

export default function RobotBuddy() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isBlinking, setIsBlinking] = useState(false)
  const [isWaving, setIsWaving] = useState(false)
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  const messages = [
    "Hello! 👋",
    "Nice to meet you!",
    "Check out my projects!",
    "I love coding!",
    "Welcome!",
    "Let's build something!",
    "🤖 Beep boop!",
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Track mouse for eye movement (throttled via RAF to avoid update depth)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const tick = () => {
      setMousePosition({ ...mouseRef.current })
      rafRef.current = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', handleMouseMove)
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  // Random messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setMessage(messages[Math.floor(Math.random() * messages.length)])
        setShowMessage(true)
        setTimeout(() => setShowMessage(false), 3000)
      }
    }, 8000)

    return () => clearInterval(messageInterval)
  }, [])

  // Calculate eye position based on mouse
  const getEyeOffset = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 }
    
    const robotX = window.innerWidth - 60
    const robotY = window.innerHeight - 100
    
    const deltaX = mousePosition.x - robotX
    const deltaY = mousePosition.y - robotY
    
    const maxOffset = 3
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (distance === 0) return { x: 0, y: 0 }
    
    return {
      x: Math.min(maxOffset, Math.max(-maxOffset, (deltaX / distance) * maxOffset)),
      y: Math.min(maxOffset, Math.max(-maxOffset, (deltaY / distance) * maxOffset)),
    }
  }

  const eyeOffset = getEyeOffset()

  const handleClick = () => {
    setIsWaving(true)
    setMessage(messages[Math.floor(Math.random() * messages.length)])
    setShowMessage(true)
    setTimeout(() => {
      setIsWaving(false)
      setShowMessage(false)
    }, 2000)
  }

  if (!isMounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Speech bubble */}
      <div
        className={`absolute bottom-full right-0 mb-2 px-4 py-2 bg-emerald-500 text-neutral-950 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {message}
        <div className="absolute -bottom-1 right-6 w-3 h-3 bg-emerald-500 rotate-45" />
      </div>

      {/* Robot */}
      <button
        onClick={handleClick}
        className="group relative cursor-pointer focus:outline-none"
        aria-label="Robot buddy"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/40 transition-all" />
        
        {/* Robot body */}
        <div className="relative w-16 h-20 transition-transform duration-300 hover:scale-110">
          {/* Antenna */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className={`w-2 h-2 rounded-full bg-emerald-500 ${isWaving ? 'animate-ping' : 'animate-pulse'}`} />
            <div className="w-0.5 h-3 bg-neutral-600" />
          </div>

          {/* Head */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-12 bg-neutral-800 rounded-xl border-2 border-neutral-700 overflow-hidden">
            {/* Screen face */}
            <div className="absolute inset-1 bg-neutral-900 rounded-lg flex items-center justify-center gap-2">
              {/* Eyes */}
              <div
                className={`relative w-3 h-3 bg-emerald-500 rounded-full transition-all duration-100 ${
                  isBlinking ? 'scale-y-[0.1]' : ''
                }`}
              >
                <div
                  className="absolute w-1.5 h-1.5 bg-emerald-300 rounded-full"
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    top: '25%',
                    left: '25%',
                  }}
                />
              </div>
              <div
                className={`relative w-3 h-3 bg-emerald-500 rounded-full transition-all duration-100 ${
                  isBlinking ? 'scale-y-[0.1]' : ''
                }`}
              >
                <div
                  className="absolute w-1.5 h-1.5 bg-emerald-300 rounded-full"
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    top: '25%',
                    left: '25%',
                  }}
                />
              </div>
            </div>
            
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent animate-scan opacity-50" />
          </div>

          {/* Body */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-neutral-800 rounded-lg border-2 border-neutral-700">
            {/* Chest lights */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Arms */}
          <div
            className={`absolute top-12 -left-1 w-2 h-6 bg-neutral-700 rounded-full origin-top transition-transform duration-300 ${
              isWaving ? 'animate-wave' : ''
            }`}
          />
          <div className="absolute top-12 -right-1 w-2 h-6 bg-neutral-700 rounded-full" />
        </div>
      </button>

      <style jsx>{`
        @keyframes scan {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-30deg);
          }
          75% {
            transform: rotate(30deg);
          }
        }
        .animate-wave {
          animation: wave 0.5s ease-in-out 3;
        }
      `}</style>
    </div>
  )
}
