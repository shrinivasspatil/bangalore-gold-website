export interface Area {
  slug: string
  area: string
  phone: string
  time: string
  branches: number
  description: string
  address: string
  latitude: number
  longitude: number
  zipCode: string
  keywords: string[]
  seoTitle: string
  seoDescription: string
  localServices: string[]
  nearbyLandmarks: string[]
  neighborhoods: string[]
}

export const areasData: Area[] = [
  {
    slug: 'indiranagar',
    area: 'Indiranagar',
    phone: '+91 98765 43210',
    time: '10:00 AM - 8:00 PM',
    branches: 3,
    address: '100 Feet Road, Indiranagar, Bangalore 560038',
    latitude: 12.9716,
    longitude: 77.6412,
    zipCode: '560038',
    description: 'Premium gold buying service in Indiranagar, one of Bangalore\'s most vibrant and upscale neighborhoods. Our branch offers quick valuations and fair rates for all types of gold jewelry.',
    keywords: [
      'gold buyers indiranagar',
      'sell gold indiranagar bangalore',
      'gold loan indiranagar',
      'pledged gold release indiranagar',
      'cash for gold indiranagar',
      'best gold rates indiranagar',
      'old gold buyers indiranagar'
    ],
    seoTitle: 'Gold Buyers in Indiranagar, Bangalore | DSM Gold | Sell Gold Today',
    seoDescription: 'Looking for trusted gold buyers in Indiranagar? DSM Gold offers best market rates, instant valuation, and immediate payment. Visit our 3 branches in Indiranagar.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Jewelry Valuation'
    ],
    nearbyLandmarks: [
      'Forum mall',
      'Indiranagar Tank',
      'CMH Road',
      'Koramangala'
    ],
    neighborhoods: ['100 Feet Road', 'Indiranagar', 'Whitefield Junction', 'HAL Airport']
  },
  {
    slug: 'koramangala',
    area: 'Koramangala',
    phone: '+91 98765 43211',
    time: '10:00 AM - 8:00 PM',
    branches: 2,
    address: '5th Block, Koramangala, Bangalore 560034',
    latitude: 12.9352,
    longitude: 77.6245,
    zipCode: '560034',
    description: 'Leading gold trading and exchange service in Koramangala. Our expert team provides transparent valuation and competitive rates for gold jewelry, coins, and bars.',
    keywords: [
      'gold buyers koramangala',
      'sell gold koramangala',
      'gold loan koramangala',
      'pledged gold release koramangala',
      'cash for gold koramangala',
      'best gold rates 5th block',
      'old jewelry buyers koramangala'
    ],
    seoTitle: 'Gold Buyers in Koramangala | DSM Gold | Best Rates & Instant Cash',
    seoDescription: 'Trusted gold buyer in Koramangala 5th Block. Sell your gold at fair market rates with instant payment. Professional valuation & transparent process.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Purity Testing'
    ],
    nearbyLandmarks: [
      'Koramangala Commercial Street',
      'Bangalore Central',
      'Indiranagar',
      'Cubbon Park'
    ],
    neighborhoods: ['5th Block', 'Koramangala', 'Forum mall area', 'HSR Layout']
  },
  {
    slug: 'whitefield',
    area: 'Whitefield',
    phone: '+91 98765 43212',
    time: '10:00 AM - 8:00 PM',
    branches: 4,
    address: 'Whitefield Main Road, Bangalore 560066',
    latitude: 12.9698,
    longitude: 77.7499,
    zipCode: '560066',
    description: 'Premier gold buying destination in Whitefield. Serving the tech city with fair valuations, quick settlements, and best market-linked rates for gold jewelry.',
    keywords: [
      'gold buyers whitefield',
      'sell gold whitefield bangalore',
      'gold loan whitefield',
      'pledged gold release whitefield',
      'cash for gold whitefield',
      'best gold rates whitefield main road',
      'old gold buyers tech park'
    ],
    seoTitle: 'Gold Buyers in Whitefield | DSM Gold | Fair Rates & Quick Valuation',
    seoDescription: 'Best gold buyer in Whitefield with 4 branches. Instant valuation, fair market rates, and same-day payment. Trusted by tech professionals.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Online Valuation'
    ],
    nearbyLandmarks: [
      'Whitefield Tech Park',
      'Divyashree Tech Park',
      'Bangalore International Airport',
      'ITPL'
    ],
    neighborhoods: ['Whitefield Main Road', 'Tech Park', 'ITPL', 'Marathahalli']
  },
  {
    slug: 'mg-road',
    area: 'MG Road',
    phone: '+91 98765 43213',
    time: '10:00 AM - 9:00 PM',
    branches: 2,
    address: 'Brigade Road, MG Road, Bangalore 560001',
    latitude: 12.9716,
    longitude: 77.5946,
    zipCode: '560001',
    description: 'Central Bangalore\'s premier gold trading service on Brigade Road. Premium location with fastest transaction speeds and competitive gold rates.',
    keywords: [
      'gold buyers mg road',
      'sell gold mg road bangalore',
      'gold buyers brigade road',
      'gold loan mg road',
      'pledged gold release mg road',
      'cash for gold central bangalore',
      'best gold rates downtown bangalore'
    ],
    seoTitle: 'Gold Buyers in MG Road, Bangalore | DSM Gold | Instant Payment',
    seoDescription: 'Located on Brigade Road, MG Road. Sell gold instantly at best rates. Professional valuation, transparent pricing, and quick settlement.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Express Valuation'
    ],
    nearbyLandmarks: [
      'Cubbon Park',
      'Vidhana Soudha',
      'UB City',
      'Brigade Road shopping'
    ],
    neighborhoods: ['Brigade Road', 'MG Road', 'Cubbon Park', 'Downtown Bangalore']
  },
  {
    slug: 'jayanagar',
    area: 'Jayanagar',
    phone: '+91 98765 43214',
    time: '10:00 AM - 8:00 PM',
    branches: 2,
    address: '4th Block, Jayanagar, Bangalore 560041',
    latitude: 12.9352,
    longitude: 77.5929,
    zipCode: '560041',
    description: 'Trusted gold buying service in Jayanagar\'s 4th Block. Serving South Bangalore residents with fair valuations and instant cash settlements.',
    keywords: [
      'gold buyers jayanagar',
      'sell gold jayanagar bangalore',
      'gold loan jayanagar 4th block',
      'pledged gold release jayanagar',
      'cash for gold jayanagar',
      'best gold rates south bangalore',
      'old jewelry buyers jayanagar'
    ],
    seoTitle: 'Gold Buyers in Jayanagar | DSM Gold | Fair Valuation & Cash Payment',
    seoDescription: 'Gold buyer in Jayanagar 4th Block. Sell your gold jewelry at fair market rates with instant payment. Certified valuation & transparent process.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Home Pickup Service'
    ],
    nearbyLandmarks: [
      'Jayanagar 4th Block Park',
      'Jayanagar Shopping Street',
      'Sri Veerabhadreshwara Temple',
      'South Bangalore'
    ],
    neighborhoods: ['4th Block', 'Jayanagar', 'Banashankari', 'BM Layout']
  },
  {
    slug: 'marathahalli',
    area: 'Marathahalli',
    phone: '+91 98765 43215',
    time: '10:00 AM - 8:00 PM',
    branches: 3,
    address: 'Marathahalli Bridge, Bangalore 560037',
    latitude: 12.9698,
    longitude: 77.6824,
    zipCode: '560037',
    description: 'Convenient gold trading hub in Marathahalli. Serving residents and professionals with quick valuations and competitive market rates.',
    keywords: [
      'gold buyers marathahalli',
      'sell gold marathahalli bridge',
      'gold loan marathahalli',
      'pledged gold release marathahalli',
      'cash for gold marathahalli bangalore',
      'best gold rates marathahalli',
      'old gold buyers bridge area'
    ],
    seoTitle: 'Gold Buyers at Marathahalli Bridge | DSM Gold | Quick Cash Today',
    seoDescription: 'Gold buyer at Marathahalli Bridge. Fair rates, instant valuation, and same-day payment for all types of gold. Visit our 3 branches nearby.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Purity Testing'
    ],
    nearbyLandmarks: [
      'Marathahalli Bridge',
      'Whitefield Connection',
      'Sarjapur Road',
      'VR Bangalore'
    ],
    neighborhoods: ['Marathahalli', 'Whitefield', 'Sarjapur', 'Brookfield']
  },
  {
    slug: 'banaswadi',
    area: 'Banaswadi',
    phone: '+91 98765 43216',
    time: '10:00 AM - 8:00 PM',
    branches: 2,
    address: 'Banaswadi Main Road, Bangalore 560033',
    latitude: 13.0059,
    longitude: 77.5799,
    zipCode: '560033',
    description: 'Reliable gold buying service in East Bangalore\'s Banaswadi area. Quick transactions and fair market rates for gold jewelry and coins.',
    keywords: [
      'gold buyers banaswadi',
      'sell gold banaswadi bangalore',
      'gold loan banaswadi',
      'pledged gold release banaswadi',
      'cash for gold east bangalore',
      'best gold rates banaswadi main road',
      'old jewelry buyers banaswadi'
    ],
    seoTitle: 'Gold Buyers in Banaswadi | DSM Gold | Best Rates & Fast Service',
    seoDescription: 'Gold buyer in Banaswadi Main Road. Transparent valuation, fair market rates, and instant payment. Serving East Bangalore with professionalism.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Expert Valuation'
    ],
    nearbyLandmarks: [
      'Banaswadi Junction',
      'Tin Factory',
      'Forum mall',
      'Ravi Nivas'
    ],
    neighborhoods: ['Banaswadi', 'Ravi Nivas', 'Sanjay Nagar', 'Dakshina Kannada']
  },
  {
    slug: 'hebbal',
    area: 'Hebbal',
    phone: '+91 98765 43217',
    time: '10:00 AM - 8:00 PM',
    branches: 2,
    address: 'Hebbal Market, Bangalore 560024',
    latitude: 13.0135,
    longitude: 77.6009,
    zipCode: '560024',
    description: 'North Bangalore\'s premier gold trading service in Hebbal Market. Trusted for honest valuations and quick settlements at competitive rates.',
    keywords: [
      'gold buyers hebbal',
      'sell gold hebbal bangalore',
      'gold loan hebbal market',
      'pledged gold release hebbal',
      'cash for gold north bangalore',
      'best gold rates hebbal',
      'old gold buyers hebbal market'
    ],
    seoTitle: 'Gold Buyers in Hebbal | DSM Gold | Fair Rates & Instant Payment',
    seoDescription: 'Gold buyer at Hebbal Market, North Bangalore. Professional valuation, competitive rates, and same-day payment for gold jewelry.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Batch Processing'
    ],
    nearbyLandmarks: [
      'Hebbal Market',
      'Ulsoor Lake',
      'HAL Airport',
      'Infantry Road'
    ],
    neighborhoods: ['Hebbal', 'Ulsoor', 'HAL Layout', 'Infantry Road']
  },
  {
    slug: 'malleshwaram',
    area: 'Malleshwaram',
    phone: '+91 98765 43218',
    time: '10:00 AM - 8:00 PM',
    branches: 2,
    address: 'Malleshwaram High Street, Bangalore 560003',
    latitude: 13.0012,
    longitude: 77.5705,
    zipCode: '560003',
    description: 'Heritage area gold trading service in Malleshwaram. Serving the elite residential area with premium service and fair valuations.',
    keywords: [
      'gold buyers malleshwaram',
      'sell gold malleshwaram bangalore',
      'gold loan malleshwaram high street',
      'pledged gold release malleshwaram',
      'cash for gold malleshwaram',
      'best gold rates north bangalore',
      'old jewelry buyers malleshwaram'
    ],
    seoTitle: 'Gold Buyers in Malleshwaram | DSM Gold | Premium Service & Fair Rates',
    seoDescription: 'Gold buyer on Malleshwaram High Street. Expert valuation, transparent pricing, and instant payment for gold jewelry in North Bangalore.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Premium Service'
    ],
    nearbyLandmarks: [
      'Malleshwaram Temple',
      'High Street',
      'Dhanushkodi Lake',
      'Bangalore College'
    ],
    neighborhoods: ['Malleshwaram', 'Vasanth Nagar', 'Giri Nagar', 'Ritz Theatre']
  },
  {
    slug: 'bannerghatta-road',
    area: 'Bannerghatta Road',
    phone: '+91 98765 43219',
    time: '10:00 AM - 8:00 PM',
    branches: 3,
    address: 'Bannerghatta Road, Bangalore 560076',
    latitude: 12.9116,
    longitude: 77.5945,
    zipCode: '560076',
    description: 'South Bangalore\'s leading gold buyer on Bannerghatta Road. Offering fair market rates and professional service with multiple branch locations.',
    keywords: [
      'gold buyers bannerghatta road',
      'sell gold bannerghatta',
      'gold loan bannerghatta road',
      'pledged gold release south bangalore',
      'cash for gold bannerghatta',
      'best gold rates south bangalore',
      'old gold buyers near me'
    ],
    seoTitle: 'Gold Buyers on Bannerghatta Road | DSM Gold | Best Rates & Quick Service',
    seoDescription: 'Gold buyer on Bannerghatta Road with 3 branches. Fair valuation, competitive rates, and instant payment for gold jewelry.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Door Pickup Service'
    ],
    nearbyLandmarks: [
      'Bannerghatta Road Junction',
      'Bannerghatta National Park',
      'Yelahanka',
      'South Bangalore'
    ],
    neighborhoods: ['Bannerghatta Road', 'Yelahanka', 'Jalahalli', 'Mico Layout']
  },
  {
    slug: 'vijayanagar',
    area: 'Vijayanagar',
    phone: '+91 98765 43220',
    time: '10:00 AM - 8:00 PM',
    branches: 2,
    address: 'Vijayanagar Main Road, Bangalore 560040',
    latitude: 12.9716,
    longitude: 77.5472,
    zipCode: '560040',
    description: 'West Bangalore\'s trusted gold trading center in Vijayanagar. Serving residents with transparent valuations and best market-linked rates.',
    keywords: [
      'gold buyers vijayanagar',
      'sell gold vijayanagar bangalore',
      'gold loan vijayanagar',
      'pledged gold release vijayanagar',
      'cash for gold west bangalore',
      'best gold rates vijayanagar main road',
      'old jewelry buyers vijayanagar'
    ],
    seoTitle: 'Gold Buyers in Vijayanagar | DSM Gold | Fair Rates & Instant Cash',
    seoDescription: 'Gold buyer in Vijayanagar Main Road. Professional valuation, fair market rates, and same-day payment for gold jewelry.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Online Valuation'
    ],
    nearbyLandmarks: [
      'Vijayanagar Main Road',
      'Vijayanagar Park',
      'Bannerghatta Road',
      'West Bangalore'
    ],
    neighborhoods: ['Vijayanagar', 'Banashankari', 'Bannerghatta Road', 'Jayanagar']
  },
  {
    slug: 'sarjapur',
    area: 'Sarjapur',
    phone: '+91 98765 43221',
    time: '10:00 AM - 8:00 PM',
    branches: 2,
    address: 'Sarjapur Main Road, Bangalore 560087',
    latitude: 12.8828,
    longitude: 77.7210,
    zipCode: '560087',
    description: 'Emerging locality gold buyer on Sarjapur Road. Quick valuations and fair rates for the rapidly growing East Bangalore neighborhood.',
    keywords: [
      'gold buyers sarjapur',
      'sell gold sarjapur bangalore',
      'gold loan sarjapur road',
      'pledged gold release sarjapur',
      'cash for gold sarjapur',
      'best gold rates sarjapur',
      'old gold buyers east bangalore'
    ],
    seoTitle: 'Gold Buyers in Sarjapur | DSM Gold | Fair Rates & Quick Service',
    seoDescription: 'Gold buyer on Sarjapur Road. Fair valuation, competitive rates, and instant payment for gold jewelry in East Bangalore.',
    localServices: [
      'Gold Selling',
      'Pledged Gold Release',
      'Gold Buying',
      'Gold Loans',
      'Fast Processing'
    ],
    nearbyLandmarks: [
      'Sarjapur Main Road',
      'Tech Park',
      'Marathahalli',
      'Brookfield'
    ],
    neighborhoods: ['Sarjapur', 'Marathahalli', 'Whitefield', 'Brookfield']
  }
]

export function getAreaBySlug(slug: string): Area | undefined {
  return areasData.find(area => area.slug === slug)
}

export function getAllAreaSlugs(): string[] {
  return areasData.map(area => area.slug)
}
