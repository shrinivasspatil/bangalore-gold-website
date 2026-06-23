'use client'

import { useState, useEffect } from 'react'
import ContactForm from '@/components/contact-form'
import { X } from 'lucide-react'

export default function FormModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if modal has been shown before in this session
    const modalShown = sessionStorage.getItem('contactFormModalShown')
    
    if (!modalShown) {
      // Show modal after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('contactFormModalShown', 'true')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
        <div className="bg-gradient-to-br from-card to-card/50 border border-orange-500/30 rounded-2xl shadow-2xl shadow-orange-500/20 p-8 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-orange-500/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-muted-foreground hover:text-foreground" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Get Free Gold Valuation
            </h2>
            <p className="text-muted-foreground">
              Fill details below and our experts will contact you within 1 hour
            </p>
          </div>

          {/* Form */}
          <ContactForm onClose={handleClose} variant="popup" />

          {/* Footer Info */}
          <div className="mt-6 pt-6 border-t border-orange-500/10">
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Your information is secure and will only be used to contact you.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
