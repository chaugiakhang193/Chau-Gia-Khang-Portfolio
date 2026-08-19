# Website CV cá nhân — Châu Gia Khang

CV dạng website (single page application) với 5 trang, song ngữ Việt/Anh, dark mode và hai hiệu ứng chuyển trang.

**Demo:** _(cập nhật link sau khi deploy)_

## Công nghệ

| Thành phần | Lựa chọn |
| --- | --- |
| Build tool | Vite 8 |
| UI | React 19 + TypeScript |
| CSS | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion 13 |
| Lint | oxlint |

## Chạy dự án

```bash
npm install
npm run dev
```

Mở http://localhost:5173

Các lệnh khác:

```bash
npm run build     # tsc -b + vite build, xuất ra dist/
npm run preview   # xem thử bản build
npm run lint      # oxlint
```

## Cấu trúc thư mục

```
src/
├── assets/            ảnh avatar và thumbnail dự án
├── components/        component dùng lại (Header, Footer, ProjectCard, SkillBar, Tabs, TypingText, WaveDivider...)
├── context/           ThemeProvider (dark mode) và LanguageProvider (VI/EN)
├── data/              nội dung CV: profile, skills, projects, nav
├── hooks/             useLanguage, useTheme, useContactForm, useScrollTrigger
├── i18n/              ui.ts — toàn bộ chuỗi giao diện song ngữ
├── pages/             Home, Resume, Skills, Projects, Contact, NotFound
├── types.ts           kiểu dùng chung, gồm Localized<T>
├── App.tsx            khai báo route + AnimatePresence
└── main.tsx           entry point, bọc các Provider
```

Nội dung CV tách hẳn khỏi giao diện: sửa `src/data/*` là đổi được nội dung mà không đụng tới component.

## Các trang

| Route | Nội dung |
| --- | --- |
| `/` | Hero: ảnh, tên, chức danh, giới thiệu ngắn, nút CTA |
| `/resume` | Thông tin cá nhân, mục tiêu nghề nghiệp, tab Kinh nghiệm / Học vấn |
| `/skills` | Kỹ năng chuyên môn (progress bar), kỹ năng mềm, ngoại ngữ |
| `/projects` | Danh sách dự án, tìm theo tên + lọc theo công nghệ |
| `/contact` | Kênh liên lạc và form liên hệ có validate |
| `*` | Trang 404 |

## Hiệu ứng chuyển trang

1. **Fade + trượt dọc** (`src/components/PageTransition.tsx`) — trang cũ mờ đi và trượt lên, trang mới hiện lên từ dưới. Chạy nhờ `AnimatePresence mode="wait"` trong `App.tsx`.
2. **Thanh progress gradient** (`src/components/RouteProgress.tsx`) — thanh cyan→indigo→tím chạy ngang mép trên màn hình mỗi lần đổi route.

Nếu hệ điều hành bật "giảm chuyển động", thanh progress tắt hẳn và fade rút ngắn lại.

## Điểm đáng chú ý

- **Song ngữ VI/EN**: mọi chuỗi hiển thị đều có kiểu `Localized<T> = { vi: T; en: T }`, đổi ngôn ngữ bằng nút trên navbar, ghi nhớ trong `localStorage` và cập nhật luôn thuộc tính `lang` của thẻ `<html>`.
- **Dark mode**: class `.dark` trên `<html>`, lần đầu vào lấy theo cài đặt hệ điều hành, sau đó nhớ lựa chọn của người dùng.
- **Projects data-driven**: dữ liệu nằm trong `src/data/projects.ts`, render bằng `.map()`, tìm theo tên kết hợp lọc theo tag. Dự án chưa có demo hiện nút khoá kèm ghi chú "Chưa triển khai".
- **Contact form**: validate bắt buộc 4 trường, kiểm tra định dạng email, nội dung tối thiểu 20 ký tự; có trạng thái loading, disable nút khi đang gửi và thông báo thành công (chưa có backend nên giả lập bằng `setTimeout`).
- **Responsive**: mobile < 768px (menu hamburger), tablet 768–1024px, desktop > 1024px.
- **Accessibility**: HTML semantic, mỗi trang một `<h1>`, ảnh có `alt`, form có `<label htmlFor>` và `aria-describedby` cho lỗi, tab chuyển bằng phím mũi tên, menu mobile đóng bằng `Escape`, có link "bỏ qua tới nội dung chính".
- **Hero banner động**: nền gradient cyan→indigo→tím tự trôi qua lại, viền sóng SVG chạy vòng lặp liền mạch (`WaveDivider`), đoạn giới thiệu gõ từng ký tự trong 10 giây, dừng 5 giây cho người đọc, xoá rồi nghỉ 1 giây và lặp lại (`TypingText`); tốc độ tính theo độ dài câu nên bản tiếng Việt và tiếng Anh gõ xong cùng lúc, và bản đầy đủ luôn nằm trong DOM cho trình đọc màn hình.
- **Tối ưu**: ảnh thumbnail nén còn 40–50 KB, dùng `loading="lazy"`, không kéo thêm thư viện icon (icon viết tay bằng SVG inline).

## Deploy

Bản build là static site, deploy được lên Vercel, Netlify hay GitHub Pages.

```bash
npm run build   # kết quả nằm trong dist/
```

Vì đây là SPA, host cần rewrite mọi đường dẫn về `index.html` để F5 giữa chừng không bị 404. Repo đã có sẵn `public/_redirects` cho Netlify; Vercel tự xử lý.
