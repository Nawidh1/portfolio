'use client'

import { useEffect, useRef, useState } from 'react'

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let isVisible = !document.hidden
    const dots: { x: number; y: number; baseX: number; baseY: number }[] = []
    const spacing = 72
    const mouseRadius = 140

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDots()
    }

    const initDots = () => {
      dots.length = 0
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          dots.push({ x, y, baseX: x, baseY: y })
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleVisibility = () => {
      isVisible = !document.hidden
      if (isVisible) {
        animationId = requestAnimationFrame(animate)
      }
    }

    const animate = () => {
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const dot of dots) {
        const dx = mouseRef.current.x - dot.baseX
        const dy = mouseRef.current.y - dot.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          dot.x = dot.baseX - dx * force * 0.25
          dot.y = dot.baseY - dy * force * 0.25
        } else {
          dot.x += (dot.baseX - dot.x) * 0.12
          dot.y += (dot.baseY - dot.y) * 0.12
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1.25, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(212, 165, 116, 0.28)'
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibility)
      cancelAnimationFrame(animationId)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  )
}
