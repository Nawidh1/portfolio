'use client'

import { useEffect, useState, useCallback } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
}

const chars = '!<>-_\\/[]{}—=+*^?#_abcdefghijklmnopqrstuvwxyz'

export default function TextScramble({ text, className = '', delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scramble = useCallback(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            if (char === ' ') return ' '
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsComplete(true)
      }

      iteration += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  useEffect(() => {
    if (!isMounted) return

    const timeout = setTimeout(scramble, delay)
    return () => clearTimeout(timeout)
  }, [isMounted, scramble, delay])

  // Re-scramble on hover after complete
  const handleMouseEnter = () => {
    if (isComplete) {
      setIsComplete(false)
      scramble()
    }
  }

  if (!isMounted) return <span className={className}>{text}</span>

  return (
    <span 
      className={`${className} font-mono`} 
      onMouseEnter={handleMouseEnter}
      style={{ cursor: isComplete ? 'pointer' : 'default' }}
    >
      {displayText || text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('')}
    </span>
  )
}
