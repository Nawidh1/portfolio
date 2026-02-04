'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Project {
  id: string
  title: string
  description: string
  image_url: string | null
  technologies: string[]
  github_url: string | null
  live_url: string | null
  created_at: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          setProjects(getSampleProjects())
        } else if (data && data.length > 0) {
          setProjects(data)
        } else {
          setProjects(getSampleProjects())
        }
      } catch {
        setProjects(getSampleProjects())
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  function getSampleProjects(): Project[] {
    return [
      {
        id: '1',
        title: 'Portfolio Website',
        description: 'My personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.',
        image_url: null,
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        github_url: 'https://github.com',
        live_url: null,
        created_at: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'School Project',
        description: 'A web application project developed during my MBO Software Development course.',
        image_url: null,
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        github_url: 'https://github.com',
        live_url: null,
        created_at: new Date().toISOString(),
      },
    ]
  }

  if (loading) {
    return (
      <section id="projects" className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center">
            <div className="w-8 h-8 border border-amber-600 border-t-transparent animate-spin" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-32 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8 reveal">
          <div>
            <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              My <span className="font-bold">Projects</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md">
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
                className="group reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-neutral-900 border border-neutral-800 hover:border-amber-600/50 transition-all duration-300 overflow-hidden">
                  {/* Project Image/Placeholder */}
                  <div className="aspect-video bg-neutral-800 flex items-center justify-center relative overflow-hidden">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-neutral-700 group-hover:text-amber-600/30 transition-colors">
                        {project.title.charAt(0)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
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

                    <div className="flex gap-6 pt-4 border-t border-neutral-800">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-500 hover:text-amber-500 transition-colors text-sm"
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
                          className="flex items-center gap-2 text-neutral-500 hover:text-amber-500 transition-colors text-sm"
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
        <div className="mt-16 text-center reveal">
          <p className="text-neutral-600 text-sm">
            More projects coming soon as I continue learning and building
          </p>
        </div>
      </div>
    </section>
  )
}
