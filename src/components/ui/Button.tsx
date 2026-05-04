import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
    size?: Size
  }
>) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60'

  const sizes: Record<Size, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  }

  const variants: Record<Variant, string> = {
    primary:
      'bg-brand-600 text-bg hover:bg-brand-500 shadow-soft shadow-brand-600/15',
    secondary:
      'border border-border/80 bg-bg/40 text-fg hover:border-brand-500/40 hover:bg-bg/60',
    ghost: 'text-fg/80 hover:text-fg hover:bg-bg/40',
  }

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

