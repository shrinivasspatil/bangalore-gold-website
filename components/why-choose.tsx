'use client'

import { Shield, Zap, TrendingUp, Users, Award, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'

const reasons = [
  {
    icon: Shield,
    title: 'Transparent Valuation',
    description: 'Live purity testing in front of you with no hidden charges. What you see is what you get.'
  },
  {
    icon: Zap,
    title: 'Instant Payment',
    description: 'Receive payment within minutes of acceptance. Direct bank transfer or cash available.'
  },
  {
    icon: TrendingUp,
    title: 'Best Market Rates',
    description: 'Real-time gold prices updated continuously. Competitive compensation for your gold.'
  },
  {
    icon: Users,
    title: 'Expert Staff',
    description: 'Trained professionals with BIS certification. Respectful and courteous service always.'
  },
  {
    icon: Award,
    title: 'Certified & Compliant',
    description: 'ISO certified operations. Complete KYC compliance and legal documentation.'
  },
  {
    icon: Clock,
    title: 'Hassle-Free Process',
    description: 'No paperwork burden. Simple documentation. Quick verification and fast checkout.'
  }
]

export default function WhyChoose() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-purple-500/3 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Why Choose DSM Gold Buyers?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Trusted by thousands across Bangalore for integrity, transparency, and fair dealings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Card key={idx} className="p-8 bg-gradient-to-br from-card/50 to-card/20 border border-purple-500/10 hover:border-purple-500/30 transition-all group rounded-2xl hover:shadow-xl hover:shadow-purple-500/10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 text-purple-400 mb-4 group-hover:from-purple-500/40 group-hover:to-pink-500/30 transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-purple-300 transition-colors">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Trust metrics */}
        <div className="bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-orange-500/5 rounded-2xl p-12 md:p-16 border border-orange-500/20 backdrop-blur-sm">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2 text-center">
              <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">35+</p>
              <p className="text-muted-foreground">Branches across Bangalore</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">10K+</p>
              <p className="text-muted-foreground">Happy customers served</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">100%</p>
              <p className="text-muted-foreground">Transparent pricing</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground">Customer support</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Priya Sharma', text: 'Excellent service! The process was transparent and quick. Received fair valuation and instant payment.' },
              { name: 'Rajesh Kumar', text: 'Very professional staff. They explained everything clearly. Best gold buyer in Bangalore, no doubt.' },
              { name: 'Neha Patel', text: 'Released my pledged gold without any hassle. Fair price and quick settlement. Highly recommended!' }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 bg-accent/50 border-accent">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Customer</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
