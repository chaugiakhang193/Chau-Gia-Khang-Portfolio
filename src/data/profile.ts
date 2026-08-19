import avatarImg from '../assets/avatar.jpg'
import type { EducationEntry, Localized, TimelineEntry } from '../types'

export const profile = {
  name: 'Châu Gia Khang',
  avatar: avatarImg,
  avatarAlt: {
    vi: 'Ảnh chân dung Châu Gia Khang',
    en: 'Portrait photo of Chau Gia Khang',
  } satisfies Localized,
  title: {
    vi: 'Thực tập sinh Frontend',
    en: 'Frontend Developer Intern',
  } satisfies Localized,
  tagline: {
    vi: 'Mình làm frontend React/Next.js chạy production với SSR — và đủ sức fullstack: TypeScript · NestJS · Golang, một năm kinh nghiệm đi làm cùng một sàn thương mại điện tử tự viết đang chạy production.',
    en: 'I build production React/Next.js with SSR — with fullstack range behind it: TypeScript · NestJS · Golang, one year of professional experience and a self-built marketplace running in production.',
  } satisfies Localized,
  personal: {
    dob: '19/03/2002',
    gender: { vi: 'Nam', en: 'Male' } satisfies Localized,
    location: { vi: 'TP. Hồ Chí Minh', en: 'Ho Chi Minh City' } satisfies Localized,
    email: 'chaugiakhang193@gmail.com',
    phone: '088 66 13 004',
    github: 'https://github.com/chaugiakhang193',
  },
  /** Duong dan file CV PDF trong thu muc public. Co gia tri thi nut "Tai CV" moi hien. */
  cvUrl: null as string | null,
  objective: {
    vi: [
      'Mình ứng tuyển vị trí Thực tập sinh Frontend — muốn đầu tư sâu hơn vào React/Next.js trên nền tảng fullstack sẵn có (TypeScript/NestJS, Golang).',
      'Phía frontend mình đã làm React/Next.js chạy production với SSR, TanStack Query và Zustand — chính website CV này cũng là React + TypeScript + Tailwind mình tự dựng.',
      'Mình quen nhận trọn một tính năng từ đầu tới cuối: chốt yêu cầu với bộ phận nghiệp vụ, thiết kế API và mô hình dữ liệu, code, viết test rồi debug khi hệ thống chạy thật.',
      'Phần mình đào sâu nhất là backend bất đồng bộ nhiều service: transactional outbox, consumer idempotent có dedup và DLQ, CQRS read projection, tracing xuyên qua hàng đợi.',
      'Mục tiêu một năm tới: vững hơn về hệ thống phân tán và kiểm thử tự động, đủ sức nhận trọn một domain nghiệp vụ.',
    ],
    en: [
      'I am applying for a Frontend Intern position — aiming to go deeper on React/Next.js, on top of an existing fullstack foundation (TypeScript/NestJS, Golang).',
      'On the frontend I have shipped production React/Next.js with SSR, TanStack Query and Zustand — this CV site itself is React + TypeScript + Tailwind I built from scratch.',
      'I am comfortable owning a feature end to end: clarifying requirements with business analysts, designing the API and data model, implementing, testing and debugging it in production.',
      'What I have gone deepest on is asynchronous multi-service backends: transactional outbox, idempotent consumers with dedup and DLQ, CQRS read projections, and tracing that survives an async boundary.',
      'Goal for the next year: get stronger at distributed systems and automated testing, enough to own a whole business domain.',
    ],
  } satisfies Localized<string[]>,
  // Thu tu trong mang chinh la thu tu hien tren hero, doi cho la doi vi tri
  highlights: [
    { value: '1', label: { vi: 'sản phẩm', en: 'product' } satisfies Localized },
    { value: '3', label: { vi: 'microservice', en: 'microservices' } satisfies Localized },
    { value: '8.0', label: { vi: 'GPA / 10', en: 'GPA / 10' } satisfies Localized },
    { value: '765', label: { vi: 'TOEIC', en: 'TOEIC' } satisfies Localized },
  ],
}

export const education: EducationEntry[] = [
  {
    id: 'uit',
    school: {
      vi: 'Trường Đại học Công nghệ Thông tin — ĐHQG-HCM (UIT)',
      en: 'University of Information Technology — VNU-HCM (UIT)',
    },
    major: {
      vi: 'Mạng máy tính và Truyền thông dữ liệu',
      en: 'Computer Networks and Data Communications',
    },
    gpa: '8.0 / 10',
    period: '09/2020 – 06/2025',
    notes: {
      vi: ['Tiếng Anh: TOEIC 765'],
      en: ['English: TOEIC 765'],
    },
  },
]

