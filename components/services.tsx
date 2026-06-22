'use client'

import { Coins, Link2, Gift, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Coins,
    title: 'Sell Gold',
    description: 'Convert your old, unwanted, or damaged gold jewelry into instant cash at today\'s best market rates.',
    features: ['Instant valuation', 'Live market rate', 'No hidden charges', 'Bank transfer'],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-500/20',
    textColor: 'text-red-400'
  },
  {
    icon: Link2,
    title: 'Release Pledged Gold',
    description: 'Free your pledged gold from banks and NBFCs. We help settle loans and return your precious jewelry.',
    features: ['Quick settlement', 'Zero hassle', 'Fair valuation', 'Instant payment'],
    color: 'from-cyan-400 to-cyan-500',
    bgColor: 'bg-cyan-500/20',
    textColor: 'text-cyan-400'
  },
  {
    icon: Gift,
    title: 'Buy Gold',
    description: 'Invest in gold coins, bars, and jewelry at competitive prices with guaranteed purity certificates.',
    features: ['Certified purity', 'Competitive rates', 'Safe delivery', 'BIS certified'],
    color: 'from-yellow-400 to-yellow-500',
    bgColor: 'bg-yellow-500/20',
    textColor: 'text-yellow-400'
  },
  {
    icon: TrendingUp,
    title: 'Gold Loan',
    description: 'Get quick loans against your gold jewelry at flexible terms with transparent interest rates.',
    features: ['Same-day approval', 'Best rates', 'Minimal documentation', '24-hour support'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-400'
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
              <Card key={idx} className="p-6 hover:border-2 transition-all group bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="mb-4">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.bgColor} ${service.textColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full ${service.textColor}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-opacity`}>
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
