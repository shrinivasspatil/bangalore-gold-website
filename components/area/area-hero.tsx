'use client'

import { Area } from '@/lib/areas-data'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, MapIcon } from 'lucide-react'

interface AreaHeroProps {
  area: Area
}

export default function AreaHero({ area }: AreaHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="w-full max-w-4xl">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Sell Gold in
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent mt-2">
                {area.area}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {area.description}
            </p>
          </div>

          {/* Quick info cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-xl p-4 border border-cyan-500/30">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Working Hours</p>
                  <p className="font-semibold text-cyan-300">{area.time}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/5 rounded-xl p-4 border border-green-500/30">
              <div className="flex items-center gap-3">
                <MapIcon className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Branches</p>
                  <p className="font-semibold text-green-300">{area.branches} locations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Call Now</p>
                  <p className="font-semibold text-purple-300">{area.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/50"
              onClick={() => window.location.href = `tel:${area.phone.replace(/\D/g, '')}`}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50"
              onClick={() =>
                window.open(
                  `https://maps.google.com/?q=${area.latitude},${area.longitude}`,
                  '_blank'
                )
              }
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>

          {/* Address info */}
          <div className="bg-gradient-to-r from-accent/50 to-accent/30 rounded-2xl p-6 border border-accent">
            <h3 className="font-semibold mb-2 text-foreground">Branch Address</h3>
            <p className="text-muted-foreground leading-relaxed">{area.address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
