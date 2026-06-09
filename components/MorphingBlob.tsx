'use client'

import { useEffect, useState } from 'react'

export default function MorphingBlob() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] opacity-15 animate-blob"
        style={{
          left: '15%',
          top: '25%',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.45) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute w-[420px] h-[420px] opacity-10 animate-blob"
        style={{
          right: '8%',
          bottom: '18%',
          background: 'radial-gradient(circle, rgba(180, 140, 100, 0.4) 0%, transparent 70%)',
          filter: 'blur(45px)',
          animationDelay: '4s',
        }}
      />

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(24px, -18px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
