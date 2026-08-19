import type { ReactNode } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { ui } from '../i18n/ui'
import { BackToTop } from './BackToTop'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t(ui.common.skipToContent)}
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
