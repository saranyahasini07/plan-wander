import { Hotel } from '../types/travel';
import destKyotoImg from '../assets/images/dest_kyoto_pagoda_1790596894061.jpg';
import destAmalfiImg from '../assets/images/dest_amalfi_coast_1790596912714.jpg';
import destSwissImg from '../assets/images/dest_swiss_alps_1790596927073.jpg';

export const HOTELS: Hotel[] = [
  // ==========================================
  // 🇮🇳 INDIA HOTELS
  // ==========================================

  // 1. Goa Hotels
  {
    id: 'hotel-goa-1',
    name: 'The Leela Goa Beach Resort & Spa',
    destinationId: 'goa',
    starRating: 5,
    rating: 4.9,
    reviewCount: 1680,
    pricePerNight: 280,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    coordinates: [15.1585, 73.9452],
    address: 'Mobor Beach, Cavelossim, South Goa',
    distanceFromAttractions: 'Direct private access to Mobor Beach & Sal River',
    tags: ['luxury', 'beachfront', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
    amenities: ['Private Beach Club', '12-Hole Golf Course', 'Ayurvedic Spa & Hydrotherapy', 'Lagoon Pool', 'River Cruise Pier'],
    roomTypes: [
      { type: 'Lagoon Terrace Suite', capacity: '2 Adults', pricePerNight: 280, bedType: '1 King Bed' },
      { type: 'Royal Beach Villa with Private Plunge Pool', capacity: '2 Adults, 2 Children', pricePerNight: 550, bedType: '1 King Bed + Sofa Bed' }
    ]
  },
  {
    id: 'hotel-goa-2',
    name: 'Heritage Village Resort & Spa Arossim',
    destinationId: 'goa',
    starRating: 4,
    rating: 4.7,
    reviewCount: 940,
    pricePerNight: 120,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [15.3211, 73.8992],
    address: 'Arossim Beach Road, Cansaulim, Goa',
    distanceFromAttractions: '5 min walk to pristine white-sand Arossim Beach',
    tags: ['balanced', 'family', 'beachfront'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 72 hours prior',
    amenities: ['Goan Heritage Architecture', 'Tropical Garden Pool', 'Ayaveda Wellness Pavilion', 'Live Beach Music Lounge'],
    roomTypes: [
      { type: 'Colonial Deluxe Room', capacity: '2 Adults', pricePerNight: 120, bedType: '1 Queen Bed' },
      { type: 'Heritage Family Suite', capacity: '4 Persons', pricePerNight: 190, bedType: '2 Queen Beds' }
    ]
  },
  {
    id: 'hotel-goa-3',
    name: 'Zostel Morjim Beach Hub',
    destinationId: 'goa',
    starRating: 3,
    rating: 4.6,
    reviewCount: 2200,
    pricePerNight: 35,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [15.6322, 73.7380],
    address: 'Vithaldaswada, Morjim, North Goa',
    distanceFromAttractions: '3 min walk to Turtle Beach Morjim',
    tags: ['budget', 'social', 'beachfront'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Coworking Beach Shack', 'Yoga Deck', 'Surfboard Rentals', 'Community Café', 'High-Speed WiFi'],
    roomTypes: [
      { type: 'Private AC Coastal Room', capacity: '2 Adults', pricePerNight: 35, bedType: '1 Double Bed' },
      { type: 'Air-Conditioned 6-Bed Dorm Bed', capacity: '1 Adult', pricePerNight: 14, bedType: '1 Bunk Bed' }
    ]
  },

  // 2. Kashmir Hotels
  {
    id: 'hotel-kashmir-1',
    name: 'The Khyber Himalayan Resort & Spa',
    destinationId: 'kashmir',
    starRating: 5,
    rating: 4.95,
    reviewCount: 1420,
    pricePerNight: 350,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    coordinates: [34.0531, 74.3785],
    address: 'Gulmarg, Pir Panjal Himalayas, Kashmir',
    distanceFromAttractions: 'Minutes from the world-famous Gulmarg Gondola',
    tags: ['luxury', 'mountains', 'spa', 'nature'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days before arrival',
    amenities: ['Heated Indoor Infinity Pool facing Affarwat Peak', 'L\'Occitane Himalayan Spa', 'Ski Concierge & Ski-in Access', 'Kashmiri Kahwa Tea Lounge'],
    roomTypes: [
      { type: 'Premier Pine Forest View Room', capacity: '2 Adults', pricePerNight: 350, bedType: '1 King Bed' },
      { type: 'Presidential Himalayan Valley Suite', capacity: '4 Persons', pricePerNight: 750, bedType: '2 King Bedrooms' }
    ]
  },
  {
    id: 'hotel-kashmir-2',
    name: 'Sukoon Luxury Heritage Houseboat on Nigeen Lake',
    destinationId: 'kashmir',
    starRating: 4,
    rating: 4.8,
    reviewCount: 880,
    pricePerNight: 160,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    coordinates: [34.1165, 74.8320],
    address: 'Nigeen Lake East Bank, Srinagar, Kashmir',
    distanceFromAttractions: 'Floating on tranquil Nigeen Lake, private Shikara jetty',
    tags: ['balanced', 'boutique', 'couple', 'nature'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Hand-Carved Cedarwood Interiors', 'Rooftop Sundeck facing Zabarwan Mountains', 'Private Shikara Transfers', 'Traditional Wazwan Dinners'],
    roomTypes: [
      { type: 'Heritage Cedar Lake Suite', capacity: '2 Adults', pricePerNight: 160, bedType: '1 King Bed' },
      { type: 'Grand Maharaja Suite', capacity: '2 Adults, 1 Child', pricePerNight: 220, bedType: '1 King Four-Poster Bed' }
    ]
  },
  {
    id: 'hotel-kashmir-3',
    name: 'Hotel Pine & Peak Backpacker Hub',
    destinationId: 'kashmir',
    starRating: 3,
    rating: 4.5,
    reviewCount: 1100,
    pricePerNight: 40,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    coordinates: [34.0880, 74.8210],
    address: 'Boulevard Road, Dal Lake, Srinagar, Kashmir',
    distanceFromAttractions: '5 min walk to Dal Lake Ghat 12',
    tags: ['budget', 'central', 'social'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Dal Lake View Balcony', 'Free Kashmiri Kahwa Station', 'Local Trekking Guide Desk', 'High-Speed WiFi'],
    roomTypes: [
      { type: 'Deluxe Mountain Double Room', capacity: '2 Adults', pricePerNight: 40, bedType: '1 Double Bed' }
    ]
  },

  // 3. Manali Hotels
  {
    id: 'hotel-manali-1',
    name: 'The Himalayan Luxury Castle & Resort',
    destinationId: 'manali',
    starRating: 5,
    rating: 4.9,
    reviewCount: 780,
    pricePerNight: 240,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [32.2485, 77.1852],
    address: 'Hadimba Road, Manali, Himachal Pradesh',
    distanceFromAttractions: 'Steps from historic Hadimba Temple, set in apple orchards',
    tags: ['luxury', 'mountains', 'boutique'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 5 days prior',
    amenities: ['Gothic Castle Architecture', 'Heated Outdoor Pool', 'Orchard Dining', 'Fireplace Lounges', 'Private Mountain Balconies'],
    roomTypes: [
      { type: 'Castle Grand Chamber', capacity: '2 Adults', pricePerNight: 240, bedType: '1 King Bed' },
      { type: 'Victorian Cottage Suite with Fireplace', capacity: '4 Persons', pricePerNight: 410, bedType: '2 Queen Beds' }
    ]
  },
  {
    id: 'hotel-manali-2',
    name: 'Apple Country Resort & Spa',
    destinationId: 'manali',
    starRating: 4,
    rating: 4.7,
    reviewCount: 1350,
    pricePerNight: 105,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    coordinates: [32.2530, 77.1810],
    address: 'Log Huts Area, Old Manali, Himachal Pradesh',
    distanceFromAttractions: '10 min walk to Old Manali cafés and Beas river',
    tags: ['balanced', 'nature', 'mountains'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Panoramic Valley Balconies', 'Cedar Spa & Sauna', 'Multi-cuisine Mountain Restaurant', 'Bonfire Evenings'],
    roomTypes: [
      { type: 'Valley View Deluxe Room', capacity: '2 Adults', pricePerNight: 105, bedType: '1 Queen Bed' },
      { type: 'Duplex Family Suite', capacity: '4 Persons', pricePerNight: 160, bedType: '1 King + 2 Twin Beds' }
    ]
  },
  {
    id: 'hotel-manali-3',
    name: 'Zostel Old Manali Backpacker Haven',
    destinationId: 'manali',
    starRating: 3,
    rating: 4.6,
    reviewCount: 3100,
    pricePerNight: 28,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [32.2590, 77.1780],
    address: 'Manu Temple Road, Old Manali',
    distanceFromAttractions: 'Surrounded by apple orchards, 2 min walk to Manu Temple',
    tags: ['budget', 'social', 'mountains'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Riverside Garden Café', 'Board Games & Library', 'High-Speed Starlink WiFi', 'Trek Booking Desk'],
    roomTypes: [
      { type: 'Private Mountain View Room', capacity: '2 Adults', pricePerNight: 28, bedType: '1 Double Bed' }
    ]
  },

  // 4. Ladakh Hotels
  {
    id: 'hotel-ladakh-1',
    name: 'The Grand Dragon Ladakh',
    destinationId: 'ladakh',
    starRating: 5,
    rating: 4.9,
    reviewCount: 1150,
    pricePerNight: 220,
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    coordinates: [34.1560, 77.5810],
    address: 'Old Road, Sheynam, Leh, Ladakh',
    distanceFromAttractions: '10 min walk to Leh Main Bazaar, views of Stok Kangri range',
    tags: ['luxury', 'mountains', 'culture'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 5 days prior',
    amenities: ['Oxygen-Enriched Heated Rooms', 'Solar Eco-Heating', 'Rooftop Stargazing Deck', 'Bakery & Ladakhi Cuisine'],
    roomTypes: [
      { type: 'Deluxe Heritage Mountain Room', capacity: '2 Adults', pricePerNight: 220, bedType: '1 King Bed' },
      { type: 'Royal Dragon Suite', capacity: '2 Adults, 1 Child', pricePerNight: 390, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-ladakh-2',
    name: 'Spic N Span Luxury Heritage Hotel Leh',
    destinationId: 'ladakh',
    starRating: 4,
    rating: 4.7,
    reviewCount: 840,
    pricePerNight: 110,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    coordinates: [34.1610, 77.5840],
    address: 'Old Road, Leh, Ladakh',
    distanceFromAttractions: '5 min walk to Leh Palace & Central Market',
    tags: ['balanced', 'central', 'culture'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Traditional Ladakhi Wood Carvings', 'Organic Vegetable Garden', 'Trek & Permit Assistance', 'Free High-Speed WiFi'],
    roomTypes: [
      { type: 'Executive Mountain View Room', capacity: '2 Adults', pricePerNight: 110, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-ladakh-3',
    name: 'Zostel Leh High-Altitude Hub',
    destinationId: 'ladakh',
    starRating: 3,
    rating: 4.6,
    reviewCount: 1950,
    pricePerNight: 32,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [34.1670, 77.5880],
    address: 'Karzoo, Leh, Ladakh',
    distanceFromAttractions: '10 min walk to Shanti Stupa stairway',
    tags: ['budget', 'social', 'mountains'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Rooftop Café facing Shanti Stupa', 'Bike & Enfield Rental Desk', 'Cozy Common Lounge', 'Free WiFi'],
    roomTypes: [
      { type: 'Private Ensuite Room', capacity: '2 Adults', pricePerNight: 32, bedType: '1 Double Bed' }
    ]
  },

  // 5. Kerala Hotels
  {
    id: 'hotel-kerala-1',
    name: 'Kumarakom Lake Resort & Ayurvedic Sanctuary',
    destinationId: 'kerala',
    starRating: 5,
    rating: 4.95,
    reviewCount: 1890,
    pricePerNight: 290,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    coordinates: [9.6210, 76.4320],
    address: 'Vembanad Lake, Kumarakom, Kottayam, Kerala',
    distanceFromAttractions: 'Direct frontage on Vembanad Lake, private backwater boat jetty',
    tags: ['luxury', 'nature', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['Heritage 16th-Century Tharavadu Villas', '250m Meandering Pool', 'Ayurmana Certified Ayurvedic Hospital', 'Sunset Houseboat Charters'],
    roomTypes: [
      { type: 'Meandering Pool Villa', capacity: '2 Adults', pricePerNight: 290, bedType: '1 King Bed' },
      { type: 'Presidential Heritage Pool Suite', capacity: '4 Persons', pricePerNight: 580, bedType: '2 King Suites' }
    ]
  },
  {
    id: 'hotel-kerala-2',
    name: 'Fragrant Nature Backwater Resort & Ayurveda',
    destinationId: 'kerala',
    starRating: 4,
    rating: 4.75,
    reviewCount: 1040,
    pricePerNight: 115,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    coordinates: [8.8890, 76.6120],
    address: 'Near Paravur Lake, Kollam, Kerala',
    distanceFromAttractions: 'Serene lakeside setting surrounded by palm groves',
    tags: ['balanced', 'nature', 'spa'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Infinity Lakeside Pool', 'Authentic Panchakarma Spa', 'Pedal & Motor Boats', 'Kerala Seafood Specialty Restaurant'],
    roomTypes: [
      { type: 'Tropic Green Lake View Room', capacity: '2 Adults', pricePerNight: 115, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-kerala-3',
    name: 'Zostel Alleppey Beach Hostel',
    destinationId: 'kerala',
    starRating: 3,
    rating: 4.6,
    reviewCount: 2450,
    pricePerNight: 26,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [9.4920, 76.3210],
    address: 'Near Alleppey Lighthouse & Beach, Alappuzha',
    distanceFromAttractions: '3 min walk to Alleppey Beach and Pier',
    tags: ['budget', 'beachfront', 'social'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Rooftop Sunset Hammock Lounge', 'Backwater Canoe Tour Booking', 'High-Speed WiFi', 'Café with Kerala Chai & Snacks'],
    roomTypes: [
      { type: 'Private AC Coastal Room', capacity: '2 Adults', pricePerNight: 26, bedType: '1 Double Bed' }
    ]
  },

  // 6. Jaipur Hotels
  {
    id: 'hotel-jaipur-1',
    name: 'Rambagh Palace (The Jewel of Jaipur)',
    destinationId: 'jaipur',
    starRating: 5,
    rating: 4.98,
    reviewCount: 2400,
    pricePerNight: 480,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [26.8970, 75.8080],
    address: 'Bhawani Singh Road, Jaipur, Rajasthan',
    distanceFromAttractions: 'Former royal residence of the Maharaja of Jaipur, 15 min to City Palace',
    tags: ['luxury', 'historical', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['47 Acres of Ornamental Mughal Gardens', 'Jiva Grande Spa', 'Peacocks on Terraces', 'Vintage Car Airport Transfers', 'Suvarna Mahal Fine Dining'],
    roomTypes: [
      { type: 'Palace Historical Room', capacity: '2 Adults', pricePerNight: 480, bedType: '1 King Bed' },
      { type: 'Maharaja Royal Suite', capacity: '2 Adults', pricePerNight: 1200, bedType: '1 Royal Four-Poster Bed' }
    ]
  },
  {
    id: 'hotel-jaipur-2',
    name: 'Alsisar Haveli Heritage Palace Hotel',
    destinationId: 'jaipur',
    starRating: 4,
    rating: 4.8,
    reviewCount: 1540,
    pricePerNight: 110,
    image: 'https://images.unsplash.com/photo-1603262110263-fb010d6e59d4?auto=format&fit=crop&w=800&q=80',
    coordinates: [26.9250, 75.8010],
    address: 'Sansar Chandra Road, Jaipur, Rajasthan',
    distanceFromAttractions: '10 min to Pink City Bazaars & Hawa Mahal',
    tags: ['balanced', 'historical', 'boutique'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['1892 Rajput Haveli Architecture', 'Courtyard Swimming Pool', 'Frescoed Ceilings', 'Rooftop Sunset Lounge'],
    roomTypes: [
      { type: 'Heritage Deluxe Room', capacity: '2 Adults', pricePerNight: 110, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-jaipur-3',
    name: 'Zostel Jaipur (Near Hawa Mahal)',
    destinationId: 'jaipur',
    starRating: 3,
    rating: 4.7,
    reviewCount: 3800,
    pricePerNight: 25,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [26.9240, 75.8290],
    address: 'First Floor, Opposite City Palace, Jaipur',
    distanceFromAttractions: '3 min walk to Hawa Mahal and Jantar Mantar',
    tags: ['budget', 'central', 'social'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Rooftop Café facing Nahargarh Fort', 'Daily Pink City Walking Tours', 'High-Speed Fiber WiFi', 'Common Gaming Lounge'],
    roomTypes: [
      { type: 'Private Ensuite Room', capacity: '2 Adults', pricePerNight: 25, bedType: '1 Double Bed' }
    ]
  },

  // 7. Udaipur Hotels
  {
    id: 'hotel-udaipur-1',
    name: 'Taj Lake Palace (Floating Palace on Lake Pichola)',
    destinationId: 'udaipur',
    starRating: 5,
    rating: 4.97,
    reviewCount: 2100,
    pricePerNight: 520,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    coordinates: [24.5750, 73.6800],
    address: 'P.O. Box No. 5, Lake Pichola, Udaipur, Rajasthan',
    distanceFromAttractions: 'Floating island palace accessible exclusively by private royal boat',
    tags: ['luxury', 'historical', 'couple', 'sea_view'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['White Marble Island Courtyards', 'Jiva Spa Boat on Lake Pichola', 'Butler Service', 'Lakeside Royal Mewari Dining'],
    roomTypes: [
      { type: 'Palace Room Lake View', capacity: '2 Adults', pricePerNight: 520, bedType: '1 King Bed' },
      { type: 'Grand Royal Lake Suite', capacity: '2 Adults', pricePerNight: 1350, bedType: '1 Four-Poster Maharaja Bed' }
    ]
  },
  {
    id: 'hotel-udaipur-2',
    name: 'Jagat Niwas Palace Heritage Hotel',
    destinationId: 'udaipur',
    starRating: 4,
    rating: 4.8,
    reviewCount: 1680,
    pricePerNight: 125,
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
    coordinates: [24.5770, 73.6820],
    address: '23-25 Lal Ghat, Lake Pichola, Udaipur',
    distanceFromAttractions: 'Direct frontage on Lake Pichola, 2 min walk to City Palace gate',
    tags: ['balanced', 'historical', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Intricate Jharokha Balconies overlooking Lake Pichola', 'Rooftop Candlelit Dining', 'Boat Excursion Concierge', 'Free High-Speed WiFi'],
    roomTypes: [
      { type: 'Pichola Lake Suite with Jharokha', capacity: '2 Adults', pricePerNight: 125, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-udaipur-3',
    name: 'Zostel Udaipur Lakefront Hub',
    destinationId: 'udaipur',
    starRating: 3,
    rating: 4.65,
    reviewCount: 2900,
    pricePerNight: 28,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [24.5810, 73.6840],
    address: 'Near Jagdish Temple & Gangaur Ghat, Udaipur',
    distanceFromAttractions: '2 min walk to Gangaur Ghat & Lake Pichola promenade',
    tags: ['budget', 'central', 'social'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Rooftop Lake View Café', 'Chai & Sunset Sessions', 'High-Speed WiFi', 'Travel Desk'],
    roomTypes: [
      { type: 'Private Ensuite Room with Lake View', capacity: '2 Adults', pricePerNight: 28, bedType: '1 Double Bed' }
    ]
  },

  // 8. Varanasi Hotels
  {
    id: 'hotel-varanasi-1',
    name: 'BrijRama Palace Heritage Grand Hotel',
    destinationId: 'varanasi',
    starRating: 5,
    rating: 4.94,
    reviewCount: 1320,
    pricePerNight: 320,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.3050, 83.0110],
    address: 'Darbhanga Ghat, Dashashwamedh, Varanasi',
    distanceFromAttractions: 'Historic 18th-century palace situated directly on Darbhanga Ghat',
    tags: ['luxury', 'historical', 'culture'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['Private Palace Boat Arrival', 'Ganga View Terraces', 'Classical Sitar Evenings', 'Fine Vegetarian Awadhi & Banarasi Dining'],
    roomTypes: [
      { type: 'Nadidhara River View Suite', capacity: '2 Adults', pricePerNight: 320, bedType: '1 King Bed' },
      { type: 'Maharaja Suite with Royal Balcony', capacity: '2 Adults', pricePerNight: 590, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-varanasi-2',
    name: 'Suryauday Haveli by Heritage on Shivala Ghat',
    destinationId: 'varanasi',
    starRating: 4,
    rating: 4.75,
    reviewCount: 920,
    pricePerNight: 120,
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.2950, 83.0030],
    address: 'B-4/25 Shivala Ghat, Varanasi, Uttar Pradesh',
    distanceFromAttractions: 'Direct stone staircase access to holy Shivala Ghat',
    tags: ['balanced', 'historical', 'culture'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Sunrise Yoga Terrace facing the Ganges', 'Classical Flute Recitals', 'Morning Boat Tour Concierge', 'Pure Vegetarian Kitchen'],
    roomTypes: [
      { type: 'River Facing Haveli Room', capacity: '2 Adults', pricePerNight: 120, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-varanasi-3',
    name: 'Zostel Varanasi (Near Dashashwamedh Ghat)',
    destinationId: 'varanasi',
    starRating: 3,
    rating: 4.6,
    reviewCount: 2600,
    pricePerNight: 22,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.3110, 83.0050],
    address: 'Raja Chet Singh Kila Road, Varanasi',
    distanceFromAttractions: '10 min walk to Dashashwamedh Ganga Aarti',
    tags: ['budget', 'central', 'social'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Spacious Rooftop Common Area', 'Morning Ghat Guided Walks', 'High-Speed Fiber WiFi', 'Chai Café'],
    roomTypes: [
      { type: 'Private AC Room', capacity: '2 Adults', pricePerNight: 22, bedType: '1 Double Bed' }
    ]
  },

  // 9. Meghalaya Hotels
  {
    id: 'hotel-meghalaya-1',
    name: 'Ri Kynjai - Serenity by the Lake (Umiam)',
    destinationId: 'meghalaya',
    starRating: 5,
    rating: 4.9,
    reviewCount: 820,
    pricePerNight: 210,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.6690, 91.9050],
    address: 'Umiam Lake, Ri Bhoi District, Meghalaya',
    distanceFromAttractions: 'Overlooking pristine Umiam Lake, 20 min to Shillong center',
    tags: ['luxury', 'nature', 'spa'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 5 days prior',
    amenities: ['Khasi Vernacular Thatch Architecture', 'Herbal Spa Pavilion', 'Lake View Verandas', 'Sao Pho Khasi Fine Dining'],
    roomTypes: [
      { type: 'Superior Lake View Cottage', capacity: '2 Adults', pricePerNight: 210, bedType: '1 King Bed' },
      { type: 'Traditional Khasi Thatched Villa', capacity: '2 Adults, 1 Child', pricePerNight: 320, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-meghalaya-2',
    name: 'Polo Orchid Resort Cherrapunji',
    destinationId: 'meghalaya',
    starRating: 4,
    rating: 4.7,
    reviewCount: 950,
    pricePerNight: 110,
    image: 'https://images.unsplash.com/photo-1625834888874-5c91185038ec?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.2750, 91.7320],
    address: 'Mawsmai Village, Sohra (Cherrapunji), Meghalaya',
    distanceFromAttractions: 'Overlooking Nohsngithiang (Seven Sisters) Falls canyon',
    tags: ['balanced', 'nature', 'mountains'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Infinity Canyon Pool', 'Skywalk Observation Deck', 'Bonfire & Barbecue', 'Trek Concierge for Living Root Bridges'],
    roomTypes: [
      { type: 'Canyon View Cottage', capacity: '2 Adults', pricePerNight: 110, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-meghalaya-3',
    name: 'Zostel Shillong Hilltop Hub',
    destinationId: 'meghalaya',
    starRating: 3,
    rating: 4.6,
    reviewCount: 1850,
    pricePerNight: 26,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.5780, 91.8820],
    address: 'Upper Lachumiere, Shillong, Meghalaya',
    distanceFromAttractions: '10 min walk to Police Bazar and Ward\'s Lake',
    tags: ['budget', 'social', 'central'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Music Room with Guitars & Ukuleles', 'Pine Valley Terrace', 'High-Speed Fiber WiFi', 'Dawki & Cherrapunji Shared Cabs'],
    roomTypes: [
      { type: 'Private Ensuite Room', capacity: '2 Adults', pricePerNight: 26, bedType: '1 Double Bed' }
    ]
  },

  // 10. Andaman & Nicobar Hotels
  {
    id: 'hotel-andaman-1',
    name: 'Taj Exotica Resort & Spa (Radhanagar Beach)',
    destinationId: 'andaman',
    starRating: 5,
    rating: 4.96,
    reviewCount: 1120,
    pricePerNight: 420,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    coordinates: [11.9840, 92.9550],
    address: 'Radhanagar Beach No. 7, Havelock Island (Swaraj Dweep)',
    distanceFromAttractions: 'Private secluded access to Radhanagar Beach (Asia\'s Best Beach)',
    tags: ['luxury', 'beachfront', 'spa', 'nature'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['46-Acre Coconut Palm Grove', 'Olympic Sized Pool', 'Jiva Ayurvedic Spa', 'PADI Certified Dive Concierge', 'Fresh Seafood Grills'],
    roomTypes: [
      { type: 'Andaman Luxury Villa (Machan Style)', capacity: '2 Adults', pricePerNight: 420, bedType: '1 King Bed' },
      { type: 'Grand Presidential Pool Villa', capacity: '4 Persons', pricePerNight: 980, bedType: '2 King Suites' }
    ]
  },
  {
    id: 'hotel-andaman-2',
    name: 'Barefoot at Havelock Eco Beach Resort',
    destinationId: 'andaman',
    starRating: 4,
    rating: 4.8,
    reviewCount: 1350,
    pricePerNight: 165,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    coordinates: [11.9820, 92.9580],
    address: 'Beach No. 7, Radhanagar, Havelock Island',
    distanceFromAttractions: 'Tucked beneath mahua trees just steps from the turquoise shoreline',
    tags: ['balanced', 'beachfront', 'nature'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 5 days prior',
    amenities: ['Eco-friendly Hardwood Cottages', 'Open-air Ayurvedic Lounge', 'Night Kayaking & Bioluminescence', 'Beach Barbecue'],
    roomTypes: [
      { type: 'Nicobari Thatched Cottage', capacity: '2 Adults', pricePerNight: 165, bedType: '1 Four-Poster King Bed' }
    ]
  },
  {
    id: 'hotel-andaman-3',
    name: 'Emerald Gecko Eco Resort & Backpackers',
    destinationId: 'andaman',
    starRating: 3,
    rating: 4.5,
    reviewCount: 980,
    pricePerNight: 38,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [12.0010, 93.0030],
    address: 'Beach No. 5 (Vijay Nagar), Havelock Island',
    distanceFromAttractions: '2 min walk to tranquil Vijay Nagar Beach coral reef',
    tags: ['budget', 'beachfront', 'social'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Bamboo Eco Lodges', 'Beachfront Café', 'Snorkel & Fin Rentals', 'Hammock Garden'],
    roomTypes: [
      { type: 'Bamboo Stilt Room', capacity: '2 Adults', pricePerNight: 38, bedType: '1 Queen Bed' }
    ]
  },

  // ==========================================
  // 🌎 INTERNATIONAL HOTELS
  // ==========================================

  // 1. Bali Hotels
  {
    id: 'hotel-bali-1',
    name: 'Four Seasons Resort Bali at Sayan',
    destinationId: 'bali',
    starRating: 5,
    rating: 4.96,
    reviewCount: 1680,
    pricePerNight: 490,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    coordinates: [-8.5080, 115.2440],
    address: 'Sayan, Ubud, Gianyar, Bali, Indonesia',
    distanceFromAttractions: 'Suspension bridge entrance over Ayung River gorge, 10 min to Ubud center',
    tags: ['luxury', 'nature', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['Rooftop Lotus Pond Arrival', 'Two-Tiered Ayung River Pool', 'Sacred River Spa & Chakra Ceremonies', 'Organic Riverside Dining'],
    roomTypes: [
      { type: 'One-Bedroom Riverfront Pool Villa', capacity: '2 Adults', pricePerNight: 490, bedType: '1 King Bed' },
      { type: 'Royal Sayan Two-Bedroom Suite', capacity: '4 Persons', pricePerNight: 980, bedType: '2 King Bedrooms' }
    ]
  },
  {
    id: 'hotel-bali-2',
    name: 'Alila Seminyak Beachfront Resort',
    destinationId: 'bali',
    starRating: 4,
    rating: 4.8,
    reviewCount: 2100,
    pricePerNight: 195,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    coordinates: [-8.6830, 115.1510],
    address: 'Jl. Taman Ganesha No. 9, Petitenget, Seminyak, Bali',
    distanceFromAttractions: 'Direct beach access, walking distance to Potato Head Beach Club',
    tags: ['balanced', 'beachfront', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['3 Infinity Oceanfront Pools', 'Spa Alila', 'Beachside Sunset Bar & Grill', 'Complimentary Bicycles'],
    roomTypes: [
      { type: 'Deluxe Ocean View Room', capacity: '2 Adults', pricePerNight: 195, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-bali-3',
    name: 'Kosta Hostel Seminyak & Surf Lodge',
    destinationId: 'bali',
    starRating: 3,
    rating: 4.65,
    reviewCount: 1750,
    pricePerNight: 35,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [-8.6940, 115.1680],
    address: 'Jl. Dewi Saraswati III, Seminyak, Bali',
    distanceFromAttractions: '5 min scooter ride to Seminyak & Double Six Beach',
    tags: ['budget', 'social', 'beachfront'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Lagoon Garden Pool', 'Good Mantra Café', 'Surfboard & Scooter Rentals', 'High-Speed WiFi'],
    roomTypes: [
      { type: 'Private Ensuite Tropical Bungalow', capacity: '2 Adults', pricePerNight: 35, bedType: '1 Double Bed' }
    ]
  },

  // 2. Maldives Hotels
  {
    id: 'hotel-maldives-1',
    name: 'Soneva Jani Overwater Sanctuary',
    destinationId: 'maldives',
    starRating: 5,
    rating: 4.99,
    reviewCount: 920,
    pricePerNight: 850,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    coordinates: [5.6980, 73.2840],
    address: 'Medhufaru Island, Noonu Atoll, Maldives',
    distanceFromAttractions: 'Private island atoll surrounded by 5.6km uninterrupted turquoise lagoon',
    tags: ['luxury', 'beachfront', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 14 days prior',
    amenities: ['Retractable Roof for Stargazing', 'Water Slide Directly into Ocean', 'Private Freshwater Pool', 'Mr./Ms. Friday Personal Butler', 'Overwater Cinema'],
    roomTypes: [
      { type: 'Water Retreat with Slide', capacity: '2 Adults, 2 Children', pricePerNight: 850, bedType: '1 Master King + Kids Daybed' },
      { type: 'Two-Bedroom Overwater Reserve', capacity: '4 Adults', pricePerNight: 1750, bedType: '2 King Suites + Slide' }
    ]
  },
  {
    id: 'hotel-maldives-2',
    name: 'Cinnamon Dhonveli Maldives Beach & Surf Resort',
    destinationId: 'maldives',
    starRating: 4,
    rating: 4.75,
    reviewCount: 1650,
    pricePerNight: 280,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    coordinates: [4.3180, 73.5920],
    address: 'North Malé Atoll, Maldives',
    distanceFromAttractions: '25 min scenic speedboat ride from Malé Velana International Airport',
    tags: ['balanced', 'beachfront', 'adventure'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 5 days prior',
    amenities: ['Overwater Bungalows', 'Chavana Mandara Spa', 'Exclusive Pasta Point Surf Access', 'Three Oceanfront Restaurants'],
    roomTypes: [
      { type: 'Water Bungalow with Sun Deck', capacity: '2 Adults', pricePerNight: 280, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-maldives-3',
    name: 'Arena Beach Hotel Maafushi (Local Island Experience)',
    destinationId: 'maldives',
    starRating: 3,
    rating: 4.5,
    reviewCount: 2400,
    pricePerNight: 85,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [3.9410, 73.4890],
    address: 'Bikini Beach, Maafushi Island, South Malé Atoll',
    distanceFromAttractions: 'Direct frontage on Bikini Beach Maafushi',
    tags: ['budget', 'beachfront', 'adventure'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Rooftop Infinity Splash Pool', 'Daily Manta & Dolphin Excursion Desk', 'Beach Buffet Dining', 'Watersports Center'],
    roomTypes: [
      { type: 'Super Deluxe Sea View Room with Balcony', capacity: '2 Adults', pricePerNight: 85, bedType: '1 Queen Bed' }
    ]
  },

  // 3. Singapore Hotels
  {
    id: 'hotel-singapore-1',
    name: 'Marina Bay Sands Hotel',
    destinationId: 'singapore',
    starRating: 5,
    rating: 4.9,
    reviewCount: 5200,
    pricePerNight: 510,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    coordinates: [1.2834, 103.8607],
    address: '10 Bayfront Avenue, Marina Bay, Singapore 018956',
    distanceFromAttractions: 'Integrated with Sands SkyPark, direct indoor walkway to Gardens by the Bay',
    tags: ['luxury', 'central', 'shopping', 'spa'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['World\'s Largest Rooftop Infinity Pool (57th Floor)', 'Banyan Tree Spa', 'Direct Access to The Shoppes & Casino', 'Celebrity Chef Restaurants (Spago, Waku Ghin)'],
    roomTypes: [
      { type: 'Sands Premier Room Harbor View', capacity: '2 Adults', pricePerNight: 510, bedType: '1 King Bed' },
      { type: 'Marina Bay Sky Suite', capacity: '2 Adults, 1 Child', pricePerNight: 950, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-singapore-2',
    name: 'PARKROYAL COLLECTION Pickering Hotel in a Garden',
    destinationId: 'singapore',
    starRating: 4,
    rating: 4.8,
    reviewCount: 2800,
    pricePerNight: 230,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [1.2858, 103.8468],
    address: '3 Upper Pickering St, Singapore 058289',
    distanceFromAttractions: '2 min walk to Chinatown MRT and Clarke Quay nightlife',
    tags: ['balanced', 'central', 'nature'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Tiered Sky Gardens with 15,000 sqm Foliage', 'Dedicated Wellness Floor with Infinity Pool', 'Lime Restaurant Buffets', 'St. Gregory Spa'],
    roomTypes: [
      { type: 'Urban Deluxe Room', capacity: '2 Adults', pricePerNight: 230, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-singapore-3',
    name: 'The Pod Boutique Capsule Hotel Beach Road',
    destinationId: 'singapore',
    starRating: 3,
    rating: 4.6,
    reviewCount: 3100,
    pricePerNight: 65,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [1.3015, 103.8602],
    address: '289 Beach Road, Level 3, Singapore 199552',
    distanceFromAttractions: '5 min walk to Haji Lane, Arab Street, and Bugis MRT',
    tags: ['budget', 'central', 'boutique'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['High-Thread Egyptian Cotton Bedding', 'Keycard Access Privacy Pods', 'Self-Service Nespresso Bar', 'High-Speed Fiber WiFi'],
    roomTypes: [
      { type: 'Queen Pod Suite (Private Enclosure)', capacity: '2 Adults', pricePerNight: 65, bedType: '1 Queen Bed' }
    ]
  },

  // 4. Thailand Hotels
  {
    id: 'hotel-thailand-1',
    name: 'The Peninsula Bangkok Riverside Palace',
    destinationId: 'thailand',
    starRating: 5,
    rating: 4.94,
    reviewCount: 2200,
    pricePerNight: 290,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    coordinates: [13.7230, 100.5100],
    address: '333 Charoen Nakhon Rd, Khlong San, Bangkok 10600',
    distanceFromAttractions: 'Overlooking Chao Phraya River with private teak shuttle boats to BTS Skytrain & Iconsiam',
    tags: ['luxury', 'spa', 'couple', 'food'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Three-Tiered Cascading Riverfront Pool', 'The Peninsula Spa', 'Private River Ferry Fleet', 'Thiptara Royal Thai Dining Pavilions'],
    roomTypes: [
      { type: 'Deluxe River View King Room', capacity: '2 Adults', pricePerNight: 290, bedType: '1 King Bed' },
      { type: 'Grand Terrace River Suite', capacity: '2 Adults', pricePerNight: 620, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-thailand-2',
    name: 'COMO Metropolitan Bangkok',
    destinationId: 'thailand',
    starRating: 4,
    rating: 4.8,
    reviewCount: 1450,
    pricePerNight: 125,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [13.7215, 100.5390],
    address: '27 S Sathorn Rd, Thung Maha Mek, Sathon, Bangkok',
    distanceFromAttractions: '10 min walk to Lumphini Park & Silom MRT',
    tags: ['balanced', 'central', 'food'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Home to Michelin-Starred Nahm Thai Restaurant', 'COMO Shambhala Urban Escape Spa', '25m Outdoor Lap Pool', 'Yoga Studio'],
    roomTypes: [
      { type: 'City Room with Deep Soaking Tub', capacity: '2 Adults', pricePerNight: 125, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-thailand-3',
    name: 'Lub d Bangkok Siam Lifestyle Hostel',
    destinationId: 'thailand',
    starRating: 3,
    rating: 4.65,
    reviewCount: 4200,
    pricePerNight: 32,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [13.7460, 100.5280],
    address: '925/9 Rama 1 Rd, Wang Mai, Pathum Wan, Bangkok',
    distanceFromAttractions: 'Directly at National Stadium BTS, 3 min walk to MBK Center & Siam Paragon',
    tags: ['budget', 'central', 'social'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Yellow Donut Cafe & Bar', 'Movie Lounge & Pool Table', 'High-Speed WiFi', '24h Luggage Storage'],
    roomTypes: [
      { type: 'Private Ensuite Double Room', capacity: '2 Adults', pricePerNight: 32, bedType: '1 Double Bed' }
    ]
  },

  // 5. Japan Hotels (Kyoto & Tokyo)
  {
    id: 'hotel-japan-1',
    name: 'The Thousand Kyoto Luxury Sanctuary',
    destinationId: 'japan',
    starRating: 5,
    rating: 4.95,
    reviewCount: 1850,
    pricePerNight: 340,
    image: destKyotoImg,
    coordinates: [34.9858, 135.7588],
    address: '570 Higashishiokojicho, Shimogyo Ward, Kyoto',
    distanceFromAttractions: '2 min walk to Kyoto Station Shinkansen Gates, 15 min to Gion',
    tags: ['luxury', 'boutique', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
    amenities: ['Full Spa & Onsen Mineral Bath', 'Michelin-Guide Dining', 'Complimentary High-speed WiFi', 'Concierge Tour Desk', 'Tea Ceremony Lounge'],
    roomTypes: [
      { type: 'Superior King Room', capacity: '2 Adults', pricePerNight: 340, bedType: '1 King Bed' },
      { type: 'Zen Garden Suite', capacity: '3 Adults', pricePerNight: 650, bedType: '1 Super King + Daybed' }
    ]
  },
  {
    id: 'hotel-japan-2',
    name: 'Hotel Gracery Shinjuku (Godzilla Tower)',
    destinationId: 'japan',
    starRating: 4,
    rating: 4.75,
    reviewCount: 3200,
    pricePerNight: 165,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    coordinates: [35.6950, 139.7020],
    address: '1-19-1 Kabukicho, Shinjuku City, Tokyo 160-8466',
    distanceFromAttractions: '5 min walk to JR Shinjuku Station East Exit, heart of Tokyo dining',
    tags: ['balanced', 'central', 'shopping'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 72 hours prior',
    amenities: ['Iconic Life-Size Godzilla Head Terrace', 'Bonsai Lounge', 'Japanese Deep Soaking Tubs', 'Free High-Speed WiFi'],
    roomTypes: [
      { type: 'Standard Double City View', capacity: '2 Adults', pricePerNight: 165, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-japan-3',
    name: 'Piece Hostel Sanjo & Ryokan Annex',
    destinationId: 'japan',
    starRating: 3,
    rating: 4.7,
    reviewCount: 2600,
    pricePerNight: 65,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [35.0088, 135.7652],
    address: 'Asakuracho, Nakagyo Ward, Kyoto',
    distanceFromAttractions: '5 min walk to Nishiki Food Market and Kawaramachi',
    tags: ['budget', 'social', 'central'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Cozy Terrace Lounge', 'Shared Gourmet Kitchen', 'Free Specialty Tea Bar', 'Laundry Facilities', 'High-Speed Fiber WiFi'],
    roomTypes: [
      { type: 'Private Double En-suite', capacity: '2 Adults', pricePerNight: 65, bedType: '1 Double Bed' }
    ]
  },

  // 6. South Korea Hotels
  {
    id: 'hotel-korea-1',
    name: 'Signiel Seoul (Lotte World Tower Floors 76-101)',
    destinationId: 'south_korea',
    starRating: 5,
    rating: 4.95,
    reviewCount: 1950,
    pricePerNight: 430,
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80',
    coordinates: [37.5126, 127.1025],
    address: '300 Olympic-ro, Songpa District, Seoul',
    distanceFromAttractions: 'Inside South Korea\'s tallest skyscraper, panoramic sky views over Han River',
    tags: ['luxury', 'shopping', 'couple', 'spa'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Sky High-Rise Swimming Pool on 85th Floor', 'Evian Spa', 'Salon de SIGNIEL Guest Lounge with Free Champagne', 'Michelin 3-Star Dining (STAY by Yannick Alléno)'],
    roomTypes: [
      { type: 'Grand Deluxe River View Room', capacity: '2 Adults', pricePerNight: 430, bedType: '1 King Bed' },
      { type: 'Premier Panoramic Sky Suite', capacity: '2 Adults', pricePerNight: 780, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-korea-2',
    name: 'Ryse, Autograph Collection Hongdae',
    destinationId: 'south_korea',
    starRating: 4,
    rating: 4.8,
    reviewCount: 2200,
    pricePerNight: 170,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [37.5540, 126.9210],
    address: '130 Yanghwa-ro, Mapo-gu, Seoul',
    distanceFromAttractions: 'Heart of Hongdae arts, fashion, street busking, and nightlife',
    tags: ['balanced', 'central', 'shopping', 'nightlife'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Contemporary Art Gallery', 'Rooftop Side Note Club Cocktail Bar', 'Blue Bottle Coffee in Lobby', 'Custom Vinyl Record Players in Rooms'],
    roomTypes: [
      { type: 'Creator Room King', capacity: '2 Adults', pricePerNight: 170, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-korea-3',
    name: 'Step Inn Myeongdong 1 (Shopping Hub)',
    destinationId: 'south_korea',
    starRating: 3,
    rating: 4.6,
    reviewCount: 3400,
    pricePerNight: 55,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [37.5630, 126.9850],
    address: '15th Floor, 55 Myeongdong-gil, Jung-gu, Seoul',
    distanceFromAttractions: 'Facing Myeongdong Cathedral, right inside Myeongdong street food market',
    tags: ['budget', 'central', 'shopping'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Skyline Breakfast Lounge facing N Seoul Tower', 'High-Speed WiFi', 'Luggage Lockers', 'Self-Service Laundry'],
    roomTypes: [
      { type: 'Standard Double Ensuite', capacity: '2 Adults', pricePerNight: 55, bedType: '1 Double Bed' }
    ]
  },

  // 7. Dubai Hotels
  {
    id: 'hotel-dubai-1',
    name: 'Atlantis The Royal Palm Jumeirah',
    destinationId: 'dubai',
    starRating: 5,
    rating: 4.97,
    reviewCount: 3100,
    pricePerNight: 590,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.1380, 55.1260],
    address: 'Crescent Rd, Palm Jumeirah, Dubai, UAE',
    distanceFromAttractions: 'Iconic Palm Jumeirah tip, unlimited access to Aquaventure World',
    tags: ['luxury', 'beachfront', 'spa', 'family'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['Cloud 22 Rooftop Sky Pool (90m above ground)', '17 Celebrity Chef Restaurants (Dinner by Heston, Nobu)', 'Private 2km White Sand Beach', 'Awaken Wellness Clinic'],
    roomTypes: [
      { type: 'Seascape King Room with Palm Balcony', capacity: '2 Adults', pricePerNight: 590, bedType: '1 King Bed' },
      { type: 'Sky Pool Villa with Private Infinity Pool', capacity: '2 Adults, 2 Children', pricePerNight: 1450, bedType: '1 King + Private Pool Terrace' }
    ]
  },
  {
    id: 'hotel-dubai-2',
    name: '25hours Hotel One Central Dubai',
    destinationId: 'dubai',
    starRating: 4,
    rating: 4.8,
    reviewCount: 2300,
    pricePerNight: 180,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.2280, 55.2850],
    address: 'Trade Center St, One Central, Dubai, UAE',
    distanceFromAttractions: 'Direct views of Museum of the Future, 5 min metro to Dubai Mall & Burj Khalifa',
    tags: ['balanced', 'central', 'boutique'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Rooftop Pool with Museum of the Future Views', 'First Mixed-Gender Outdoor Sauna in Dubai', 'Monkey Bar & Tandoor Tina', 'Schindelhauer Bicycle Loans'],
    roomTypes: [
      { type: 'Bedouin Medium Room', capacity: '2 Adults', pricePerNight: 180, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-dubai-3',
    name: 'Rove Downtown Dubai (Burj Khalifa Views)',
    destinationId: 'dubai',
    starRating: 3,
    rating: 4.7,
    reviewCount: 4800,
    pricePerNight: 85,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [25.2010, 55.2810],
    address: 'Financial Centre Road, Downtown Dubai',
    distanceFromAttractions: '5 min walk to The Dubai Mall & Burj Khalifa entrance',
    tags: ['budget', 'central', 'family'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Outdoor Saltwater Swimming Pool facing Burj Khalifa', 'The Daily Restaurant', '24h Laundromat & Supermarket', 'Free High-Speed WiFi'],
    roomTypes: [
      { type: 'Rover Room with Burj Khalifa View', capacity: '2 Adults', pricePerNight: 85, bedType: '1 Double Bed' }
    ]
  },

  // 8. Switzerland Hotels
  {
    id: 'hotel-switzerland-1',
    name: 'The Omnia Mountain Lodge Zermatt',
    destinationId: 'switzerland',
    starRating: 5,
    rating: 4.98,
    reviewCount: 950,
    pricePerNight: 550,
    image: destSwissImg,
    coordinates: [45.9765, 7.7491],
    address: 'Auf dem Fels, 3920 Zermatt, Switzerland',
    distanceFromAttractions: 'Perched on high cliff ledge overlooking Zermatt and the Matterhorn',
    tags: ['luxury', 'mountains', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['Private Elevator Tunnel through the Rock', 'Indoor/Outdoor Heated Pool with Matterhorn Views', 'Finnish Sauna & Turkish Bath', 'Michelin-Starred Alpine Cuisine'],
    roomTypes: [
      { type: 'Matterhorn Queen Room', capacity: '2 Adults', pricePerNight: 550, bedType: '1 Queen Bed' },
      { type: 'The Omnia Roof Suite with Fireplace', capacity: '2 Adults', pricePerNight: 1100, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-switzerland-2',
    name: 'Hotel Schweizerhof Zermatt & Alpine Club',
    destinationId: 'switzerland',
    starRating: 4,
    rating: 4.75,
    reviewCount: 1400,
    pricePerNight: 230,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    coordinates: [45.9800, 7.7480],
    address: 'Bahnhofstrasse 5, 3920 Zermatt',
    distanceFromAttractions: '2 min walk to Gornergrat cogwheel train station and Glacier Express',
    tags: ['balanced', 'mountains', 'central'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 5 days prior',
    amenities: ['Indoor Swimming Pool & Jacuzzi', 'Cheese Fondue & Raclette Stube', 'Ski Equipment Storage with Boot Warmers', 'Cocktail Lounge with Live DJ'],
    roomTypes: [
      { type: 'Alpine Double Room with Balcony', capacity: '2 Adults', pricePerNight: 230, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-switzerland-3',
    name: 'Zermatt Youth Hostel & Alpine Lodge',
    destinationId: 'switzerland',
    starRating: 3,
    rating: 4.5,
    reviewCount: 2100,
    pricePerNight: 75,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [45.9720, 7.7460],
    address: 'Am Vreneliweg 11, 3920 Zermatt',
    distanceFromAttractions: '10 min walk to Sunnegga funicular, spectacular Matterhorn views',
    tags: ['budget', 'mountains', 'social'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Unobstructed Matterhorn Terrace', 'Buffet Breakfast Included', 'Ski & Snowboard Storage', 'Free High-Speed WiFi'],
    roomTypes: [
      { type: 'Private Ensuite Room with Matterhorn View', capacity: '2 Adults', pricePerNight: 75, bedType: '1 Double Bed' }
    ]
  },

  // 9. Paris Hotels
  {
    id: 'hotel-paris-1',
    name: 'Le Meurice Palace (Dorchester Collection)',
    destinationId: 'paris',
    starRating: 5,
    rating: 4.96,
    reviewCount: 1650,
    pricePerNight: 620,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    coordinates: [48.8650, 2.3280],
    address: '228 Rue de Rivoli, 75001 Paris, France',
    distanceFromAttractions: 'Directly facing Tuileries Garden, 5 min walk to the Louvre',
    tags: ['luxury', 'historical', 'museums', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['Alain Ducasse 2-Michelin Star Dining', 'Spa Valmont', 'Cédric Grolet Pastry Boutique', 'Palatial 18th-century Salon de la Paix'],
    roomTypes: [
      { type: 'Superior King Room Tuileries View', capacity: '2 Adults', pricePerNight: 620, bedType: '1 King Bed' },
      { type: 'Belle Étoile Royal Penthouse with 360° Paris Terrace', capacity: '2 Adults', pricePerNight: 1650, bedType: '1 Super King Bed' }
    ]
  },
  {
    id: 'hotel-paris-2',
    name: 'Hotel des Grands Boulevards',
    destinationId: 'paris',
    starRating: 4,
    rating: 4.8,
    reviewCount: 1850,
    pricePerNight: 220,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [48.8710, 2.3450],
    address: '17 Boulevard Poissonnière, 75002 Paris',
    distanceFromAttractions: '10 min walk to Palais Garnier Opera and Galeries Lafayette',
    tags: ['balanced', 'central', 'boutique', 'shopping'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Secret Glass-Roofed Courtyard Restaurant', 'The Shell Cocktail Bar', 'Canopy Beds designed by Dorothée Meilichzon', 'High-Speed WiFi'],
    roomTypes: [
      { type: 'Parisian Classic Queen Room', capacity: '2 Adults', pricePerNight: 220, bedType: '1 Queen Bed' }
    ]
  },
  {
    id: 'hotel-paris-3',
    name: 'Generator Paris Canal Saint-Martin',
    destinationId: 'paris',
    starRating: 3,
    rating: 4.55,
    reviewCount: 4900,
    pricePerNight: 65,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [48.8780, 2.3700],
    address: '9-11 Place du Colonel Fabien, 75010 Paris',
    distanceFromAttractions: '5 min walk to trendy Canal Saint-Martin cafés and Colonel Fabien Metro',
    tags: ['budget', 'social', 'central'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Rooftop Khayma Bar with Sacré-Cœur Views', 'Café Fabien with Parisian Croissants', 'Underground Metro Bar Club', 'High-Speed WiFi'],
    roomTypes: [
      { type: 'Private Ensuite Room with Balcony', capacity: '2 Adults', pricePerNight: 65, bedType: '1 Double Bed' }
    ]
  },

  // 10. Australia Hotels
  {
    id: 'hotel-australia-1',
    name: 'Park Hyatt Sydney (Direct Opera House Views)',
    destinationId: 'australia',
    starRating: 5,
    rating: 4.98,
    reviewCount: 1850,
    pricePerNight: 580,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    coordinates: [-33.8560, 151.2090],
    address: '7 Hickson Rd, The Rocks, Sydney NSW 2000, Australia',
    distanceFromAttractions: 'Direct waterfront at The Rocks facing the Sydney Opera House sails',
    tags: ['luxury', 'harbor', 'spa', 'couple'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 7 days prior',
    amenities: ['Heated Rooftop Pool with Unobstructed Opera House Panorama', 'The Spa at Park Hyatt', 'The Dining Room Contemporary Aussie Cuisine', '24h Personal Butler'],
    roomTypes: [
      { type: 'Opera View King Room with Private Balcony', capacity: '2 Adults', pricePerNight: 580, bedType: '1 King Bed' },
      { type: 'Sydney Harbour Penthouse Suite', capacity: '2 Adults', pricePerNight: 1550, bedType: '1 Super King Bed' }
    ]
  },
  {
    id: 'hotel-australia-2',
    name: 'Ovolo 1888 Darling Harbour Heritage Hotel',
    destinationId: 'australia',
    starRating: 4,
    rating: 4.8,
    reviewCount: 1750,
    pricePerNight: 195,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    coordinates: [-33.8730, 151.1960],
    address: '139 Murray St, Pyrmont NSW 2009',
    distanceFromAttractions: '5 min walk to Darling Harbour waterfront dining and light rail',
    tags: ['balanced', 'central', 'boutique'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Restored 1888 Woolstore Brick Architecture', 'Mister Percy Wine Bar', 'Free In-Room Loot Bag Snacks & Drinks', '24h Fitness Center'],
    roomTypes: [
      { type: 'King Room with Exposed Brick Walls', capacity: '2 Adults', pricePerNight: 195, bedType: '1 King Bed' }
    ]
  },
  {
    id: 'hotel-australia-3',
    name: 'Wake Up! Sydney Central Backpacker Haven',
    destinationId: 'australia',
    starRating: 3,
    rating: 4.65,
    reviewCount: 4600,
    pricePerNight: 55,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    coordinates: [-33.8820, 151.2060],
    address: '509 Pitt St, Haymarket NSW 2000, Sydney',
    distanceFromAttractions: 'Across from Sydney Central Railway Station, 10 min to Chinatown',
    tags: ['budget', 'central', 'social'],
    breakfastIncluded: false,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 24 hours prior',
    amenities: ['Side Bar Nightly Entertainment', 'Daily Free Bondi & City Walking Tours', 'Roy\'s Artisan Café', 'High-Speed Fiber WiFi'],
    roomTypes: [
      { type: 'Private Ensuite Double Room', capacity: '2 Adults', pricePerNight: 55, bedType: '1 Double Bed' }
    ]
  },

  // Bonus Amalfi Coast Hotels
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
      { type: 'Maestro Suite with Sea Balcony', capacity: '2 Adults', pricePerNight: 680, bedType: '1 King Bed' }
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
      { type: 'Classic Sea View Room', capacity: '2 Adults', pricePerNight: 290, bedType: '1 King Bed' }
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
    tags: ['budget', 'nature', 'views'],
    breakfastIncluded: true,
    freeCancellation: true,
    cancellationPolicy: 'Free cancellation up to 48 hours prior',
    amenities: ['Lemon Orchard Solarium', 'Sea-Facing Breakfast Terrace', 'Free WiFi', 'Local Hiking Route Information'],
    roomTypes: [
      { type: 'Standard Terrace Double', capacity: '2 Adults', pricePerNight: 130, bedType: '1 Double Bed' }
    ]
  }
];
