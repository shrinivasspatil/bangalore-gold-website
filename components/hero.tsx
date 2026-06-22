'use client'

import { Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
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
                <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent mt-2">Instant Cash</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Sell gold, release pledged gold, or buy gold with transparent pricing, instant payments, and 35+ branches across Bangalore. We&apos;re here to serve you with complete integrity and fair valuations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/50">
                Sell Gold Now
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50">
                Find Branch
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-accent/30">
              <div className="space-y-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">35+</div>
                <p className="text-sm text-muted-foreground">Branches</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Fair</div>
                <p className="text-sm text-muted-foreground">Rates</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Instant</div>
                <p className="text-sm text-muted-foreground">Payments</p>
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
