'use client'

import { Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-sm font-medium text-primary">✨ Bangalore&apos;s Trusted Gold Buyer</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Transform Your Gold Into
                <span className="block text-primary mt-2">Instant Cash</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Sell gold, release pledged gold, or buy gold with transparent pricing, instant payments, and 35+ branches across Bangalore. We&apos;re here to serve you with complete integrity and fair valuations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold">
                Sell Gold Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-accent rounded-lg font-semibold">
                Find Branch
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-accent">
              <div>
                <div className="text-2xl font-bold text-primary">35+</div>
                <p className="text-sm text-muted-foreground">Branches in Bangalore</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Fair</div>
                <p className="text-sm text-muted-foreground">Market Rates</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Instant</div>
                <p className="text-sm text-muted-foreground">Payment</p>
              </div>
            </div>
          </div>

          {/* Right visual - Gold themed card */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent to-background rounded-3xl" />
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-accent/50 to-background/50 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 ring-8 ring-primary/10">
                  <div className="text-4xl">₹</div>
                </div>
                <h3 className="text-2xl font-bold">Live Gold Rate</h3>
                <div className="text-5xl font-bold text-primary">₹7,350</div>
                <p className="text-muted-foreground">per gram today</p>
                <div className="pt-4 border-t border-accent/50">
                  <p className="text-sm text-muted-foreground mb-4">Updated 2 minutes ago</p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Bangalore, KA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-12 border-t border-accent/30">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by thousands across Bangalore</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>✓ Transparent Process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>✓ No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>✓ Instant Bank Transfer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>✓ KYC Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
