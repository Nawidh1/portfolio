'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

interface ProjectDetail {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  images: string[]
  technologies: string[]
  github_url: string | null
  live_url: string | null
}

const projectsData: Record<string, ProjectDetail> = {
  '1': {
    id: '1',
    title: 'Sadat Victorian Association',
    description: 'A bilingual community website for an Islamic association.',
    longDescription: `This project is a full-featured community website built for the Sadat Victorian Association. 
    
The website serves as a central hub for the community, providing information about events, news, resources, and ways to get involved. 

One of the key features is the bilingual support - users can switch between English and Farsi, making the content accessible to a wider audience.

The admin dashboard allows authorized users to manage all content including news articles, events, resources, and homepage sections without needing to edit code.`,
    features: [
      'Bilingual support (English & Farsi)',
      'Dynamic content management',
      'Admin dashboard with authentication',
      'News and events management',
      'Resources library',
      'Contact form',
      'Responsive design',
    ],
    images: [
      '/projects/preview.jpg',
      '/projects/sadat-2.jpg',
      '/projects/sadat-3.jpg',
      '/projects/sadat-4.jpg',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
    github_url: 'https://github.com/Nawidh1/information',
    live_url: null,
  },
  '2': {
    id: '2',
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js.',
    longDescription: `This is my personal portfolio website that you're currently viewing! Built with modern web technologies to showcase my projects and skills.

The site features interactive elements like the robot buddy, cursor trail, floating code particles, and smooth scroll animations to create an engaging user experience.

The design follows a dark theme with amber accents, creating a professional and modern look. The site is fully responsive and works great on all devices.`,
    features: [
      'Interactive animations',
      'Robot buddy assistant',
      'Smooth scroll effects',
      'Responsive design',
      'Project showcase',
      'Contact section',
      'Dark theme with amber accents',
    ],
    images: [
      '/projects/preview.jpg',
      '/projects/portfolio-2.jpg',
      '/projects/portfolio-3.jpg',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    github_url: 'https://github.com/Nawidh1/portfolio',
    live_url: null,
  },
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId]
  const [selectedImage, setSelectedImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-amber-500 hover:text-amber-400">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-light tracking-widest text-white hover:text-amber-500 transition-colors"
          >
            NAWID<span className="font-bold">H</span>
          </Link>
          <Link
            href="/#projects"
            className="text-neutral-400 hover:text-amber-500 transition-colors text-sm uppercase tracking-wider"
          >
            ← Back to Projects
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Title Section */}
          <div className="mb-12">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Project Details
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-amber-600/50 text-amber-500 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-16">
            {/* Main Image */}
            <div className="aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden mb-4">
              <img
                src={project.images[selectedImage]}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-32 h-20 overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-amber-500'
                        : 'border-neutral-800 hover:border-neutral-600'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">About This Project</h2>
              <div className="text-neutral-400 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-400">
                      <span className="text-amber-500 mt-1">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Links</h3>
                <div className="flex flex-col gap-3">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 bg-neutral-900 border border-neutral-800 hover:border-amber-600/50 text-neutral-300 hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 bg-amber-600 hover:bg-amber-500 text-neutral-950 font-medium transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Nawid Haidari
          </p>
        </div>
      </footer>
    </div>
  )
}
