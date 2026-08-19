import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

export function Tabs({ items, ariaLabel }: { items: TabItem[]; ariaLabel: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const activeItem = items.find((item) => item.id === activeId) ?? items[0]

  // Mui ten trai/phai de chuyen tab bang ban phim theo chuan WAI-ARIA
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return

    event.preventDefault()
    const currentIndex = items.findIndex((item) => item.id === activeId)
    const step = event.key === 'ArrowRight' ? 1 : -1
    const nextItem = items[(currentIndex + step + items.length) % items.length]

    setActiveId(nextItem.id)
    tabRefs.current[nextItem.id]?.focus()
  }

  if (!activeItem) return null

  return (
    <div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex flex-wrap gap-1 rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
      >
        {items.map((item) => {
          const isActive = item.id === activeItem.id

          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[item.id] = node
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={handleKeyDown}
              className={
                isActive
                  ? 'flex-1 rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white'
                  : 'flex-1 rounded-lg px-4 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id}
          id={`panel-${activeItem.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeItem.id}`}
          tabIndex={0}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-6 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
        >
          {activeItem.content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
