'use client'

import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSellGoldClick = () => {
    window.dispatchEvent(new Event('openContactModal'))
  }

  return (
    <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-orange-500/20 shadow-lg shadow-orange-500/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all">
            <span className="text-xl font-bold text-white">₹</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg text-foreground block">DSM Gold Buyers</span>
            <span className="text-xs text-orange-400">Trusted Gold Buyer in Bangalore</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/#branches" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
            Find Branch
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+918883288847" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-orange-400 transition-colors rounded-lg hover:bg-orange-500/10">
            <Phone className="w-4 h-4" />
            <span>+91 8883288847</span>
          </a>
          <Button size="sm" onClick={handleSellGoldClick} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all">
            Sell Gold Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-accent/30 bg-accent/30 backdrop-blur">
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Services
            </a>
            <a href="#branches" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Find Branch
            </a>
            <a href="#process" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              How It Works
            </a>
            <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </a>
            <div className="pt-4 border-t border-accent space-y-2">
              <Button variant="outline" className="w-full border-primary/30">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button onClick={handleSellGoldClick} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Sell Gold Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
