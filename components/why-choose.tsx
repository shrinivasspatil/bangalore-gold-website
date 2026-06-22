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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose DSM Gold Buyers?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands across Bangalore for integrity, transparency, and fair dealings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Card key={idx} className="p-6 bg-accent/30 border-accent hover:border-primary/50 hover:bg-accent/50 transition-all group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Trust metrics */}
        <div className="bg-gradient-to-r from-primary/15 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/30">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">35+</p>
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
