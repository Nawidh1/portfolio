'use client'

import { useEffect, useState, useRef } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <style jsx>{`
        @keyframes reveal-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1deg); }
          66% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes dash-move {
          to { stroke-dashoffset: 0; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes image-reveal {
          from { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
          to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }
        @keyframes bar-fill {
          from { width: 0%; }
          to { width: var(--bar-width); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(10px, -20px) scale(1.1); opacity: 0.6; }
          50% { transform: translate(-5px, -40px) scale(0.9); opacity: 0.4; }
          75% { transform: translate(15px, -20px) scale(1.05); opacity: 0.5; }
        }
        .word-animate {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px) rotateX(-20deg);
          animation: word-pop 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes word-pop {
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        .skill-bar-bg {
          background: linear-gradient(90deg, rgba(16,185,129,0.1), rgba(16,185,129,0.05));
        }
        .gradient-text {
          background: linear-gradient(135deg, #10b981, #34d399, #6ee7b7, #10b981);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `particle-float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Connecting line SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
        <line x1="10%" y1="0" x2="40%" y2="100%" stroke="#10b981" strokeWidth="1" strokeDasharray="8 8" />
        <line x1="90%" y1="0" x2="60%" y2="100%" stroke="#10b981" strokeWidth="1" strokeDasharray="8 8" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Label */}
        <div className={`flex items-center gap-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
            </div>
            <span className="text-emerald-500 text-sm font-mono tracking-widest uppercase">About Me</span>
          </div>
          <div className={`flex-1 h-px origin-left ${isVisible ? 'animate-[reveal-line_1.5s_ease-out_forwards]' : 'scale-x-0'}`} style={{ background: 'linear-gradient(90deg, #10b981, transparent)' }} />
        </div>

        {/* Hero Area */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">

          {/* Left: Image with cinematic reveal */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                animation: isVisible ? 'image-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s forwards' : 'none',
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              }}
            >
              {/* Image container with floating animation */}
              <div style={{ animation: 'float-up 6s ease-in-out infinite' }}>
                <div className="relative group">
                  {/* Glow behind image */}
                  <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl group-hover:bg-emerald-500/15 transition-all duration-700" />

                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/profile2.jpg"
                      alt="Nawid Haidari"
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    {/* Color overlay that fades on hover */}
                    <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                  </div>

                  {/* Name tag at bottom */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="backdrop-blur-xl bg-neutral-950/60 border border-white/10 rounded-xl px-5 py-4 group-hover:border-emerald-500/30 transition-all duration-500 group-hover:translate-y-[-4px]">
                      <div className="text-white font-semibold text-lg tracking-wide">Nawid Haidari</div>
                      <div className="gradient-text text-sm font-medium mt-1">Software Developer Student</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements around image */}
            <div className={`absolute -top-6 -right-6 w-20 h-20 border border-emerald-500/20 rounded-full transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500/10 rounded-lg transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-50 rotate-0'}`} />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Animated heading - word by word */}
            <div className="mb-8" style={{ perspective: '600px' }}>
              {['Passionate', 'about', 'crafting', 'digital', 'experiences.'].map((word, i) => (
                <span
                  key={i}
                  className={isVisible ? 'word-animate' : 'opacity-0'}
                  style={{
                    animationDelay: `${0.4 + i * 0.12}s`,
                    marginRight: '0.35em',
                    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                    fontWeight: word === 'crafting' || word === 'experiences.' ? 700 : 300,
                    color: word === 'crafting' || word === 'digital' ? undefined : '#e5e5e5',
                  }}
                >
                  {(word === 'crafting' || word === 'digital') ? (
                    <span className="gradient-text">{word}</span>
                  ) : word}
                </span>
              ))}
            </div>

            {/* Description paragraphs with staggered reveal */}
            <div className="space-y-4 mb-10">
              {[
                "I'm a Software Development student at MBO 4, currently in my third year. I'm focused on becoming a skilled application developer.",
                "I enjoy solving problems through code and creating applications that are both functional and user-friendly. Every project is an opportunity to learn and grow."
              ].map((text, i) => (
                <p
                  key={i}
                  className={`text-neutral-400 text-lg leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${900 + i * 150}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Education row */}
            <div className={`grid grid-cols-3 gap-4 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '1200ms' }}>
              {[
                { value: 'MBO 4', label: 'School' },
                { value: 'Year 3', label: 'Current' },
                { value: 'SD', label: 'Program' },
              ].map((stat, i) => (
                <div key={i} className="group text-center p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-emerald-500/30 hover:bg-emerald-950/20 transition-all duration-400 cursor-default">
                  <div className="text-2xl md:text-3xl font-light text-emerald-500 mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.value}</div>
                  <div className="text-xs text-neutral-600 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
