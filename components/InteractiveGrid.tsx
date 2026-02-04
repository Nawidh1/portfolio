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
    const dots: { x: number; y: number; baseX: number; baseY: number }[] = []
    const spacing = 50
    const connectionDistance = 100
    const mouseRadius = 150

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDots()
    }

    const initDots = () => {
      dots.length = 0
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          dots.push({ x, y, baseX: x, baseY: y })
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw dots
      dots.forEach((dot, i) => {
        const dx = mouseRef.current.x - dot.baseX
        const dy = mouseRef.current.y - dot.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          dot.x = dot.baseX - dx * force * 0.3
          dot.y = dot.baseY - dy * force * 0.3
        } else {
          dot.x += (dot.baseX - dot.x) * 0.1
          dot.y += (dot.baseY - dot.y) * 0.1
        }

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(212, 165, 116, 0.3)'
        ctx.fill()

        // Connect nearby dots
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j]
          const distX = dot.x - other.x
          const distY = dot.y - other.y
          const dist = Math.sqrt(distX * distX + distY * distY)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(212, 165, 116, ${0.1 * (1 - dist / connectionDistance)})`
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
