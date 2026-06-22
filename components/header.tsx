'use client'

import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-accent/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
            <span className="text-xl font-bold text-primary">₹</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">DSM Gold Buyers</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#branches" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Find Branch
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2">
            <Phone className="w-4 h-4" />
            <span className="text-xs">+91 9876543210</span>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Sell Gold
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
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Sell Gold
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
