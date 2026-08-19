import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { ui } from '../i18n/ui'
import { MoonIcon, SunIcon } from './icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const label = theme === 'dark' ? t(ui.common.toLight) : t(ui.common.toDark)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn relative overflow-hidden"
      title={label}
      aria-label={label}
    >
      {/* Icon cu xoay ra, icon moi xoay vao cho khop voi 300ms doi mau cua ca trang */}
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
