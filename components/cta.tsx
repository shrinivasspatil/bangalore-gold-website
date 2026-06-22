'use client'

import { Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary/20 via-accent to-background rounded-3xl p-12 md:p-16 border border-primary/30 overflow-hidden relative">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Turn Your Gold Into Cash?
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of satisfied customers who have experienced fair valuations, transparent processes, and instant payments at DSM Gold Buyers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {/* Contact option 1 */}
              <div className="bg-card/50 backdrop-blur border border-accent rounded-2xl p-6 hover:border-primary/50 transition-all">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Call Us Now</h4>
                <p className="text-sm text-muted-foreground mb-4">Speak with our gold experts</p>
                <a href="tel:+919876543210" className="text-primary font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  +91 9876 543 210 <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Contact option 2 */}
              <div className="bg-card/50 backdrop-blur border border-accent rounded-2xl p-6 hover:border-primary/50 transition-all">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Visit Our Branch</h4>
                <p className="text-sm text-muted-foreground mb-4">Walk-in with your gold anytime</p>
                <button className="text-primary font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all mx-auto">
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
                
                <div className="flex flex-wrap justify-center gap-3">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                    Sell Gold Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/30 hover:bg-accent/50 rounded-lg">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
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
                <li><a href="#" className="hover:text-primary transition-colors">Sell Gold</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Release Pledged Gold</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Buy Gold</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gold Loan</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Branches</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-sm">Legal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">KYC Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-accent/30 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DSM Gold Buyers. All rights reserved. | Serving Bangalore with transparency and integrity</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
