'use client'

import { Coins, Link2, Gift, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Coins,
    title: 'Sell Gold',
    description: 'Convert your old, unwanted, or damaged gold jewelry into instant cash at today\'s best market rates.',
    features: ['Instant valuation', 'Live market rate', 'No hidden charges', 'Bank transfer']
  },
  {
    icon: Link2,
    title: 'Release Pledged Gold',
    description: 'Free your pledged gold from banks and NBFCs. We help settle loans and return your precious jewelry.',
    features: ['Quick settlement', 'Zero hassle', 'Fair valuation', 'Instant payment']
  },
  {
    icon: Gift,
    title: 'Buy Gold',
    description: 'Invest in gold coins, bars, and jewelry at competitive prices with guaranteed purity certificates.',
    features: ['Certified purity', 'Competitive rates', 'Safe delivery', 'BIS certified']
  },
  {
    icon: TrendingUp,
    title: 'Gold Loan',
    description: 'Get quick loans against your gold jewelry at flexible terms with transparent interest rates.',
    features: ['Same-day approval', 'Best rates', 'Minimal documentation', '24-hour support']
  }
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete gold solutions for every need—whether you&apos;re selling, releasing pledged gold, or investing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="p-6 hover:border-primary/50 transition-all group bg-card hover:bg-card/50 border-accent">
                <div className="mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full text-primary hover:bg-primary/10">
                  Learn More →
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