export const experiences: TimelineEntry[] = [
  {
    id: 'kien-tre',
    org: {
      vi: 'Kien Tre Education Investment JSC',
      en: 'Kien Tre Education Investment JSC',
    },
    role: { vi: 'Fullstack Developer', en: 'Fullstack Developer' },
    period: '03/2026 – 08/2026',
    bullets: {
      vi: [
        'Làm trọn 5 module backend trong codebase của nhóm cho hệ thống ERP xếp lịch phục vụ hơn 150 người dùng nội bộ: chốt yêu cầu trực tiếp với business analyst, thiết kế schema và hợp đồng API, code bằng NestJS kèm màn hình Next.js + shadcn/ui tương ứng, rồi debug khi chạy thật.',
        'Phụ trách phần xếp lịch cho khoảng 50 gia sư: gia sư đăng ký lịch dạy rảnh, giáo vụ xếp lớp dựa trên đó; chống trùng lịch bằng kiểm tra chồng lấn kết hợp ràng buộc ở tầng cơ sở dữ liệu; hỗ trợ lớp lặp lại, dời buổi, huỷ buổi và điểm danh có ảnh xác nhận.',
        'Làm module đào tạo nội bộ: nhân sự xem video được giao rồi làm quiz, hệ thống chặn làm quiz khi chưa xem hết video, luồng tách riêng theo từng vai trò.',
        'Tích hợp chatbot LLM tự trả lời bình luận của phụ huynh trong ứng dụng và tư vấn khoá học: mình làm toàn bộ đường đi bình luận → LLM → phản hồi và viết prompt, bám theo dữ liệu khoá học cùng tài liệu FAQ của trung tâm.',
        'Dùng BullMQ cho job thanh toán và RabbitMQ cho xử lý bất đồng bộ; viết test Jest cho các module phụ trách; ship theo quy trình nhánh Git và CI/CD của nhóm lên Kubernetes.',
      ],
      en: [
        'Developed 5 backend modules end-to-end in a team codebase for an ERP scheduling platform serving 150+ internal users: clarified requirements directly with business analysts, designed the database schema and API contracts, implemented in NestJS with the matching Next.js + shadcn/ui screens, and debugged issues in production.',
        'Owned class scheduling for ~50 tutors: tutors register teaching availability, academic coordinators arrange classes on top; prevented double-booking with overlap validation plus database-level constraints; supported recurring classes, rescheduling, cancellation and photo-confirmed attendance.',
        'Built the internal training module: staff watch assigned videos then take a quiz, with completion gating that blocks the quiz until the video is fully watched, in separate flows per role.',
        "Integrated an LLM chatbot that auto-replies to parents' in-app comments and advises on courses: built the comment to LLM to reply pipeline end-to-end and designed the prompts, grounded in the center's course data and FAQ documents.",
        "Used BullMQ (payment jobs) and RabbitMQ for asynchronous processing; wrote Jest tests for my modules; shipped through the team's Git branching workflow and CI/CD pipeline onto Kubernetes.",
      ],
    },
  },
  {
    id: 'viet-tri-dao',
    org: {
      vi: 'Viet Tri Dao Co., Ltd',
      en: 'Viet Tri Dao Co., Ltd',
    },
    role: { vi: 'Fullstack Developer Intern', en: 'Fullstack Developer Intern' },
    period: '08/2025 – 01/2026',
    bullets: {
      vi: [
        'Xây tầng quản lý hồ sơ cho một văn phòng công chứng ở Mỹ bằng Express.js, React và MongoDB: lưu file trên S3 kèm phân quyền theo từng hồ sơ, quy định bên nào được xem hay được thao tác trên hồ sơ nào.',
        'Làm vòng đời 5 trạng thái của hồ sơ, đưa hồ sơ đi từ lúc tiếp nhận tới lúc công chứng xong, luật chuyển trạng thái kiểm tra ở phía server.',
        'Thêm nhật ký thao tác theo từng bước, ghi lại ai làm gì trên hồ sơ và vào lúc nào.',
        'Làm luồng ký điện tử để hoàn tất công chứng và phần email thông báo bám theo thay đổi trạng thái hồ sơ.',
      ],
      en: [
        'Built the document layer for a U.S. notary office with Express.js, React and MongoDB: S3 file storage with per-document access control over which parties can view or act on each document.',
        'Implemented the 5-state document lifecycle taking a document from intake to completed notarization, with transition rules enforced server-side.',
        'Added a per-step audit trail recording who performed each action on a document and when.',
        'Built the e-signature/notarization completion flow and email notifications triggered by document status changes.',
      ],
    },
  },
]

/** De trong thi trang Ho so tu an tab Hoat dong. */
export const activities: TimelineEntry[] = []
