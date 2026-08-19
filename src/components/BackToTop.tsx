import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollTrigger } from '../hooks/useScrollTrigger'
import { ui } from '../i18n/ui'
import { ArrowUpIcon } from './icons'

export function BackToTop() {
  const isVisible = useScrollTrigger(400)
  const { t } = useLanguage()
  const label = t(ui.common.backToTop)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-5 bottom-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg transition-colors hover:bg-sky-500"
          title={label}
          aria-label={label}
        >
          <ArrowUpIcon className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
