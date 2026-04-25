import { Reveal } from '../components/effects/Reveal'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { portfolio } from '../data/portfolio'

export function TechStack() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Tools I use"
      title="Tech Stack"
      subtitle="A flexible stack across web, backend, database, and deployment — chosen based on your requirements."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {portfolio.techStack.map((cat, idx) => (
          <Reveal key={cat.title} delay={idx * 0.04}>
            <Card>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-500">
                  <cat.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg">{cat.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cat.items.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

