'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

const services = [
  'Sell Gold',
  'Release Pledged Gold',
  'Buy Gold',
  'Gold Loan'
]

interface ContactFormProps {
  onClose?: () => void
  variant?: 'popup' | 'inline'
}

export default function ContactForm({ onClose, variant = 'popup' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pin: '',
    service: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.phone || !formData.service) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with your actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', pin: '', service: '' })
        
        // Close popup after 2 seconds if it's a popup variant
        if (variant === 'popup' && onClose) {
          setTimeout(() => {
            onClose()
          }, 2000)
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.log('[v0] Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formContent = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-lg bg-accent border border-orange-500/20 focus:border-orange-500/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          maxLength={10}
          className="w-full px-4 py-3 rounded-lg bg-accent border border-orange-500/20 focus:border-orange-500/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          PIN Code
        </label>
        <input
          type="text"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          placeholder="Postal code (optional)"
          maxLength={6}
          className="w-full px-4 py-3 rounded-lg bg-accent border border-orange-500/20 focus:border-orange-500/50 focus:outline-none text-foreground placeholder:text-muted-foreground transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Service You Need *
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-accent border border-orange-500/20 focus:border-orange-500/50 focus:outline-none text-foreground transition-all"
        >
          <option value="">Select Service</option>
          {services.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30">
          <p className="text-sm text-green-400 font-medium">
            ✓ Thank you! We&apos;ll contact you shortly.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30">
          <p className="text-sm text-red-400 font-medium">
            Please fill all required fields correctly.
          </p>
        </div>
      )}

      <Button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg transition-all"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Valuation'}
      </Button>
    </div>
  )

  if (variant === 'inline') {
    return (
      <Card className="p-8 bg-gradient-to-br from-card/50 to-card/20 border border-orange-500/20 rounded-2xl">
        <h3 className="text-2xl font-bold mb-6 text-foreground">Quick Contact Form</h3>
        {formContent}
      </Card>
    )
  }

  return formContent
}
