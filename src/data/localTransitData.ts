import { LocalTransitOption } from '../types/travel';

export function getLocalTransitForDestination(destinationId: string, country: string = 'India'): LocalTransitOption[] {
  const isIndia = country === 'India';

  if (isIndia) {
    if (destinationId === 'goa') {
      return [
        {
          id: 'transit-scooter',
          name: 'Self-Drive Activa & Motorcycle Rental',
          type: 'scooter_rental',
          costRange: '₹350 – ₹600 / day',
          durationOrFrequency: 'Instant rental with driving license',
          bestFor: 'Solo travelers, couples & beach hopping',
          description: 'The iconic way to experience Goa. Breeze along coconut palm-lined village roads, stop at coastal shacks, and navigate narrow lanes to hidden bays.',
          operatingHours: '24 Hours (Fuel at local stations / kiosks)',
          tips: 'Helmets are mandatory. Always carry your driver\'s license and verify fuel levels.'
        },
        {
          id: 'transit-auto',
          name: 'Goa Yellow-Black Taxis & GoaMiles App',
          type: 'taxi',
          costRange: '₹300 – ₹1,200 per ride',
          durationOrFrequency: 'On-demand or app dispatch (5–10 min)',
          bestFor: 'Airport/station transfers & nightlife returns',
          description: 'Government-monitored GoaMiles app cabs and tourist taxi stands across all major beaches and hotel gates.',
          operatingHours: '24 Hours available',
          tips: 'Pre-book via GoaMiles app at airport and railway stations for fixed, metered rates.'
        },
        {
          id: 'transit-bus',
          name: 'Kadamba AC Electric Shuttle Buses',
          type: 'bus',
          costRange: '₹20 – ₹150 / trip',
          durationOrFrequency: 'Every 15–20 minutes',
          bestFor: 'Budget transit between North & South Goa hubs',
          description: 'Modern air-conditioned electric buses connecting Panaji, Margao, Mapusa, Calangute, and Dabolim Airport.',
          operatingHours: '06:00 AM – 10:30 PM',
          tips: 'Ideal for traveling between Panaji bus terminus and Margao or the airport affordably.'
        },
        {
          id: 'transit-walking',
          name: 'Fontainhas & Beach Heritage Walking Trails',
          type: 'walking',
          costRange: 'Free',
          durationOrFrequency: 'Leisurely self-paced',
          bestFor: 'Old Goa churches & Latin Quarter architecture',
          description: 'Pedestrian-friendly colorful streets of Fontainhas, beach boardwalks, and spice farm footpaths.',
          operatingHours: 'Best early morning or 04:30 PM onwards',
          tips: 'Wear comfortable walking sandals and carry a water bottle.'
        }
      ];
    }

    if (destinationId === 'jaipur' || destinationId === 'delhi' || destinationId === 'varanasi') {
      return [
        {
          id: 'transit-auto',
          name: 'Auto-Rickshaw & E-Rickshaw',
          type: 'auto_rickshaw',
          costRange: '₹50 – ₹150 / ride',
          durationOrFrequency: 'Available everywhere on street',
          bestFor: 'Short hops through heritage bazaars and alleyways',
          description: 'The fastest way to zip through historic old city quarters, bustling market lanes, and monument entrances.',
          operatingHours: '06:00 AM – Midnight',
          tips: 'Agree on the fare before boarding or ask to use meter / Uber Auto.'
        },
        {
          id: 'transit-metro',
          name: 'Modern Metro Rail System',
          type: 'metro',
          costRange: '₹10 – ₹50 / token',
          durationOrFrequency: 'Trains every 4–8 minutes',
          bestFor: 'Fast, air-conditioned inter-city travel avoiding traffic',
          description: 'State-of-the-art clean underground and elevated metro line connecting central railway stations with key tourist and commercial districts.',
          operatingHours: '06:00 AM – 11:00 PM',
          tips: 'Buy a single journey QR token or contactless tourist smart card at any station.'
        },
        {
          id: 'transit-cab',
          name: 'App Cabs (Uber / Ola / Local Prepaid)',
          type: 'taxi',
          costRange: '₹150 – ₹450 / trip',
          durationOrFrequency: '3–7 min arrival time',
          bestFor: 'Evening dining, fort visits & group comfort',
          description: 'Reliable air-conditioned hatchbacks, sedans, and SUVs with GPS tracking and upfront fixed pricing.',
          operatingHours: '24 Hours',
          tips: 'Ideal for hilltop forts like Amber Fort or Nahargarh Fort where uphill auto-rickshaws struggle.'
        },
        {
          id: 'transit-walking',
          name: 'Heritage Pink City / Ghat Walking Trails',
          type: 'walking',
          costRange: 'Free',
          durationOrFrequency: 'Self-guided',
          bestFor: 'Atmospheric morning photography and food walks',
          description: 'Pedestrian-friendly stone ghats along the river or covered colonnades of historic bazaars.',
          operatingHours: 'Best 06:30 AM – 09:30 AM and dusk',
          tips: 'Explore early mornings before vehicular traffic opens.'
        }
      ];
    }

    if (destinationId === 'kashmir' || destinationId === 'manali' || destinationId === 'ladakh') {
      return [
        {
          id: 'transit-suv',
          name: 'Dedicated 4x4 Mountain SUV & Chauffeur (Innova / Scorpio)',
          type: 'car_rental',
          costRange: '₹2,200 – ₹3,800 / day',
          durationOrFrequency: 'Full day private dedicated hire',
          bestFor: 'High passes (Rohtang, Khardung La, Gulmarg) & valley excursions',
          description: 'Experienced local mountain driver with tourist vehicle permit, comfortable air-conditioning/heating, and high ground clearance.',
          operatingHours: 'Full Day Service (08:00 AM – 08:00 PM)',
          tips: 'Essential for high-altitude passes where union regulations or rough terrain require certified local drivers.'
        },
        {
          id: 'transit-shikara',
          name: destinationId === 'kashmir' ? 'Traditional Wooden Dal Lake Shikara' : 'Royal Enfield Himalayan Motorcycle',
          type: 'scooter_rental',
          costRange: destinationId === 'kashmir' ? '₹500 – ₹800 / hour' : '₹1,200 – ₹1,800 / day',
          durationOrFrequency: 'Instant availability',
          bestFor: destinationId === 'kashmir' ? 'Lake transport, water markets & houseboats' : 'Solo Himalayan highway touring',
          description: destinationId === 'kashmir' 
            ? 'Hand-carved cedarwood boat with plush velvet cushions and awning, ferrying passengers between Dal Lake ghats and houseboats.'
            : 'Sturdy 411cc dual-sport motorcycle tailored for gravel mountain passes and winding alpine roads.',
          operatingHours: '06:00 AM – 09:00 PM',
          tips: 'Shikara rates are set by Kashmir Tourism boards; negotiate round-trip wait time.'
        },
        {
          id: 'transit-shared',
          name: 'Shared Local Maxicab & Tempo Traveler',
          type: 'bus',
          costRange: '₹50 – ₹200 / person',
          durationOrFrequency: 'Departs when full (every 15–30 min)',
          bestFor: 'Budget travelers between hill stations',
          description: 'Economical shared transit connecting Leh, Srinagar, Pahalgam, and Manali town centers.',
          operatingHours: '07:00 AM – 06:00 PM',
          tips: 'Board early from main taxi stands for morning departures.'
        }
      ];
    }

    // Default India
    return [
      {
        id: 'transit-auto-gen',
        name: 'Local Auto-Rickshaw & Tuk-Tuk',
        type: 'auto_rickshaw',
        costRange: '₹50 – ₹180 / ride',
        durationOrFrequency: 'On-demand street pickup',
        bestFor: 'Short city hops and market trips',
        description: 'Ubiquitous 3-wheeled open-air motorized rickshaws ideal for quick, flexible urban transit.',
        operatingHours: '06:00 AM – 11:30 PM',
        tips: 'Confirm price or ask for meter before boarding.'
      },
      {
        id: 'transit-cab-gen',
        name: 'App Taxi & Local Chauffeur Cabs',
        type: 'taxi',
        costRange: '₹200 – ₹600 / trip',
        durationOrFrequency: '3–8 minutes via app',
        bestFor: 'Sightseeing, airport links and evening dinners',
        description: 'Air-conditioned modern sedans and hatchbacks with cashless digital payment.',
        operatingHours: '24 Hours',
        tips: 'Book round-trip packages for out-of-town sightseeing.'
      },
      {
        id: 'transit-bus-gen',
        name: 'City Express & Tourist Buses',
        type: 'bus',
        costRange: '₹15 – ₹80 / trip',
        durationOrFrequency: 'Every 15–20 minutes',
        bestFor: 'Budget travelers and landmark loops',
        description: 'State and municipal buses connecting key railway stations, bus stands, and historic monuments.',
        operatingHours: '06:00 AM – 10:00 PM',
        tips: 'Keep exact change handy for bus conductors.'
      }
    ];
  }

  // 🌎 INTERNATIONAL DESTINATIONS
  if (destinationId === 'japan') {
    return [
      {
        id: 'transit-jp-subway',
        name: 'Tokyo Metro / Kyoto City Bus & Subway (IC Card)',
        type: 'metro',
        costRange: '¥180 – ¥350 ($1.20 – $2.40) / ride',
        durationOrFrequency: 'Trains every 2–4 minutes',
        bestFor: 'Everywhere! Fast, punctual, hyper-connected',
        description: 'World-famous precision subway and rail network. Tap Suica/Pasmo/ICOCA cards directly on the turnstiles.',
        operatingHours: '05:00 AM – 00:30 AM',
        tips: 'Add digital Suica to Apple/Google Wallet for effortless one-tap transit across Japan.'
      },
      {
        id: 'transit-jp-taxi',
        name: 'Japan Executive Taxi with Automatic Doors',
        type: 'taxi',
        costRange: '¥600 base + ¥400/km ($5 – $25)',
        durationOrFrequency: 'Hail from street stands or JapanTaxi app',
        bestFor: 'Late night transit after subways close & luggage transfers',
        description: 'Immaculate Toyota JPN Taxis with white-lace seat covers, automated doors, and polite white-gloved drivers.',
        operatingHours: '24 Hours',
        tips: 'Never pull the door yourself — doors open and close automatically.'
      },
      {
        id: 'transit-jp-rental',
        name: 'Bicycle Rental & Machiya Town Cycling',
        type: 'scooter_rental',
        costRange: '¥1,000 – ¥1,500 ($7 – $10) / day',
        durationOrFrequency: 'Day rental from train station kiosks',
        bestFor: 'Kyoto temple canals, Kamogawa river & flat streets',
        description: 'Electrically-assisted city bicycles (Mamachari) with baskets, ideal for cruising tranquil residential alleys.',
        operatingHours: '09:00 AM – 07:00 PM',
        tips: 'Only park in designated bicycle parking lots (Churinjo) to avoid removal.'
      }
    ];
  }

  if (destinationId === 'singapore') {
    return [
      {
        id: 'transit-sg-mrt',
        name: 'SMRT Mass Rapid Transit & Contactless Pay',
        type: 'metro',
        costRange: 'S$1.20 – S$2.50 ($0.90 – $1.85)',
        durationOrFrequency: 'Trains every 2–5 minutes',
        bestFor: 'Entire island: Marina Bay, Chinatown, Changi Airport',
        description: 'Fully air-conditioned, ultra-clean, driverless subway network. Tap any credit/debit card directly at the gates.',
        operatingHours: '05:30 AM – Midnight',
        tips: 'No food or drink permitted on MRT trains or in stations (strictly enforced).'
      },
      {
        id: 'transit-sg-grab',
        name: 'Grab & Gojek App Cabs',
        type: 'taxi',
        costRange: 'S$12 – S$30 ($9 – $22) / ride',
        durationOrFrequency: '3–5 min pickup',
        bestFor: 'Direct trips to Night Safari, Sentosa or late night dining',
        description: 'Southeast Asia\'s leading ride-hailing app with upfront transparent fares and English-speaking drivers.',
        operatingHours: '24 Hours',
        tips: 'Download the Grab app before landing for seamless airport transit.'
      }
    ];
  }

  if (destinationId === 'paris') {
    return [
      {
        id: 'transit-paris-metro',
        name: 'Paris Métro & RER Network',
        type: 'metro',
        costRange: '€2.15 ($2.30) / ticket',
        durationOrFrequency: 'Trains every 2–5 minutes',
        bestFor: 'Every Parisian neighborhood and landmark',
        description: 'Dense historical subway with 16 lines and 300+ stations, never more than 500 meters from any point in Paris.',
        operatingHours: '05:30 AM – 01:15 AM (02:15 AM on weekends)',
        tips: 'Load digital t+ tickets directly onto your phone via Navigo Easy app.'
      },
      {
        id: 'transit-paris-walk',
        name: 'Haussmann Boulevards & Seine Walking',
        type: 'walking',
        costRange: 'Free',
        durationOrFrequency: 'Leisurely pedestrian paradise',
        bestFor: 'Taking in Parisian cafés, bridge vistas and architecture',
        description: 'Paris is exceptionally walkable. Stroll from the Louvre through Tuileries to the Champs-Élysées effortlessly.',
        operatingHours: '24 Hours',
        tips: 'Combine 2 metro rides a day with walking to soak in the street architecture.'
      }
    ];
  }

  if (destinationId === 'dubai') {
    return [
      {
        id: 'transit-dxb-metro',
        name: 'Dubai Driverless Metro & Red Line',
        type: 'metro',
        costRange: 'AED 3 – AED 8.50 ($0.80 – $2.30)',
        durationOrFrequency: 'Every 3–5 minutes',
        bestFor: 'Connecting Airport, Downtown Burj Khalifa & Dubai Marina',
        description: 'World\'s longest driverless metro system with elevated glass viaducts, Gold Class carriages, and direct indoor mall walkways.',
        operatingHours: '05:00 AM – Midnight',
        tips: 'Buy a Silver Nol Card at any station for best discounted rates.'
      },
      {
        id: 'transit-dxb-taxi',
        name: 'Dubai RTA Metered Taxis & Careem App',
        type: 'taxi',
        costRange: 'AED 15 – AED 55 ($4 – $15)',
        durationOrFrequency: 'Instant street hail or Careem dispatch',
        bestFor: 'Direct hotel-to-attraction & beach club transport',
        description: 'Cream-colored government-metered taxis with red/blue roofs, clean interiors, and credit card terminals in every car.',
        operatingHours: '24 Hours',
        tips: 'Careem app (Hala Taxi option) books standard RTA metered cabs at zero markup.'
      }
    ];
  }

  // General International
  return [
    {
      id: 'transit-intl-metro',
      name: 'City Rapid Transit & Subway',
      type: 'metro',
      costRange: '$1.50 – $3.50 / trip',
      durationOrFrequency: 'Every 3–6 minutes',
      bestFor: 'Fast downtown landmark transit',
      description: 'Air-conditioned rail network avoiding surface street traffic with multi-language signage and contactless ticketing.',
      operatingHours: '05:30 AM – Midnight',
      tips: 'Look for day tourist passes for unlimited travel savings.'
    },
    {
      id: 'transit-intl-cab',
      name: 'Ride-Hailing & Metered City Taxis',
      type: 'taxi',
      costRange: '$10 – $30 / trip',
      durationOrFrequency: 'On-demand app dispatch',
      bestFor: 'Luggage transit, airport links & night outings',
      description: 'Modern licensed taxis and rideshares with GPS routing and customer support.',
      operatingHours: '24 Hours',
      tips: 'Verify fare estimate in app before confirming.'
    },
    {
      id: 'transit-intl-walk',
      name: 'Scenic Urban & Heritage Walking',
      type: 'walking',
      costRange: 'Free',
      durationOrFrequency: 'Self-paced',
      bestFor: 'Discovering hidden cafés, viewpoints & boutiques',
      description: 'Pedestrian plazas, riverfront boardwalks, and historical walking quarters.',
      operatingHours: '24 Hours',
      tips: 'Download offline city maps on Google Maps.'
    }
  ];
}
