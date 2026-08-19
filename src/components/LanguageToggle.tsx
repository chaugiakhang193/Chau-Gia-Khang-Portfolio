import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'

export function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()
  const label = t(ui.common.switchLang)

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="icon-btn w-auto px-3 text-sm font-semibold"
      title={label}
      aria-label={label}
    >
      <span className={lang === 'vi' ? 'text-sky-700 dark:text-sky-400' : ''}>VI</span>
      <span aria-hidden="true" className="mx-1 text-zinc-400">
        /
      </span>
      <span className={lang === 'en' ? 'text-sky-700 dark:text-sky-400' : ''}>EN</span>
    </button>
  )
}
