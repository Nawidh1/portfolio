'use client'

import { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [isMounted])

  if (!isMounted) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? 'invisible' : ''}>{text}</span>
      
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-red-500/80"
            style={{ transform: 'translate(-2px, -1px)', clipPath: 'inset(20% 0 30% 0)' }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 text-cyan-500/80"
            style={{ transform: 'translate(2px, 1px)', clipPath: 'inset(50% 0 20% 0)' }}
          >
            {text}
          </span>
          <span className="absolute top-0 left-0">{text}</span>
        </>
      )}
    </span>
  )
}
