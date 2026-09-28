import { Restaurant } from '../types/travel';
import destKyotoImg from '../assets/images/dest_kyoto_pagoda_1790596894061.jpg';
import destAmalfiImg from '../assets/images/dest_amalfi_coast_1790596912714.jpg';
import destSwissImg from '../assets/images/dest_swiss_alps_1790596927073.jpg';

export const RESTAURANTS: Restaurant[] = [
  // 🇮🇳 INDIA RESTAURANTS

  // 1. Goa
  {
    id: 'rest-goa-1',
    destinationId: 'goa',
    name: 'Fisherman\'s Wharf (River Sal)',
    cuisine: 'Authentic Goan Seafood & Portuguese',
    priceLevel: '$$',
    rating: 4.8,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free', 'Halal'],
    distanceFromCenterKm: 18.0,
    coordinates: [15.1590, 73.9480],
    specialtyDish: 'Goan Prawn Balchão & Kingfish Peri-Peri with Poi Bread',
    address: 'Near Cutbona Jetty, Mobor, Cavelossim, Goa',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-goa-2',
    destinationId: 'goa',
    name: 'Gunpowder Assagao',
    cuisine: 'Coastal South Indian & Goan Flavors',
    priceLevel: '$$',
    rating: 4.7,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    distanceFromCenterKm: 8.0,
    coordinates: [15.5890, 73.7840],
    specialtyDish: 'Kerala Beef Fry, Malabar Parotta & Pandi Curry',
    address: 'Anjuna Mapusa Road, Saunto Vaddo, Assagao, Goa',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 2. Kashmir
  {
    id: 'rest-kashmir-1',
    destinationId: 'kashmir',
    name: 'Mughal Darbar Srinagar',
    cuisine: 'Traditional Kashmiri Wazwan Feast',
    priceLevel: '$$',
    rating: 4.8,
    mealType: 'lunch',
    dietaryOptions: ['Halal', 'Gluten-Free'],
    distanceFromCenterKm: 1.0,
    coordinates: [34.0720, 74.8120],
    specialtyDish: 'Royal Wazwan Trami (Rista, Rogan Josh, Gushtaba & Tabak Maaz)',
    address: 'Residency Road, Munshi Bagh, Srinagar, Kashmir',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-kashmir-2',
    destinationId: 'kashmir',
    name: 'Ahdoos Heritage Restaurant (Est. 1918)',
    cuisine: 'Classic Kashmiri & Bakery',
    priceLevel: '$$',
    rating: 4.75,
    mealType: 'dinner',
    dietaryOptions: ['Halal', 'Vegetarian'],
    distanceFromCenterKm: 1.2,
    coordinates: [34.0710, 74.8150],
    specialtyDish: 'Kashmiri Kahwa with Almonds & Saffron Mutton Yakhni',
    address: 'Regal Chowk, Residency Road, Srinagar',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 3. Manali
  {
    id: 'rest-manali-1',
    destinationId: 'manali',
    name: 'Café 1947 Riverside Old Manali',
    cuisine: 'Riverside Italian & Fresh Himalayan Trout',
    priceLevel: '$$',
    rating: 4.7,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 2.5,
    coordinates: [32.2580, 77.1770],
    specialtyDish: 'Pan-Seared Herb Himalayan Trout & Wood-Fired Pizza',
    address: 'Near Nehru Bridge, Old Manali, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-manali-2',
    destinationId: 'manali',
    name: 'The Johnson\'s Café & Bar',
    cuisine: 'Continental, Himachali & Artisan Wood-Fired',
    priceLevel: '$$',
    rating: 4.65,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Vegan'],
    distanceFromCenterKm: 1.0,
    coordinates: [32.2470, 77.1860],
    specialtyDish: 'Baked Trout with Almond Butter & Warm Apple Crumble',
    address: 'Circuit House Road, Siyal, Manali',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 4. Ladakh
  {
    id: 'rest-ladakh-1',
    destinationId: 'ladakh',
    name: 'The Tibetan Kitchen Leh',
    cuisine: 'Authentic Tibetan & Ladakhi Specialties',
    priceLevel: '$',
    rating: 4.8,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Vegan', 'Halal'],
    distanceFromCenterKm: 0.5,
    coordinates: [34.1640, 77.5850],
    specialtyDish: 'Hand-Rolled Momos, Steaming Thukpa & Fluffy Tingmo',
    address: 'Fort Road, Near Hotel Yak Tail, Leh, Ladakh',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-ladakh-2',
    destinationId: 'ladakh',
    name: 'Bon Appetit Stone Terrace',
    cuisine: 'Himalayan Fusion & Organic European',
    priceLevel: '$$',
    rating: 4.75,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 1.0,
    coordinates: [34.1620, 77.5810],
    specialtyDish: 'Ladakhi Lamb Skewers & Apricot Glazed Tart',
    address: 'Changspa Road, Leh, Ladakh',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 5. Kerala
  {
    id: 'rest-kerala-1',
    destinationId: 'kerala',
    name: 'Grand Pavilion & Seafood Harbor Kochi',
    cuisine: 'Traditional Malabar & Travancore Coastal',
    priceLevel: '$$',
    rating: 4.85,
    mealType: 'lunch',
    dietaryOptions: ['Halal', 'Gluten-Free', 'Vegetarian'],
    distanceFromCenterKm: 2.0,
    coordinates: [9.9680, 76.2840],
    specialtyDish: 'Karimeen Pollichathu (Pearl Spot in Banana Leaf) & Soft Appams',
    address: 'MG Road, Ernakulam, Kochi, Kerala',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-kerala-2',
    destinationId: 'kerala',
    name: 'Cassava Heritage Dining',
    cuisine: 'Authentic 14-District Kerala Delicacies',
    priceLevel: '$$$',
    rating: 4.8,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Halal', 'Gluten-Free'],
    distanceFromCenterKm: 6.0,
    coordinates: [9.9920, 76.2990],
    specialtyDish: 'Alleppey Fish Curry with Kodampuli & Kozhikode Biryani',
    address: 'Kochi Marriott, Edappally, Kochi',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 6. Jaipur
  {
    id: 'rest-jaipur-1',
    destinationId: 'jaipur',
    name: '1135 AD Royal Rajput Fine Dining',
    cuisine: 'Imperial Royal Rajasthani Palace Cuisine',
    priceLevel: '$$$$',
    rating: 4.9,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Halal'],
    distanceFromCenterKm: 11.0,
    coordinates: [26.9850, 75.8510],
    specialtyDish: 'Thaal 1135 AD (Laal Maas, Junglee Maas & Mohan Maas)',
    address: 'Level 2, Jaleb Chowk, Amber Fort, Jaipur',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-jaipur-2',
    destinationId: 'jaipur',
    name: 'Laxmi Mishthan Bhandar (LMB Johari Bazar)',
    cuisine: 'Pure Vegetarian Traditional Rajasthani Thali',
    priceLevel: '$$',
    rating: 4.7,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Jain'],
    distanceFromCenterKm: 1.0,
    coordinates: [26.9190, 75.8240],
    specialtyDish: 'Royal Rajasthani Thali with Dal Baati Churma & Paneer Ghewar',
    address: 'Johari Bazar, Pink City, Jaipur',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 7. Udaipur
  {
    id: 'rest-udaipur-1',
    destinationId: 'udaipur',
    name: 'Ambrai Lakeside Candlelit Restaurant',
    cuisine: 'Mewari Royal Cuisine & Lake Panoramas',
    priceLevel: '$$$',
    rating: 4.9,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 0.5,
    coordinates: [24.5775, 73.6790],
    specialtyDish: 'Mewari Ker Sangri & Charcoal Grilled Mutton Boti',
    address: 'Amet Haveli, Naga Nagri, Outside Chandpole, Udaipur',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-udaipur-2',
    destinationId: 'udaipur',
    name: 'Upre by 1959 Rooftop Pichola',
    cuisine: 'Rajasthani & Contemporary North Indian',
    priceLevel: '$$',
    rating: 4.78,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Halal'],
    distanceFromCenterKm: 0.4,
    coordinates: [24.5800, 73.6810],
    specialtyDish: 'Gatta Curry & Saffron Pulao with Lake Palace View',
    address: 'Roof Top Lake Pichola Hotel, Outside Chandpole, Udaipur',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 8. Varanasi
  {
    id: 'rest-varanasi-1',
    destinationId: 'varanasi',
    name: 'Kashi Chaat Bhandar (Historic 1968)',
    cuisine: 'Iconic Banarasi Street Delicacies',
    priceLevel: '$',
    rating: 4.85,
    mealType: 'street_food',
    dietaryOptions: ['Vegetarian'],
    distanceFromCenterKm: 0.8,
    coordinates: [25.3090, 83.0070],
    specialtyDish: 'Sizzling Tamatar (Tomato) Chaat & Dahi Golgappe',
    address: 'D.37/49 Godowlia Chowk, Varanasi',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-varanasi-2',
    destinationId: 'varanasi',
    name: 'Cantonment 1830 Fine Dining',
    cuisine: 'Awadhi Nawabi & Benarasi Royal Thali',
    priceLevel: '$$$',
    rating: 4.75,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Halal'],
    distanceFromCenterKm: 4.5,
    coordinates: [25.3340, 82.9780],
    specialtyDish: 'Dum Pukht Biryani & Benarasi Malaiyyo Cream Soufflé',
    address: 'Taj Ganges, Nadesar Palace Grounds, Varanasi',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 9. Meghalaya
  {
    id: 'rest-meghalaya-1',
    destinationId: 'meghalaya',
    name: 'Café Shillong & Live Acoustic Bar',
    cuisine: 'Khasi Traditional Specialties & Continental',
    priceLevel: '$$',
    rating: 4.75,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 1.0,
    coordinates: [25.5720, 91.8840],
    specialtyDish: 'Dohneiiong (Pork with Black Sesame) & Sticky Red Rice',
    address: 'LP Building, Laitumkhrah Main Road, Shillong',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-meghalaya-2',
    destinationId: 'meghalaya',
    name: 'Dylan\'s Café (Tribute to Bob Dylan)',
    cuisine: 'Mountain Café, Waffles & Shakes',
    priceLevel: '$',
    rating: 4.7,
    mealType: 'cafe',
    dietaryOptions: ['Vegetarian', 'Vegan'],
    distanceFromCenterKm: 1.5,
    coordinates: [25.5680, 91.8890],
    specialtyDish: 'Belgian Nutella Waffles & Himalayan Hot Chocolate',
    address: 'Tripura Castle Road, Dhankheti, Shillong',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 10. Andaman & Nicobar
  {
    id: 'rest-andaman-1',
    destinationId: 'andaman',
    name: 'Something Different - A Beachside Café',
    cuisine: 'Fresh Andaman Seafood & Multi-Cuisine',
    priceLevel: '$$',
    rating: 4.8,
    mealType: 'dinner',
    dietaryOptions: ['Halal', 'Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 3.0,
    coordinates: [12.0120, 92.9980],
    specialtyDish: 'Butter Garlic Andaman Lobster & Grilled King Prawns',
    address: 'Beach No. 2, Behind Havelock Power House, Swaraj Dweep',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-andaman-2',
    destinationId: 'andaman',
    name: 'Full Moon Beachfront Café',
    cuisine: 'Candlelit Island Seafood & Tropical Juices',
    priceLevel: '$$',
    rating: 4.7,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    distanceFromCenterKm: 4.5,
    coordinates: [11.9950, 93.0080],
    specialtyDish: 'Fresh Grilled Red Snapper with Coconut Lime Sauce',
    address: 'Dive India, Beach No. 5, Havelock Island',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 🌎 INTERNATIONAL RESTAURANTS

  // 1. Bali
  {
    id: 'rest-bali-1',
    destinationId: 'bali',
    name: 'Bebek Bengil (The Original Dirty Duck Diner)',
    cuisine: 'Balinese Heritage Dining in Lotus Ponds',
    priceLevel: '$$',
    rating: 4.8,
    mealType: 'lunch',
    dietaryOptions: ['Halal', 'Gluten-Free'],
    distanceFromCenterKm: 1.0,
    coordinates: [-8.5130, 115.2630],
    specialtyDish: 'Crispy Balinese Duck with Sambal Matah & Rice',
    address: 'Jl. Hanoman, Padang Tegal, Ubud, Bali',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-bali-2',
    destinationId: 'bali',
    name: 'La Lucciola Beachfront Mediterranean',
    cuisine: 'Italian Seafood with Indian Ocean Sunset',
    priceLevel: '$$$',
    rating: 4.85,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 8.0,
    coordinates: [-8.6820, 115.1500],
    specialtyDish: 'Linguine with Fresh Coral Clams & Grilled Barramundi',
    address: 'Pantai Petitenget, Seminyak, Bali',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 2. Maldives
  {
    id: 'rest-maldives-1',
    destinationId: 'maldives',
    name: 'Ithaa Undersea Ocean Restaurant',
    cuisine: 'Contemporary European Undersea Dining',
    priceLevel: '$$$$',
    rating: 4.96,
    mealType: 'dinner',
    dietaryOptions: ['Gluten-Free', 'Vegetarian'],
    distanceFromCenterKm: 25.0,
    coordinates: [3.6190, 72.7180],
    specialtyDish: 'Maldivian Yellowfin Tuna Tartare & Caviar 5m Submerged',
    address: 'Conrad Maldives Rangali Island, Alif Dhaal Atoll',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-maldives-2',
    destinationId: 'maldives',
    name: 'Fresh in the Garden Organic Tree Canopy',
    cuisine: 'Farm-to-Table Mediterranean in Treetops',
    priceLevel: '$$$',
    rating: 4.88,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Vegan', 'Organic'],
    distanceFromCenterKm: 40.0,
    coordinates: [5.6980, 73.2840],
    specialtyDish: 'Wood-Fired Tiger Prawns with Herb Garden Pesto',
    address: 'Soneva Jani, Noonu Atoll, Maldives',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },

  // 3. Singapore
  {
    id: 'rest-singapore-1',
    destinationId: 'singapore',
    name: 'Jumbo Seafood at Riverside Point',
    cuisine: 'World-Renowned Singapore Seafood',
    priceLevel: '$$$',
    rating: 4.85,
    mealType: 'dinner',
    dietaryOptions: ['Halal', 'Gluten-Free'],
    distanceFromCenterKm: 1.0,
    coordinates: [1.2890, 103.8440],
    specialtyDish: 'Award-Winning Singapore Chilli Crab with Deep-Fried Mantou Buns',
    address: '30 Merchant Rd, #01-01/02 Riverside Point, Singapore',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-singapore-2',
    destinationId: 'singapore',
    name: 'Tian Tian Hainanese Chicken Rice (Maxwell Food Centre)',
    cuisine: 'Michelin Bib Gourmand Hawker Classic',
    priceLevel: '$',
    rating: 4.75,
    mealType: 'lunch',
    dietaryOptions: ['Halal'],
    distanceFromCenterKm: 1.2,
    coordinates: [1.2800, 103.8440],
    specialtyDish: 'Poached Silky Hainanese Chicken with Fragrant Pandan Rice & Chilli Sauce',
    address: '1 Kadayanallur St, #01-10/11 Maxwell Food Centre, Singapore',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 4. Thailand
  {
    id: 'rest-thailand-1',
    destinationId: 'thailand',
    name: 'Raan Jay Fai (Michelin-Starred Street Food Legend)',
    cuisine: 'Wok-Fired Seafood by the Goggled Chef',
    priceLevel: '$$$',
    rating: 4.85,
    mealType: 'dinner',
    dietaryOptions: ['Halal'],
    distanceFromCenterKm: 1.8,
    coordinates: [13.7525, 100.5048],
    specialtyDish: 'Crispy Golden Giant Crab Meat Omelette (Kai Jeaw Poo)',
    address: '327 Maha Chai Rd, Samran Rat, Phra Nakhon, Bangkok',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-thailand-2',
    destinationId: 'thailand',
    name: 'Thip Samai Pad Thai Pratu Phi (Est. 1966)',
    cuisine: 'Thailand\'s Most Celebrated Pad Thai',
    priceLevel: '$',
    rating: 4.75,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 1.7,
    coordinates: [13.7527, 100.5049],
    specialtyDish: 'Superb Pad Thai Sen-Chan Wrapped in Thin Egg Crepe with Prawns',
    address: '313 315 Maha Chai Rd, Samran Rat, Bangkok',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 5. Japan
  {
    id: 'rest-japan-1',
    destinationId: 'japan',
    name: 'Gion Karyo Seasonal Kaiseki Kyoto',
    cuisine: 'Refined Imperial Kyoto Kaiseki',
    priceLevel: '$$$$',
    rating: 4.95,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 1.5,
    coordinates: [35.0035, 135.7760],
    specialtyDish: '9-Course Seasonal Kaiseki with A5 Wagyu & Kyoto Kamo Eggplant',
    address: 'Gionmachi Minamigawa, Higashiyama Ward, Kyoto',
    image: destKyotoImg
  },
  {
    id: 'rest-japan-2',
    destinationId: 'japan',
    name: 'Ichiran Ramen Shinjuku Custom Booths',
    cuisine: 'Classic Tonkotsu Hakata-Style Ramen',
    priceLevel: '$',
    rating: 4.8,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian'],
    distanceFromCenterKm: 2.0,
    coordinates: [35.6900, 139.7020],
    specialtyDish: 'Original Tonkotsu Ramen with Secret Red Chili Sauce & Soft-Boiled Egg',
    address: '3-34-11 Shinjuku, Tokyo 160-0022',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },

  // 6. South Korea
  {
    id: 'rest-korea-1',
    destinationId: 'south_korea',
    name: 'Tosokchon Samgyetang (Near Gyeongbokgung)',
    cuisine: 'Traditional Royal Ginseng Chicken Soup',
    priceLevel: '$$',
    rating: 4.88,
    mealType: 'lunch',
    dietaryOptions: ['Halal'],
    distanceFromCenterKm: 1.0,
    coordinates: [37.5770, 126.9710],
    specialtyDish: 'Whole Stuffed Young Chicken with 4-Year Korean Ginseng & Chestnuts',
    address: '5 Jahamun-ro 5-gil, Jongno District, Seoul',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-korea-2',
    destinationId: 'south_korea',
    name: 'Maple Tree House Premium Hanwoo Korean BBQ',
    cuisine: 'Prime Grade Korean BBQ Over Hardwood Charcoal',
    priceLevel: '$$$',
    rating: 4.8,
    mealType: 'dinner',
    dietaryOptions: ['Gluten-Free'],
    distanceFromCenterKm: 3.5,
    coordinates: [37.5340, 126.9930],
    specialtyDish: 'Premium Aged Hanwoo Beef Ribeye & Marinated Galbi Ribs',
    address: 'Hamilton Hotel 2F, Itaewon-ro, Yongsan-gu, Seoul',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // 7. Dubai
  {
    id: 'rest-dubai-1',
    destinationId: 'dubai',
    name: 'At.mosphere Burj Khalifa (122nd Floor Dining)',
    cuisine: 'Haute French & Contemporary European',
    priceLevel: '$$$$',
    rating: 4.92,
    mealType: 'dinner',
    dietaryOptions: ['Halal', 'Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 0.5,
    coordinates: [25.1970, 55.2740],
    specialtyDish: 'Pan-Roasted Brittany Turbot & Foie Gras with Cloudscape Views',
    address: 'Burj Khalifa, 122nd Floor, Downtown Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-dubai-2',
    destinationId: 'dubai',
    name: 'Al Fanar Authentic Emirati Restaurant',
    cuisine: 'Traditional Emirati Heritage & Fresh Seafood',
    priceLevel: '$$',
    rating: 4.75,
    mealType: 'lunch',
    dietaryOptions: ['Halal', 'Gluten-Free'],
    distanceFromCenterKm: 6.0,
    coordinates: [25.2280, 55.3520],
    specialtyDish: 'Machboos Samak (Spiced Rice with Kingfish) & Golden Luqaimat Dumplings',
    address: 'Dubai Festival City Mall Canal Walk, Dubai',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },

  // 8. Switzerland
  {
    id: 'rest-switzerland-1',
    destinationId: 'switzerland',
    name: 'Chez Vrony Matterhorn Alpine Terrace',
    cuisine: 'Rustic Michelin-Guide Alpine Swiss Gastronomy',
    priceLevel: '$$$',
    rating: 4.94,
    mealType: 'lunch',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 3.5,
    coordinates: [45.9920, 7.7710],
    specialtyDish: 'Air-Dried Mountain Beef, Organic Alpine Cheese & Vrony Burger',
    address: 'Findeln, 3920 Zermatt, Switzerland',
    image: destSwissImg
  },
  {
    id: 'rest-switzerland-2',
    destinationId: 'switzerland',
    name: 'Restaurant Whymper-Stube Fondue Sanctuary',
    cuisine: 'Traditional Swiss Fondue & Raclette',
    priceLevel: '$$',
    rating: 4.8,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian'],
    distanceFromCenterKm: 0.2,
    coordinates: [45.9810, 7.7470],
    specialtyDish: 'Moitié-Moitié Gruyère & Vacherin Truffle Fondue with Baby Potatoes',
    address: 'Bahnhofstrasse 80, 3920 Zermatt',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80'
  },

  // 9. Paris
  {
    id: 'rest-paris-1',
    destinationId: 'paris',
    name: 'Bouillon Chartier (Historic 1896 Belle Époque)',
    cuisine: 'Classic French Brasserie Comfort Food',
    priceLevel: '$',
    rating: 4.7,
    mealType: 'dinner',
    dietaryOptions: ['Gluten-Free'],
    distanceFromCenterKm: 1.5,
    coordinates: [48.8718, 2.3431],
    specialtyDish: 'Burgundy Escargots with Herb Butter & Confit de Canard (Duck Confit)',
    address: '7 Rue du Faubourg Montmartre, 75009 Paris',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-paris-2',
    destinationId: 'paris',
    name: 'Carette Trocadéro Tea Salon & Pâtisserie',
    cuisine: 'Legendary Parisian Chocolaterie & Viennoiserie',
    priceLevel: '$$',
    rating: 4.82,
    mealType: 'cafe',
    dietaryOptions: ['Vegetarian'],
    distanceFromCenterKm: 3.2,
    coordinates: [48.8630, 2.2870],
    specialtyDish: 'Thick Velvety Hot Chocolate with Fresh Whipped Chantilly & Macarons',
    address: '4 Place du Trocadéro, 75016 Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },

  // 10. Australia
  {
    id: 'rest-australia-1',
    destinationId: 'australia',
    name: 'Bennelong at the Sydney Opera House',
    cuisine: 'Contemporary Australian Fine Dining Under the Sails',
    priceLevel: '$$$$',
    rating: 4.92,
    mealType: 'dinner',
    dietaryOptions: ['Gluten-Free', 'Vegetarian'],
    distanceFromCenterKm: 1.0,
    coordinates: [-33.8568, 151.2153],
    specialtyDish: 'Tasmanian Sea Scallops, Macadamia Toffee & Pavlova Dessert',
    address: 'Sydney Opera House, Bennelong Point, Sydney NSW 2000',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rest-australia-2',
    destinationId: 'australia',
    name: 'Bills Bondi Beachfront Cafe',
    cuisine: 'Legendary Aussie Brunch & Beach Fare',
    priceLevel: '$$',
    rating: 4.78,
    mealType: 'breakfast',
    dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    distanceFromCenterKm: 7.2,
    coordinates: [-33.8890, 151.2720],
    specialtyDish: 'World-Famous Ricotta Hotcakes with Honeycomb Butter & Fresh Banana',
    address: '79 Hall St, Bondi Beach NSW 2026, Sydney',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // Bonus Amalfi Coast
  {
    id: 'rest-amalfi-1',
    destinationId: 'amalfi',
    name: 'Ristorante Marina Grande Clifftop Terrace',
    cuisine: 'Campanian Seafood & Fresh Lemon Pasta',
    priceLevel: '$$$',
    rating: 4.85,
    mealType: 'dinner',
    dietaryOptions: ['Vegetarian', 'Gluten-Free'],
    distanceFromCenterKm: 0.1,
    coordinates: [40.6328, 14.6010],
    specialtyDish: 'Scialatielli ai Frutti di Mare & Sfusato Amalfitano Delizia al Limone',
    address: 'Viale della Regione 4, Amalfi, Italy',
    image: destAmalfiImg
  }
];
