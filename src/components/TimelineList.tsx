import { useLanguage } from '../hooks/useLanguage'
import type { TimelineEntry } from '../types'

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  const { t } = useLanguage()

  return (
    <ol className="relative space-y-6 border-l border-zinc-200 pl-6 dark:border-zinc-800">
      {entries.map((entry) => (
        <li key={entry.id} className="relative">
          <span
            className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-zinc-50 bg-sky-700 dark:border-zinc-950"
            aria-hidden="true"
          />

          <article className="card">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg">{t(entry.role)}</h3>
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
                {entry.period}
              </p>
            </div>

            <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t(entry.org)}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-sky-500">
              {t(entry.bullets).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  )
}
