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
    textColor: 'text-red-400',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2014%2C%202026%2C%2004_38_05%20PM-qRhxiepXaMKqn3OWrw2ZbtqknLxKvF.png'
  },
  {
    icon: Link2,
    title: 'Release Pledged Gold',
    description: 'Free your pledged gold from banks and NBFCs. We help settle loans and return your precious jewelry.',
    features: ['Quick settlement', 'Zero hassle', 'Fair valuation', 'Instant payment'],
    color: 'from-cyan-400 to-cyan-500',
    bgColor: 'bg-cyan-500/20',
    textColor: 'text-cyan-400',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c03033f4-9a4e-472d-8281-10727e57f4ae-MLRom15dw8T7rm1VgztaIYSHOPD5eV.jpeg'
  },
  {
    icon: Gift,
    title: 'Buy Gold',
    description: 'Invest in gold coins, bars, and jewelry at competitive prices with guaranteed purity certificates.',
    features: ['Certified purity', 'Competitive rates', 'Safe delivery', 'BIS certified'],
    color: 'from-yellow-400 to-yellow-500',
    bgColor: 'bg-yellow-500/20',
    textColor: 'text-yellow-400',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79d8d5ee-4d57-4015-8e48-805a56fef64d-ztVKFgdDSXAaWHL4NJ8PLpZvBv5vyB.jpeg'
  },
  {
    icon: TrendingUp,
    title: 'Gold Loan',
    description: 'Get quick loans against your gold jewelry at flexible terms with transparent interest rates.',
    features: ['Same-day approval', 'Best rates', 'Minimal documentation', '24-hour support'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-400',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2send-1-PP1D6VXH1obMxCOGc0WWYz5wNWfWTK.png'
  }
]

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-orange-500/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Complete gold solutions for every need—whether you&apos;re selling, investing, or releasing pledged gold
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="overflow-hidden transition-all group bg-gradient-to-br from-card/50 to-card/20 border border-orange-500/10 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/20 flex flex-col h-full rounded-2xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-accent/50 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.bgColor} ${service.textColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">{service.title}</h3>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                  
                  <div className="space-y-1.5 mb-6 flex-grow">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.textColor}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-opacity text-sm`}>
                    Learn More →
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
