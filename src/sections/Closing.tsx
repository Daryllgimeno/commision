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
          <div className="mb-12 space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg/60">
              Contact
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-fg">
              {portfolio.closing.contactTitle}
            </h2>

            <p className="mx-auto max-w-2xl text-sm text-fg/70 sm:text-base">
              {portfolio.closing.contactSubtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT CARD */}
          <Reveal className="lg:col-span-7">
            <Card className="space-y-5">
              <p className="text-sm font-semibold text-fg/90">
                {portfolio.closing.tagline}
              </p>

              <p className="text-sm leading-6 text-fg/70">
                Email me your requirements (features, timeline, and budget
                range), and I’ll reply with a clear quote.
              </p>

              {/* EMAIL BUTTONS */}
              <div className="space-y-3">
                {portfolio.closing.email.map((email) => (
                  <div
                    key={email}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border/70 px-4 py-3"
                  >
                    <span className="text-sm text-fg/80">{email}</span>

                    <a href={`mailto:${email}`}>
                      <Button size="sm">
                        <Mail className="h-4 w-4" />
                        Email
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* RIGHT CARD */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <Card>
              <p className="text-sm font-semibold text-fg">Social links</p>

              <div className="mt-4 space-y-2">
                {portfolio.closing.socials.map((s) => {
                  const Icon = s.icon

                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-border/70 bg-bg/30 px-4 py-3 text-sm font-semibold text-fg/80 transition hover:border-brand-500/40 hover:bg-bg/50 hover:text-fg"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon className="h-4 w-4 text-brand-500" />
                        {s.label}
                      </span>

                      <span className="text-xs text-fg/50">Open</span>
                    </a>
                  )
                })}
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}