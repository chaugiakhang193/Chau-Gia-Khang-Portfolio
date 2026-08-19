import { motion, useAnimationControls, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Thanh gradient mong chay ngang mep tren moi lan doi route.
 * Doc lap voi PageTransition va khong che noi dung nen khong lam nguoi doc mat mach.
 */
export function RouteProgress() {
  const { pathname } = useLocation()
  const controls = useAnimationControls()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    let cancelled = false

    const play = async () => {
      controls.set({ scaleX: 0, opacity: 1 })
      await controls.start({ scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } })
      if (cancelled) return
      await controls.start({ opacity: 0, transition: { duration: 0.3 } })
    }

    void play()

    return () => {
      cancelled = true
    }
  }, [pathname, controls, shouldReduceMotion])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5" aria-hidden="true">
      <motion.div
        className="h-full w-full origin-left bg-linear-to-r from-[#00d4ff] via-[#6366f1] to-[#bb86fc]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={controls}
      />
    </div>
  )
}
