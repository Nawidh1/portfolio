'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  image_url: string | null
  images?: string[]
  technologies: string[]
  github_url: string | null
  live_url: string | null
  created_at: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: string]: number }>({})
  const [canScroll, setCanScroll] = useState<{ [key: string]: { left: boolean; right: boolean } }>({})
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    // Use sample projects directly - these are my actual projects
    const sampleProjects = getSampleProjects()
    setProjects(sampleProjects)
    // Initialize active image index for all projects
    const initialIndexes: { [key: string]: number } = {}
    const initialScrollState: { [key: string]: { left: boolean; right: boolean } } = {}
    sampleProjects.forEach(project => {
      if (project.images && project.images.length > 0) {
        initialIndexes[project.id] = 0
        // Initially, can't scroll left (at start), can scroll right if more than 1 image
        initialScrollState[project.id] = {
          left: false,
          right: project.images.length > 1
        }
      }
    })
    setActiveImageIndex(initialIndexes)
    setCanScroll(initialScrollState)
    setLoading(false)
  }, [])

  const handleScroll = (projectId: string, container: HTMLDivElement) => {
    const scrollLeft = container.scrollLeft
    const imageWidth = container.scrollWidth / container.children.length
    const currentIndex = Math.round(scrollLeft / imageWidth)
    setActiveImageIndex(prev => ({ ...prev, [projectId]: currentIndex }))
    
    // Update scroll state
    const canScrollLeft = scrollLeft > 10
    const canScrollRight = scrollLeft < container.scrollWidth - container.clientWidth - 10
    setCanScroll(prev => ({
      ...prev,
      [projectId]: { left: canScrollLeft, right: canScrollRight }
    }))
  }

  const scrollImage = (projectId: string, direction: 'left' | 'right') => {
    const container = scrollRefs.current[projectId]
    if (!container) return

    const imageWidth = container.clientWidth
    const currentScroll = container.scrollLeft
    const scrollAmount = direction === 'left' ? -imageWidth : imageWidth
    const newScroll = currentScroll + scrollAmount

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    })
  }

  function getSampleProjects(): Project[] {
    return [
      {
        id: '1',
        title: 'Sadat Victorian Association',
        description: 'A bilingual community website for an Islamic association featuring news, events, resources, and a full admin dashboard. Supports English and Farsi with dynamic content management.',
        image_url: null,
        images: [
          '/projects/sadat/1.png',
          '/projects/sadat/2.png',
          '/projects/sadat/3.png',
          '/projects/sadat/4.png',
          '/projects/sadat/5.png',
          '/projects/sadat/6.png',
          '/projects/sadat/7.png',
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
        github_url: 'https://github.com/Nawidh1/information',
        live_url: null,
        created_at: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Kapper Omid',
        description: 'A barbershop website with online reservation system, user accounts, services management, and admin dashboard. Built with PHP and MySQL.',
        image_url: null,
        images: [
          '/projects/omidtje/preview.png',
          '/projects/omidtje/1.png',
          '/projects/omidtje/2.png',
          '/projects/omidtje/3.png',
          '/projects/omidtje/4.png',
          '/projects/omidtje/5.png',
          '/projects/omidtje/6.png',
          '/projects/omidtje/7.png',
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML', 'PHPMailer'],
        github_url: null,
        live_url: null,
        created_at: new Date().toISOString(),
      },
    ]
  }

  if (loading) {
    return (
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center">
            <div className="w-8 h-8 border border-emerald-600 border-t-transparent animate-spin" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8 reveal text-center lg:text-left">
          <div>
            <p className="text-emerald-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              My <span className="font-bold">Projects</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md mx-auto lg:mx-0">
            Projects I&apos;ve built while learning. Each one helped me grow as a developer.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-lg">
            <p className="text-neutral-500 text-lg mb-4">No projects yet</p>
            <p className="text-neutral-600 text-sm">Projects will appear here once added to the database</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group reveal flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-neutral-900 via-emerald-950/10 to-neutral-900 border border-emerald-800/30 hover:border-emerald-600/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  {/* Project Images with Scroll */}
                  <div className="aspect-video bg-neutral-800 relative overflow-hidden group/image-container">
                    {project.images && project.images.length > 0 ? (
                      <>
                        <div 
                          ref={(el) => { 
                            scrollRefs.current[project.id] = el
                            if (el && !canScroll[project.id]) {
                              // Initialize scroll state
                              const canScrollLeft = el.scrollLeft > 10
                              const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 10
                              setCanScroll(prev => ({
                                ...prev,
                                [project.id]: { left: canScrollLeft, right: canScrollRight }
                              }))
                            }
                          }}
                          className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                          onScroll={(e) => handleScroll(project.id, e.currentTarget)}
                        >
                          {project.images.map((img, imgIndex) => (
                            <div 
                              key={imgIndex} 
                              className="flex-shrink-0 w-full h-full snap-center relative bg-gradient-to-br from-neutral-800 via-emerald-950/10 to-neutral-800 flex items-center justify-center p-2"
                              style={{ minWidth: '100%', width: '100%' }}
                            >
                              <img
                                src={img}
                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                className="max-w-full max-h-full w-auto h-auto object-contain"
                                style={{ display: 'block' }}
                              />
                            </div>
                          ))}
                        </div>
                        
                        {/* Scroll Arrow Buttons */}
                        {project.images.length > 1 && (
                          <>
                            {/* Left Arrow */}
                            <button
                              onClick={() => scrollImage(project.id, 'left')}
                              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 backdrop-blur-sm hover:bg-emerald-600/80 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover/image-container:opacity-100 ${
                                canScroll[project.id]?.left !== false ? 'cursor-pointer hover:scale-110' : 'opacity-30 cursor-not-allowed'
                              }`}
                              aria-label="Scroll left"
                              disabled={canScroll[project.id]?.left === false}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            
                            {/* Right Arrow */}
                            <button
                              onClick={() => scrollImage(project.id, 'right')}
                              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 backdrop-blur-sm hover:bg-emerald-600/80 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover/image-container:opacity-100 ${
                                canScroll[project.id]?.right !== false ? 'cursor-pointer hover:scale-110' : 'opacity-30 cursor-not-allowed'
                              }`}
                              aria-label="Scroll right"
                              disabled={canScroll[project.id]?.right === false}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}
                        
                        {/* Scroll indicator dots */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-neutral-900/60 backdrop-blur-sm px-2 py-1 rounded-full">
                            {project.images.map((_, dotIndex) => (
                              <div 
                                key={dotIndex}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  (activeImageIndex[project.id] ?? 0) === dotIndex
                                    ? 'bg-emerald-500 w-6'
                                    : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    ) : project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl font-bold text-neutral-700 group-hover:text-emerald-600/30 transition-colors">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Project Info */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-500 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-neutral-600 text-sm font-mono shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 border border-neutral-800 text-neutral-500 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 pt-4 border-t border-neutral-800 mt-auto">
                      <Link
                        href={`/projects/${project.id}`}
                        className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </Link>
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-500 hover:text-emerald-500 transition-colors text-sm"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                          View Code
                        </a>
                      )}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-500 hover:text-emerald-500 transition-colors text-sm"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Project Note */}
        <div className="mt-12 text-center reveal">
          <p className="text-neutral-600 text-sm">
            More projects coming soon as I continue learning and building
          </p>
        </div>
      </div>
    </section>
  )
}
