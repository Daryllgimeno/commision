import { Mail } from 'lucide-react'
import { Reveal } from '../components/effects/Reveal'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { portfolio } from '../data/portfolio'

export function Closing() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg/60">
              Closing
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {portfolio.closing.contactTitle}
            </h2>
            <p className="max-w-2xl text-pretty text-sm leading-6 text-fg/70 sm:text-base">
              {portfolio.closing.contactSubtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal>
            <Card className="lg:col-span-7">
              <p className="text-sm font-semibold text-fg">
                {portfolio.closing.tagline}
              </p>
              <p className="mt-3 text-sm leading-6 text-fg/70">
                Email me your requirements (features, timeline, and budget range)
                and I’ll reply with a clear quote.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`mailto:${portfolio.closing.email}`}>
                  <Button>
                    <Mail className="h-4 w-4" />
                    Email me
                  </Button>
                </a>
                <p className="self-center text-sm text-fg/70">
                  {portfolio.closing.email}
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card className="lg:col-span-5">
              <p className="text-sm font-semibold text-fg">Social links</p>
              <div className="mt-4 grid gap-2">
                {portfolio.closing.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-border/70 bg-bg/30 px-4 py-3 text-sm font-semibold text-fg/80 transition hover:border-brand-500/40 hover:bg-bg/50 hover:text-fg"
                  >
                    <span className="inline-flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-brand-500" />
                      {s.label}
                    </span>
                    <span className="text-xs text-fg/50">Open</span>
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

