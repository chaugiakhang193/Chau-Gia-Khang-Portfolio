import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { LanguageContext, type LanguageContextValue } from './language-context'

const STORAGE_KEY = 'portfolio-lang'

function readInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'vi' ? stored : 'vi'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  // Doi luon thuoc tinh lang cua <html> de trinh doc man hinh doc dung ngon ngu
  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(() => setLangState((prev) => (prev === 'vi' ? 'en' : 'vi')), [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}
