'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />

      <div className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-emerald-600/30 to-transparent hidden lg:block" />
      <div className="absolute right-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-emerald-600/30 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[100dvh] py-24 sm:py-20">
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left ${isMounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-emerald-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium">
                {t.hero.role}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] sm:leading-[0.9]">
                Nawid
                <br />
                <span className="font-bold">Haidari</span>
              </h1>
            </div>

            <div className={`flex lg:hidden justify-center ${isMounted ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="relative max-w-[220px] sm:max-w-[280px] w-full">
                <Image
                  src="/profile2.jpg"
                  alt="Nawid Haidari"
                  width={400}
                  height={533}
                  priority
                  sizes="(max-width: 640px) 220px, 280px"
                  className="w-full aspect-[3/4] object-cover border-4 border-neutral-600 rounded-lg"
                />
              </div>
            </div>

            <p className="text-neutral-400 text-base sm:text-lg max-w-md leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0">
              {t.hero.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start w-full sm:w-auto px-2 sm:px-0">
              <Link
                href="/projects"
                className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-emerald-600 text-neutral-950 font-medium text-sm uppercase tracking-wider hover:bg-emerald-500 transition-colors"
              >
                {t.hero.viewProjects}
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 border border-neutral-700 text-white font-medium text-sm uppercase tracking-wider hover:border-emerald-600 hover:text-emerald-500 transition-colors"
              >
                {t.hero.getInTouch}
              </Link>
            </div>
          </div>

          <div className={`hidden lg:flex justify-end ${isMounted ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="relative">
                <Image
                  src="/profile2.jpg"
                  alt="Nawid Haidari"
                  width={480}
                  height={640}
                  priority
                  sizes="(max-width: 1280px) 0px, 480px"
                  className="max-w-full max-h-[65vh] w-auto h-auto object-contain border-4 border-neutral-600 rounded-lg block"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-neutral-600" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-neutral-700" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block">
          <Link href="/about" suppressHydrationWarning className="flex flex-col items-center gap-4 text-neutral-500 hover:text-emerald-500 transition-colors group">
            <span className="text-xs uppercase tracking-[0.3em]">{t.hero.scroll}</span>
            <div className="w-px h-16 bg-gradient-to-b from-emerald-600 to-transparent group-hover:h-20 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  )
}
