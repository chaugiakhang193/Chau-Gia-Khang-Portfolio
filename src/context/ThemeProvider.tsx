import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme, type ThemeContextValue } from './theme-context'

const STORAGE_KEY = 'portfolio-theme'
const TRANSITION_CLASS = 'theme-switching'
const TRANSITION_MS = 300

function readInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  // Chua chon lan nao thi theo cai dat cua he dieu hanh
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)
  const cleanupTimer = useRef(0)

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', theme === 'dark')
    // Bao cho trinh duyet biet de thanh cuon va control mac dinh doi mau theo
    root.style.colorScheme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => () => window.clearTimeout(cleanupTimer.current), [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement

    // Bat transition mau ngay truoc khi doi class, go ra sau khi chay xong
    root.classList.add(TRANSITION_CLASS)
    window.clearTimeout(cleanupTimer.current)
    cleanupTimer.current = window.setTimeout(() => {
      root.classList.remove(TRANSITION_CLASS)
    }, TRANSITION_MS + 50)

    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo<ThemeContextValue>(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext value={value}>{children}</ThemeContext>
}
