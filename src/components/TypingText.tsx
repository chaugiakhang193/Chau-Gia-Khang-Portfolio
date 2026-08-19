import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Tinh theo tong thoi luong chu khong theo tung ky tu, de cau tieng Viet va tieng Anh
// dai ngan khac nhau van go xong trong cung mot khoang thoi gian
const TOTAL_TYPE_MS = 10_000
const TOTAL_DELETE_MS = 1_500
const HOLD_FULL_MS = 5_000
const HOLD_EMPTY_MS = 1_000

interface TypingTextProps {
  phrases: string[]
  /** false = go het mot lan roi giu nguyen chu tren man hinh (dung cho doan gioi thieu). */
  loop?: boolean
  className?: string
}

/** Go tung ky tu, co the lap qua nhieu cau hoac dung lai sau khi go xong. */
export function TypingText({ phrases, loop = true, className }: TypingTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Chuoi hoa danh sach de effect phu thuoc gia tri, khong phu thuoc dia chi mang
  const phrasesKey = JSON.stringify(phrases)

  useEffect(() => {
    if (shouldReduceMotion) return

    const items = JSON.parse(phrasesKey) as string[]
    const current = items[index % items.length]
    const isFull = !isDeleting && text === current
    const isEmpty = isDeleting && text === ''

    // Go xong ma khong lap thi dung han, giu nguyen chu tren man hinh
    if (isFull && !loop) return

    const perChar = isDeleting
      ? TOTAL_DELETE_MS / current.length
      : TOTAL_TYPE_MS / current.length
    const delay = isFull ? HOLD_FULL_MS : isEmpty ? HOLD_EMPTY_MS : perChar

    // Moi lan doi state deu nam trong setTimeout, khong goi thang trong effect
    const timer = window.setTimeout(() => {
      if (isFull) {
        setIsDeleting(true)
        return
      }

      if (isEmpty) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % items.length)
        return
      }

      setText(current.slice(0, isDeleting ? text.length - 1 : text.length + 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [text, isDeleting, index, phrasesKey, loop, shouldReduceMotion])

  if (shouldReduceMotion) {
    return <p className={className}>{phrases[0]}</p>
  }

  // Cau dai nhat quyet dinh chieu cao cua khoi
  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), '')

  return (
    <p className={`relative ${className}`}>
      {/* Cau day du de san o day nhung vo hinh: no giu cho san nen khi go toi dong cuoi
          giao dien khong bi day xuong. Dat min-height co dinh se sai o mobile hoac khi doi ngon ngu. */}
      <span className="invisible" aria-hidden="true">
        {longest}
      </span>

      <span className="absolute inset-0" aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-current align-text-bottom" />
      </span>

      {/* Trinh doc man hinh doc tron noi dung thay vi doc lai tung ky tu dang go */}
      <span className="sr-only">{phrases.join('. ')}</span>
    </p>
  )
}
