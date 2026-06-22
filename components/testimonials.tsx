'use client'

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Excellent service! Got fair price for my old jewelry. The entire process was transparent and quick. Highly recommended!'
  },
  {
    name: 'Anjali Reddy',
    rating: 5,
    text: 'Best gold buyers in Bangalore! No hidden charges, instant payment, and the staff was very professional and courteous.'
  },
  {
    name: 'Meera Desai',
    rating: 5,
    text: 'I sold my damaged jewelry and got the best market rate. The process was hassle-free and they completed it in 30 minutes!'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-orange-500/3 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Loved by <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Customers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Read what our satisfied customers across Bangalore have to say about DSM Gold Buyers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8 bg-gradient-to-br from-card/50 to-card/20 border border-orange-500/10 hover:border-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/15 rounded-2xl group">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic text-lg">"{testimonial.text}"</p>
              </div>
              <div className="pt-4 border-t border-accent/30">
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-accent/30">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">10K+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">₹50Cr+</div>
            <p className="text-muted-foreground">Gold Traded</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">4.9/5</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
