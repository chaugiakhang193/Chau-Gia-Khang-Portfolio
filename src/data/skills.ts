import type { LanguageSkill, Localized, SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: { vi: 'Ngôn ngữ lập trình', en: 'Languages' },
    skills: [
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'Golang', level: 75 },
    ],
  },
  {
    id: 'backend',
    title: { vi: 'Backend', en: 'Backend' },
    skills: [
      { name: 'NestJS', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'WebSocket (Socket.IO)', level: 75 },
      { name: 'Swagger / OpenAPI', level: 80 },
    ],
  },
  {
    id: 'frontend',
    title: { vi: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 78 },
      { name: 'TanStack Query', level: 75 },
      { name: 'Zustand', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    id: 'data',
    title: { vi: 'Dữ liệu & Hàng đợi', en: 'Data & Messaging' },
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'TypeORM', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'RabbitMQ', level: 80 },
      { name: 'BullMQ', level: 80 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    id: 'devops',
    title: { vi: 'Kiểm thử & DevOps', en: 'Testing & DevOps' },
    skills: [
      { name: 'Jest / Supertest', level: 80 },
      { name: 'Testcontainers', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'GitHub Actions (CI/CD)', level: 78 },
      { name: 'OpenTelemetry / Grafana', level: 70 },
    ],
  },
  {
    id: 'ai',
    title: { vi: 'AI / LLM', en: 'AI / LLM' },
    skills: [
      { name: 'Gemini API (streaming, function calling)', level: 75 },
      { name: 'Prompt design cho bot nghiệp vụ', level: 75 },
    ],
  },
]

/** Cac pattern da dung trong du an that, hien duoi dang the chu khong co thanh muc do. */
export const patterns: string[] = [
  'Transactional Outbox',
  'CQRS',
  'Event-driven',
  'Idempotency',
  'Strangler Fig',
  'Two-stage retrieval',
  'Database per service',
]

export const softSkills: { id: string; name: Localized; detail: Localized }[] = [
  {
    id: 'ownership',
    name: { vi: 'Tinh thần làm chủ', en: 'Ownership' },
    detail: {
      vi: 'Nhận trọn một tính năng từ lúc bóc yêu cầu tới lúc chạy thật và bảo trì.',
      en: 'Own a feature end to end, from requirements to production and maintenance.',
    },
  },
  {
    id: 'debugging',
    name: { vi: 'Phân tích & gỡ lỗi', en: 'Debugging & analysis' },
    detail: {
      vi: 'Lần theo log, trace và số liệu để tìm nguyên nhân gốc thay vì vá tạm.',
      en: 'Follow logs, traces and metrics to the root cause instead of patching symptoms.',
    },
  },
  {
    id: 'communication',
    name: { vi: 'Giao tiếp với nghiệp vụ', en: 'Communication' },
    detail: {
      vi: 'Trao đổi trực tiếp với business analyst để chốt luồng trước khi code.',
      en: 'Talk directly with business analysts to settle the flow before writing code.',
    },
  },
  {
    id: 'self-learning',
    name: { vi: 'Tự học', en: 'Self-learning' },
    detail: {
      vi: 'Tự học Golang và đưa vào dự án thật ngay trong một sprint.',
      en: 'Learned Golang on my own and shipped it in a real project within one sprint.',
    },
  },
  {
    id: 'documentation',
    name: { vi: 'Viết tài liệu', en: 'Documentation' },
    detail: {
      vi: 'Viết tài liệu kiến trúc và hướng dẫn vận hành cho các service tự làm.',
      en: 'Write architecture notes and runbooks for the services I build.',
    },
  },
]

export const languageSkills: LanguageSkill[] = [
  {
    name: { vi: 'Tiếng Việt', en: 'Vietnamese' },
    detail: { vi: 'Tiếng mẹ đẻ', en: 'Native' },
  },
  {
    name: { vi: 'Tiếng Anh', en: 'English' },
    detail: {
      vi: 'TOEIC 765 — đọc hiểu tài liệu kỹ thuật tốt, giao tiếp công việc cơ bản',
      en: 'TOEIC 765 — comfortable reading technical documentation, working-level communication',
    },
  },
]
