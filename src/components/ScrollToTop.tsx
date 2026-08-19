import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Doi route thi dua trang ve dau, neu khong React Router giu nguyen vi tri cuon cu. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
