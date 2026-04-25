import type { PropsWithChildren } from 'react'

export function Card({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-bg/40 p-5 shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-500/40 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-600/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-400/10 blur-2xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

