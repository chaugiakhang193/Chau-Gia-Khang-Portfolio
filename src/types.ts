export type Lang = 'vi' | 'en'

/** Moi chuoi hien ra man hinh deu co ban VI va EN de nut toggle doi duoc. */
export type Localized<T = string> = Record<Lang, T>

export interface NavItem {
  to: string
  label: Localized
}

export interface EducationEntry {
  id: string
  school: Localized
  major: Localized
  gpa: string
  /** Chi ghi moc tot nghiep, khong ghi nam bat dau */
  period: string
  notes: Localized<string[]>
}

export interface TimelineEntry {
  id: string
  org: Localized
  role: Localized
  period: string
  bullets: Localized<string[]>
}

export interface Skill {
  name: string
  /** Muc do thanh thao 0-100, dung cho chieu rong cua SkillBar. */
  level: number
}

export interface SkillGroup {
  id: string
  title: Localized
  skills: Skill[]
}

export interface LanguageSkill {
  name: Localized
  detail: Localized
}

export interface Project {
  id: string
  name: Localized
  summary: Localized
  highlights: Localized<string[]>
  tags: string[]
  thumbnail: string
  thumbnailAlt: Localized
  year: string
  github: string | null
  /** null = chua trien khai, card se hien nut disabled kem ghi chu. */
  demo: string | null
  /** Link tai lieu API (Swagger), null thi khong hien nut. */
  docs: string | null
  /** Ghi chu thay cho "Chua trien khai" khi khong co link demo rieng. */
  demoNote: Localized | null
}
