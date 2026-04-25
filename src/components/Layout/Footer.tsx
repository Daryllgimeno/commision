import { portfolio } from '../../data/portfolio'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fg/60">
          © {new Date().getFullYear()} {portfolio.brand.name}. All rights
          reserved.
        </p>
        <p className="text-sm text-fg/60">Built with React + Tailwind.</p>
      </Container>
    </footer>
  )
}

