import type { PropsWithChildren } from 'react'

export function Badge({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border/70 bg-bg/40 px-2.5 py-1 text-xs font-medium text-fg/80 ${className}`}
    >
      {children}
    </span>
  )
}

