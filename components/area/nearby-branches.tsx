'use client'

import { Area } from '@/lib/areas-data'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Clock } from 'lucide-react'

interface NearbyBranchesProps {
  area: Area
}

export default function NearbyBranches({ area }: NearbyBranchesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Nearby Landmarks & <span className="text-green-400">Neighborhoods</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conveniently located near major areas in {area.area}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Landmarks */}
          <Card className="p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border-2 border-yellow-500/30">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">Nearby Landmarks</h3>
            <div className="space-y-3">
              {area.nearbyLandmarks.map((landmark, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-foreground">{landmark}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Neighborhoods */}
          <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border-2 border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Neighborhoods</h3>
            <div className="space-y-3">
              {area.neighborhoods.map((neighborhood, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Badge className="bg-cyan-500/30 text-cyan-300 hover:bg-cyan-500/40">
                    {neighborhood}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/5 border-2 border-green-500/30 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/30 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="font-semibold mb-2 text-green-300">Easy Access</h4>
            <p className="text-sm text-muted-foreground">
              Centrally located for easy access from all parts of {area.area}
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/5 border-2 border-purple-500/30 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/30 mb-4">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-semibold mb-2 text-purple-300">Extended Hours</h4>
            <p className="text-sm text-muted-foreground">{area.time}</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/5 border-2 border-orange-500/30 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/30 mb-4">
              <Phone className="w-6 h-6 text-orange-400" />
            </div>
            <h4 className="font-semibold mb-2 text-orange-300">Quick Support</h4>
            <p className="text-sm text-muted-foreground">Call us anytime during working hours</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
