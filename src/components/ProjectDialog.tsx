import { useEffect, useRef, type MouseEvent } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'
import type { Project } from '../types'
import { CloseIcon, ExternalLinkIcon, GithubIcon } from './icons'

interface ProjectDialogProps {
  project: Project | null
  onClose: () => void
}

/**
 * Dung the <dialog> co san cua trinh duyet thay vi tu dung modal:
 * showModal() lo san viec kho focus ben trong, dong bang Escape, chan tuong tac voi nen,
 * va tra focus ve dung nut vua bam khi dong.
 */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  const { t } = useLanguage()

  if (!project) return null

  const demoNote = project.demoNote ? t(project.demoNote) : t(ui.projects.noDemo)

  // Bao nhieu nut thi chia bay nhieu cot cho hang nut trai kin be ngang hop thoai.
  // Viet ro tung lop de Tailwind quet duoc, khong ghep chuoi dong.
  const buttonCount = [project.github, project.docs, project.demo].filter(Boolean).length
  const buttonGridClass =
    buttonCount >= 3 ? 'sm:grid-cols-3' : buttonCount === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'

  // Bam ra vung nen (chinh the dialog) thi dong, bam trong noi dung thi khong
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="project-dialog-title"
      className="m-auto w-[min(42rem,92vw)] rounded-2xl border border-zinc-200 bg-white p-0 text-zinc-700 backdrop:bg-black/60 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
    >
      <div className="max-h-[85vh] overflow-y-auto">
        <img
          src={project.thumbnail}
          alt={t(project.thumbnailAlt)}
          className="aspect-16/9 w-full border-b border-zinc-200 object-cover dark:border-zinc-800"
        />

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="project-dialog-title" className="text-xl sm:text-2xl">
                {t(project.name)}
              </h2>
              <p className="mt-1 text-sm text-muted">{project.year}</p>
            </div>

            {/* Nut dong de nhe: khong vien, chi hien nen khi ro chuot hoac focus */}
            <button
              type="button"
              onClick={onClose}
              className="-mt-1 -mr-1 flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              aria-label={t(ui.projects.close)}
            >
              <kbd className="hidden font-sans sm:inline">Esc</kbd>
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed">{t(project.summary)}</p>

          <h3 className="mt-6 text-xs font-semibold tracking-wide text-muted uppercase">
            {t(ui.projects.highlightsTitle)}
          </h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-sky-500">
            {t(project.highlights).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>

          <div className={`mt-6 grid gap-2 ${buttonGridClass}`}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost px-4 py-2"
              >
                <GithubIcon className="h-4 w-4" />
                {t(ui.projects.viewGithub)}
              </a>
            )}

            {project.docs && (
              <a
                href={project.docs}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost px-4 py-2"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                {t(ui.projects.viewDocs)}
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-4 py-2"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                {t(ui.projects.viewDemo)}
              </a>
            )}
          </div>

          {!project.demo && (
            <p className="mt-3 text-center text-xs text-muted">{demoNote}</p>
          )}
        </div>
      </div>
    </dialog>
  )
}
