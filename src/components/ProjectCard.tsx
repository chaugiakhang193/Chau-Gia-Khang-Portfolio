import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'
import type { Project } from '../types'
import { ExternalLinkIcon } from './icons'

const VISIBLE_TAGS = 3

interface ProjectCardProps {
  project: Project
  onOpenDetails: (project: Project) => void
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const { t } = useLanguage()

  // Du an co ghi chu rieng thi dung ghi chu do, khong thi ve mac dinh "Chua trien khai"
  const demoNote = project.demoNote ? t(project.demoNote) : t(ui.projects.noDemo)
  const hiddenTagCount = project.tags.length - VISIBLE_TAGS

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="card flex flex-col overflow-hidden p-0 transition-shadow hover:shadow-md"
    >
      <img
        src={project.thumbnail}
        alt={t(project.thumbnailAlt)}
        width={800}
        height={500}
        loading="lazy"
        decoding="async"
        className="aspect-16/10 w-full border-b border-zinc-200 object-cover dark:border-zinc-800"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg">{t(project.name)}</h3>
          <span className="shrink-0 text-xs font-medium text-muted">{project.year}</span>
        </div>

        {/* Cat con 3 dong cho cac card cao bang nhau, ban day du nam trong hop thoai chi tiet */}
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed">{t(project.summary)}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, VISIBLE_TAGS).map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
          {hiddenTagCount > 0 && (
            <li className="chip bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              +{hiddenTagCount} {t(ui.projects.moreTags)}
            </li>
          )}
        </ul>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="btn btn-primary px-4 py-2"
          >
            {t(ui.projects.details)}
          </button>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost px-4 py-2"
            >
              {t(ui.projects.viewDemo)}
            </a>
          ) : (
            /* Khoa nut lai va noi ro ly do, ro rang hon la an nut di */
            <button
              type="button"
              disabled
              aria-disabled="true"
              title={demoNote}
              aria-describedby={`${project.id}-demo-note`}
              className="btn btn-ghost px-4 py-2"
            >
              {t(ui.projects.viewDemo)}
            </button>
          )}
        </div>

        {!project.demo && (
          <p id={`${project.id}-demo-note`} className="mt-2 text-xs text-muted">
            <ExternalLinkIcon className="mr-1 inline h-3.5 w-3.5 align-text-bottom" />
            {demoNote}
          </p>
        )}
      </div>
    </motion.article>
  )
}
