import { Reveal } from '../components/effects/Reveal'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { portfolio } from '../data/portfolio'

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I do"
      title="Services"
      subtitle="Professional, minimal UI — backed by solid engineering and a smooth delivery process."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.services.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.04}>
            <Card className="h-full">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-500">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-fg">{s.title}</p>
                  <p className="text-sm leading-6 text-fg/70">{s.description}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

