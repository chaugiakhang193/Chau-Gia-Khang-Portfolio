import { useEffect, useState } from 'react'

/** Tra ve true khi da cuon qua nguong, dung cho nut "Len dau trang". */
export function useScrollTrigger(threshold = 400) {
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    const update = () => setPassed(window.scrollY > threshold)

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return passed
}
