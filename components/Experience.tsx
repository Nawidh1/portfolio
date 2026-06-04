'use client'

import { useEffect, useState, useRef } from 'react'

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const journey = [
    { year: '2022', title: 'Gestart MBO 4', desc: 'Begonnen met Softwareontwikkeling. Basis van programmeren, logica en webdevelopment geleerd.', icon: '🎓' },
    { year: '2023', title: 'Eerste webprojecten', desc: 'Applicaties gebouwd met HTML, CSS, JavaScript en PHP. Ook database-ontwerp met MySQL.', icon: '💻' },
    { year: '2024', title: 'Moderne tech stack', desc: 'Overgestapt naar React, Next.js en Tailwind CSS. Ook Node.js verkend.', icon: '⚡' },
    { year: '2025', title: 'Full-stack focus', desc: 'Derde jaar student. Complexe full-stack apps bouwen en mijn skills voortdurend uitbreiden.', icon: '🚀' },
    { year: '2026', title: 'Portfolio & klantprojecten', desc: 'Eigen portfolio live gezet en meerdere real-world projecten opgeleverd, waaronder Brasserie Hama met Astro, TypeScript en Supabase.', icon: '🌐' },
  ]

  const stats = [
    { label: 'School', value: 'MBO 4' },
    { label: 'Opleiding', value: 'Software Dev' },
    { label: 'Status', value: '3e jaar · 2026' },
  ]

  const skills = [
    { name: 'Frontend', level: 70 },
    { name: 'Backend', level: 50 },
    { name: 'Database', level: 40 },
    { name: 'UI/UX', level: 60 },
  ]

  return (
    <section ref={sectionRef} id="education" className="py-32 relative bg-neutral-950/50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] bg-emerald-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <div 
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)'
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-sm font-mono tracking-widest uppercase">Mijn achtergrond</span>
          </div>
          
          <h2 
            className="text-5xl md:text-7xl font-black text-white tracking-tight"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s'
            }}
          >
            Opleiding & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">ervaring</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-7 relative">
            <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden md:block" />
            
            <div className="space-y-12">
              {journey.map((item, i) => (
                <div 
                  key={i} 
                  className="relative pl-0 md:pl-24 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.15}s`
                  }}
                >
                  <div className="absolute left-8 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-emerald-500 hidden md:flex items-center justify-center group-hover:scale-150 group-hover:bg-emerald-500 transition-all duration-300 z-10">
                    <div className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="bg-neutral-900/40 border border-neutral-800/60 hover:border-emerald-500/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900/80 hover:shadow-[0_8px_30px_rgb(16,185,129,0.05)]">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800/80 text-2xl border border-neutral-700/50 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-emerald-500 font-mono text-sm mb-1">{item.year}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className={`bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 ${i === 2 ? 'col-span-2' : ''}`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.1}s`
                  }}
                >
                  <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-2">{stat.label}</p>
                  <p className="text-white font-semibold text-lg">{stat.value}</p>
                </div>
              ))}
            </div>

            <div 
              className="bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-colors duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.7s'
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-emerald-500/50"></span>
                Technische focus
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-neutral-300 group-hover:text-emerald-400 transition-colors">{skill.name}</span>
                      <span className="text-xs font-mono text-emerald-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1.5s cubic-bezier(0.16,1,0.3,1) ${0.8 + i * 0.1}s`
                        }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-emerald-900/20 to-neutral-900/40 border border-emerald-500/20 hover:border-emerald-500/40 rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.9s'
              }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-colors" />
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Blijven leren</h3>
              <p className="text-sm text-neutral-400 leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                In 2026 breid ik mijn kennis verder uit met cloud deployment, Supabase en moderne frameworks om productieklare en onderhoudbare applicaties te bouwen.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
