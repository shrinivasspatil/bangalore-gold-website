'use client'

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Excellent service! Got fair price for my old jewelry. The entire process was transparent and quick. Highly recommended!',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79d8d5ee-4d57-4015-8e48-805a56fef64d-ztVKFgdDSXAaWHL4NJ8PLpZvBv5vyB.jpeg'
  },
  {
    name: 'Anjali Reddy',
    rating: 5,
    text: 'Best gold buyers in Bangalore! No hidden charges, instant payment, and the staff was very professional and courteous.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c03033f4-9a4e-472d-8281-10727e57f4ae-MLRom15dw8T7rm1VgztaIYSHOPD5eV.jpeg'
  },
  {
    name: 'Meera Desai',
    rating: 5,
    text: 'I sold my damaged jewelry and got the best market rate. The process was hassle-free and they completed it in 30 minutes!',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2014%2C%202026%2C%2004_38_05%20PM-qRhxiepXaMKqn3OWrw2ZbtqknLxKvF.png'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Loved by <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Customers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read what our satisfied customers across Bangalore have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 bg-gradient-to-br from-card to-accent/20 border border-accent/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-orange-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden ring-2 ring-primary/30">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
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
