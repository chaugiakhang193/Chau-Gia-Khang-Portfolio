import { profile } from '../data/profile'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'
import { GithubIcon, MailIcon, PhoneIcon } from './icons'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">{profile.name}</p>
          <p className="mt-1 text-sm">{t(ui.footer.built)}</p>
          <p className="mt-1 text-sm text-muted">
            © {year} {profile.name}. {t(ui.footer.rights)}
          </p>
        </div>

        <ul className="flex items-center gap-2">
          <li>
            <a
              href={`mailto:${profile.personal.email}`}
              className="icon-btn"
              aria-label={`${t(ui.common.email)}: ${profile.personal.email}`}
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={`tel:${profile.personal.phone.replace(/\s/g, '')}`}
              className="icon-btn"
              aria-label={`${t(ui.common.phone)}: ${profile.personal.phone}`}
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={profile.personal.github}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label={`${t(ui.common.github)}: ${profile.personal.github}`}
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
