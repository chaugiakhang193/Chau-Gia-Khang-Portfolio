import type { Localized } from "../types";

/** Toan bo chuoi giao dien. Noi dung CV nam trong src/data, cho nay chi la nhan UI. */
export const ui = {
  common: {
    skipToContent: {
      vi: "Bỏ qua, tới nội dung chính",
      en: "Skip to main content",
    },
    openMenu: { vi: "Mở menu điều hướng", en: "Open navigation menu" },
    closeMenu: { vi: "Đóng menu điều hướng", en: "Close navigation menu" },
    mainNav: { vi: "Điều hướng chính", en: "Main navigation" },
    toLight: { vi: "Chuyển sang giao diện sáng", en: "Switch to light theme" },
    toDark: { vi: "Chuyển sang giao diện tối", en: "Switch to dark theme" },
    /* Chuoi vi hien khi dang o ban VI (hanh dong: sang EN), chuoi en hien khi dang o ban EN
       (hanh dong: ve VI) - cung co che voi toLight/toDark ben duoi */
    switchLang: { vi: "Chuyển sang bản tiếng Anh", en: "Switch to Vietnamese" },
    backToTop: { vi: "Lên đầu trang", en: "Back to top" },
    email: { vi: "Email", en: "Email" },
    phone: { vi: "Điện thoại", en: "Phone" },
    github: { vi: "GitHub", en: "GitHub" },
    location: { vi: "Nơi ở", en: "Location" },
  },
  home: {
    greeting: { vi: "Xin chào, mình là", en: "Hi, I am" },
    ctaResume: { vi: "Xem hồ sơ chi tiết", en: "View full resume" },
    ctaProjects: { vi: "Xem dự án", en: "View projects" },
    ctaDownload: { vi: "Tải CV (PDF)", en: "Download CV (PDF)" },
    ctaContact: { vi: "Liên hệ với mình", en: "Get in touch" },
    focusTitle: { vi: "Mình đang tập trung vào", en: "What I focus on" },
    focus: {
      vi: [
        {
          title: "Frontend React/Next.js",
          body: "Giao diện Next.js SSR chạy production: TanStack Query cho data, Zustand cho state, Tailwind cho UI.",
        },
        {
          title: "Backend nghiệp vụ",
          body: "Bóc yêu cầu thành API, mô hình dữ liệu và luồng trạng thái rõ ràng bằng NestJS hoặc Golang.",
        },
        {
          title: "Xử lý bất đồng bộ",
          body: "Hàng đợi, job nền, đồng bộ dữ liệu giữa các service sao cho hỏng một chỗ không kéo sập cả luồng.",
        },
      ],
      en: [
        {
          title: "React/Next.js frontend",
          body: "Production Next.js with SSR: TanStack Query for data, Zustand for state, Tailwind for the UI.",
        },
        {
          title: "Business backend",
          body: "Turning requirements into clear APIs, data models and state flows with NestJS or Golang.",
        },
        {
          title: "Async processing",
          body: "Queues, background jobs and cross-service sync built so one failure does not take the flow down.",
        },
      ],
    },
  },
  resume: {
    title: { vi: "Hồ sơ chi tiết", en: "Resume" },
    subtitle: {
      vi: "Thông tin cá nhân, mục tiêu nghề nghiệp, học vấn và kinh nghiệm làm việc.",
      en: "Personal details, career objective, education and work experience.",
    },
    personalTitle: { vi: "Thông tin cá nhân", en: "Personal details" },
    dob: { vi: "Ngày sinh", en: "Date of birth" },
    gender: { vi: "Giới tính", en: "Gender" },
    objectiveTitle: { vi: "Mục tiêu nghề nghiệp", en: "Career objective" },
    tabEducation: { vi: "Học vấn", en: "Education" },
    tabExperience: { vi: "Kinh nghiệm", en: "Experience" },
    tabActivities: { vi: "Hoạt động", en: "Activities" },
    gpa: { vi: "GPA", en: "GPA" },
    major: { vi: "Chuyên ngành", en: "Major" },
  },
  skills: {
    title: { vi: "Kỹ năng & Năng lực", en: "Skills" },
    subtitle: {
      vi: "Mức độ thành thạo dựa trên việc mình đã dùng thứ đó trong dự án thật tới đâu.",
      en: "Proficiency reflects how far I have actually used each item in real projects.",
    },
    technicalTitle: { vi: "Kỹ năng chuyên môn", en: "Technical skills" },
    patternsTitle: { vi: "Pattern đã dùng", en: "Patterns I have used" },
    patternsSubtitle: {
      vi: "Các pattern mình đã áp dụng trong dự án chạy thật, không phải chỉ đọc qua.",
      en: "Patterns I have actually applied in systems running in production.",
    },
    softTitle: { vi: "Kỹ năng mềm", en: "Soft skills" },
    languageTitle: { vi: "Ngoại ngữ", en: "Languages" },
  },
  projects: {
    title: { vi: "Dự án", en: "Projects" },
    subtitle: {
      vi: "Các dự án mình tự làm và tự vận hành. Lọc theo công nghệ hoặc tìm theo tên.",
      en: "Projects I built and operate myself. Filter by technology or search by name.",
    },
    searchLabel: { vi: "Tìm theo tên dự án", en: "Search by project name" },
    searchPlaceholder: {
      vi: "Ví dụ: search, chat...",
      en: "e.g. search, chat...",
    },
    filterLabel: { vi: "Lọc theo công nghệ", en: "Filter by technology" },
    all: { vi: "Tất cả", en: "All" },
    clearFilters: { vi: "Xoá bộ lọc", en: "Clear filters" },
    count: { vi: "dự án phù hợp", en: "matching projects" },
    empty: {
      vi: "Không có dự án nào khớp bộ lọc hiện tại.",
      en: "No project matches the current filters.",
    },
    viewGithub: { vi: "Mã nguồn", en: "Source code" },
    viewDemo: { vi: "Xem demo", en: "Live demo" },
    noDemo: { vi: "Chưa triển khai", en: "Not deployed yet" },
    viewDocs: { vi: "API docs", en: "API docs" },
    details: { vi: "Chi tiết", en: "Details" },
    close: { vi: "Đóng", en: "Close" },
    moreTags: { vi: "công nghệ khác", en: "more technologies" },
    highlightsTitle: { vi: "Điểm chính", en: "Highlights" },
  },
  contact: {
    title: { vi: "Liên hệ", en: "Contact" },
    subtitle: {
      vi: "Gửi tin nhắn qua form hoặc liên hệ trực tiếp bằng các kênh bên dưới.",
      en: "Send a message through the form, or reach me directly on the channels below.",
    },
    channelsTitle: { vi: "Thông tin liên lạc", en: "Contact information" },
    formTitle: { vi: "Gửi tin nhắn", en: "Send a message" },
    name: { vi: "Họ và tên", en: "Full name" },
    namePlaceholder: { vi: "Nguyễn Văn A", en: "Jane Doe" },
    email: { vi: "Email", en: "Email" },
    emailPlaceholder: { vi: "ten@congty.com", en: "you@company.com" },
    subject: { vi: "Tiêu đề", en: "Subject" },
    subjectPlaceholder: {
      vi: "Cơ hội Thực tập sinh Frontend",
      en: "Frontend internship opportunity",
    },
    message: { vi: "Nội dung", en: "Message" },
    messagePlaceholder: {
      vi: "Ít nhất 20 ký tự...",
      en: "At least 20 characters...",
    },
    submit: { vi: "Gửi tin nhắn", en: "Send message" },
    submitting: { vi: "Đang gửi...", en: "Sending..." },
    success: {
      vi: "Đã gửi thành công. Mình sẽ phản hồi qua email trong vòng 24 giờ.",
      en: "Message sent. I will reply by email within 24 hours.",
    },
    sendAnother: { vi: "Gửi tin nhắn khác", en: "Send another message" },
    charCount: { vi: "ký tự", en: "characters" },
  },
  errors: {
    required: {
      vi: "Vui lòng nhập trường này.",
      en: "This field is required.",
    },
    email: {
      vi: "Email không đúng định dạng.",
      en: "Please enter a valid email address.",
    },
    messageMin: {
      vi: "Nội dung cần ít nhất 20 ký tự.",
      en: "Message must be at least 20 characters.",
    },
  },
  notFound: {
    title: { vi: "Không tìm thấy trang", en: "Page not found" },
    body: {
      vi: "Đường dẫn bạn mở không tồn tại hoặc đã được đổi tên.",
      en: "The URL you opened does not exist or has been renamed.",
    },
    back: { vi: "Về trang chủ", en: "Back to home" },
  },
  footer: {
    built: {
      vi: "Website làm bằng React, TypeScript, Tailwind CSS và Framer Motion.",
      en: "Built with React, TypeScript, Tailwind CSS and Framer Motion.",
    },
    rights: { vi: "Bảo lưu mọi quyền.", en: "All rights reserved." },
  },
} satisfies Record<string, Record<string, Localized<unknown>>>;
