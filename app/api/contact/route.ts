import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, phone, service } = body
    
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate phone number format (Indian mobile)
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Validate pin code if provided
    if (body.pin && !/^[0-9]{6}$/.test(body.pin)) {
      return NextResponse.json(
        { error: 'Invalid PIN code' },
        { status: 400 }
      )
    }

    // Log the contact form submission (in production, send to email service, CRM, etc.)
    console.log('[v0] New contact form submission:', {
      name,
      phone,
      service,
      pin: body.pin || 'N/A',
      timestamp: new Date().toISOString()
    })

    // TODO: Send email or integrate with CRM/email service
    // Example with nodemailer or email service:
    // await sendEmail({
    //   to: 'contact@dsmgoldbuyers.com',
    //   subject: `New Gold Valuation Request from ${name}`,
    //   html: `
    //     <h2>New Lead</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>PIN:</strong> ${body.pin || 'N/A'}</p>
    //   `
    // })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
