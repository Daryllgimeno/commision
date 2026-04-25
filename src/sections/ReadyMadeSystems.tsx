import { ExternalLink } from 'lucide-react'
import { Reveal } from '../components/effects/Reveal'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { portfolio } from '../data/portfolio'

export function ReadyMadeSystems() {
  return (
    <Section
      id="ready-made"
      eyebrow="Ready to deploy"
      title="Ready-Made Systems"
      subtitle="Need something faster? Choose a ready-made system and we’ll tailor it to your workflow."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.readyMade.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.03}>
            <Card className="flex h-full flex-col">
              {(() => {
                const demoUrl = (p as { demoUrl?: string }).demoUrl
                return (
                  <>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-500">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-fg">{p.title}</p>
                  <p className="text-sm leading-6 text-fg/70">{p.description}</p>
                </div>
              </div>

              {demoUrl ? (
                <div className="mt-4">
                  <a href={demoUrl} target="_blank" rel="noreferrer">
                    <Button variant="secondary" className="w-full">
                      Demo
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              ) : null}
                  </>
                )
              })()}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

