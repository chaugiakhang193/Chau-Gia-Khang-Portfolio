import { AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDialog } from '../components/ProjectDialog'
import { SearchIcon } from '../components/icons'
import { projects, projectTags } from '../data/projects'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'
import type { Project } from '../types'

export function Projects() {
  const { t, lang } = useLanguage()
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [detailProject, setDetailProject] = useState<Project | null>(null)

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesQuery =
        !normalizedQuery || project.name[lang].toLowerCase().includes(normalizedQuery)
      // Chon nhieu tag thi du an phai co du tat ca, khong phai co mot cai la dat
      const matchesTags = activeTags.every((tag) => project.tags.includes(tag))

      return matchesQuery && matchesTags
    })
  }, [query, activeTags, lang])

  const hasFilters = query.trim() !== '' || activeTags.length > 0

  const toggleTag = (tag: string) =>
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]))

  return (
    <>
      <PageHeader title={t(ui.projects.title)} subtitle={t(ui.projects.subtitle)} />

      <section className="page-section pt-6 sm:pt-8" aria-labelledby="projects-heading">
        <div className="container-page">
          <h2 id="projects-heading" className="sr-only">
            {t(ui.projects.title)}
          </h2>

          <div className="card">
            <div>
              <label htmlFor="project-search" className="field-label">
                {t(ui.projects.searchLabel)}
              </label>
              <div className="relative">
                <SearchIcon className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <input
                  id="project-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t(ui.projects.searchPlaceholder)}
                  className="field-input pl-10"
                />
              </div>
            </div>

            <fieldset className="mt-5">
              <legend className="field-label">{t(ui.projects.filterLabel)}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTags([])}
                  aria-pressed={activeTags.length === 0}
                  className={
                    activeTags.length === 0
                      ? 'rounded-full bg-sky-700 px-3.5 py-1.5 text-xs font-semibold text-white'
                      : 'rounded-full border border-zinc-300 px-3.5 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
                  }
                >
                  {t(ui.projects.all)}
                </button>

                {projectTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    aria-pressed={activeTags.includes(tag)}
                    className={
                      activeTags.includes(tag)
                        ? 'rounded-full bg-sky-700 px-3.5 py-1.5 text-xs font-semibold text-white'
                        : 'rounded-full border border-zinc-300 px-3.5 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800'
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-sm" aria-live="polite">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {visibleProjects.length}
                </span>{' '}
                {t(ui.projects.count)}
              </p>

              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setActiveTags([])
                  }}
                  className="text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400"
                >
                  {t(ui.projects.clearFilters)}
                </button>
              )}
            </div>
          </div>

          {visibleProjects.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpenDetails={setDetailProject}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <p className="mt-8 rounded-2xl border border-dashed border-zinc-300 p-10 text-center text-sm dark:border-zinc-700">
              {t(ui.projects.empty)}
            </p>
          )}
        </div>
      </section>

      <ProjectDialog project={detailProject} onClose={() => setDetailProject(null)} />
    </>
  )
}
