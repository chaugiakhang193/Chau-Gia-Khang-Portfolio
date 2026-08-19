import chatThumb from '../assets/projects/chat-service.svg'
import marketplaceThumb from '../assets/projects/marketplace.jpg'
import notificationThumb from '../assets/projects/notification-service.jpg'
import searchThumb from '../assets/projects/search-service.jpg'
import type { Project } from '../types'

const REPO = 'https://github.com/chaugiakhang193/fullstack-multi-vendor-ecommerce'
const LIVE = 'https://fullstack-multi-vendor-ecommerce.vercel.app'

/** Cac service duoi day deu nam trong monorepo cua san, chay that cung mot he thong. */
const INSIDE_MARKETPLACE = {
  vi: 'Chạy bên trong sàn thương mại điện tử, xem demo ở dự án đầu tiên',
  en: 'Runs inside the marketplace, see the demo on the first project',
}

export const projects: Project[] = [
  {
    id: 'marketplace',
    name: {
      vi: 'Sàn thương mại điện tử theo mô hình multi-vendor',
      en: 'Multi-vendor E-commerce Platform',
    },
    summary: {
      vi: 'Sàn thương mại điện tử một mình làm từ đầu và đang chạy production: 15 module nghiệp vụ, 113 REST endpoint, có thanh toán, vận chuyển theo khoảng cách và thông báo thời gian thực.',
      en: 'A marketplace I built solo and run in production: 15 feature modules, 113 REST endpoints, with payments, distance-based shipping and real-time notifications.',
    },
    highlights: {
      vi: [
        'Giỏ hàng và thanh toán nhiều gian hàng dùng idempotency key, khoá bi quan khi trừ kho; kèm mã giảm giá, đánh giá, trả hàng và đối soát cho người bán.',
        'Vận chuyển tính theo khoảng cách thật (geocoding + công thức Haversine) thay vì phí phẳng.',
        'Xác thực bằng Passport.js (JWT, Google OAuth2) sau lớp guard theo vai trò, thêm rate limit và Cloudflare Turnstile.',
      ],
      en: [
        'Multi-shop cart and checkout with idempotency keys and pessimistic stock locking, plus coupons, reviews, returns and seller payouts.',
        'Distance-based shipping computed from real geocoding plus the Haversine formula instead of a flat fee.',
        'Auth with Passport.js (JWT, Google OAuth2) behind role-based guards, with rate limiting and Cloudflare Turnstile.',
      ],
    },
    tags: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Redis', 'Docker'],
    thumbnail: marketplaceThumb,
    thumbnailAlt: {
      vi: 'Ảnh chụp trang chủ của sàn thương mại điện tử',
      en: 'Screenshot of the marketplace home page',
    },
    year: '03/2026 – nay',
    github: REPO,
    demo: LIVE,
    docs: 'https://fullstack-multi-vendor-ecommerce.onrender.com/api/docs',
    demoNote: null,
  },
  {
    id: 'search-service',
    name: {
      vi: 'Search Microservice (Golang)',
      en: 'Search Microservice (Golang)',
    },
    summary: {
      vi: 'Tách phần tìm kiếm sản phẩm ra service Golang có database riêng, kéo p95 của tìm kiếm từ 6,07 giây xuống 186 mili giây (nhanh khoảng 33 lần, đo với 100 VU).',
      en: 'Search extracted into a Golang service with its own database, cutting keyword-search p95 from 6.07s to 186ms (~33x, measured at 100 VU).',
    },
    highlights: {
      vi: [
        'Full-text search bằng tsvector + unaccent + chỉ mục GIN, xếp hạng bằng ts_rank_cd, truy vấn type-safe bằng sqlc.',
        'Gõ sai chính tả hoặc gõ thiếu vẫn ra kết quả nhờ lớp dự phòng trigram pg_trgm.',
        'Lấy dữ liệu hai chặng: service trả về danh sách id đã xếp hạng, monolith lấy dữ liệu hiển thị và áp các bộ lọc hay đổi.',
        'Kiểm chứng bằng EXPLAIN: truy vấn chuyển từ Seq Scan sang GIN bitmap scan.',
      ],
      en: [
        'Full-text search on tsvector + unaccent + a GIN index, ranked with ts_rank_cd, queried type-safely through sqlc.',
        'Misspelled or partial queries still return results thanks to a pg_trgm trigram fallback.',
        'Two-stage retrieval: the service returns ranked ids, the monolith hydrates them and applies the volatile filters.',
        'Verified with EXPLAIN: the query moved from a Seq Scan to a GIN bitmap scan.',
      ],
    },
    tags: ['Golang', 'PostgreSQL', 'RabbitMQ', 'sqlc', 'OpenTelemetry', 'Docker'],
    thumbnail: searchThumb,
    thumbnailAlt: {
      vi: 'Ảnh chụp trang kết quả tìm kiếm sản phẩm trên sàn',
      en: 'Screenshot of the product search results page on the marketplace',
    },
    year: '2026',
    github: `${REPO}/tree/main/search-service`,
    demo: null,
    docs: null,
    demoNote: INSIDE_MARKETPLACE,
  },
  {
    id: 'notification-service',
    name: {
      vi: 'Notification Microservice',
      en: 'Notification Microservice',
    },
    summary: {
      vi: 'Tách phần thông báo khỏi monolith theo kiểu strangler fig, chuyển đổi trên production mà không có downtime; database riêng kèm read projection theo CQRS.',
      en: 'Notifications peeled off the monolith strangler-fig style with a zero-downtime cutover in production; its own database plus a CQRS read projection.',
    },
    highlights: {
      vi: [
        '14 loại domain event đi theo đường transactional outbox → RabbitMQ → consumer idempotent có dedup và hàng đợi lỗi (DLQ).',
        'Thông báo thời gian thực xuyên tiến trình bằng Socket.IO + Redis.',
        'Một request sinh ra một trace duy nhất, xuyên qua outbox bất đồng bộ và qua ranh giới tiến trình nhờ OpenTelemetry gắn context vào header RabbitMQ.',
      ],
      en: [
        '14 domain event types flowing through a transactional outbox to RabbitMQ into an idempotent consumer with dedup and a dead-letter queue.',
        'Cross-process real-time delivery over Socket.IO plus Redis.',
        'One request produces a single trace across the async outbox boundary and the process boundary, via OpenTelemetry context on RabbitMQ headers.',
      ],
    },
    tags: ['NestJS', 'TypeScript', 'RabbitMQ', 'Redis', 'PostgreSQL', 'OpenTelemetry'],
    thumbnail: notificationThumb,
    thumbnailAlt: {
      vi: 'Ảnh chụp hai tài khoản buyer_dev và Shopprovip1 nhận thông báo cùng lúc theo thời gian thực',
      en: 'Screenshot of two accounts, buyer_dev and Shopprovip1, receiving notifications at the same time in real time',
    },
    year: '2025 – 2026',
    github: `${REPO}/tree/main/notification-service`,
    demo: null,
    docs: null,
    demoNote: INSIDE_MARKETPLACE,
  },
  {
    id: 'chat-service',
    name: {
      vi: 'Chat Service (Golang + Gemini)',
      en: 'Chat Service (Golang + Gemini)',
    },
    summary: {
      vi: 'Service chat viết bằng Golang gồm chatbot tư vấn sản phẩm dùng Gemini và chat 1-1 giữa người mua với người bán.',
      en: 'A Golang chat service with a Gemini-powered product advisor bot and one-to-one buyer-seller chat.',
    },
    highlights: {
      vi: [
        'Chatbot dùng function calling: Gemini gọi tool tìm sản phẩm rồi trả lời dựa trên kết quả thật, không bịa sản phẩm.',
        'Gọi Gemini có circuit breaker và một lần thử lại để lỗi phía nhà cung cấp không kéo sập luồng chat.',
        'Chat 1-1 chạy trên WebSocket, tin nhắn lưu lại nên mở lại cuộc trò chuyện là thấy lịch sử.',
      ],
      en: [
        'The bot uses function calling: Gemini calls a product-search tool and answers from the real results instead of inventing products.',
        'Gemini calls sit behind a circuit breaker with one retry so provider failures do not take the chat down.',
        'One-to-one chat runs over WebSocket with persisted messages, so reopening a conversation shows its history.',
      ],
    },
    tags: ['Golang', 'Gemini API', 'WebSocket', 'PostgreSQL', 'Docker'],
    thumbnail: chatThumb,
    thumbnailAlt: {
      vi: 'Hình minh hoạ luồng chatbot gọi tool tìm sản phẩm',
      en: 'Illustration of the chatbot calling the product search tool',
    },
    year: '2026',
    github: `${REPO}/tree/main/chat-service`,
    demo: null,
    docs: null,
    demoNote: {
      vi: 'Đang phát triển - đã có mã nguồn nhưng chưa deploy vì còn đang test lỗi',
      en: 'In development - source code is available but not deployed yet, still being tested',
    },
  },
]

/** Danh sach tag duy nhat, dung cho bo loc o trang Du an. */
export const projectTags: string[] = [...new Set(projects.flatMap((project) => project.tags))].sort(
  (a, b) => a.localeCompare(b),
)
