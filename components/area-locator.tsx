'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const areas = [
  { area: 'Indiranagar', branches: 2, time: '10 AM - 7 PM', phone: '+91 9876543210' },
  { area: 'Koramangala', branches: 2, time: '10 AM - 7 PM', phone: '+91 9876543211' },
  { area: 'Whitefield', branches: 1, time: '10 AM - 7 PM', phone: '+91 9876543212' },
  { area: 'MG Road', branches: 3, time: '10 AM - 7:30 PM', phone: '+91 9876543213' },
  { area: 'Jayanagar', branches: 2, time: '10 AM - 7 PM', phone: '+91 9876543214' },
  { area: 'Banashankari', branches: 1, time: '10 AM - 7 PM', phone: '+91 9876543215' },
  { area: 'JP Nagar', branches: 2, time: '10 AM - 7 PM', phone: '+91 9876543216' },
  { area: 'Yelahanka', branches: 1, time: '10 AM - 7 PM', phone: '+91 9876543217' },
  { area: 'Marathahalli', branches: 2, time: '10 AM - 7 PM', phone: '+91 9876543218' },
  { area: 'Yeshwanthpur', branches: 1, time: '10 AM - 7 PM', phone: '+91 9876543219' },
  { area: 'Malleswaram', branches: 2, time: '10 AM - 7 PM', phone: '+91 9876543220' },
  { area: 'Eshwari Nagar', branches: 1, time: '10 AM - 7 PM', phone: '+91 9876543221' },
]

export default function AreaLocator() {
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Find Your <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Nearest Branch</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            35+ branches across Bangalore. Visit the one closest to you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Branch list */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-cyan-500/10 to-blue-500/5 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="font-bold text-lg mb-4 text-cyan-400">Popular Areas</h3>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {areas.map((area, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedArea(area)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedArea?.area === area.area
                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400 text-cyan-300'
                        : 'hover:bg-cyan-500/10 border border-cyan-500/20'
                    }`}
                  >
                    <div className="font-medium text-sm">{area.area}</div>
                    <div className="text-xs text-muted-foreground">{area.branches} branch{area.branches > 1 ? 'es' : ''}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            {selectedArea ? (
              <Card className="p-8 bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-2 border-cyan-500/30 h-full">
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/30 to-cyan-500/30">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-3xl font-bold mt-4 mb-2 text-cyan-300">{selectedArea.area}</h4>
                    <p className="text-muted-foreground">
                      Located in the heart of {selectedArea.area}, serving Bangalore with excellence
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-cyan-500/20">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="text-sm text-muted-foreground">Working Hours</p>
                          <p className="font-semibold text-green-300">{selectedArea.time}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-sm text-muted-foreground">Call Now</p>
                          <p className="font-semibold text-purple-300">{selectedArea.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-lg p-4 border border-yellow-500/30">
                      <p className="text-sm text-muted-foreground mb-2">Branches in Area</p>
                      <p className="text-3xl font-bold text-yellow-300">{selectedArea.branches}</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/10 rounded-lg p-4 border border-pink-500/30">
                      <p className="text-sm text-muted-foreground mb-2">Quick Check-in</p>
                      <p className="text-sm font-semibold text-pink-300">15-20 minutes for valuation</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-cyan-500/20 flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/30">
                      Get Directions
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30">
                      Call Branch
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border-2 border-cyan-500/20 h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cyan-400/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Select an area to view branch details</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
