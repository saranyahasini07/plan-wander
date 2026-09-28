import { 
  Destination, 
  Hotel, 
  TransportationOption, 
  Attraction, 
  Restaurant, 
  TripOption, 
  UserPreferences,
  ItineraryDay,
  ItineraryActivity 
} from '../types/travel';

// Generated authentic visual assets
import heroJourneyImg from '../assets/images/hero_travel_journey_1790596880284.jpg';
import destKyotoImg from '../assets/images/dest_kyoto_pagoda_1790596894061.jpg';
import destAmalfiImg from '../assets/images/dest_amalfi_coast_1790596912714.jpg';
import destSwissImg from '../assets/images/dest_swiss_alps_1790596927073.jpg';

export const HERO_IMAGE = heroJourneyImg;

export const DESTINATIONS: Destination[] = [
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Kansai',
    tagline: 'Timeless temples, zen bamboo groves & imperial artistry',
    description: 'The ancient imperial capital of Japan, renowned for thousands of classical Buddhist temples, serene Shinto shrines, sublime Zen gardens, traditional wooden machiya townhouses, and refined Kaiseki dining.',
    heroImage: destKyotoImg,
    coordinates: [35.0116, 135.7681],
    popularInterests: ['historical', 'temples', 'culture' as any, 'nature', 'food', 'photography', 'hidden_gem'],
    startingPricePerDay: 135,
    bestTime: {
      bestMonths: ['March', 'April', 'October', 'November'],
      peakSeason: 'Late March – Mid April (Cherry Blossom / Sakura) & November (Autumn Foliage / Koyo)',
      offSeason: 'January – February (Crisp & quiet winter) & July – August (Hot & humid)',
      shoulderSeason: 'May – June & September – October (Comfortable temperatures, fewer crowds)',
      weatherSummary: 'Temperate climate with 4 distinct seasons. Spring and Autumn offer mild, crisp days ideal for temple walks.',
      avgTempC: { high: 21, low: 11 },
      rainfallMm: 95,
      crowdLevel: 'High',
      priceDifferencePercent: 'Peak season hotel rates can be 40%–60% higher than winter off-season.',
      majorFestivals: [
        { name: 'Gion Matsuri', month: 'July', description: 'One of Japan\'s largest historical street float festivals with grand processions and lanterns.' },
        { name: 'Aoi Matsuri', month: 'May', description: 'Ancient imperial court festival with participants in elegant Heian-period silk robes.' },
        { name: 'Jidai Matsuri', month: 'October', description: 'Festival of the Ages featuring a 2km-long historical costume parade.' }
      ],
      seasonalAttractions: [
        'Illuminated night cherry blossoms at Maruyama Park and Kodai-ji Temple (April)',
        'Arashiyama autumn maple foliage reflection across the Katsura River (November)',
        'Peaceful snow-dusted Kinkaku-ji Golden Pavilion (January/February)'
      ],
      tipsForVisitors: 'Book accommodations 3-4 months ahead for Sakura or Autumn. Visit Fushimi Inari and Arashiyama Bamboo Grove before 7:30 AM to escape the midday crowds.'
    }
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Campania',
    tagline: 'Dramatic cliffside villages, lemon groves & Mediterranean blue',
    description: 'A 50-kilometer stretch of mountainous coastline south of Naples, celebrated for its pastel villages clinging to steep cliffs, panoramic sea paths, fragrant lemon orchards, and exquisite coastal seafood.',
    heroImage: destAmalfiImg,
    coordinates: [40.6340, 14.6027],
    popularInterests: ['beaches', 'photography', 'food', 'nature', 'historical', 'adventure'],
    startingPricePerDay: 195,
    bestTime: {
      bestMonths: ['May', 'June', 'September', 'October'],
      peakSeason: 'July & August (Vibrant, high energy, warm sea waters, maximum visitors)',
      offSeason: 'November – March (Many ferries and boutique hotels close for winter renovation)',
      shoulderSeason: 'May, June & September (Optimal warm swimming weather, fewer crowds, pleasant hiking)',
      weatherSummary: 'Mediterranean bliss. Summers are hot and sun-drenched; spring and early autumn boast mild breezes and clear skies.',
      avgTempC: { high: 26, low: 18 },
      rainfallMm: 45,
      crowdLevel: 'Very High',
      priceDifferencePercent: 'July/August prices are up to 70% higher than May/October.',
      majorFestivals: [
        { name: 'Ravello Festival', month: 'July – August', description: 'World-class classical and jazz concerts on the cliffside terrace of Villa Rufolo.' },
        { name: 'Regata delle Antiche Repubbliche', month: 'June', description: 'Historic rowing regatta between the 4 ancient maritime republics with medieval pageantry.' }
      ],
      seasonalAttractions: [
        'Path of the Gods (Sentiero degli Dei) hiking with wildflowers in May and June',
        'Private wooden gozzo boat charters around Capri grottos (June – September)',
        'Sfusato Amalfitano lemon harvest and granita tasting tours (April – July)'
      ],
      tipsForVisitors: 'Opt for water ferries rather than road buses along the winding cliff roads to avoid traffic congestion and enjoy breathtaking views.'
    }
  },
  {
    id: 'swiss_alps',
    name: 'Swiss Alps (Zermatt & Interlaken)',
    country: 'Switzerland',
    region: 'Valais & Bernese Oberland',
    tagline: 'Legendary peaks, alpine railways & pristine glacier valleys',
    description: 'The pinnacle of Alpine beauty, encompassing the iconic pyramid of the Matterhorn, the Jungfrau railway, emerald mountain lakes, serene pine forests, and world-renowned scenic train journeys.',
    heroImage: destSwissImg,
    coordinates: [45.9765, 7.7491],
    popularInterests: ['mountains', 'adventure', 'nature', 'photography', 'family', 'food'],
    startingPricePerDay: 220,
    bestTime: {
      bestMonths: ['June', 'July', 'August', 'December', 'February'],
      peakSeason: 'July – August (Alpine hiking, lush meadows) & Mid-Dec – March (Skiing & winter sports)',
      offSeason: 'April – May & November (Cable car maintenance periods, transitional snowmelt)',
      shoulderSeason: 'September – October (Crisp autumn air, golden larch forests, uncrowded trails)',
      weatherSummary: 'Alpine climate. Summers offer brisk mountain breezes (18-24°C), winters transform the region into a snowy wonderland.',
      avgTempC: { high: 19, low: 8 },
      rainfallMm: 80,
      crowdLevel: 'Moderate',
      priceDifferencePercent: 'Peak ski weeks (Christmas & February) reflect 50% premium over October.',
      majorFestivals: [
        { name: 'Zermatt Unplugged', month: 'April', description: 'Acoustic music festival set against the dramatic silhouette of the Matterhorn.' },
        { name: 'Jungfrau Marathon', month: 'September', description: 'One of the world’s most scenic mountain marathons through alpine villages.' }
      ],
      seasonalAttractions: [
        'Gornergrat cogwheel train summit platform with views of 29 four-thousand-meter peaks',
        'Hiking the Five Lakes Trail (5-Seenweg) reflecting the Matterhorn (July – October)',
        'Glacier 3000 suspension peak bridge walk (Year-round)'
      ],
      tipsForVisitors: 'Invest in a Swiss Travel Pass for seamless unlimited transit on trains, lake steamers, and city transit, plus free museum admissions.'
    }
  }
];

