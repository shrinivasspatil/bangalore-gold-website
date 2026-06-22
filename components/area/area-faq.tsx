'use client'

import { Area } from '@/lib/areas-data'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AreaFAQProps {
  area: Area
}

export default function AreaFAQ({ area }: AreaFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: `What are your working hours in ${area.area}?`,
      answer: `We are open from ${area.time}. Visit us during these hours for the best experience. Our experts will provide you with a quick and accurate valuation.`,
    },
    {
      question: `How much gold can I sell at your ${area.area} branch?`,
      answer: `There is no limit to the amount of gold you can sell. Whether it's a few grams or kilograms, we handle all quantities professionally with fair market rates.`,
    },
    {
      question: `What documents do I need to bring?`,
      answer: `You need to bring a valid ID (Aadhar, PAN, or Passport) and the gold items you wish to sell. No other documents are required for the transaction.`,
    },
    {
      question: `How long does the valuation process take?`,
      answer: `The valuation process typically takes 15-20 minutes. Our certified experts use advanced German machines to accurately assess purity and weight.`,
    },
    {
      question: `Do you offer home pickup services in ${area.area}?`,
      answer: `Yes, we offer convenient home pickup services for bulk quantities. Contact us at ${area.phone} to schedule a pickup appointment.`,
    },
    {
      question: `What payment methods do you accept?`,
      answer: `We accept cash, bank transfers, and cheques. Instant bank transfers are our most popular option, ensuring you receive payment quickly and securely.`,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-accent/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked <span className="text-pink-400">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about selling gold at DSM Gold Buyers
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-to-r from-accent/50 to-accent/30 border-2 border-accent hover:border-pink-500/50 transition-all cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-pink-400 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {openIndex === idx && (
                <div className="mt-4 pt-4 border-t border-accent/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border-2 border-green-500/30 text-center">
          <h3 className="text-2xl font-bold mb-4 text-green-300">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our {area.area} branch directly for any queries
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${area.phone.replace(/\D/g, '')}`}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all"
            >
              Call Us: {area.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
