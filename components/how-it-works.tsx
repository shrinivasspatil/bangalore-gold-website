'use client'

import { Check, Scale, DollarSign, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

const steps = [
  {
    step: 1,
    icon: Check,
    title: 'Bring Your Gold',
    description: 'Visit your nearest DSM Gold Buyers branch with your gold jewelry and valid ID proof (Aadhaar/Passport)'
  },
  {
    step: 2,
    icon: Scale,
    title: 'Purity Check',
    description: 'We test your gold using advanced German machines to determine exact purity. Testing is transparent and damage-free'
  },
  {
    step: 3,
    icon: DollarSign,
    title: 'Fair Quotation',
    description: 'Based on purity and live market rate, we provide a clear quote with no hidden charges or deductions'
  },
  {
    step: 4,
    icon: Zap,
    title: 'Instant Payment',
    description: 'Accept the offer and receive instant payment via bank transfer or cash. Entire process takes 15-20 minutes'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-500/3 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Simple, transparent process from evaluation to payment—just 4 easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[60%] right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <Card className="p-8 bg-gradient-to-br from-card/50 to-card/20 border border-blue-500/10 hover:border-blue-500/30 transition-all h-full rounded-2xl group hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/20 flex-shrink-0 group-hover:from-blue-500/40 group-hover:to-cyan-500/30 transition-all">
                      <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{item.step}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Info box */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/50 to-primary/10 rounded-2xl p-8 border border-primary/30">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Time Required</p>
              <p className="text-3xl font-bold">15-20 mins</p>
              <p className="text-xs text-muted-foreground mt-1">From arrival to payment</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Required Documents</p>
              <ul className="text-sm space-y-1">
                <li>✓ Valid ID Proof</li>
                <li>✓ Address Proof</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Payment Methods</p>
              <ul className="text-sm space-y-1">
                <li>✓ Bank Transfer</li>
                <li>✓ Cash Payment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
