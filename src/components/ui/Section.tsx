import type { PropsWithChildren } from 'react'
import { Container } from './Container'

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: PropsWithChildren<{
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
}>) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <div className="mb-10 space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg/60">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-pretty text-sm leading-6 text-fg/70 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  )
}

