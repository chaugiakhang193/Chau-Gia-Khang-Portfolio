import { useCallback, useContext } from 'react'
import { LanguageContext } from '../context/language-context'
import type { Localized } from '../types'

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage phải được dùng bên trong <LanguageProvider>')
  }

  const { lang } = context

  /** Lay ban dich theo ngon ngu dang chon: t(ui.home.ctaProjects) */
  const t = useCallback(<T,>(value: Localized<T>): T => value[lang], [lang])

  return { ...context, t }
}