export const HOTELS: Hotel[] = [
  // Kyoto Hotels
  {
    id: 'hotel-kyoto-1',
    name: 'The Thousand Kyoto',
    destinationId: 'kyoto',
    starRating: 5,
    rating: 4.9,
    reviewCount: 1420,
    pricePerNight: 340,
    image: destKyotoImg,
    coordinates: [34.9858, 135.7588],
    address: '570 Higashishiokojicho, Shimogyo Ward, Kyoto',
    distanceFromAttractions: '2 min walk to Kyoto Station, 15 min to Gion',
    tags: ['luxury', 'boutique', 'couple', 'spa'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
    amenities: ['Full Spa & Onsen Bath', 'Michelin-guide Dining', 'Complimentary High-speed WiFi', 'Concierge Tour Desk', 'Tea Ceremony Lounge'],
    roomTypes: [
      { type: 'Superior King Room', capacity: '2 Adults', pricePerNight: 340, bedType: '1 King Bed' },
      { type: 'Deluxe Twin Courtyard View', capacity: '2 Adults, 1 Child', pricePerNight: 410, bedType: '2 Queen Beds' },
      { type: 'Zen Garden Suite', capacity: '3 Adults', pricePerNight: 650, bedType: '1 Super King + Daybed' }
    ]
  },
  {
    id: 'hotel-kyoto-2',
    name: 'Noku Kyoto Boutique Stay',
    destinationId: 'kyoto',
    starRating: 4,
    rating: 4.7,
    reviewCount: 980,
    pricePerNight: 185,
    image: destKyotoImg,
    coordinates: [35.0195, 135.7592],
    address: 'Karasuma-dori, Kamigyo Ward, Kyoto',
    distanceFromAttractions: 'Directly adjacent to Kyoto Imperial Palace gardens',
    tags: ['balanced', 'boutique', 'family', 'central'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 72 hours prior',
    amenities: ['Artisan Coffee Bar', 'Japanese Botanical Bath Products', 'Express Luggage Forwarding', 'Bicycle Rentals', 'Free High-speed WiFi'],
    roomTypes: [
      { type: 'Comfort Double', capacity: '2 Adults', pricePerNight: 185, bedType: '1 Queen Bed' },
      { type: 'Palace View Corner Room', capacity: '2 Adults', pricePerNight: 235, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-kyoto-3',
    name: 'Piece Hostel Sanjo & Ryokan Annex',
    destinationId: 'kyoto',
    starRating: 3,
    rating: 4.6,
    reviewCount: 2150,
    pricePerNight: 75,
    image: destKyotoImg,
    coordinates: [35.0088, 135.7652],
    address: 'Asakuracho, Nakagyo Ward, Kyoto',
    distanceFromAttractions: '5 min walk to Nishiki Food Market and Kawaramachi',
    tags: ['budget', 'social', 'central'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Cozy Terrace Lounge', 'Shared Gourmet Kitchen', 'Free Specialty Tea Bar', 'Laundry Facilities', 'High-speed Fiber WiFi'],
    roomTypes: [
      { type: 'Private Double En-suite', capacity: '2 Adults', pricePerNight: 75, bedType: '1 Double Bed' },
      { type: 'Family Tatami Room', capacity: '4 Persons', pricePerNight: 120, bedType: '4 Traditional Futons' }
    ]
  },

  // Amalfi Hotels
  {
    id: 'hotel-amalfi-1',
    name: 'Villa TreVille Cliffside Sanctuary',
    destinationId: 'amalfi',
    starRating: 5,
    rating: 4.95,
    reviewCount: 620,
    pricePerNight: 680,
    image: destAmalfiImg,
    coordinates: [40.6273, 14.4925],
    address: 'Via Arienzo 30, 84017 Positano, Italy',
    distanceFromAttractions: 'Private beach access, 10 min water shuttle to Positano harbor',
    tags: ['luxury', 'cliffside', 'couple', 'sea_view'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days before arrival',
    amenities: ['Private Seaside Beach Club', 'Organic Clifftop Restaurant', 'Infinity Hydrotherapy Pool', 'Free Private Boat Shuttle', 'Sunset Champagne Terrace'],
    roomTypes: [
      { type: 'Maestro Suite with Sea Balcony', capacity: '2 Adults', pricePerNight: 680, bedType: '1 King Bed' },
      { type: 'Grand Pergola Villa', capacity: '4 Adults', pricePerNight: 1250, bedType: '2 King Suites' }
    ]
  },
  {
    id: 'hotel-amalfi-2',
    name: 'Hotel Marina Riviera Positano & Amalfi',
    destinationId: 'amalfi',
    starRating: 4,
    rating: 4.8,
    reviewCount: 1100,
    pricePerNight: 290,
    image: destAmalfiImg,
    coordinates: [40.6331, 14.6015],
    address: 'Via Pantaleone Comite 19, 84011 Amalfi, Italy',
    distanceFromAttractions: 'Overlooking Amalfi Marina, 3 min walk to Duomo',
    tags: ['balanced', 'couple', 'sea_view', 'central'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 5 days prior',
    amenities: ['Heated Clifftop Pool', 'Limoncello Tasting Lounge', 'Sea-facing Breakfast Veranda', 'Concierge Ferry Booking', 'Free WiFi'],
    roomTypes: [
      { type: 'Classic Sea View Room', capacity: '2 Adults', pricePerNight: 290, bedType: '1 King Bed' },
      { type: 'Superior Panoramic Terrace', capacity: '2 Adults', pricePerNight: 360, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-amalfi-3',
    name: 'Locanda Costa D\'Amalfi B&B',
    destinationId: 'amalfi',
    starRating: 3,
    rating: 4.5,
    reviewCount: 840,
    pricePerNight: 130,
    image: destAmalfiImg,
    coordinates: [40.6385, 14.6120],
    address: 'Via Maestra dei Villaggi 28, Amalfi, Italy',
    distanceFromAttractions: '10 min local bus to center, steps from lemon groves',
    tags: ['budget', 'nature', 'charming'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Homemade Italian Breakfast', 'Panoramic Solarium', 'Free Luggage Assistance', 'Air Conditioning', 'Free WiFi'],
    roomTypes: [
      { type: 'Standard Double with Sea Glimpse', capacity: '2 Adults', pricePerNight: 130, bedType: '1 Queen Bed' }
    ]
  },

  // Swiss Alps Hotels
  {
    id: 'hotel-swiss-1',
    name: 'The Omnia Mountain Lodge Zermatt',
    destinationId: 'swiss_alps',
    starRating: 5,
    rating: 4.96,
    reviewCount: 890,
    pricePerNight: 550,
    image: destSwissImg,
    coordinates: [45.9760, 7.7470],
    address: 'Auf dem Fels, 3920 Zermatt, Switzerland',
    distanceFromAttractions: 'Elevated on a rock cliff above village, direct Matterhorn view',
    tags: ['luxury', 'mountain_view', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 14 days before check-in',
    amenities: ['Indoor/Outdoor Matterhorn Spa Pool', 'Finnish Sauna & Turkish Steam Room', 'Fireplace Library Lounge', 'Private Electro-Cab Transfer', 'Gourmet Alpine Bistro'],
    roomTypes: [
      { type: 'Matterhorn Queen Room', capacity: '2 Adults', pricePerNight: 550, bedType: '1 Queen Bed' },
      { type: 'Omnia Fireplace Suite', capacity: '2 Adults', pricePerNight: 780, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-swiss-2',
    name: 'Hotel Schweizerhof & Alpine Chalets',
    destinationId: 'swiss_alps',
    starRating: 4,
    rating: 4.75,
    reviewCount: 1320,
    pricePerNight: 260,
    image: destSwissImg,
    coordinates: [45.9782, 7.7495],
    address: 'Bahnhofstrasse 5, 3920 Zermatt, Switzerland',
    distanceFromAttractions: '2 min walk to Gornergrat Bahn & train station',
    tags: ['balanced', 'family', 'central', 'spa'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 3 days prior',
    amenities: ['Heated Pool & Sauna Sanctuary', 'Open Kitchen Swiss Fondue Restaurant', 'Kids Alpine Play Lounge', 'Ski Room with Boot Dryers', 'Free Fiber WiFi'],
    roomTypes: [
      { type: 'Cosy Alpine Room', capacity: '2 Adults', pricePerNight: 260, bedType: '1 King Bed' },
      { type: 'Chalet Family Suite', capacity: '2 Adults, 2 Children', pricePerNight: 390, bedType: '1 King + 2 Bunk Beds' }
    ]
  },
  {
    id: 'hotel-swiss-3',
    name: 'Matterhorn BaseCamp Alpine Hostel',
    destinationId: 'swiss_alps',
    starRating: 3,
    rating: 4.5,
    reviewCount: 1650,
    pricePerNight: 95,
    image: destSwissImg,
    coordinates: [45.9730, 7.7440],
    address: 'Schluhmattstrasse 24, Zermatt, Switzerland',
    distanceFromAttractions: '5 min walk to Matterhorn Glacier Paradise cable car',
    tags: ['budget', 'adventure', 'hiker_friendly'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Self-catering Mountain Kitchen', 'Gear Storage Lockers', 'Social Sunset Terrace', 'Espresso Lounge', 'High-speed WiFi'],
    roomTypes: [
      { type: 'Private Alpine Double', capacity: '2 Adults', pricePerNight: 95, bedType: '1 Double Bed' }
    ]
  }
];

export const TRANSPORTATION_OPTIONS: Record<string, TransportationOption[]> = {
  kyoto: [
    {
      id: 'trans-kyo-shinkansen',
      type: 'train',
      provider: 'JR Tokaido Shinkansen (Nozomi)',
      routeName: 'Tokyo / Kansai Airport → Kyoto Central Station',
      price: 98,
      durationMinutes: 135,
      departureTime: '08:15 AM',
      arrivalTime: '10:30 AM',
      transfers: 0,
      comfortLevel: 'Premium',
      distanceKm: 450,
      bookingStatus: 'Good availability',
      emissionsKg: 14,
      details: 'High-speed bullet train reaching 285 km/h. Punctual to the second with spacious luggage racks, power outlets, and Mount Fuji views.'
    },
    {
      id: 'trans-kyo-haruka',
      type: 'train',
      provider: 'JR Haruka Express',
      routeName: 'Kansai Int’l Airport (KIX) → Kyoto Station',
      price: 24,
      durationMinutes: 75,
      departureTime: '09:14 AM',
      arrivalTime: '10:29 AM',
      transfers: 0,
      comfortLevel: 'Comfort',
      distanceKm: 98,
      bookingStatus: 'Available',
      emissionsKg: 6,
      details: 'Direct airport express train with dedicated luggage compartments and comfortable reserved reclining seats.'
    },
    {
      id: 'trans-kyo-flight',
      type: 'flight',
      provider: 'All Nippon Airways (ANA)',
      routeName: 'Connecting Flight → Osaka Itami (ITM) + Airport Shuttle',
      price: 185,
      durationMinutes: 90,
      departureTime: '07:30 AM',
      arrivalTime: '09:00 AM',
      transfers: 1,
      comfortLevel: 'Standard',
      distanceKm: 520,
      bookingStatus: 'Few seats left',
      emissionsKg: 85,
      details: 'Domestic flight followed by a 45-minute express airport limousine bus straight to Kyoto Station.'
    },
    {
      id: 'trans-kyo-bus',
      type: 'bus',
      provider: 'Willer Express Highway Liner',
      routeName: 'Overnight / Daytime Highway Coach to Kyoto',
      price: 38,
      durationMinutes: 420,
      departureTime: '11:00 PM',
      arrivalTime: '06:00 AM',
      transfers: 0,
      comfortLevel: 'Standard',
      distanceKm: 450,
      bookingStatus: 'Available',
      emissionsKg: 18,
      details: 'Budget-friendly luxury reclining night coach with privacy canopies, USB charging ports, and blanket.'
    },
    {
      id: 'trans-kyo-taxi',
      type: 'taxi',
      provider: 'MK Kyoto Private Chauffeur',
      routeName: 'Direct Private Transfer to Hotel Doorstep',
      price: 190,
      durationMinutes: 70,
      departureTime: 'Flexible (On-demand)',
      arrivalTime: 'Direct',
      transfers: 0,
      comfortLevel: 'First Class',
      distanceKm: 95,
      bookingStatus: 'Available',
      emissionsKg: 28,
      details: 'White-glove executive chauffeur service with Toyota Crown or Alphard luxury minivan.'
    }
  ],
  amalfi: [
    {
      id: 'trans-ama-ferry',
      type: 'transit',
      provider: 'NLG / Travelmar Fast Ferries',
      routeName: 'Naples / Salerno Port → Amalfi Marina',
      price: 26,
      durationMinutes: 45,
      departureTime: '09:40 AM',
      arrivalTime: '10:25 AM',
      transfers: 0,
      comfortLevel: 'Comfort',
      distanceKm: 32,
      bookingStatus: 'Good availability',
      emissionsKg: 12,
      details: 'Spectacular coastal maritime approach avoiding mountain road bends. Open-air sundeck with panoramic views.'
    },
    {
      id: 'trans-ama-train',
      type: 'train',
      provider: 'Frecciarossa High-Speed Rail',
      routeName: 'Rome / Milan → Salerno Central + Ferry Connection',
      price: 65,
      durationMinutes: 120,
      departureTime: '08:00 AM',
      arrivalTime: '10:00 AM',
      transfers: 1,
      comfortLevel: 'Premium',
      distanceKm: 280,
      bookingStatus: 'Available',
      emissionsKg: 16,
      details: 'Ultra-smooth 300 km/h train to Salerno followed by a scenic 30-min water shuttle directly to Amalfi harbor.'
    },
    {
      id: 'trans-ama-car',
      type: 'rental_car',
      provider: 'Europcar / Sixt Convertible Fleet',
      routeName: 'Naples Airport Pickup → SS163 Coastal Highway',
      price: 85,
      durationMinutes: 80,
      departureTime: 'Flexible',
      arrivalTime: 'Self-drive',
      transfers: 0,
      comfortLevel: 'Comfort',
      distanceKm: 65,
      bookingStatus: 'Few seats left',
      emissionsKg: 24,
      details: 'Experience driving along the UNESCO-listed cliffside roadway. Requires comfort navigating tight hairpin turns.'
    },
    {
      id: 'trans-ama-taxi',
      type: 'taxi',
      provider: 'Amalfi Coast Chauffeur Mercedes Van',
      routeName: 'Naples Capodichino Airport (NAP) → Hotel Doorstep',
      price: 160,
      durationMinutes: 75,
      departureTime: 'Flexible (On-demand)',
      arrivalTime: 'Direct',
      transfers: 0,
      comfortLevel: 'First Class',
      distanceKm: 65,
      bookingStatus: 'Available',
      emissionsKg: 22,
      details: 'Private air-conditioned Mercedes sedan or V-Class with professional English-speaking coastal driver.'
    }
  ],
  swiss_alps: [
    {
      id: 'trans-swi-glacier',
      type: 'train',
      provider: 'Glacier Express & SBB Panoramic Train',
      routeName: 'Zurich / Geneva Airport → Visp → Zermatt Station',
      price: 110,
      durationMinutes: 195,
      departureTime: '08:40 AM',
      arrivalTime: '11:55 AM',
      transfers: 1,
      comfortLevel: 'Premium',
      distanceKm: 230,
      bookingStatus: 'Good availability',
      emissionsKg: 4,
      details: 'World’s slowest express train with oversized panoramic glass roof windows traveling past gorges, castles and glaciers.'
    },
    {
      id: 'trans-swi-sbb',
      type: 'train',
      provider: 'SBB Swiss Federal Railways Standard',
      routeName: 'Geneva / Zurich Main Station → Zermatt Alpine Gateway',
      price: 68,
      durationMinutes: 210,
      departureTime: '07:15 AM',
      arrivalTime: '10:45 AM',
      transfers: 1,
      comfortLevel: 'Comfort',
      distanceKm: 230,
      bookingStatus: 'Available',
      emissionsKg: 4,
      details: 'Extremely dependable Swiss intercity rail with Swiss Pass validity, silent carriages, and dining car service.'
    },
    {
      id: 'trans-swi-taxi',
      type: 'taxi',
      provider: 'Täsch Electro Shuttle & Chauffeur',
      routeName: 'Geneva / Zurich Airport to Täsch + Zermatt Electro Cab',
      price: 280,
      durationMinutes: 160,
      departureTime: 'Flexible',
      arrivalTime: 'Direct',
      transfers: 0,
      comfortLevel: 'First Class',
      distanceKm: 225,
      bookingStatus: 'Available',
      emissionsKg: 42,
      details: 'Private transfer to car-free Zermatt boundary followed by immediate electric town taxi transfer to hotel.'
    }
  ]
};

// Dynamic Route-specific Transportation Generator based on User's Start Location
export function getTransportationForRoute(origin: string = 'New York (JFK)', destId: string = 'kyoto'): TransportationOption[] {
  const cleanOrigin = origin.trim() || 'Departure City';
  
  if (destId === 'kyoto') {
    return [
      {
        id: `flight-kyo-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'flight',
        provider: 'All Nippon Airways (ANA) / Japan Airlines',
        carrierCode: 'NH 107',
        routeName: `${cleanOrigin} → Osaka Kansai (KIX) / Itami (ITM) + Haruka Express`,
        originName: cleanOrigin,
        destinationName: 'Kyoto (via Osaka KIX/ITM)',
        price: cleanOrigin.toLowerCase().includes('tokyo') ? 95 : 680,
        durationMinutes: cleanOrigin.toLowerCase().includes('tokyo') ? 75 : 820,
        departureTime: '10:30 AM',
        arrivalTime: '02:45 PM (+1)',
        transfers: cleanOrigin.toLowerCase().includes('tokyo') ? 0 : 1,
        comfortLevel: 'Premium',
        distanceKm: cleanOrigin.toLowerCase().includes('tokyo') ? 450 : 10800,
        bookingStatus: 'Available',
        emissionsKg: 140,
        cabinClass: 'Economy / Premium Economy',
        baggageAllowance: '2 Checked Bags (23kg each) + 1 Carry-on',
        gateOrPlatform: 'Terminal 1, Gate 42',
        details: `Direct or connecting flight from ${cleanOrigin}. Includes seamless JR Haruka airport express link directly into Kyoto Station.`
      },
      {
        id: `train-kyo-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'train',
        provider: 'JR Tokaido Shinkansen (Nozomi Bullet Train)',
        carrierCode: 'JR Nozomi 221',
        routeName: `${cleanOrigin} Rail Terminal → Kyoto Central Shinkansen Platform`,
        originName: cleanOrigin,
        destinationName: 'Kyoto Central Station',
        price: cleanOrigin.toLowerCase().includes('tokyo') ? 98 : 135,
        durationMinutes: cleanOrigin.toLowerCase().includes('tokyo') ? 135 : 180,
        departureTime: '08:15 AM',
        arrivalTime: '10:30 AM',
        transfers: 0,
        comfortLevel: 'First Class',
        distanceKm: 450,
        bookingStatus: 'Good availability',
        emissionsKg: 12,
        cabinClass: 'Reserved Green Car / Ordinary',
        baggageAllowance: 'Oversized Baggage Area Included + Overhead',
        gateOrPlatform: 'Track 14',
        details: 'High-speed 285 km/h bullet rail with panoramic Mount Fuji views, power outlets at every seat, and punctuality to the second.'
      },
      {
        id: `bus-kyo-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'bus',
        provider: 'Willer Express Highway Liner',
        carrierCode: 'WL 504',
        routeName: `${cleanOrigin} Bus Terminal → Kyoto Station Hachijo Exit`,
        originName: cleanOrigin,
        destinationName: 'Kyoto Station',
        price: 42,
        durationMinutes: 420,
        departureTime: '11:00 PM',
        arrivalTime: '06:00 AM (+1)',
        transfers: 0,
        comfortLevel: 'Standard',
        distanceKm: 450,
        bookingStatus: 'Available',
        emissionsKg: 18,
        cabinClass: 'Reclining Canopy Sleeper',
        baggageAllowance: '1 Large Suitcase in Lower Hold',
        gateOrPlatform: 'Bay 3',
        details: 'Comfortable overnight sleeper coach with individual privacy hoods, blanket, and smartphone charging ports.'
      },
      {
        id: `taxi-kyo-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'taxi',
        provider: 'MK Kyoto Executive Chauffeur Service',
        carrierCode: 'MK-VIP',
        routeName: `${cleanOrigin} Pickup Point → Hotel Front Doorstep`,
        originName: cleanOrigin,
        destinationName: 'Hotel Doorstep in Kyoto',
        price: 195,
        durationMinutes: 75,
        departureTime: 'On-Demand / Scheduled',
        arrivalTime: 'Direct',
        transfers: 0,
        comfortLevel: 'First Class',
        distanceKm: 95,
        bookingStatus: 'Available',
        emissionsKg: 28,
        cabinClass: 'Luxury VIP Minivan (Toyota Alphard)',
        baggageAllowance: 'Up to 5 Large Suitcases',
        gateOrPlatform: 'Arrivals Gate Curbside',
        details: 'White-glove private greeting with meet-and-greet name board and direct transfer to your hotel lobby.'
      }
    ];
  } else if (destId === 'amalfi') {
    return [
      {
        id: `flight-ama-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'flight',
        provider: 'ITA Airways / British Airways / Lufthansa',
        carrierCode: 'AZ 1264',
        routeName: `${cleanOrigin} → Naples Capodichino (NAP) + Amalfi Water Shuttle`,
        originName: cleanOrigin,
        destinationName: 'Naples Airport (NAP) / Amalfi',
        price: cleanOrigin.toLowerCase().includes('rome') || cleanOrigin.toLowerCase().includes('milan') ? 110 : 720,
        durationMinutes: cleanOrigin.toLowerCase().includes('rome') ? 55 : 790,
        departureTime: '08:45 AM',
        arrivalTime: '01:30 PM',
        transfers: 1,
        comfortLevel: 'Premium',
        distanceKm: 9500,
        bookingStatus: 'Few seats left',
        emissionsKg: 130,
        cabinClass: 'Classic / Superior Cabin',
        baggageAllowance: '23kg Hold Luggage + 8kg Cabin Bag',
        gateOrPlatform: 'Concourse B, Gate 18',
        details: `Direct or connecting flight from ${cleanOrigin}. Includes scenic high-speed hydrofoil ferry ride into Amalfi Marina.`
      },
      {
        id: `train-ama-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'train',
        provider: 'Frecciarossa 1000 High-Speed Rail',
        carrierCode: 'FR 9523',
        routeName: `${cleanOrigin} Central Station → Salerno Central + Fast Catamaran Ferry`,
        originName: cleanOrigin,
        destinationName: 'Salerno / Amalfi Pier',
        price: 68,
        durationMinutes: 130,
        departureTime: '08:00 AM',
        arrivalTime: '10:10 AM',
        transfers: 1,
        comfortLevel: 'First Class',
        distanceKm: 280,
        bookingStatus: 'Good availability',
        emissionsKg: 14,
        cabinClass: 'Executive / Business Silenzio',
        baggageAllowance: 'Unlimited Rail Luggage',
        gateOrPlatform: 'Platform 5',
        details: 'Reaching 300 km/h with complimentary espresso service, leather reclining seats, and immediate boat connection to Amalfi.'
      },
      {
        id: `ferry-ama-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'transit',
        provider: 'Travelmar Fast Maritime Ferries',
        carrierCode: 'TM 302',
        routeName: `Salerno Concord Pier → Amalfi Marina Port`,
        originName: 'Salerno Port',
        destinationName: 'Amalfi Marina',
        price: 24,
        durationMinutes: 40,
        departureTime: '10:40 AM',
        arrivalTime: '11:20 AM',
        transfers: 0,
        comfortLevel: 'Comfort',
        distanceKm: 32,
        bookingStatus: 'Available',
        emissionsKg: 10,
        cabinClass: 'Open-Air Sundeck / Air-conditioned Saloon',
        baggageAllowance: '2 Suitcases per passenger',
        gateOrPlatform: 'Molo Manfredi Pier 1',
        details: 'Breathtaking maritime views of the Amalfi coastline cliffs and pastel hillside villages.'
      },
      {
        id: `taxi-ama-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'taxi',
        provider: 'Amalfi Coast Chauffeur Mercedes Service',
        carrierCode: 'AC-VCLASS',
        routeName: `${cleanOrigin} Airport / Station → Cliffside Hotel Doorstep`,
        originName: cleanOrigin,
        destinationName: 'Hotel Doorstep in Amalfi',
        price: 165,
        durationMinutes: 75,
        departureTime: 'Flexible (On-demand)',
        arrivalTime: 'Direct',
        transfers: 0,
        comfortLevel: 'First Class',
        distanceKm: 65,
        bookingStatus: 'Available',
        emissionsKg: 22,
        cabinClass: 'Mercedes-Benz E-Class / V-Class',
        baggageAllowance: '4 Large Bags',
        gateOrPlatform: 'Private Arrival Meet & Greet',
        details: 'Comfortable private vehicle with experienced coastal driver navigating the scenic coastal bends.'
      }
    ];
  } else {
    // Swiss Alps
    return [
      {
        id: `flight-swi-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'flight',
        provider: 'Swiss International Air Lines (SWISS)',
        carrierCode: 'LX 19',
        routeName: `${cleanOrigin} → Zurich Airport (ZRH) / Geneva (GVA) + SBB Mountain Train`,
        originName: cleanOrigin,
        destinationName: 'Zurich (ZRH) / Zermatt Station',
        price: cleanOrigin.toLowerCase().includes('zurich') || cleanOrigin.toLowerCase().includes('geneva') ? 90 : 750,
        durationMinutes: cleanOrigin.toLowerCase().includes('zurich') ? 60 : 780,
        departureTime: '07:30 AM',
        arrivalTime: '11:15 AM',
        transfers: 1,
        comfortLevel: 'Premium',
        distanceKm: 9200,
        bookingStatus: 'Available',
        emissionsKg: 120,
        cabinClass: 'SWISS Economy / Business',
        baggageAllowance: '2 Checked Bags + Ski/Snowboard Gear Bag',
        gateOrPlatform: 'Terminal 2, Gate E34',
        details: `Direct/connecting flight from ${cleanOrigin}. Seamless railway connection under Zurich or Geneva terminal directly to the Alps.`
      },
      {
        id: `train-swi-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'train',
        provider: 'Glacier Express & SBB Panoramic Alpine Rail',
        carrierCode: 'SBB IC 831',
        routeName: `${cleanOrigin} Main Rail Hub → Visp → Zermatt Alpine Station`,
        originName: cleanOrigin,
        destinationName: 'Zermatt Station (Matterhorn Gateway)',
        price: 115,
        durationMinutes: 195,
        departureTime: '08:40 AM',
        arrivalTime: '11:55 AM',
        transfers: 1,
        comfortLevel: 'First Class',
        distanceKm: 230,
        bookingStatus: 'Good availability',
        emissionsKg: 4,
        cabinClass: 'Excellence Class / Panoramic 1st Class',
        baggageAllowance: 'Dedicated Luggage Racks with Ski Holders',
        gateOrPlatform: 'Track 7',
        details: 'Spectacular panoramic roof carriages climbing through mountain valleys, deep gorges, and glacier riverbeds.'
      },
      {
        id: `sbb-swi-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'train',
        provider: 'SBB Swiss Federal Railways InterCity',
        carrierCode: 'SBB IR 90',
        routeName: `${cleanOrigin} / Geneva Airport → Brig / Visp → Matterhorn Gotthard Bahn`,
        originName: cleanOrigin,
        destinationName: 'Zermatt Alpine Terminal',
        price: 72,
        durationMinutes: 210,
        departureTime: '07:15 AM',
        arrivalTime: '10:45 AM',
        transfers: 1,
        comfortLevel: 'Comfort',
        distanceKm: 230,
        bookingStatus: 'Available',
        emissionsKg: 4,
        cabinClass: 'Quiet Zone 1st / 2nd Class',
        baggageAllowance: 'Standard Rail Baggage',
        gateOrPlatform: 'Track 3',
        details: 'Swiss precision rail with onboard restaurant car, children play carriages, and Swiss Travel Pass validity.'
      },
      {
        id: `taxi-swi-${cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        type: 'taxi',
        provider: 'Alpine Electro Shuttle & Chauffeur',
        carrierCode: 'AL-VIP',
        routeName: `${cleanOrigin} → Täsch Terminal + Zermatt Electro Cab`,
        originName: cleanOrigin,
        destinationName: 'Hotel in car-free Zermatt',
        price: 285,
        durationMinutes: 160,
        departureTime: 'On-Demand',
        arrivalTime: 'Direct',
        transfers: 0,
        comfortLevel: 'First Class',
        distanceKm: 225,
        bookingStatus: 'Available',
        emissionsKg: 38,
        cabinClass: 'Luxury All-Wheel-Drive Executive Van',
        baggageAllowance: 'Ski Gear + 4 Large Suitcases',
        gateOrPlatform: 'Curbside Terminal Meet',
        details: 'Direct mountain chauffeur transfer to the car-free Zermatt boundary, seamlessly transitioning into an electric town cab.'
      }
    ];
  }
}

export const ATTRACTIONS: Attraction[] = [
  // Kyoto Attractions
  {
    id: 'attr-fushimi',
    destinationId: 'kyoto',
    name: 'Fushimi Inari-Taisha Shrine',
    category: 'temples',
    description: 'Iconic Shinto shrine famous for over 10,000 vibrant vermilion Torii gates winding up the sacred forested slopes of Mount Inari.',
    image: destKyotoImg,
    entryFee: 0,
    openingHours: 'Open 24 hours',
    recommendedDurationMinutes: 120,
    bestTimeOfDay: 'Early Morning (06:30 – 08:30 AM) or Sunset',
    distanceFromCenterKm: 4.8,
    crowdLevel: 'High',
    coordinates: [34.9671, 135.7727],
    tags: ['photography', 'historical', 'culture', 'must_see']
  },
  {
    id: 'attr-kinkakuji',
    destinationId: 'kyoto',
    name: 'Kinkaku-ji (The Golden Pavilion)',
    category: 'historical',
    description: 'Breathtaking Zen Buddhist temple whose top two floors are completely covered in pure gold leaf, reflecting mirror-like onto the Kyoko-chi pond.',
    image: destKyotoImg,
    entryFee: 5,
    openingHours: '09:00 AM – 05:00 PM',
    recommendedDurationMinutes: 60,
    bestTimeOfDay: 'Morning (09:00 – 10:30 AM)',
    distanceFromCenterKm: 6.2,
    crowdLevel: 'High',
    coordinates: [35.0394, 135.7292],
    tags: ['unesco', 'architecture', 'zen']
  },
  {
    id: 'attr-arashiyama',
    destinationId: 'kyoto',
    name: 'Arashiyama Bamboo Grove & Tenryu-ji',
    category: 'nature',
    description: 'A towering natural green tunnel of soaring bamboo stalks that whisper in the breeze, alongside the UNESCO-listed 14th-century Tenryu-ji Zen garden.',
    image: destKyotoImg,
    entryFee: 5,
    openingHours: 'Open 24 hours (Garden 08:30 AM – 05:00 PM)',
    recommendedDurationMinutes: 90,
    bestTimeOfDay: 'Sunrise (07:00 – 08:30 AM)',
    distanceFromCenterKm: 9.0,
    crowdLevel: 'Moderate',
    coordinates: [35.0167, 135.6713],
    tags: ['nature', 'serene', 'walking']
  },
  {
    id: 'attr-kiyomizu',
    destinationId: 'kyoto',
    name: 'Kiyomizu-dera Wooden Stage & Higashiyama',
    category: 'historical',
    description: 'Spectacular historic temple perched on Mount Otowa, celebrated for its massive wooden veranda built without a single nail overlooking the cherry and maple canopy.',
    image: destKyotoImg,
    entryFee: 4,
    openingHours: '06:00 AM – 06:00 PM',
    recommendedDurationMinutes: 90,
    bestTimeOfDay: 'Late Afternoon (04:00 – 05:30 PM)',
    distanceFromCenterKm: 3.5,
    crowdLevel: 'High',
    coordinates: [34.9949, 135.7850],
    tags: ['panoramic', 'heritage', 'crafts']
  },
  {
    id: 'attr-gion',
    destinationId: 'kyoto',
    name: 'Gion Historic Geisha District & Shirakawa Canal',
    category: 'hidden_gem',
    description: 'Atmospheric cobblestone alleys lined with 17th-century preserved wooden machiya teahouses, willow trees, and paper lanterns where Geiko and Maiko still walk.',
    image: destKyotoImg,
    entryFee: 0,
    openingHours: 'Open 24 hours (Evening recommended)',
    recommendedDurationMinutes: 75,
    bestTimeOfDay: 'Twilight / Evening (06:00 – 08:30 PM)',
    distanceFromCenterKm: 1.5,
    crowdLevel: 'Moderate',
    coordinates: [35.0037, 135.7770],
    tags: ['nightlife', 'culture', 'walk']
  },
  {
    id: 'attr-nishiki',
    destinationId: 'kyoto',
    name: 'Nishiki Market (Kyoto’s Kitchen)',
    category: 'food',
    description: 'Five-block covered pedestrian arcade brimming with over 130 food stalls serving fresh tamagoyaki, matcha skewers, seasonal pickles, and wagyu skewers.',
    image: destKyotoImg,
    entryFee: 0,
    openingHours: '10:00 AM – 06:00 PM',
    recommendedDurationMinutes: 75,
    bestTimeOfDay: 'Lunchtime (11:30 AM – 01:30 PM)',
    distanceFromCenterKm: 0.5,
    crowdLevel: 'High',
    coordinates: [35.0050, 135.7649],
    tags: ['street_food', 'gastronomy', 'local']
  },

  // Amalfi Attractions
  {
    id: 'attr-pathofgods',
    destinationId: 'amalfi',
    name: 'Path of the Gods (Sentiero degli Dei)',
    category: 'adventure',
    description: 'A cliffside hiking trail perched 600 meters above the Mediterranean with vistas extending all the way to the island of Capri.',
    image: destAmalfiImg,
    entryFee: 0,
    openingHours: 'Daylight hours',
    recommendedDurationMinutes: 180,
    bestTimeOfDay: 'Morning (08:30 – 11:30 AM)',
    distanceFromCenterKm: 8.5,
    crowdLevel: 'Moderate',
    coordinates: [40.6300, 14.5300],
    tags: ['hiking', 'panoramic', 'active']
  },
  {
    id: 'attr-positano-harbor',
    destinationId: 'amalfi',
    name: 'Positano Harbor & Spiaggia Grande',
    category: 'beaches',
    description: 'The world-famous beach and pastel cliffside amphitheater of Positano with beach clubs, chic boutiques, and azure swimming waters.',
    image: destAmalfiImg,
    entryFee: 0,
    openingHours: 'Open 24 hours',
    recommendedDurationMinutes: 120,
    bestTimeOfDay: 'Afternoon & Sunset',
    distanceFromCenterKm: 12.0,
    crowdLevel: 'High',
    coordinates: [40.6281, 14.4850],
    tags: ['beach', 'relaxation', 'photography']
  },
  {
    id: 'attr-ravello-gardens',
    destinationId: 'amalfi',
    name: 'Villa Cimbrone & Infinity Terrace (Ravello)',
    category: 'photography',
    description: 'Medieval cliff garden famous for the "Terrazza dell’Infinito", lined with marble Roman busts staring out into the infinite blue of the Tyrrhenian Sea.',
    image: destAmalfiImg,
    entryFee: 10,
    openingHours: '09:00 AM – Sunset',
    recommendedDurationMinutes: 90,
    bestTimeOfDay: 'Late Morning (10:30 AM – 12:30 PM)',
    distanceFromCenterKm: 5.5,
    crowdLevel: 'Moderate',
    coordinates: [40.6480, 14.6110],
    tags: ['gardens', 'views', 'romantic']
  },
  {
    id: 'attr-amalfi-duomo',
    destinationId: 'amalfi',
    name: 'Duomo di Sant’Andrea & Cloister of Paradise',
    category: 'historical',
    description: '9th-century Arab-Norman Romanesque cathedral dominating Amalfi’s central piazza with striped marble arches and bronze doors from Constantinople.',
    image: destAmalfiImg,
    entryFee: 3,
    openingHours: '09:00 AM – 07:00 PM',
    recommendedDurationMinutes: 45,
    bestTimeOfDay: 'Morning (10:00 – 11:30 AM)',
    distanceFromCenterKm: 0.1,
    crowdLevel: 'Moderate',
    coordinates: [40.6343, 14.6028],
    tags: ['history', 'architecture']
  },

  // Swiss Alps Attractions
  {
    id: 'attr-gornergrat',
    destinationId: 'swiss_alps',
    name: 'Gornergrat Cogwheel Mountain Railway',
    category: 'mountains',
    description: 'Europe’s highest open-air cogwheel railway rising to 3,089 meters, providing panoramic vistas of the Matterhorn and 29 glaciers.',
    image: destSwissImg,
    entryFee: 95,
    openingHours: '07:00 AM – 07:00 PM',
    recommendedDurationMinutes: 180,
    bestTimeOfDay: 'Clear Morning (08:30 – 11:30 AM)',
    distanceFromCenterKm: 9.0,
    crowdLevel: 'Moderate',
    coordinates: [45.9830, 7.7830],
    tags: ['alpine', 'train', 'matterhorn', 'must_see']
  },
  {
    id: 'attr-matterhorn-paradise',
    destinationId: 'swiss_alps',
    name: 'Matterhorn Glacier Paradise & Ice Palace',
    category: 'adventure',
    description: 'Highest cable car station in the Alps at 3,883m with year-round snow, crystal viewing platforms, and a sub-glacial ice sculpture cave.',
    image: destSwissImg,
    entryFee: 110,
    openingHours: '08:30 AM – 04:30 PM',
    recommendedDurationMinutes: 150,
    bestTimeOfDay: 'Morning (09:00 – 11:30 AM)',
    distanceFromCenterKm: 11.5,
    crowdLevel: 'Moderate',
    coordinates: [45.9380, 7.7300],
    tags: ['snow', 'glacier', 'adventure']
  },
  {
    id: 'attr-riffelsee',
    destinationId: 'swiss_alps',
    name: 'Riffelsee Mirror Lake Trail',
    category: 'nature',
    description: 'Pristine alpine lake reflecting the Matterhorn in calm morning waters, surrounded by marmot burrows and gentian wildflowers.',
    image: destSwissImg,
    entryFee: 0,
    openingHours: 'Daylight hours',
    recommendedDurationMinutes: 75,
    bestTimeOfDay: 'Calm Morning (08:30 – 10:30 AM)',
    distanceFromCenterKm: 6.0,
    crowdLevel: 'Low',
    coordinates: [45.9800, 7.7650],
    tags: ['hiking', 'reflection', 'photography']
  }
];

export const RESTAURANTS: Restaurant[] = [
  // Kyoto Restaurants
  {
    id: 'rest-kyo-1',
    destinationId: 'kyoto',
    name: 'Gion Karyo Kaiseki',
    cuisine: 'Traditional Kyoto Kaiseki',
    priceLevel: '$$$$',
    rating: 4.9,
    mealType: 'fine_dining',
    dietaryOptions: ['Vegetarian on request', 'Pescatarian'],
    distanceFromCenterKm: 1.2,
    coordinates: [35.0031, 135.7765],
    specialtyDish: '10-Course Seasonal Degustation with Hida Wagyu and Kyoto Bamboo shoots',
    address: 'Gion-machi Minamigawa, Higashiyama Ward, Kyoto',
    image: destKyotoImg
  },
  {
    id: 'rest-kyo-2',
    destinationId: 'kyoto',
    name: 'Chao Chao Sanjo Gyoza Craft Bar',
    cuisine: 'Japanese Izakaya & Dumplings',
    priceLevel: '$',
    rating: 4.6,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Vegan'],
    distanceFromCenterKm: 0.6,
    coordinates: [35.0090, 135.7705],
    specialtyDish: 'Crispy Pan-fried Gyoza with Shiso and Yuzu dipping sauce',
    address: 'Kiyamachi-dori, Nakagyo Ward, Kyoto',
    image: destKyotoImg
  },
  {
    id: 'rest-kyo-3',
    destinationId: 'kyoto',
    name: 'Mumokuteki Cafe & Vegan Pantry',
    cuisine: 'Plant-Based Healthy Washoku',
    priceLevel: '$$',
    rating: 4.7,
    mealType: 'lunch',
    dietaryOptions: ['Vegan', 'Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 0.4,
    coordinates: [35.0065, 135.7665],
    specialtyDish: 'Crispy Tofu Katsu Set with Organic Kyoto Root Vegetables & Miso',
    address: 'Teramachi-dori, Nakagyo Ward, Kyoto',
    image: destKyotoImg
  },
  {
    id: 'rest-kyo-4',
    destinationId: 'kyoto',
    name: 'Kurasu Kyoto Specialty Coffee & Matcha',
    cuisine: 'Artisan Cafe & Bakery',
    priceLevel: '$',
    rating: 4.8,
    mealType: 'cafe',
    dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    distanceFromCenterKm: 0.2,
    coordinates: [34.9870, 135.7570],
    specialtyDish: 'Single-origin Pour-over & Ceremonial Uji Matcha Latte with Castella',
    address: 'Aburanokojicho, Shimogyo Ward, Kyoto',
    image: destKyotoImg
  },

  // Amalfi Restaurants
  {
    id: 'rest-ama-1',
    destinationId: 'amalfi',
    name: 'Ristorante Da Gemma 1872',
    cuisine: 'Coastal Campanian Seafood',
    priceLevel: '$$$',
    rating: 4.8,
    mealType: 'dinner',
    dietaryOptions: ['Gluten-Free', 'Vegetarian'],
    distanceFromCenterKm: 0.2,
    coordinates: [40.6345, 14.6025],
    specialtyDish: 'Scialatielli ai Frutti di Mare with handmade pasta & local clams',
    address: 'Via Fra Gerardo Sasso 11, Amalfi',
    image: destAmalfiImg
  },
  {
    id: 'rest-ama-2',
    destinationId: 'amalfi',
    name: 'Il Ritrovo di Montepertuso',
    cuisine: 'Rustic Mountain Italian & Pizza',
    priceLevel: '$$',
    rating: 4.9,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    distanceFromCenterKm: 13.0,
    coordinates: [40.6350, 14.4920],
    specialtyDish: 'Wood-fired Pizza Margherita & Tagliolini with Porcini & Truffle',
    address: 'Via Montepertuso 77, Positano',
    image: destAmalfiImg
  },
  {
    id: 'rest-ama-3',
    destinationId: 'amalfi',
    name: 'Pasticceria Andrea Pansa',
    cuisine: 'Historic Italian Patisserie & Espresso',
    priceLevel: '$',
    rating: 4.7,
    mealType: 'breakfast',
    dietaryOptions: ['Vegetarian'],
    distanceFromCenterKm: 0.1,
    coordinates: [40.6342, 14.6026],
    specialtyDish: 'Delizia al Limone & Warm Sfogliatella with Neapolitan espresso',
    address: 'Piazza Duomo 40, Amalfi',
    image: destAmalfiImg
  },

  // Swiss Alps Restaurants
  {
    id: 'rest-swi-1',
    destinationId: 'swiss_alps',
    name: 'Saycheese! Fondue Stübli',
    cuisine: 'Swiss Alpine Fondue & Raclette',
    priceLevel: '$$$',
    rating: 4.8,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 0.3,
    coordinates: [45.9775, 7.7490],
    specialtyDish: 'Truffled Valais AOC Cheese Fondue with baby potatoes & sourdough',
    address: 'Bahnhofstrasse 55, Zermatt',
    image: destSwissImg
  },
  {
    id: 'rest-swi-2',
    destinationId: 'swiss_alps',
    name: 'Chez Vrony Clifftop Mountain Refuge',
    cuisine: 'Alpine Gourmet & Organic Farm Fare',
    priceLevel: '$$$$',
    rating: 4.9,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 4.5,
    coordinates: [45.9920, 7.7710],
    specialtyDish: 'Vrony Mountain Burger with home-cured beef & Valais herbal cheese',
    address: 'Findeln, 3920 Zermatt',
    image: destSwissImg
  },
  {
    id: 'rest-swi-3',
    destinationId: 'swiss_alps',
    name: 'Fuchs Bäckerei & Tea Room',
    cuisine: 'Swiss Bakery & Alpine Cafe',
    priceLevel: '$',
    rating: 4.6,
    mealType: 'breakfast',
    dietaryOptions: ['Vegetarian'],
    distanceFromCenterKm: 0.1,
    coordinates: [45.9770, 7.7480],
    specialtyDish: 'Matterhorn Chocolate Pralines, Birchermüesli & fresh croissants',
    address: 'Getwingstrasse 24, Zermatt',
    image: destSwissImg
  }
];

// Helper to generate 5 distinct personalized trip options
export function generateTripOptions(prefs: UserPreferences): TripOption[] {
  const destId = prefs.destinationId || 'kyoto';
  const dest = DESTINATIONS.find(d => d.id === destId) || DESTINATIONS[0];
  const hotelsForDest = HOTELS.filter(h => h.destinationId === destId);
  const transForDest = getTransportationForRoute(prefs.startingLocation || 'New York (JFK)', destId);
  const attrsForDest = ATTRACTIONS.filter(a => a.destinationId === destId);
  const restsForDest = RESTAURANTS.filter(r => r.destinationId === destId);

  const duration = prefs.durationDays || 4;
  const numTravelers = (prefs.travelers?.adults || 2) + (prefs.travelers?.children || 0);

  // 1. Budget Option
  const budgetHotel = hotelsForDest.find(h => h.tags.includes('budget')) || hotelsForDest[hotelsForDest.length - 1];
  const budgetTrans = transForDest.find(t => t.type === 'bus' || t.price < 50) || transForDest[1];
  const budgetFoodCost = 35 * duration * numTravelers;
  const budgetActCost = 25 * duration * numTravelers;
  const budgetHotelTotal = budgetHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const budgetTransTotal = budgetTrans.price * numTravelers;
  const budgetTransitCost = 12 * duration * numTravelers;
  const budgetMisc = 40 * numTravelers;
  const budgetShopping = 30 * numTravelers;
  const budgetTotal = budgetHotelTotal + budgetTransTotal + budgetFoodCost + budgetActCost + budgetTransitCost + budgetMisc + budgetShopping;

  // 2. Balanced Option (Recommended)
  const balancedHotel = hotelsForDest.find(h => h.tags.includes('balanced')) || hotelsForDest[1] || hotelsForDest[0];
  const balancedTrans = transForDest.find(t => t.type === 'train' || (t.price >= 50 && t.price <= 120)) || transForDest[0];
  const balancedFoodCost = 65 * duration * numTravelers;
  const balancedActCost = 45 * duration * numTravelers;
  const balancedHotelTotal = balancedHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const balancedTransTotal = balancedTrans.price * numTravelers;
  const balancedTransitCost = 25 * duration * numTravelers;
  const balancedMisc = 80 * numTravelers;
  const balancedShopping = 90 * numTravelers;
  const balancedTotal = balancedHotelTotal + balancedTransTotal + balancedFoodCost + balancedActCost + balancedTransitCost + balancedMisc + balancedShopping;

  // 3. Comfort / Luxury Option
  const luxuryHotel = hotelsForDest.find(h => h.tags.includes('luxury')) || hotelsForDest[0];
  const luxuryTrans = transForDest.find(t => t.type === 'taxi' || t.comfortLevel === 'First Class' || t.comfortLevel === 'Premium') || transForDest[0];
  const luxuryFoodCost = 140 * duration * numTravelers;
  const luxuryActCost = 90 * duration * numTravelers;
  const luxuryHotelTotal = luxuryHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const luxuryTransTotal = luxuryTrans.price * numTravelers;
  const luxuryTransitCost = 50 * duration * numTravelers;
  const luxuryMisc = 160 * numTravelers;
  const luxuryShopping = 250 * numTravelers;
  const luxuryTotal = luxuryHotelTotal + luxuryTransTotal + luxuryFoodCost + luxuryActCost + luxuryTransitCost + luxuryMisc + luxuryShopping;

  // 4. Adventure Option
  const adventureHotel = hotelsForDest.find(h => h.tags.includes('adventure') || h.tags.includes('nature') || h.tags.includes('boutique')) || balancedHotel;
  const adventureTrans = balancedTrans;
  const adventureFoodCost = 55 * duration * numTravelers;
  const adventureActCost = 75 * duration * numTravelers;
  const adventureHotelTotal = adventureHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const adventureTransTotal = adventureTrans.price * numTravelers;
  const adventureTransitCost = 30 * duration * numTravelers;
  const adventureMisc = 70 * numTravelers;
  const adventureShopping = 60 * numTravelers;
  const adventureTotal = adventureHotelTotal + adventureTransTotal + adventureFoodCost + adventureActCost + adventureTransitCost + adventureMisc + adventureShopping;

  // 5. Relaxed Option
  const relaxedHotel = balancedHotel;
  const relaxedTrans = balancedTrans;
  const relaxedFoodCost = 70 * duration * numTravelers;
  const relaxedActCost = 30 * duration * numTravelers;
  const relaxedHotelTotal = relaxedHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const relaxedTransTotal = relaxedTrans.price * numTravelers;
  const relaxedTransitCost = 20 * duration * numTravelers;
  const relaxedMisc = 60 * numTravelers;
  const relaxedShopping = 80 * numTravelers;
  const relaxedTotal = relaxedHotelTotal + relaxedTransTotal + relaxedFoodCost + relaxedActCost + relaxedTransitCost + relaxedMisc + relaxedShopping;

  // Build schedules
  const buildDailySchedule = (style: 'budget' | 'balanced' | 'luxury' | 'adventure' | 'relaxed'): ItineraryDay[] => {
    const days: ItineraryDay[] = [];
    const mainHotel = style === 'budget' ? budgetHotel : style === 'luxury' ? luxuryHotel : balancedHotel;
    
    for (let d = 1; d <= duration; d++) {
      let activities: ItineraryActivity[] = [];
      const attr1 = attrsForDest[(d * 2 - 2) % attrsForDest.length] || attrsForDest[0];
      const attr2 = attrsForDest[(d * 2 - 1) % attrsForDest.length] || attrsForDest[1];
      const lunchRest = restsForDest[d % restsForDest.length] || restsForDest[0];
      const dinnerRest = restsForDest[(d + 1) % restsForDest.length] || restsForDest[0];

      if (d === 1) {
        // Arrival day
        activities = [
          {
            id: `act-${d}-1`,
            title: `Arrival at ${dest.name} & Station Greeting`,
            timeSlot: '09:30 AM',
            durationMinutes: 60,
            category: 'logistics',
            locationName: `${dest.name} Transit Gateway`,
            coordinates: dest.coordinates,
            notes: 'Collect public transit pass & store luggage / take express transport to hotel.',
            cost: 0,
            travelTimeToNextMinutes: 25,
            travelDistanceKm: 3.2,
            transitModeToNext: 'Local Taxi or Shuttle'
          },
          {
            id: `act-${d}-2`,
            title: `Check-in & Welcome Refreshment at ${mainHotel.name}`,
            timeSlot: '11:00 AM',
            durationMinutes: 45,
            category: 'relaxation',
            locationName: mainHotel.name,
            coordinates: mainHotel.coordinates,
            notes: 'Unpack, refresh, and receive destination map from concierge.',
            cost: 0,
            travelTimeToNextMinutes: 15,
            travelDistanceKm: 1.1,
            transitModeToNext: 'Leisurely Walk'
          },
          {
            id: `act-${d}-3`,
            title: `Local Flavors Lunch at ${lunchRest.name}`,
            timeSlot: '12:30 PM',
            durationMinutes: 75,
            category: 'food',
            locationName: lunchRest.name,
            coordinates: lunchRest.coordinates,
            notes: `Recommended dish: ${lunchRest.specialtyDish}`,
            cost: style === 'luxury' ? 45 : style === 'budget' ? 12 : 25,
            travelTimeToNextMinutes: 20,
            travelDistanceKm: 2.4,
            transitModeToNext: 'Transit'
          },
          {
            id: `act-${d}-4`,
            title: `Explore ${attr1.name}`,
            timeSlot: '02:30 PM',
            durationMinutes: attr1.recommendedDurationMinutes,
            category: attr1.category,
            locationName: attr1.name,
            coordinates: attr1.coordinates,
            notes: attr1.description,
            cost: attr1.entryFee,
            attractionRefId: attr1.id,
            travelTimeToNextMinutes: 30,
            travelDistanceKm: 3.8,
            transitModeToNext: 'Walking & Train'
          },
          {
            id: `act-${d}-5`,
            title: `Sunset Golden Hour Walk at ${attr2.name}`,
            timeSlot: '05:30 PM',
            durationMinutes: 60,
            category: 'photography',
            locationName: attr2.name,
            coordinates: attr2.coordinates,
            notes: 'Prime photographic illumination and peaceful atmosphere.',
            cost: attr2.entryFee,
            attractionRefId: attr2.id,
            travelTimeToNextMinutes: 15,
            travelDistanceKm: 1.5,
            transitModeToNext: 'Short Walk'
          },
          {
            id: `act-${d}-6`,
            title: `Evening Dining Experience at ${dinnerRest.name}`,
            timeSlot: '07:30 PM',
            durationMinutes: 90,
            category: 'food',
            locationName: dinnerRest.name,
            coordinates: dinnerRest.coordinates,
            notes: `Atmospheric dinner. Cuisine: ${dinnerRest.cuisine}`,
            cost: style === 'luxury' ? 95 : style === 'budget' ? 18 : 40,
            travelTimeToNextMinutes: 20,
            travelDistanceKm: 2.0,
            transitModeToNext: 'Cab back to hotel'
          }
        ];
      } else if (d === duration) {
        // Departure day
        activities = [
          {
            id: `act-${d}-1`,
            title: `Breakfast & Morning Stroll at ${mainHotel.name}`,
            timeSlot: '08:30 AM',
            durationMinutes: 60,
            category: 'food',
            locationName: mainHotel.name,
            coordinates: mainHotel.coordinates,
            notes: 'Fresh morning breakfast followed by relaxed packing.',
            cost: 0,
            travelTimeToNextMinutes: 15,
            travelDistanceKm: 1.0,
            transitModeToNext: 'Walk'
          },
          {
            id: `act-${d}-2`,
            title: `Morning Cultural Stop at ${attr1.name}`,
            timeSlot: '10:00 AM',
            durationMinutes: 75,
            category: attr1.category,
            locationName: attr1.name,
            coordinates: attr1.coordinates,
            notes: 'Final immersion in local heritage before checkout.',
            cost: attr1.entryFee,
            attractionRefId: attr1.id,
            travelTimeToNextMinutes: 20,
            travelDistanceKm: 2.0,
            transitModeToNext: 'Local Bus'
          },
          {
            id: `act-${d}-3`,
            title: 'Souvenir & Artisanal Gift Shopping',
            timeSlot: '12:00 PM',
            durationMinutes: 60,
            category: 'shopping',
            locationName: 'Historic Artisan Quarter',
            coordinates: dest.coordinates,
            notes: 'Pick up local specialties, tea, textiles, and handcrafted keepsakes.',
            cost: 30,
            travelTimeToNextMinutes: 25,
            travelDistanceKm: 3.5,
            transitModeToNext: 'Express Airport Link'
          },
          {
            id: `act-${d}-4`,
            title: 'Depart to Airport / Station for Return Journey',
            timeSlot: '02:00 PM',
            durationMinutes: 60,
            category: 'logistics',
            locationName: `${dest.name} Transit Gateway`,
            coordinates: dest.coordinates,
            notes: 'Safe travels! Trip complete.',
            cost: 0
          }
        ];
      } else {
        // Full exploration days
        activities = [
          {
            id: `act-${d}-1`,
            title: `Morning Discovery at ${attr1.name}`,
            timeSlot: '09:00 AM',
            durationMinutes: attr1.recommendedDurationMinutes,
            category: attr1.category,
            locationName: attr1.name,
            coordinates: attr1.coordinates,
            notes: `Optimal timing: ${attr1.bestTimeOfDay}. Beat the peak crowd windows.`,
            cost: attr1.entryFee,
            attractionRefId: attr1.id,
            travelTimeToNextMinutes: 20,
            travelDistanceKm: 2.1,
            transitModeToNext: 'Metro / Walking'
          },
          {
            id: `act-${d}-2`,
            title: `Midday Lunch at ${lunchRest.name}`,
            timeSlot: '12:00 PM',
            durationMinutes: 75,
            category: 'food',
            locationName: lunchRest.name,
            coordinates: lunchRest.coordinates,
            notes: `Specialty: ${lunchRest.specialtyDish}. Dietary tags: ${lunchRest.dietaryOptions.join(', ')}`,
            cost: style === 'luxury' ? 55 : style === 'budget' ? 14 : 28,
            travelTimeToNextMinutes: 25,
            travelDistanceKm: 3.1,
            transitModeToNext: 'Transit'
          },
          {
            id: `act-${d}-3`,
            title: `Immersive Exploration of ${attr2.name}`,
            timeSlot: '02:00 PM',
            durationMinutes: attr2.recommendedDurationMinutes,
            category: attr2.category,
            locationName: attr2.name,
            coordinates: attr2.coordinates,
            notes: attr2.description,
            cost: attr2.entryFee,
            attractionRefId: attr2.id,
            travelTimeToNextMinutes: 20,
            travelDistanceKm: 1.8,
            transitModeToNext: 'Scenic Walk'
          },
          {
            id: `act-${d}-4`,
            title: style === 'adventure' ? 'Active Outdoor Panoramic Trail' : style === 'relaxed' ? 'Tea Pavilion & Garden Rest' : 'Local Craft & Heritage Walk',
            timeSlot: '04:30 PM',
            durationMinutes: 75,
            category: style === 'adventure' ? 'adventure' : 'nature',
            locationName: 'Scenic Vista Walk',
            coordinates: dest.coordinates,
            notes: 'Unwind and take in the natural surroundings.',
            cost: 0,
            travelTimeToNextMinutes: 25,
            travelDistanceKm: 2.0,
            transitModeToNext: 'Short Ride'
          },
          {
            id: `act-${d}-5`,
            title: `Dinner & Night Atmosphere at ${dinnerRest.name}`,
            timeSlot: '07:30 PM',
            durationMinutes: 90,
            category: 'food',
            locationName: dinnerRest.name,
            coordinates: dinnerRest.coordinates,
            notes: `Dinner with local wine/beverage pairing. Cuisine: ${dinnerRest.cuisine}`,
            cost: style === 'luxury' ? 110 : style === 'budget' ? 20 : 45,
            travelTimeToNextMinutes: 15,
            travelDistanceKm: 1.5,
            transitModeToNext: 'Return Walk to Hotel'
          }
        ];
      }

      days.push({
        dayNumber: d,
        dateStr: `Day ${d}`,
        title: d === 1 ? 'Arrival & Neighborhood Charm' : d === duration ? 'Farewell & Scenic Departures' : `Immersion: ${attr1.name}`,
        theme: d === 1 ? 'Settling In' : d % 2 === 0 ? 'Heritage & Culture' : 'Natural Wonders & Local Gastronomy',
        activities
      });
    }
    return days;
  };

  const tripOptions: TripOption[] = [
    {
      id: 'trip-balanced',
      title: 'Plan & Wander Balanced',
      type: 'balanced',
      tagline: 'The sweet spot of high comfort, top sights & authentic local culture',
      whyItMatches: `Combines top-rated 4-star boutique stay near central attractions with fast convenient transit (${balancedTrans.routeName}), giving you optimal travel efficiency and rich cultural sights without rushing.`,
      totalEstimatedCost: Math.round(balancedTotal),
      daysCount: duration,
      hotel: balancedHotel,
      transportation: balancedTrans,
      placesCount: Math.min(attrsForDest.length, duration * 2 + 1),
      activitiesCount: duration * 4,
      foodSuggestions: restsForDest,
      dailySchedule: buildDailySchedule('balanced'),
      estimatedDailySpending: Math.round(balancedTotal / duration),
      pros: [
        'Excellent balance between premium comfort and sensible pricing',
        'Handpicked boutique hotel within 5-15 min of prime landmarks',
        'High-speed seamless transport with guaranteed reserved seating',
        'Includes top-tier sights and curated culinary recommendations'
      ],
      considerations: [
        'Popular restaurant reservations recommended 2 weeks ahead',
        'Some walking required between historic alleyways and stations'
      ],
      budgetBreakdown: {
        hotel: Math.round(balancedHotelTotal),
        transport: Math.round(balancedTransTotal),
        food: Math.round(balancedFoodCost),
        activities: Math.round(balancedActCost),
        localTransit: Math.round(balancedTransitCost),
        shopping: Math.round(balancedShopping),
        misc: Math.round(balancedMisc)
      }
    },
    {
      id: 'trip-budget',
      title: 'Smart Budget Explorer',
      type: 'budget',
      tagline: 'Maximum destination adventure with lean, high-value spending',
      whyItMatches: `Prioritizes accessible accommodations (${budgetHotel.name}), cost-effective regional transit, and free/low-cost landmark visits while preserving full daily exploration.`,
      totalEstimatedCost: Math.round(budgetTotal),
      daysCount: duration,
      hotel: budgetHotel,
      transportation: budgetTrans,
      placesCount: Math.min(attrsForDest.length, duration * 2),
      activitiesCount: duration * 4,
      foodSuggestions: restsForDest.filter(r => r.priceLevel === '$' || r.priceLevel === '$$'),
      dailySchedule: buildDailySchedule('budget'),
      estimatedDailySpending: Math.round(budgetTotal / duration),
      pros: [
        'Saves up to 45% compared to average holiday costs',
        'Focuses on vibrant street food, local eateries, and free shrines/parks',
        'Strategic public transit pass utilization'
      ],
      considerations: [
        'Comfort-tier hostel/annex with shared or compact private rooms',
        'Longer transit duration with highway coach or local train'
      ],
      budgetBreakdown: {
        hotel: Math.round(budgetHotelTotal),
        transport: Math.round(budgetTransTotal),
        food: Math.round(budgetFoodCost),
        activities: Math.round(budgetActCost),
        localTransit: Math.round(budgetTransitCost),
        shopping: Math.round(budgetShopping),
        misc: Math.round(budgetMisc)
      }
    },
    {
      id: 'trip-luxury',
      title: 'Comfort & Luxury Sanctuary',
      type: 'luxury',
      tagline: 'Five-star indulgence, private chauffeurs & Michelin-grade dining',
      whyItMatches: `Curated for travelers seeking uncompromised luxury: 5-star premier suites at ${luxuryHotel.name}, private door-to-door luxury chauffeur, priority access to historical sites, and exquisite culinary tasting menus.`,
      totalEstimatedCost: Math.round(luxuryTotal),
      daysCount: duration,
      hotel: luxuryHotel,
      transportation: luxuryTrans,
      placesCount: Math.min(attrsForDest.length, duration * 2 + 2),
      activitiesCount: duration * 4 + 2,
      foodSuggestions: restsForDest.filter(r => r.priceLevel === '$$$' || r.priceLevel === '$$$$'),
      dailySchedule: buildDailySchedule('luxury'),
      estimatedDailySpending: Math.round(luxuryTotal / duration),
      pros: [
        'World-class 5-star hotel with dedicated concierge and luxury wellness spa',
        'White-glove private transport eliminating airport and station lines',
        'Exclusive tasting menus and scenic sunset terrace reservations',
        'Zero stress: luggage handling and flexible check-in times included'
      ],
      considerations: [
        'Requires higher budget allocation',
        'Fine-dining venues enforce smart-casual or formal dress codes'
      ],
      budgetBreakdown: {
        hotel: Math.round(luxuryHotelTotal),
        transport: Math.round(luxuryTransTotal),
        food: Math.round(luxuryFoodCost),
        activities: Math.round(luxuryActCost),
        localTransit: Math.round(luxuryTransitCost),
        shopping: Math.round(luxuryShopping),
        misc: Math.round(luxuryMisc)
      }
    },
    {
      id: 'trip-adventure',
      title: 'Adventure & Active Discovery',
      type: 'adventure',
      tagline: 'High adrenaline, scenic hikes & off-the-beaten-path expeditions',
      whyItMatches: 'Designed for energetic explorers focusing on scenic mountain trails, hidden viewpoints, outdoor activities, and nature excursions with minimal idle downtime.',
      totalEstimatedCost: Math.round(adventureTotal),
      daysCount: duration,
      hotel: adventureHotel,
      transportation: adventureTrans,
      placesCount: Math.min(attrsForDest.length, duration * 2 + 1),
      activitiesCount: duration * 4,
      foodSuggestions: restsForDest,
      dailySchedule: buildDailySchedule('adventure'),
      estimatedDailySpending: Math.round(adventureTotal / duration),
      pros: [
        'Includes early-morning trail walks and panoramic summit lookouts',
        'Stays in gear-friendly accommodation with easy outdoor access',
        'High daily step count and exhilarating scenic perspectives'
      ],
      considerations: [
        'Requires moderate physical fitness and comfortable hiking footwear',
        'Weather-dependent outdoor trail conditions'
      ],
      budgetBreakdown: {
        hotel: Math.round(adventureHotelTotal),
        transport: Math.round(adventureTransTotal),
        food: Math.round(adventureFoodCost),
        activities: Math.round(adventureActCost),
        localTransit: Math.round(adventureTransitCost),
        shopping: Math.round(adventureShopping),
        misc: Math.round(adventureMisc)
      }
    },
    {
      id: 'trip-relaxed',
      title: 'Serene & Slow Travel',
      type: 'relaxed',
      tagline: 'Unhurried mornings, thermal spa baths & deep immersive rests',
      whyItMatches: 'Capped at 2 primary activities per day to let you absorb the atmosphere, sip afternoon tea in tranquil gardens, sleep in without alarms, and avoid traveler burnout.',
      totalEstimatedCost: Math.round(relaxedTotal),
      daysCount: duration,
      hotel: relaxedHotel,
      transportation: relaxedTrans,
      placesCount: Math.max(3, duration + 1),
      activitiesCount: duration * 3,
      foodSuggestions: restsForDest,
      dailySchedule: buildDailySchedule('relaxed'),
      estimatedDailySpending: Math.round(relaxedTotal / duration),
      pros: [
        'Generous 2–3 hour gaps between events for leisure and café hopping',
        'No early wake-up calls required',
        'Deep relaxation with onsen / spa visits integrated into the afternoons'
      ],
      considerations: [
        'Visits fewer total attractions across the full trip',
        'May skip certain distant sights in favor of local neighborhood calm'
      ],
      budgetBreakdown: {
        hotel: Math.round(relaxedHotelTotal),
        transport: Math.round(relaxedTransTotal),
        food: Math.round(relaxedFoodCost),
        activities: Math.round(relaxedActCost),
        localTransit: Math.round(relaxedTransitCost),
        shopping: Math.round(relaxedShopping),
        misc: Math.round(relaxedMisc)
      }
    }
  ];

  return tripOptions;
}
