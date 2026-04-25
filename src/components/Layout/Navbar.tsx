import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-semibold tracking-tight text-fg"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-bg/40">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
          </span>
          {portfolio.brand.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {portfolio.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-fg/70 transition hover:bg-bg/50 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a href={portfolio.hero.cta.href} className="ml-2">
            <Button variant="secondary">{portfolio.hero.cta.label}</Button>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-bg/40 p-2 text-fg/80 transition hover:bg-bg/60 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border/70 bg-bg/80 backdrop-blur md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {portfolio.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-fg/80 transition hover:bg-bg/50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolio.hero.cta.href}
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                <Button className="w-full">{portfolio.hero.cta.label}</Button>
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

