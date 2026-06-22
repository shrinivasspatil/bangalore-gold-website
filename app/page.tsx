import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import AreaLocator from '@/components/area-locator'
import HowItWorks from '@/components/how-it-works'
import WhyChoose from '@/components/why-choose'
import CTA from '@/components/cta'
import AreasGrid from '@/components/areas-grid'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <Services />
        <Testimonials />
        <AreaLocator />
        <AreasGrid />
        <HowItWorks />
        <WhyChoose />
        <CTA />
      </main>
    </>
  )
}
