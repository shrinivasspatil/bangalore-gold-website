'use client'

import Link from 'next/link'
import { areasData } from '@/lib/areas-data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'

export default function AreasGrid() {
  const colors = [
    'from-red-500/20 to-orange-500/10 border-red-500/30 hover:border-red-500/60',
    'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 hover:border-cyan-500/60',
    'from-yellow-500/20 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/60',
    'from-purple-500/20 to-pink-500/10 border-purple-500/30 hover:border-purple-500/60',
    'from-green-500/20 to-cyan-500/10 border-green-500/30 hover:border-green-500/60',
    'from-pink-500/20 to-red-500/10 border-pink-500/30 hover:border-pink-500/60',
  ]

  const textColors = [
    'text-red-300',
    'text-cyan-300',
    'text-yellow-300',
    'text-purple-300',
    'text-green-300',
    'text-pink-300',
  ]

  const icons = [
    'from-red-500 to-orange-500',
    'from-cyan-500 to-blue-500',
    'from-yellow-500 to-orange-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-cyan-500',
    'from-pink-500 to-red-500',
  ]

  return (
    <section id="areas" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Gold Buyers in All <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">Popular Bangalore Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find our nearest branch and get instant cash for your gold today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasData.map((area, idx) => {
            const colorClass = colors[idx % colors.length]
            const textColor = textColors[idx % textColors.length]
            const iconGradient = icons[idx % icons.length]

            return (
              <Link key={area.slug} href={`/areas/${area.slug}`}>
                <Card className={`p-6 h-full bg-gradient-to-br ${colorClass} border-2 transition-all hover:shadow-2xl cursor-pointer group`}>
                  <div className="space-y-4">
                    {/* Header with icon */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`text-2xl font-bold ${textColor} mb-1`}>
                          {area.area}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{area.branches} branches</span>
                        </div>
                      </div>
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${iconGradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    </div>

                    {/* Quick info */}
                    <div className="space-y-2 border-t border-accent/30 pt-4">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{area.time.split('-')[0].trim()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{area.phone}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {area.description}
                    </p>

                    {/* CTA */}
                    <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white group">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* SEO-friendly text section */}
        <div className="mt-16 bg-gradient-to-r from-accent/50 to-accent/30 rounded-2xl p-8 border border-accent">
          <h3 className="text-2xl font-bold mb-4">DSM Gold Buyers - Your Trusted Local Gold Dealer</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            DSM Gold Buyers is Bangalore&apos;s most trusted gold trading partner with 35+ branches across all major areas. Whether you&apos;re in Indiranagar, Koramangala, Whitefield, MG Road, Jayanagar, Marathahalli, Banaswadi, Hebbal, Malleshwaram, Bannerghatta Road, Vijayanagar, or Sarjapur, we&apos;re here to offer you the best market rates for gold.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We specialize in gold selling, pledged gold release, gold buying, and gold loans with transparent pricing, instant valuation, and same-day payments. Our certified experts use advanced German machines to ensure accurate purity testing. Contact us today for fair market rates and hassle-free transactions.
          </p>
        </div>
      </div>
    </section>
  )
}
