'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getLocalizedProjectsByCategory, type LocalizedProject } from '@/lib/i18n'
import type { ProjectCategory } from '@/lib/projects'

function ProjectCard({
  project,
  categoryLabel,
  photoCountLabel,
  viewDetailsLabel,
  liveDemoLabel,
}: {
  project: LocalizedProject
  categoryLabel: string
  photoCountLabel: string
  viewDetailsLabel: string
  liveDemoLabel: string
}) {
  const preview = project.images[0]

  return (
    <article className="group reveal">
      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-neutral-800/70 bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-neutral-900/80 hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)]">
        <Link href={`/projects/${project.id}`} className="block relative aspect-[16/10] overflow-hidden bg-neutral-950">
          {preview ? (
            <Image
              src={preview}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-6xl font-bold text-neutral-800">
              {project.title.charAt(0)}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-400">
              {categoryLabel}
            </span>
            {project.images.length > 1 && (
              <span className="rounded-full border border-neutral-700/80 bg-neutral-950/80 px-3 py-1 text-[11px] font-mono text-neutral-400">
                {project.images.length} {photoCountLabel}
              </span>
            )}
          </div>

          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
            {project.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-400">
            {project.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-neutral-800 bg-neutral-950/50 px-2.5 py-1 text-[11px] text-neutral-500"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-neutral-800/80 pt-4">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-950 transition-colors hover:bg-emerald-500"
            >
              {viewDetailsLabel}
            </Link>
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-300 transition-colors hover:border-emerald-600 hover:text-emerald-400"
              >
                {liveDemoLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectSection({
  icon,
  title,
  subtitle,
  projects,
  categoryLabel,
  photoCountLabel,
  viewDetailsLabel,
  liveDemoLabel,
}: {
  icon: string
  title: string
  subtitle: string
  projects: LocalizedProject[]
  categoryLabel: string
  photoCountLabel: string
  viewDetailsLabel: string
  liveDemoLabel: string
}) {
  if (projects.length === 0) return null

  return (
    <div className="mb-16 sm:mb-20 last:mb-0">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between reveal">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 text-2xl">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
            <p className="mt-1 max-w-xl text-sm text-neutral-500 sm:text-base">{subtitle}</p>
          </div>
        </div>
        <span className="w-fit rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 font-mono text-xs text-neutral-500">
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            categoryLabel={categoryLabel}
            photoCountLabel={photoCountLabel}
            viewDetailsLabel={viewDetailsLabel}
            liveDemoLabel={liveDemoLabel}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const { locale, t } = useLanguage()
  const p = t.projects
  const schoolProjects = getLocalizedProjectsByCategory(locale, 'school')
  const clientProjects = getLocalizedProjectsByCategory(locale, 'client')
  const hasProjects = schoolProjects.length > 0 || clientProjects.length > 0

  const sectionProps = (category: ProjectCategory) => ({
    categoryLabel: category === 'school' ? p.schoolBadge : p.clientBadge,
    photoCountLabel: p.photoCount,
    viewDetailsLabel: p.viewDetails,
    liveDemoLabel: p.liveDemo,
  })

  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] right-[5%] h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[15%] left-[0%] h-96 w-96 rounded-full bg-emerald-600/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-14 flex flex-col items-center text-center reveal sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">{p.label}</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            {p.title}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              {p.titleBold}
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">{p.subtitle}</p>
        </div>

        {!hasProjects ? (
          <div className="rounded-2xl border border-dashed border-neutral-800 py-20 text-center">
            <p className="mb-2 text-lg text-neutral-500">{p.emptyTitle}</p>
            <p className="text-sm text-neutral-600">{p.emptySubtitle}</p>
          </div>
        ) : (
          <>
            <ProjectSection
              icon="🎓"
              title={p.schoolSection.title}
              subtitle={p.schoolSection.subtitle}
              projects={schoolProjects}
              {...sectionProps('school')}
            />
            <ProjectSection
              icon="💼"
              title={p.clientSection.title}
              subtitle={p.clientSection.subtitle}
              projects={clientProjects}
              {...sectionProps('client')}
            />
          </>
        )}

        <p className="mt-12 text-center text-sm text-neutral-600 reveal">{p.footerNote}</p>
      </div>
    </section>
  )
}
