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
              <div className="inline-flex items-center px-4 py-2.5 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm">
                <span className="text-sm font-semibold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">⭐ Bangalore&apos;s Most Trusted Gold Buyer</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                Transform Your Gold
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">Into Instant Cash</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                Experience transparent gold buying with fair market rates, instant payments, and professional service across 35+ Bangalore branches.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-bold shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all scale-100 hover:scale-105 h-14 text-base">
                Sell Gold Now
              </Button>
              <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold border border-slate-700 hover:border-slate-600 h-14 text-base transition-all">
                Find Your Branch
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

          {/* Right visual - Woman with gold and cash */}
          <div className="relative h-[550px] hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-transparent rounded-3xl" />
            <div className="relative z-10 w-full h-full rounded-3xl border border-orange-500/20 bg-gradient-to-br from-accent/30 to-background/50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-2">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2014%2C%202026%2C%2004_38_05%20PM-qRhxiepXaMKqn3OWrw2ZbtqknLxKvF.png"
                alt="Woman holding gold jewelry and cash - DSM Gold Buyers"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
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
