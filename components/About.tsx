'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

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
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Label */}
        <div className={`flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
            </div>
            <span className="text-emerald-500 text-sm font-mono tracking-widest uppercase">About Me</span>
          </div>
          <div className={`flex-1 h-px origin-left ${isVisible ? 'animate-[reveal-line_1.5s_ease-out_forwards]' : 'scale-x-0'}`} style={{ background: 'linear-gradient(90deg, #10b981, transparent)' }} />
        </div>

        {/* Hero Area */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 mb-12 sm:mb-20">

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
                      <div className="gradient-text text-sm font-medium mt-1">Software Development Student</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements around image */}
            <div className={`hidden sm:block absolute -top-6 -right-6 w-20 h-20 border border-emerald-500/20 rounded-full transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            <div className={`hidden sm:block absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500/10 rounded-lg transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-50 rotate-0'}`} />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Animated heading - word by word */}
            <div className="mb-8" style={{ perspective: '600px' }}>
              {['Passionate', 'about', 'building', 'digital', 'experiences.'].map((word, i) => (
                <span
                  key={i}
                  className={isVisible ? 'word-animate' : 'opacity-0'}
                  style={{
                    animationDelay: `${0.4 + i * 0.12}s`,
                    marginRight: '0.35em',
                    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                    fontWeight: word === 'building' || word === 'experiences.' ? 700 : 300,
                    color: word === 'building' || word === 'digital' ? undefined : '#e5e5e5',
                  }}
                >
                  {(word === 'building' || word === 'digital') ? (
                    <span className="gradient-text">{word}</span>
                  ) : word}
                </span>
              ))}
            </div>

            {/* Description paragraphs with staggered reveal */}
            <div className="space-y-4 mb-10">
              {[
                "I'm Nawid Haidari, a third-year Software Development student (MBO 4) with a passion for building software that works well and feels great for the user.",
                "I love solving technical challenges and I grow with every project I take on. Read more about what I build, my projects, background, and interests below.",
              ].map((text, i) => (
                <p
                  key={i}
                  className={`text-neutral-400 text-base sm:text-lg leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${900 + i * 150}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Education row */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '1200ms' }}>
              {[
                { value: 'MBO 4', label: 'Level' },
                { value: 'Year 3', label: 'Current' },
                { value: '2026', label: 'Graduating' },
                { value: '8 yrs', label: 'In Netherlands' },
              ].map((stat, i) => (
                <div key={i} className="group text-center p-3 sm:p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-emerald-500/30 hover:bg-emerald-950/20 transition-all duration-400 cursor-default">
                  <div className="text-xl sm:text-2xl md:text-3xl font-light text-emerald-500 mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">{stat.value}</div>
                  <div className="text-xs text-neutral-600 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What I build */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1350ms' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">What I Build</h3>
          <p className="text-neutral-500 text-sm sm:text-base mb-6 max-w-2xl">
            During my studies and projects I work on different types of software — always with the user in mind.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: '🌐',
                title: 'Websites',
                desc: 'Responsive websites for businesses and organizations, with clear structure, menus, contact forms, and a professional look.',
              },
              {
                icon: '⚙️',
                title: 'Web Applications',
                desc: 'Systems with user accounts, admin dashboards, bookings, content management, and database integrations.',
              },
              {
                icon: '🗄️',
                title: 'Databases & Backend',
                desc: 'Storing and managing data with SQL, MySQL, Supabase, and PostgreSQL — secure, structured, and production-ready.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project experience */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1650ms' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Project Experience</h3>
          <p className="text-neutral-500 text-sm sm:text-base mb-6 max-w-2xl">
            Some projects I've built during my studies and beyond.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Sadat Victorian Association',
                desc: 'Bilingual community website with news, events, and admin dashboard.',
                tech: 'PHP · CSS · JavaScript',
              },
              {
                title: 'Kapper Omid',
                desc: 'Barber shop website with online bookings, user accounts, and email notifications.',
                tech: 'PHP · CSS · PHPMailer',
              },
              {
                title: 'Brasserie Pizzeria Hama',
                desc: 'Restaurant website with full menu, ordering, and reservations.',
                tech: 'Astro · TypeScript · PL/pgSQL',
              },
              {
                title: 'Personal Portfolio',
                desc: 'This website — built with Next.js, Supabase, and deployed on Vercel.',
                tech: 'Next.js · React · Tailwind CSS',
              },
            ].map((project) => (
              <div
                key={project.title}
                className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/50 hover:border-emerald-500/30 transition-colors"
              >
                <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                <p className="text-neutral-400 text-sm mb-2">{project.desc}</p>
                <p className="text-emerald-500/80 text-xs font-mono">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Background */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1700ms' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Background</h3>
          <p className="text-neutral-500 text-sm sm:text-base mb-6 max-w-2xl">
            A brief look at my family, where I live, and what I plan after graduation.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: '👨‍👩‍👦‍👦',
                title: 'Family',
                desc: 'I have four brothers. One brother is married and lives in Australia; the rest of my family lives in the Netherlands.',
              },
              {
                icon: '🇳🇱',
                title: 'Netherlands',
                desc: "We've been living in the Netherlands for almost 8 years. Here I study Software Development and build my career as a developer.",
              },
              {
                icon: '🇦🇺',
                title: 'Plans for Australia',
                desc: 'After completing my studies, I plan to move to Australia — also to be closer to family.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & interests */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1750ms' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Beyond Code</h3>
          <p className="text-neutral-500 text-sm sm:text-base mb-6 max-w-2xl">
            Besides software development, I have other interests that keep me sharp and curious.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: '⚽',
                title: 'Football',
                desc: 'I love football — watching, playing, and following the sport keeps me active and competitive.',
              },
              {
                icon: '🎮',
                title: 'Gaming',
                desc: 'I enjoy gaming in my free time. It also helps me think faster and solve problems.',
              },
              {
                icon: '🚀',
                title: 'Future Technology',
                desc: 'I follow new tech and innovations — AI, cloud, modern frameworks, and what the future brings.',
              },
              {
                icon: '📈',
                title: 'Crypto & Trading',
                desc: 'In my free time I learn about crypto and stock trading to better understand markets and technology.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/50 hover:border-emerald-500/30 transition-colors"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div
          className={`p-6 sm:p-8 md:p-10 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1900ms' }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Where I'm Headed</h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-6">
            After my studies I want to grow as a full-stack developer and move to Australia. There I hope to find work in the tech sector, keep learning from experienced developers, and contribute to meaningful projects — in the Netherlands or internationally, as long as I can keep building and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-emerald-600 text-neutral-950 font-medium text-sm uppercase tracking-wider hover:bg-emerald-500 transition-colors rounded-lg"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-neutral-700 text-white font-medium text-sm uppercase tracking-wider hover:border-emerald-600 hover:text-emerald-500 transition-colors rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
