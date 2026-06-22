'use client'

import { Area } from '@/lib/areas-data'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

interface AreaServicesProps {
  area: Area
}

export default function AreaServices({ area }: AreaServicesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services Available in <span className="text-cyan-400">{area.area}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete gold trading solutions tailored for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {area.localServices.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/30 to-red-500/30">
                    <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-orange-300">
                    {service}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Professional {service.toLowerCase()} service with transparent pricing
                    and instant settlements at our {area.area} branch.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why choose us section */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold mb-6 text-purple-300">
            Why Choose DSM Gold in {area.area}?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Fair market-linked rates',
              'Instant valuation process',
              'Same-day payment',
              'Transparent pricing',
              'Expert staff',
              'ISO certified valuation',
            ].map((reason, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
