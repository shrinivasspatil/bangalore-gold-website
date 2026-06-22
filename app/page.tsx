import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
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
        <AreasGrid />
        <HowItWorks />
        <WhyChoose />
        <CTA />
      </main>
    </>
  )
}
