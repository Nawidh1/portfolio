'use client'

import { useEffect, useState } from 'react'

const LINES = [
  '> npm run build ✓',
  '> deploying to the cloud...',
  '> coffee level: critical',
  '> fixing the last bug...',
  '> git commit -m "it works"',
  '> 127.0.0.1 is home',
  '> async await sleep(8h)',
  '> console.log("hello visitor")',
  '> sudo make sandwich',
  '> merging main into main',
  '> stack overflow saved the day',
  '> // TODO: remove this later',
  '> 2 + 2 === 5 for large 2',
  '> rebooting brain...',
  '> loading awesome portfolio',
]

const TYPING_SPEED = 50
const PAUSE_AFTER_LINE = 2500
const NEXT_LINE_DELAY = 800

export default function MiniTerminal() {
  const [displayText, setDisplayText] = useState('')
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pause' | 'next' | 'delay'>('typing')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const line = LINES[currentLineIndex]

    if (phase === 'typing') {
      if (displayText.length < line.length) {
        const t = setTimeout(() => {
          setDisplayText(line.slice(0, displayText.length + 1))
        }, TYPING_SPEED)
        return () => clearTimeout(t)
      }
      setPhase('pause')
      return
    }

    if (phase === 'pause') {
      const t = setTimeout(() => setPhase('next'), PAUSE_AFTER_LINE)
      return () => clearTimeout(t)
    }

    // Reset for next line and leave 'next' immediately so effect doesn't re-run this block
    if (phase === 'next') {
      setDisplayText('')
      setCurrentLineIndex((i) => (i + 1) % LINES.length)
      setPhase('delay')
      return
    }

    if (phase === 'delay') {
      const t = setTimeout(() => setPhase('typing'), NEXT_LINE_DELAY)
      return () => clearTimeout(t)
    }
  }, [isMounted, currentLineIndex, phase, displayText])

  if (!isMounted) return null

  return (
    <div className="fixed top-6 right-6 z-50 w-64 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900/95 shadow-xl backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-neutral-700 bg-neutral-800/80 px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500/80" />
          <div className="h-2 w-2 rounded-full bg-amber-500/80" />
          <div className="h-2 w-2 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] font-medium text-neutral-500">terminal — zsh</span>
      </div>
      {/* Content */}
      <div className="font-mono text-xs text-amber-400/90">
        <div className="flex px-3 py-2">
          <span className="select-none text-neutral-500">$ </span>
          <span className="min-h-[1em]">
            {displayText}
            <span className="inline-block w-px min-h-[1em] -mb-px bg-amber-400 animate-pulse align-middle" />
          </span>
        </div>
      </div>
    </div>
  )
}
