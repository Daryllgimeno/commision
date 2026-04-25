import { ArrowRight, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from '../components/effects/Reveal'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-140px] h-[560px] w-[560px] rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg/40 px-4 py-2 text-xs font-semibold tracking-wide text-fg/80">
                <Sparkles className="h-4 w-4 text-brand-500" />
                {portfolio.hero.subtitle}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                {portfolio.hero.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-fg/70">
                {portfolio.hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href={portfolio.hero.cta.href}>
                  <Button>
                    {portfolio.hero.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="#services"
                  className="text-sm font-semibold text-fg/70 transition hover:text-fg"
                >
                  View services
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-border/70 bg-bg/40 p-6 shadow-soft backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-500">
                    <portfolio.hero.cta.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-fg">
                      Commission-ready workflow
                    </p>
                    <p className="text-sm text-fg/70">
                      Clear requirements, fast updates, and reliable delivery —
                      optimized for mobile-friendly systems.
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-left text-sm">
                  <div className="rounded-2xl border border-border/70 bg-bg/30 p-4">
                    <p className="font-semibold text-fg">Mobile-first</p>
                    <p className="mt-1 text-fg/60">Looks great on phones</p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-bg/30 p-4">
                    <p className="font-semibold text-fg">Scalable</p>
                    <p className="mt-1 text-fg/60">Clean, maintainable code</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

