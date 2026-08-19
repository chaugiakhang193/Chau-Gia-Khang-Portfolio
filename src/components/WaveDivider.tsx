/**
 * Vien song luon o day banner. Path ve san hai chu ky giong het nhau trong viewBox rong 2880,
 * svg rong 200% roi truot ngang mot nua chu ky nen vong lap khong thay diem noi.
 */
const WAVE_PATH =
  'M0,50 C120,10 240,10 360,50 C480,90 600,90 720,50 C840,10 960,10 1080,50 C1200,90 1320,90 1440,50 C1560,10 1680,10 1800,50 C1920,90 2040,90 2160,50 C2280,10 2400,10 2520,50 C2640,90 2760,90 2880,50 L2880,100 L0,100 Z'

interface WaveDividerProps {
  /** Mau to phai trung voi nen cua section ngay ben duoi, khong thi se lo mot dai mau khac. */
  fillClassName?: string
}

export function WaveDivider({ fillClassName = 'fill-white dark:fill-zinc-900' }: WaveDividerProps) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-14 overflow-hidden sm:h-20"
      aria-hidden="true"
    >
      <svg
        className="wave-back absolute bottom-1 left-0 h-full w-[200%] fill-white/20"
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATH} />
      </svg>

      <svg
        className={`wave-front absolute bottom-0 left-0 h-full w-[200%] ${fillClassName}`}
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATH} />
      </svg>
    </div>
  )
}
