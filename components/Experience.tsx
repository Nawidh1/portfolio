'use client'

import { useEffect, useState, useRef } from 'react'

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate through journey steps
  useEffect(() => {
    if (!isVisible) return
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(timer)
  }, [isVisible])

  const journey = [
    { year: '2022', title: 'Started MBO 4', desc: 'Began my Software Development studies, learning the fundamentals of programming and web development.', icon: '🎓' },
    { year: '2023', title: 'First Projects', desc: 'Built my first web applications using HTML, CSS, JavaScript and PHP. Learned database design with MySQL.', icon: '🚀' },
    { year: '2024', title: 'Modern Stack', desc: 'Moved to React, Next.js and Tailwind CSS. Started learning Node.js and working with APIs.', icon: '⚡' },
    { year: '2025', title: 'Growing', desc: 'Currently in Year 3, building full-stack applications and expanding my skills every day.', icon: '🔥' },
  ]

  const stats = [
    { label: 'School', value: 'MBO 4' },
    { label: 'Program', value: 'Software Development' },
    { label: 'Year', value: '3rd Year' },
    { label: 'Period', value: '2022 — Present' },
    { label: 'Focus', value: 'Application Development' },
    { label: 'Status', value: 'Active Student' },
  ]

  const focus = [
    { title: 'Frontend', desc: 'React, Next.js, Tailwind CSS', pct: 40 },
    { title: 'Backend', desc: 'Node.js, PHP, SQL', pct: 30 },
    { title: 'Tools', desc: 'Git, GitHub, VS Code', pct: 20 },
    { title: 'Design', desc: 'Figma, UI/UX basics', pct: 10 },
  ]

  return (
    <section ref={sectionRef} id="education" className="py-28 relative overflow-hidden">
      <style jsx>{`
        @keyframes expandWidth { from { width: 0; } to { width: 100%; } }
        @keyframes progressFill { from { width: 0%; } }
        @keyframes tickIn {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          60% { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
              className="flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500 relative">
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
              </div>
              <span className="text-emerald-500 text-xs font-mono uppercase tracking-[0.4em]">Education</span>
            </div>
            <div
              className="flex-1 h-px"
              style={{
                background: 'linear-gradient(90deg, #10b981, transparent)',
                animation: isVisible ? 'expandWidth 1.5s ease-out 0.3s forwards' : 'none',
                width: 0,
              }}
            />
          </div>
          <div className="overflow-hidden">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.25s',
              }}
            >
              My Journey
            </h2>
          </div>
        </div>

        {/* ── Info Grid ── */}
        <div className="grid md:grid-cols-3 gap-px bg-neutral-800/30 rounded-2xl overflow-hidden mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group bg-neutral-950 p-6 md:p-8 hover:bg-neutral-900/80 transition-colors duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.07}s`,
              }}
            >
              <div className="text-[10px] text-neutral-600 font-mono uppercase tracking-widest mb-2 group-hover:text-emerald-500/60 transition-colors duration-300">
                {stat.label}
              </div>
              <div className="text-lg md:text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors duration-300">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <div className="mb-24">
          <h3
            className="text-2xl font-bold text-white mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.7s',
            }}
          >
            Timeline
          </h3>

          {/* Progress bar */}
          <div
            className="relative h-1 bg-neutral-800 rounded-full mb-10 overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.8s',
            }}
          >
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${((activeStep + 1) / journey.length) * 100}%` }}
            />
            {/* Step dots on the bar */}
            {journey.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                style={{ left: `${((i + 0.5) / journey.length) * 100}%` }}
              >
                <div
                  className="w-4 h-4 rounded-full border-2 transition-all duration-500 cursor-pointer"
                  style={{
                    borderColor: i <= activeStep ? '#10b981' : '#404040',
                    background: i <= activeStep ? '#10b981' : '#171717',
                    transform: i === activeStep ? 'scale(1.4)' : 'scale(1)',
                    boxShadow: i === activeStep ? '0 0 15px rgba(16,185,129,0.4)' : 'none',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Year labels */}
          <div
            className="flex mb-10"
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease 0.9s' }}
          >
            {journey.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex-1 text-center cursor-pointer"
              >
                <span
                  className="text-sm font-mono transition-all duration-300"
                  style={{
                    color: i === activeStep ? '#10b981' : i <= activeStep ? '#a3a3a3' : '#525252',
                    fontWeight: i === activeStep ? 700 : 400,
                  }}
                >
                  {step.year}
                </span>
              </button>
            ))}
          </div>

          {/* Active step content */}
          <div className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900/40 min-h-[180px]">
            {journey.map((step, i) => (
              <div
                key={i}
                className="absolute inset-0 p-8 md:p-12 flex items-center transition-all duration-600"
                style={{
                  opacity: activeStep === i ? 1 : 0,
                  transform: activeStep === i ? 'translateX(0)' : activeStep > i ? 'translateX(-40px)' : 'translateX(40px)',
                  pointerEvents: activeStep === i ? 'auto' : 'none',
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <div className="text-5xl shrink-0">{step.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-emerald-500 font-mono text-sm">{step.year}</span>
                      <div className="w-8 h-px bg-emerald-500/30" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-neutral-400 leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Focus Distribution ── */}
        <div>
          <h3
            className="text-2xl font-bold text-white mb-10"
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease 1s' }}
          >
            Current Focus
          </h3>

          <div className="space-y-6">
            {focus.map((item, i) => (
              <div
                key={item.title}
                className="group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${1.1 + i * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  {/* Percentage */}
                  <div className="w-16 text-right shrink-0">
                    <span className="text-2xl md:text-3xl font-black text-emerald-500 group-hover:scale-110 inline-block transition-transform duration-300">
                      {item.pct}%
                    </span>
                  </div>

                  {/* Bar + Info */}
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <span className="text-xs text-neutral-600 hidden md:block">{item.desc}</span>
                    </div>
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative"
                        style={{
                          width: isVisible ? `${item.pct}%` : '0%',
                          transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${1.3 + i * 0.15}s`,
                        }}
                      >
                        {/* Shimmer */}
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                            backgroundSize: '200% 100%',
                            animationName: isVisible ? 'shimmer' : 'none',
                            animationDuration: '2s',
                            animationTimingFunction: 'ease',
                            animationIterationCount: 'infinite',
                            animationDelay: `${1.5 + i * 0.15}s`,
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1 md:hidden">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}
