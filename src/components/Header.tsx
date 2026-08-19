import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../data/nav'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'
import { CloseIcon, MenuIcon } from './icons'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

const MOBILE_MENU_ID = 'mobile-menu'

function navLinkClass({ isActive }: { isActive: boolean }) {
  const base = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'
  return isActive
    ? `${base} bg-sky-50 text-sky-800 dark:bg-sky-950 dark:text-sky-300`
    : `${base} text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100`
}

export function Header() {
  const { t } = useLanguage()
  const { pathname } = useLocation()

  // Luu route luc mo menu thay vi mot co boolean: doi route la menu tu dong dong,
  // khong can effect goi setState nen khong sinh them mot lan render thua
  const [openedAtPath, setOpenedAtPath] = useState<string | null>(null)
  const isMenuOpen = openedAtPath === pathname

  const toggleMenu = () => setOpenedAtPath(isMenuOpen ? null : pathname)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenedAtPath(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/85">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <nav aria-label={t(ui.common.mainNav)} className="-ml-3 hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={isMenuOpen ? t(ui.common.closeMenu) : t(ui.common.openMenu)}
          >
            {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id={MOBILE_MENU_ID}
            aria-label={t(ui.common.mainNav)}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-zinc-200 bg-zinc-50 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
          >
            <ul className="container-page flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `${navLinkClass({ isActive })} block`}
                  >
                    {t(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
