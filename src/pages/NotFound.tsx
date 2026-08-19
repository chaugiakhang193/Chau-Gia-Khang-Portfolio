import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/icons'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'

export function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="page-section" aria-labelledby="not-found-heading">
      <div className="container-page flex flex-col items-center py-16 text-center">
        <p className="text-6xl font-bold text-sky-700 sm:text-7xl dark:text-sky-400">404</p>

        <h1 id="not-found-heading" className="mt-4 text-3xl">
          {t(ui.notFound.title)}
        </h1>

        <p className="mt-3 max-w-md">{t(ui.notFound.body)}</p>

        <Link to="/" className="btn btn-primary mt-8">
          {t(ui.notFound.back)}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
