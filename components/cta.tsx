'use client'

import { Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/contact-form'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-orange-500/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-orange-500/5 rounded-3xl p-12 md:p-16 border border-orange-500/20 overflow-hidden relative shadow-lg shadow-orange-500/10">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Ready to Turn Your Gold Into Cash?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Join thousands of satisfied customers who have experienced fair valuations, transparent processes, and instant payments at DSM Gold Buyers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {/* Contact option 1 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 backdrop-blur-sm border border-orange-200 rounded-2xl p-8 hover:border-orange-300 transition-all group">
                <Phone className="w-10 h-10 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2 text-lg text-foreground">Call Us Now</h4>
                <p className="text-sm text-muted-foreground mb-4">Speak with our gold experts</p>
                <a href="tel:+918883288847" className="text-orange-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  +91 8883288847 <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Contact option 2 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 backdrop-blur-sm border border-orange-200 rounded-2xl p-8 hover:border-orange-300 transition-all group">
                <MapPin className="w-10 h-10 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2 text-lg text-foreground">Visit Our Branch</h4>
                <p className="text-sm text-muted-foreground mb-4">Walk-in with your gold anytime</p>
                <button className="text-orange-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all mx-auto">
                  Find Branch <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-accent/30">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Open 10 AM - 7 PM (Mon-Sat)</span>
                  <span className="hidden sm:flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Closed on Sundays</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 h-14 px-8 transition-all hover:scale-105">
                    Sell Gold Now
                  </Button>
                  <Button size="lg" className="bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-300 font-bold rounded-xl h-14 px-8 transition-all">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 max-w-3xl mx-auto px-4 sm:px-0">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-6 sm:p-12 border-2 border-orange-200">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-2 text-foreground">Get Free Gold Valuation</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-8">Fill the form below and our gold experts will contact you within 1 hour with the best valuation for your gold.</p>
            <ContactForm variant="inline" />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-accent/30">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">DSM Gold Buyers</h5>
              <p className="text-sm text-muted-foreground">Bangalore&apos;s trusted gold buying partner with 35+ branches and fair market rates.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm">Services</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#sell-gold" className="hover:text-primary transition-colors">Sell Gold</a></li>
                <li><a href="/#release-pledge" className="hover:text-primary transition-colors">Release Pledged Gold</a></li>
                <li><a href="/#buy-gold" className="hover:text-primary transition-colors">Buy Gold</a></li>
                <li><a href="/#gold-loan" className="hover:text-primary transition-colors">Gold Loan</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/#branches" className="hover:text-primary transition-colors">Branches</a></li>
                <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="tel:+918883288847" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm">Legal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="/kyc" className="hover:text-primary transition-colors">KYC Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-accent/30 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 DSM Gold Buyers. All rights reserved. | Serving Bangalore with transparency and integrity</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
