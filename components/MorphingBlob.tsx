'use client'

import { useEffect, useState } from 'react'

export default function MorphingBlob() {
  const [isMounted, setIsMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main blob */}
      <div
        className="absolute w-[600px] h-[600px] opacity-20"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
      />

      {/* Secondary blob */}
      <div
        className="absolute w-[400px] h-[400px] opacity-10 animate-blob"
        style={{
          left: '20%',
          top: '30%',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.5) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Third blob */}
      <div
        className="absolute w-[500px] h-[500px] opacity-10 animate-blob"
        style={{
          right: '10%',
          bottom: '20%',
          background: 'radial-gradient(circle, rgba(180, 140, 100, 0.4) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '2s',
        }}
      />

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
