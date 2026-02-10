'use client'

import { useEffect, useState, useRef } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const groups = [
    {
      label: 'Frontend',
      description: 'Building beautiful, responsive user interfaces',
      skills: [
        { name: 'HTML', color: '#E34F26' },
        { name: 'CSS', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'React', color: '#61DAFB' },
        { name: 'Next.js', color: '#ffffff' },
        { name: 'Tailwind CSS', color: '#06B6D4' },
      ],
    },
    {
      label: 'Backend',
      description: 'Server-side logic and database management',
      skills: [
        { name: 'Node.js', color: '#339933' },
        { name: 'PHP', color: '#777BB4' },
        { name: 'SQL', color: '#4479A1' },
        { name: 'REST APIs', color: '#10b981' },
      ],
    },
    {
      label: 'Tools',
      description: 'Development workflow and collaboration',
      skills: [
        { name: 'Git', color: '#F05032' },
        { name: 'GitHub', color: '#e2e2e2' },
        { name: 'VS Code', color: '#007ACC' },
        { name: 'Figma', color: '#F24E1E' },
        { name: 'npm', color: '#CB3837' },
      ],
    },
  ]

  let globalIndex = 0

  return (
    <section ref={sectionRef} id="skills" className="py-28 relative overflow-hidden">
      <style jsx>{`
        @keyframes slideReveal {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0% 0 0); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px) scale(0.5); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0) rotate(-10deg); }
          60% { transform: scale(1.15) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes textFlicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.4; }
          94% { opacity: 1; }
          96% { opacity: 0.6; }
          97% { opacity: 1; }
        }
        @keyframes borderDash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-12 mb-28 items-end">
          <div>
            {/* Label with animated line */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="flex items-center gap-3"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
                }}
              >
                <div className="w-3 h-3 rounded-full bg-emerald-500 relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
                </div>
                <span className="text-emerald-500 text-xs font-mono uppercase tracking-[0.4em]">Skills</span>
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

            {/* Title with stagger */}
            <div className="overflow-hidden">
              <h2
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
                }}
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1]">
                  Technologies
                </span>
              </h2>
            </div>
            <div className="overflow-hidden mt-1">
              <h2
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
                }}
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1]">
                  I Work With
                </span>
              </h2>
            </div>
          </div>

          {/* Right side stats */}
          <div className="flex items-end gap-10 lg:justify-end">
            {[
              { number: '15', label: 'Technologies' },
              { number: '3', label: 'Categories' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `countUp 0.6s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.15}s forwards` : 'none',
                }}
              >
                <div className="text-5xl md:text-6xl font-black text-emerald-500 mb-1" style={{ animation: isVisible ? `textFlicker 4s ease-in-out ${1 + i * 0.3}s infinite` : 'none' }}>
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skill Groups ── */}
        <div className="space-y-24">
          {groups.map((group, gi) => {
            const groupStartIndex = globalIndex
            return (
              <div key={group.label}>
                {/* Group header */}
                <div
                  className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${0.5 + gi * 0.15}s`,
                  }}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{group.label}</h3>
                    <p className="text-neutral-500 text-sm">{group.description}</p>
                  </div>
                  <span className="text-neutral-700 text-xs font-mono">{group.skills.length} skills</span>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                  {group.skills.map((skill, si) => {
                    const currentIndex = groupStartIndex + si
                    const isHovered = hoveredIndex === currentIndex
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    globalIndex = currentIndex + 1

                    return (
                      <div
                        key={skill.name}
                        className="group relative"
                        onMouseEnter={() => setHoveredIndex(currentIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          animation: isVisible ? `popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.6 + gi * 0.15 + si * 0.07}s forwards` : 'none',
                        }}
                      >
                        <div
                          className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
                          style={{
                            transform: isHovered ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                          }}
                        >
                          {/* Background with color */}
                          <div
                            className="absolute inset-0 transition-all duration-500"
                            style={{
                              background: isHovered
                                ? `radial-gradient(circle at 50% 50%, ${skill.color}20, ${skill.color}05 70%)`
                                : 'rgba(23,23,23,0.5)',
                            }}
                          />

                          {/* Border */}
                          <div
                            className="absolute inset-0 rounded-3xl transition-all duration-500"
                            style={{
                              boxShadow: isHovered ? `0 20px 60px -15px ${skill.color}25, inset 0 0 0 1px ${skill.color}40` : 'inset 0 0 0 1px rgba(38,38,38,0.5)',
                            }}
                          />

                          {/* SVG animated border on hover */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                            <rect
                              x="2" y="2" width="96" height="96" rx="22"
                              stroke={skill.color}
                              strokeWidth="0.5"
                              strokeDasharray="400"
                              strokeDashoffset={isHovered ? '0' : '400'}
                              style={{
                                transition: 'stroke-dashoffset 0.8s ease-out',
                                opacity: 0.5,
                              }}
                            />
                          </svg>

                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                            {/* Big letter */}
                            <div
                              className="text-4xl md:text-5xl font-black transition-all duration-500 leading-none"
                              style={{
                                color: isHovered ? skill.color : '#404040',
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                filter: isHovered ? `drop-shadow(0 0 15px ${skill.color}50)` : 'none',
                              }}
                            >
                              {skill.name.charAt(0)}
                            </div>

                            {/* Name */}
                            <span
                              className="text-sm font-semibold text-center leading-tight transition-colors duration-300"
                              style={{ color: isHovered ? '#ffffff' : '#737373' }}
                            >
                              {skill.name}
                            </span>

                            {/* Colored dot */}
                            <div
                              className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                              style={{
                                background: skill.color,
                                opacity: isHovered ? 1 : 0.3,
                                transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                                boxShadow: isHovered ? `0 0 10px ${skill.color}60` : 'none',
                              }}
                            />
                          </div>

                          {/* Corner shine */}
                          <div
                            className="absolute -top-1/2 -right-1/2 w-full h-full rotate-12 transition-opacity duration-700"
                            style={{
                              background: `linear-gradient(45deg, transparent, ${skill.color}08, transparent)`,
                              opacity: isHovered ? 1 : 0,
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Footer ── */}
        <div
          className="mt-24 pt-12 border-t border-neutral-800/30"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease 2s',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-neutral-500 text-sm">
              Each technology chosen with purpose. Always expanding my toolkit.
            </p>
            <div className="flex gap-2">
              {groups.map((g) => (
                <div key={g.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800/40">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-neutral-400 font-medium">{g.label}</span>
                  <span className="text-xs text-neutral-600 font-mono">{g.skills.length}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
