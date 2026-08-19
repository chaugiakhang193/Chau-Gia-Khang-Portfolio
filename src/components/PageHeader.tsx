export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-zinc-200 bg-white py-10 sm:py-12 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container-page">
        <h1 className="text-gradient pb-1 text-3xl sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-base sm:text-lg">{subtitle}</p>}
      </div>
    </div>
  )
}
