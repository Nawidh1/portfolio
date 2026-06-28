'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLocalizedProject, getLocalizedProjects } from '@/lib/i18n'
import SiteFrame from '@/components/SiteFrame'

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const { locale, t } = useLanguage()
  const project = getLocalizedProject(projectId, locale)
  const allProjects = getLocalizedProjects(locale)
  const [selectedImage, setSelectedImage] = useState(0)
  const p = t.projects

  const currentIndex = allProjects.findIndex((item) => item.id === projectId)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  if (!project) {
    return (
      <SiteFrame>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">{p.notFound}</h1>
            <Link href="/projects" className="text-emerald-500 hover:text-emerald-400">
              {p.backToProjects}
            </Link>
          </div>
        </div>
      </SiteFrame>
    )
  }

  const categoryLabel = project.category === 'school' ? p.schoolBadge : p.clientBadge

  return (
    <SiteFrame>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/5 blur-[140px]" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-600/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-neutral-500 reveal">
            <Link href="/projects" className="transition-colors hover:text-emerald-400">
              {t.nav.projects}
            </Link>
            <span>/</span>
            <span className="text-neutral-300">{project.title}</span>
          </nav>

          {/* Hero */}
          <div className="mb-10 grid gap-8 lg:grid-cols-12 lg:gap-10 reveal">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800/70 bg-neutral-900/40 backdrop-blur-sm">
                <div className="relative aspect-video bg-neutral-950">
                  {project.images.length > 0 ? (
                    <Image
                      src={project.images[selectedImage]}
                      alt={`${project.title} ${p.screenshot} ${selectedImage + 1}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain p-3 sm:p-4"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-8xl font-bold text-neutral-800">
                      {project.title.charAt(0)}
                    </div>
                  )}

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImage((prev) => Math.max(0, prev - 1))}
                        disabled={selectedImage === 0}
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-950/90 text-white transition-all hover:border-emerald-500 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-30 sm:left-4 sm:h-11 sm:w-11"
                        aria-label={p.scrollLeft}
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setSelectedImage((prev) => Math.min(project.images.length - 1, prev + 1))}
                        disabled={selectedImage === project.images.length - 1}
                        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-950/90 text-white transition-all hover:border-emerald-500 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-30 sm:right-4 sm:h-11 sm:w-11"
                        aria-label={p.scrollRight}
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute top-4 right-4 rounded-full border border-neutral-700/80 bg-neutral-950/90 px-3 py-1 font-mono text-xs text-neutral-300">
                        {selectedImage + 1} / {project.images.length}
                      </div>
                    </>
                  )}
                </div>

                {project.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto border-t border-neutral-800/80 p-3 scrollbar-hide">
                    {project.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-20 sm:w-28 ${
                          selectedImage === index
                            ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                            : 'border-neutral-800 opacity-60 hover:border-neutral-600 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${p.thumbnail} ${index + 1}`}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-2xl border border-neutral-800/70 bg-neutral-900/40 p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                    {categoryLabel}
                  </span>
                  <span className="font-mono text-xs text-neutral-500">
                    {new Date(project.created_at).getFullYear()}
                  </span>
                </div>

                <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-emerald-500">
                  {p.projectDetails}
                </p>
                <h1 className="mb-4 text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
                  {project.title}
                </h1>
                <p className="mb-6 text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-neutral-950 transition-colors hover:bg-emerald-500"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {p.liveDemo}
                  </a>
                )}

                <Link
                  href="/projects"
                  className="flex w-full items-center justify-center rounded-xl border border-neutral-700 px-6 py-3 text-sm uppercase tracking-wider text-neutral-300 transition-colors hover:border-emerald-600 hover:text-emerald-400"
                >
                  {p.backToProjects}
                </Link>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mb-10 rounded-2xl border border-neutral-800/70 bg-neutral-900/40 p-6 backdrop-blur-sm sm:p-8 reveal">
            <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">{p.aboutProject}</h2>
            <div className="whitespace-pre-line text-sm leading-relaxed text-neutral-400 sm:text-base">
              {project.longDescription}
            </div>
          </div>

          {/* Features grid */}
          <div className="reveal">
            <h2 className="mb-5 text-xl font-bold text-white sm:text-2xl">{p.features}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-neutral-800/70 bg-neutral-900/30 p-4 transition-colors hover:border-emerald-500/30 hover:bg-neutral-900/60"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                    {index + 1}
                  </span>
                  <span className="text-sm text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          {(prevProject || nextProject) && (
            <div className="mt-12 grid gap-4 border-t border-neutral-800/80 pt-8 sm:grid-cols-2 reveal">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="group rounded-xl border border-neutral-800/70 bg-neutral-900/30 p-5 transition-all hover:border-emerald-500/30 hover:bg-neutral-900/60"
                >
                  <span className="mb-1 block text-xs uppercase tracking-wider text-neutral-500">← {p.back}</span>
                  <span className="font-medium text-white group-hover:text-emerald-400">{prevProject.title}</span>
                </Link>
              ) : (
                <div />
              )}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group rounded-xl border border-neutral-800/70 bg-neutral-900/30 p-5 text-right transition-all hover:border-emerald-500/30 hover:bg-neutral-900/60 sm:col-start-2"
                >
                  <span className="mb-1 block text-xs uppercase tracking-wider text-neutral-500">{p.viewDetails} →</span>
                  <span className="font-medium text-white group-hover:text-emerald-400">{nextProject.title}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </SiteFrame>
  )
}
