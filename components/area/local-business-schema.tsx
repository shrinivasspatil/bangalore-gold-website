import { Area } from '@/lib/areas-data'

interface LocalBusinessSchemaProps {
  area: Area
}

export default function LocalBusinessSchema({ area }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://dsmgoldbuyers.com/areas/${area.slug}`,
    name: `DSM Gold Buyers - ${area.area}`,
    description: area.description,
    url: `https://dsmgoldbuyers.com/areas/${area.slug}`,
    telephone: area.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: area.address,
      addressLocality: area.area,
      addressRegion: 'Karnataka',
      postalCode: area.zipCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: area.latitude,
      longitude: area.longitude,
    },
    image: 'https://dsmgoldbuyers.com/logo.png',
    priceRange: '₹0-₹1000000',
    areaServed: [area.area, 'Bangalore', 'Karnataka', 'India'],
    serviceType: [
      'Gold Buying',
      'Gold Selling',
      'Gold Loans',
      'Pledged Gold Release',
      'Jewelry Valuation',
    ],
    operatingHours: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: area.time.includes('9:00') ? '21:00' : '20:00',
    },
    sameAs: [
      'https://www.facebook.com/dsmgoldbuyers',
      'https://www.instagram.com/dsmgoldbuyers',
      'https://www.google.com/maps/place/DSM+Gold+Buyers',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '245',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Rajesh Kumar',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: 'Excellent service and fair rates. Highly recommended.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Priya Sharma',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: 'Transparent process and quick payment. Very satisfied.',
      },
    ],
    numberOfLocations: area.branches,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
