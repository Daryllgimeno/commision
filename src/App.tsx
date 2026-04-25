import { Footer } from './components/Layout/Footer'
import { Navbar } from './components/Layout/Navbar'
import { Closing } from './sections/Closing'
import { Hero } from './sections/Hero'
import { ReadyMadeSystems } from './sections/ReadyMadeSystems'
import { Services } from './sections/Services'
import { TechStack } from './sections/TechStack'

export default function App() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ReadyMadeSystems />
        <TechStack />
        <Closing />
      </main>
      <Footer />
    </div>
  )
}
