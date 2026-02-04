'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-neutral-950"
    >
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />

      {/* Decorative lines */}
      <div className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent hidden lg:block" />
      <div className="absolute right-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          <div className={`space-y-8 ${isMounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-medium">
                Software Developer Student
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9]">
                Nawid
                <br />
                <span className="font-bold">Haidari</span>
              </h1>
            </div>

            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              MBO Software Development student passionate about building web applications. 
              Learning and growing every day to become a skilled developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-amber-600 text-neutral-950 font-medium text-sm uppercase tracking-wider hover:bg-amber-500 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-neutral-700 text-white font-medium text-sm uppercase tracking-wider hover:border-amber-600 hover:text-amber-500 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className={`hidden lg:flex justify-end ${isMounted ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-96 bg-neutral-900 border border-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neutral-950 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-black text-amber-600/20">NH</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-amber-600/50" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-neutral-700" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-4 text-neutral-500 hover:text-amber-500 transition-colors group">
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-amber-600 to-transparent group-hover:h-20 transition-all" />
          </a>
        </div>
      </div>
    </section>
  )
}
