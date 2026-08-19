export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="container-page pt-10 sm:pt-12">
      <h1 className="text-gradient pb-1 text-2xl sm:text-3xl">{title}</h1>

      {subtitle && <p className="mt-2 max-w-2xl text-sm sm:text-base">{subtitle}</p>}
    </div>
  )
}
