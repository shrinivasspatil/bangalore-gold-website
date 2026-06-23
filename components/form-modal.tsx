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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] w-[calc(100%-32px)] sm:w-full max-w-md">
        <div className="bg-white border-2 border-orange-200 rounded-2xl shadow-2xl shadow-orange-500/20 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-orange-100 rounded-lg transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Get Free Gold Valuation
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Fill details below and our experts will contact you within 1 hour
            </p>
          </div>

          {/* Form */}
          <ContactForm onClose={handleClose} variant="popup" />
        </div>
      </div>
    </>
  )
}
