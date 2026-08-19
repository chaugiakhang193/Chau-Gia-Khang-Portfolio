export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="container-page pt-10 sm:pt-12">
      {/* Vach gradient nho thay cho ca mot dai nen rieng: nhan manh du nhung khong chiem cho */}
      <span
        className="block h-1 w-10 rounded-full bg-linear-to-r from-cyan-500 to-indigo-500"
        aria-hidden="true"
      />

      <h1 className="text-gradient mt-4 pb-1 text-2xl sm:text-3xl">{title}</h1>

      {subtitle && <p className="mt-2 max-w-2xl text-sm sm:text-base">{subtitle}</p>}
    </div>
  )
}
