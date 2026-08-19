import { motion, useReducedMotion } from 'framer-motion'

export function SkillBar({ name, level }: { name: string; level: number }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{name}</span>
        <span className="text-xs font-semibold text-sky-700 dark:text-sky-400">{level}%</span>
      </div>

      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-cyan-500 to-indigo-500"
          initial={shouldReduceMotion ? false : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={shouldReduceMotion ? { width: `${level}%` } : undefined}
        />
      </div>
    </li>
  )
}
