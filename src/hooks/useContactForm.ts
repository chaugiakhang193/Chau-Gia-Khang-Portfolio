import { useCallback, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'

export type ContactField = 'name' | 'email' | 'subject' | 'message'

/** Hook tra ve ma loi, trang doi ma loi sang tieng Viet/Anh de logic khong dinh ngon ngu. */
export type ErrorCode = 'required' | 'email' | 'messageMin'

export type ContactValues = Record<ContactField, string>
export type ContactErrors = Partial<Record<ContactField, ErrorCode>>
export type SubmitStatus = 'idle' | 'submitting' | 'success'

const EMPTY_VALUES: ContactValues = { name: '', email: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const MESSAGE_MIN_LENGTH = 20
const MOCK_REQUEST_MS = 1500

function validateField(field: ContactField, value: string): ErrorCode | undefined {
  const trimmed = value.trim()

  if (!trimmed) return 'required'
  if (field === 'email' && !EMAIL_PATTERN.test(trimmed)) return 'email'
  if (field === 'message' && trimmed.length < MESSAGE_MIN_LENGTH) return 'messageMin'

  return undefined
}

function validateAll(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  for (const field of Object.keys(values) as ContactField[]) {
    const error = validateField(field, values[field])
    if (error) errors[field] = error
  }

  return errors
}

export function useContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = event.target.name as ContactField
      const { value } = event.target

      setValues((prev) => ({ ...prev, [field]: value }))

      // Da bao loi roi thi sua toi dau xoa loi toi do, khong bat cho submit lai
      if (touched[field]) {
        setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
      }
    },
    [touched],
  )

  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as ContactField

    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validateField(field, event.target.value) }))
  }, [])

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const nextErrors = validateAll(values)
      setErrors(nextErrors)
      setTouched({ name: true, email: true, subject: true, message: true })

      if (Object.keys(nextErrors).length > 0) return

      // Chua co backend nen gia lap do tre mang de thay duoc trang thai dang gui
      setStatus('submitting')
      window.setTimeout(() => {
        setStatus('success')
        setValues(EMPTY_VALUES)
        setTouched({})
      }, MOCK_REQUEST_MS)
    },
    [values],
  )

  const reset = useCallback(() => {
    setValues(EMPTY_VALUES)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }, [])

  return { values, errors, touched, status, handleChange, handleBlur, handleSubmit, reset }
}
