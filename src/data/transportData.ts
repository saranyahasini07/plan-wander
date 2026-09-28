import { TransportationOption } from '../types/travel';
import { DESTINATIONS } from './destinationsData';

// Generates rich, multi-modal transport options tailored to any (Origin -> Destination) pair
export function getTransportationForRoute(origin: string = 'New York (JFK)', destId: string = 'goa'): TransportationOption[] {
  const cleanOrigin = origin.trim() || 'Departure City';
  const dest = DESTINATIONS.find(d => d.id === destId) || DESTINATIONS[0];
  const originSlug = cleanOrigin.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const isIndianOrigin = /delhi|mumbai|bangalore|bengaluru|chennai|kolkata|hyderabad|pune|ahmedabad|kochi|jaipur|lucknow|chandigarh|india/i.test(cleanOrigin);

  // 🇮🇳 INDIA DESTINATIONS
  if (dest.country === 'India') {
    const flightPrice = isIndianOrigin ? 65 : 680;
    const flightDuration = isIndianOrigin ? 130 : 880;

    let carrierName = 'IndiGo Airlines / Air India';
    let carrierCode = '6E 521';
    let trainProvider = 'Indian Railways Vande Bharat Express';
    let trainCode = 'VB 20901';
    let trainRoute = `${cleanOrigin} Rail Terminal → ${dest.name} Junction`;
    let flightRoute = `${cleanOrigin} → ${dest.name} Airport (Direct / 1-Stop)`;
    let busProvider = 'IntrCity SmartBus / Zingbus Multi-Axle Volvo';
    let selfDriveCar = 'Hyundai Creta / Mahindra Thar (Zoomcar / Revv)';

    if (destId === 'goa') {
      carrierCode = '6E 603';
      trainCode = 'VB 22229 (Goa Vande Bharat)';
      trainRoute = `${cleanOrigin} → Madgaon Junction (MAO)`;
      flightRoute = `${cleanOrigin} → Goa Dabolim (GOI) / Mopa (GOX)`;
    } else if (destId === 'kashmir') {
      carrierCode = 'AI 825';
      trainCode = 'VB 22439 (Vande Bharat Express) + Vistadome Rail';
      trainRoute = `${cleanOrigin} → Srinagar Central Railway Station`;
      flightRoute = `${cleanOrigin} → Sheikh ul-Alam Int\'l Srinagar (SXR)`;
      selfDriveCar = 'Mahindra Scorpio-N 4x4 Mountain Spec';
    } else if (destId === 'manali') {
      carrierCode = '6E 214';
      trainCode = 'Kalka Shatabdi Express + Himalayan Vista Coach';
      trainRoute = `${cleanOrigin} → Kalka / Chandigarh Rail Hub`;
      flightRoute = `${cleanOrigin} → Kullu-Bhuntar Airport (KUU)`;
      busProvider = 'Himachal Road Transport (HRTC) Super Luxury Volvo';
      selfDriveCar = 'Toyota Fortuner 4x4 Hill Edition';
    } else if (destId === 'ladakh') {
      carrierCode = '6E 2054';
      trainCode = 'Jammu Tawi Rajdhani + Leh High-Mountain Transit';
      trainRoute = `${cleanOrigin} → Jammu Tawi Terminal`;
      flightRoute = `${cleanOrigin} → Kushok Bakula Rimpochee Leh (IXL)`;
      selfDriveCar = 'Mahindra Thar 4x4 Expedition Spec';
    } else if (destId === 'kerala') {
      carrierCode = 'AI 512';
      trainCode = 'VB 20633 (Kerala Vande Bharat Express)';
      trainRoute = `${cleanOrigin} → Kochi / Ernakulam Junction (ERS)`;
      flightRoute = `${cleanOrigin} → Cochin Int\'l Airport (COK)`;
    } else if (destId === 'jaipur') {
      carrierCode = '6E 718';
      trainCode = 'VB 20978 (Delhi-Jaipur Vande Bharat)';
      trainRoute = `${cleanOrigin} → Jaipur Junction (JP)`;
      flightRoute = `${cleanOrigin} → Jaipur International (JAI)`;
    } else if (destId === 'udaipur') {
      carrierCode = 'AI 471';
      trainCode = 'VB 20980 (Udaipur City Vande Bharat)';
      trainRoute = `${cleanOrigin} → Udaipur City Station (UDZ)`;
      flightRoute = `${cleanOrigin} → Maharana Pratap Airport (UDR)`;
    } else if (destId === 'varanasi') {
      carrierCode = '6E 902';
      trainCode = 'VB 22436 (Vande Bharat Express Varanasi)';
      trainRoute = `${cleanOrigin} → Varanasi Junction (BSB) / Banaras`;
      flightRoute = `${cleanOrigin} → Lal Bahadur Shastri Int\'l (VNS)`;
    } else if (destId === 'meghalaya') {
      carrierCode = '6E 6192';
      trainCode = 'Shatabdi Express to Guwahati + Scenic Expressway';
      trainRoute = `${cleanOrigin} → Guwahati Junction (GHY)`;
      flightRoute = `${cleanOrigin} → Shillong Umroi (SHL) / Guwahati (GAU)`;
    } else if (destId === 'andaman') {
      carrierCode = 'AI 549';
      trainProvider = 'Makruzz / Nautika High-Speed Maritime Catamaran';
      trainCode = 'MK-CAT 1';
      trainRoute = `Port Blair Harbor → Havelock Island Pier`;
      flightRoute = `${cleanOrigin} → Veer Savarkar Airport Port Blair (IXZ)`;
    }

    return [
      // 1. Flight
      {
        id: `flight-${destId}-${originSlug}`,
        type: 'flight',
        provider: carrierName,
        carrierCode: carrierCode,
        routeName: flightRoute,
        originName: cleanOrigin,
        destinationName: `${dest.name} Airport`,
        price: flightPrice,
        durationMinutes: flightDuration,
        departureTime: '10:30 AM',
        arrivalTime: '11:45 AM',
        transfers: isIndianOrigin ? 0 : 1,
        comfortLevel: 'Premium',
        distanceKm: isIndianOrigin ? 950 : 11500,
        bookingStatus: 'Available',
        emissionsKg: isIndianOrigin ? 95 : 210,
        cabinClass: 'Economy / Premium Economy',
        baggageAllowance: '15kg Checked Baggage + 7kg Cabin Bag',
        gateOrPlatform: 'Terminal 1, Gate 14',
        rating: 4.6,
        reviewCount: 3420,
        amenities: ['Web Check-in', '15kg Baggage Included', 'Complimentary Water & Snack', 'Air-Conditioned'],
        details: `Fast non-stop or quick connecting flight from ${cleanOrigin}. Online seat selection and priority boarding available.`
      },
      // 2. Train
      {
        id: `train-${destId}-${originSlug}`,
        type: destId === 'andaman' ? 'transit' : 'train',
        provider: trainProvider,
        carrierCode: trainCode,
        routeName: trainRoute,
        originName: cleanOrigin,
        destinationName: `${dest.name} Rail Hub`,
        price: destId === 'andaman' ? 28 : (isIndianOrigin ? 32 : 55),
        durationMinutes: destId === 'andaman' ? 90 : (isIndianOrigin ? 340 : 540),
        departureTime: '06:15 AM',
        arrivalTime: '12:00 PM',
        transfers: destId === 'andaman' ? 0 : 1,
        comfortLevel: 'First Class',
        distanceKm: destId === 'andaman' ? 55 : 550,
        bookingStatus: 'Good availability',
        emissionsKg: 12,
        cabinClass: 'Executive AC Chair Car / 1st AC Sleeper',
        baggageAllowance: 'Up to 40kg Rail Baggage',
        gateOrPlatform: 'Platform 1',
        rating: 4.5,
        reviewCount: 2890,
        amenities: ['180° Rotatable Seats', 'Onboard Hot Meals Included', 'Free WiFi & Power Sockets', 'Automated Doors'],
        details: 'Modern semi-high speed aerodynamic train with panoramic large windows, quiet coaches, and punctual service.'
      },
      // 3. Bus
      {
        id: `bus-${destId}-${originSlug}`,
        type: 'bus',
        provider: busProvider,
        carrierCode: 'EXP-VOLVO-B11R',
        routeName: `${cleanOrigin} Inter-State Terminal → ${dest.name} Central`,
        originName: cleanOrigin,
        destinationName: `${dest.name} Central Bus Stand`,
        price: 24,
        durationMinutes: 480,
        departureTime: '09:30 PM',
        arrivalTime: '06:30 AM (+1)',
        transfers: 0,
        comfortLevel: 'Standard',
        distanceKm: 420,
        bookingStatus: 'Available',
        emissionsKg: 16,
        cabinClass: 'AC Multi-Axle Sleeper Berth',
        baggageAllowance: '2 Large Bags (30kg) in Luggage Hold',
        gateOrPlatform: 'Bay 5',
        rating: 4.3,
        reviewCount: 1540,
        amenities: ['Private Curtain Berths', 'Individual USB Charging', 'Mineral Water & Blanket', 'GPS Live Tracking'],
        details: 'Premium overnight Volvo B11R sleeper coach designed for long-distance comfort with hygienic washroom stops.'
      },
      // 4. Self-Drive / Rental Car
      {
        id: `selfdrive-${destId}-${originSlug}`,
        type: 'rental_car',
        provider: 'Zoomcar / Avis Self-Drive Freedom',
        carrierCode: 'ZOOM-FLEX',
        routeName: `${cleanOrigin} Hub → Scenic Highway to ${dest.name}`,
        originName: cleanOrigin,
        destinationName: `${dest.name} Destination`,
        price: 48,
        durationMinutes: 420,
        departureTime: 'Flexible (Pickup Anytime)',
        arrivalTime: 'Self-Paced',
        transfers: 0,
        comfortLevel: 'Comfort',
        distanceKm: 450,
        bookingStatus: 'Available',
        emissionsKg: 35,
        cabinClass: selfDriveCar,
        baggageAllowance: 'Full Trunk Capacity (4–5 Suitcases)',
        gateOrPlatform: 'Contactless Keyless App Unlock',
        rating: 4.4,
        reviewCount: 980,
        amenities: ['Zero Security Deposit', 'Unlimited Kilometers', '24/7 Roadside Assistance', 'Comprehensive Insurance'],
        details: 'Enjoy complete freedom and explore scenic viewpoints, roadside dhabas, and hidden countryside stops at your own pace.'
      },
      // 5. Taxi / Private Chauffeur Cab
      {
        id: `taxi-${destId}-${originSlug}`,
        type: 'taxi',
        provider: `${dest.name} Executive Outstation Chauffeur`,
        carrierCode: 'CAB-SUV-PREMIUM',
        routeName: `${cleanOrigin} Doorstep → Direct Hotel in ${dest.name}`,
        originName: cleanOrigin,
        destinationName: `Hotel Doorstep in ${dest.name}`,
        price: 85,
        durationMinutes: 390,
        departureTime: 'On-Demand / Scheduled Time',
        arrivalTime: 'Door-to-Door Direct',
        transfers: 0,
        comfortLevel: 'First Class',
        distanceKm: 430,
        bookingStatus: 'Available',
        emissionsKg: 28,
        cabinClass: 'Toyota Innova Crysta Luxury Captain Seats',
        baggageAllowance: 'Up to 5 Large Suitcases',
        gateOrPlatform: 'Doorstep Pickup & Luggage Assist',
        rating: 4.8,
        reviewCount: 1220,
        amenities: ['Door-to-Door Service', 'English/Hindi Speaking Driver', 'Chilled Bottled Water', 'Toll & State Taxes Included'],
        details: 'White-glove private vehicle with dedicated courteous driver. Rest, work, or sleep comfortably without any transit changes.'
      },
      // 6. Shared / Group Transfer
      {
        id: `shared-${destId}-${originSlug}`,
        type: 'transit',
        provider: `${dest.name} Shared Express Shuttle & Mini-Coach`,
        carrierCode: 'SHUTTLE-MINI',
        routeName: `${cleanOrigin} Transit Hub → ${dest.name} Key Hotel Drops`,
        originName: cleanOrigin,
        destinationName: `${dest.name} Hotel Corridor`,
        price: 18,
        durationMinutes: 450,
        departureTime: '08:00 AM & 02:00 PM',
        arrivalTime: 'Scheduled',
        transfers: 0,
        comfortLevel: 'Standard',
        distanceKm: 420,
        bookingStatus: 'Available',
        emissionsKg: 10,
        cabinClass: 'Air-Conditioned Force Urbania / Tempo Traveler',
        baggageAllowance: '1 Large Bag + 1 Backpack',
        gateOrPlatform: 'Airport / Station Pickup Bay',
        rating: 4.2,
        reviewCount: 650,
        amenities: ['Guaranteed AC', 'Central Hotel Drop', 'Budget Friendly', 'Spacious Legroom'],
        details: 'Economical shared express shuttle for solo travelers and small groups seeking direct comfortable transport at low rates.'
      }
    ];
  }

  // 🌎 INTERNATIONAL DESTINATIONS
  let flightProvider = 'Emirates / Singapore Airlines';
  let flightCarrier = 'EK 202';
  let flightDestName = `${dest.name} International Airport`;
  let flightRouteStr = `${cleanOrigin} → ${dest.name} Int\'l (Direct / 1-Stop)`;
  let trainProvider = 'High-Speed Rail Express';
  let trainCarrier = 'HSR-101';
  let trainRouteStr = `${cleanOrigin} Rail Terminal → ${dest.name} Central`;
  let flightPrice = 750;
  let flightDuration = 820;

  if (destId === 'bali') {
    flightProvider = 'Garuda Indonesia / Singapore Airlines';
    flightCarrier = 'GA 881';
    flightDestName = 'Denpasar Ngurah Rai (DPS), Bali';
    flightRouteStr = `${cleanOrigin} → Denpasar (DPS) Airport`;
    trainProvider = 'Bali Fast Maritime Ferry & Catamaran';
    trainCarrier = 'BALI-SEA 1';
    trainRouteStr = 'Sanur Port → Nusa Penida / Padang Bai → Gili Islands';
    flightPrice = 690;
  } else if (destId === 'maldives') {
    flightProvider = 'Emirates / Qatar Airways / SriLankan';
    flightCarrier = 'QR 672';
    flightDestName = 'Velana International Malé (MLE)';
    flightRouteStr = `${cleanOrigin} → Malé (MLE) + Resort Seaplane Transfer`;
    trainProvider = 'Trans Maldivian Twin-Otter Seaplane & Speedboat';
    trainCarrier = 'TMA-FLY 4';
    trainRouteStr = 'Malé Seaplane Terminal → Private Island Atoll Jetty';
    flightPrice = 850;
  } else if (destId === 'singapore') {
    flightProvider = 'Singapore Airlines (World\'s Best Airline)';
    flightCarrier = 'SQ 25';
    flightDestName = 'Singapore Changi Airport (SIN)';
    flightRouteStr = `${cleanOrigin} → Singapore Changi (SIN)`;
    trainProvider = 'SMRT Mass Rapid Transit & Express Link';
    trainCarrier = 'MRT-EW';
    trainRouteStr = 'Changi Airport Station → Marina Bay / City Hall';
    flightPrice = 720;
  } else if (destId === 'thailand') {
    flightProvider = 'Thai Airways / Singapore Airlines';
    flightCarrier = 'TG 911';
    flightDestName = 'Bangkok Suvarnabhumi (BKK) / Phuket (HKT)';
    flightRouteStr = `${cleanOrigin} → Bangkok Suvarnabhumi (BKK)`;
    trainProvider = 'State Railway of Thailand (SRT) High-Speed Line';
    trainCarrier = 'SRT-EXP 9';
    trainRouteStr = 'Krung Thep Aphiwat Central → Chiang Mai / Hua Hin';
    flightPrice = 650;
  } else if (destId === 'japan') {
    flightProvider = 'All Nippon Airways (ANA) / Japan Airlines';
    flightCarrier = 'NH 107';
    flightDestName = 'Tokyo Haneda (HND) / Narita (NRT)';
    flightRouteStr = `${cleanOrigin} → Tokyo Haneda (HND) / Narita (NRT)`;
    trainProvider = 'JR Tokaido Shinkansen (Nozomi Bullet Train 285 km/h)';
    trainCarrier = 'JR Nozomi 221';
    trainRouteStr = 'Tokyo Station Platform 14 → Kyoto Central / Shin-Osaka';
    flightPrice = 780;
  } else if (destId === 'south_korea') {
    flightProvider = 'Korean Air / Asiana Airlines';
    flightCarrier = 'KE 086';
    flightDestName = 'Seoul Incheon International (ICN)';
    flightRouteStr = `${cleanOrigin} → Seoul Incheon (ICN)`;
    trainProvider = 'KTX High-Speed Bullet Rail (305 km/h)';
    trainCarrier = 'KTX-SANCHEON 105';
    trainRouteStr = 'Seoul Station Track 4 → Busan / Gangneung Olympic Line';
    flightPrice = 740;
  } else if (destId === 'dubai') {
    flightProvider = 'Emirates Airline (Fly Better)';
    flightCarrier = 'EK 204';
    flightDestName = 'Dubai International Airport (DXB)';
    flightRouteStr = `${cleanOrigin} → Dubai International (DXB)`;
    trainProvider = 'Dubai Metro Driverless Red Line & Tram';
    trainCarrier = 'DXB-METRO';
    trainRouteStr = 'DXB Terminal 3 Station → Burj Khalifa / Dubai Mall';
    flightPrice = 680;
  } else if (destId === 'switzerland') {
    flightProvider = 'Swiss International Air Lines (SWISS)';
    flightCarrier = 'LX 19';
    flightDestName = 'Zurich Airport (ZRH) / Geneva (GVA)';
    flightRouteStr = `${cleanOrigin} → Zurich (ZRH) + SBB Alpine Rail`;
    trainProvider = 'Glacier Express & SBB Swiss Federal Railways';
    trainCarrier = 'SBB IC 831';
    trainRouteStr = 'Zurich HB → Visp → Zermatt Alpine Terminal';
    flightPrice = 750;
  } else if (destId === 'paris') {
    flightProvider = 'Air France (SkyTeam Flagship)';
    flightCarrier = 'AF 023';
    flightDestName = 'Paris Charles de Gaulle (CDG) / Orly (ORY)';
    flightRouteStr = `${cleanOrigin} → Paris Charles de Gaulle (CDG)`;
    trainProvider = 'SNCF TGV INOUI High-Speed Rail (320 km/h)';
    trainCarrier = 'TGV 6605';
    trainRouteStr = 'Gare de Lyon / Gare du Nord → Bordeaux / Provence';
    flightPrice = 710;
  } else if (destId === 'australia') {
    flightProvider = 'Qantas Airways / Singapore Airlines';
    flightCarrier = 'QF 12';
    flightDestName = 'Sydney Kingsford Smith (SYD)';
    flightRouteStr = `${cleanOrigin} → Sydney Kingsford Smith (SYD)`;
    trainProvider = 'NSW TrainLink & Sydney Harbour Ferry Fleet';
    trainCarrier = 'SYD-FERRY F1';
    trainRouteStr = 'Circular Quay Wharf 3 → Manly Beach / Darling Harbour';
    flightPrice = 980;
    flightDuration = 1120;
  } else {
    // Amalfi Coast
    flightProvider = 'ITA Airways / Lufthansa';
    flightCarrier = 'AZ 1264';
    flightDestName = 'Naples Capodichino (NAP) + Hydrofoil';
    flightRouteStr = `${cleanOrigin} → Naples (NAP) + Amalfi Water Shuttle`;
    trainProvider = 'Frecciarossa 1000 High-Speed Rail (300 km/h)';
    trainCarrier = 'FR 9523';
    trainRouteStr = 'Roma Termini → Salerno Central + Fast Catamaran Pier';
    flightPrice = 720;
  }

  return [
    // 1. Flight
    {
      id: `flight-${destId}-${originSlug}`,
      type: 'flight',
      provider: flightProvider,
      carrierCode: flightCarrier,
      routeName: flightRouteStr,
      originName: cleanOrigin,
      destinationName: flightDestName,
      price: flightPrice,
      durationMinutes: flightDuration,
      departureTime: '10:15 AM',
      arrivalTime: '02:40 PM (+1)',
      transfers: 1,
      comfortLevel: 'Premium',
      distanceKm: 9800,
      bookingStatus: 'Available',
      emissionsKg: 160,
      cabinClass: 'Economy / Premium Economy',
      baggageAllowance: '2 Checked Bags (23kg each) + 1 Carry-on',
      gateOrPlatform: 'Terminal 4, Gate B22',
      rating: 4.7,
      reviewCount: 4210,
      amenities: ['In-Flight Entertainment', 'Complimentary Multi-Course Meals', 'Free Rebooking', '23kg Hold Baggage'],
      details: `Flagship international scheduled service connecting ${cleanOrigin} to ${dest.name}. Modern wide-body aircraft with spacious legroom.`
    },
    // 2. High-Speed Rail / Panoramic Train
    {
      id: `train-${destId}-${originSlug}`,
      type: destId === 'maldives' || destId === 'bali' ? 'transit' : 'train',
      provider: trainProvider,
      carrierCode: trainCarrier,
      routeName: trainRouteStr,
      originName: cleanOrigin,
      destinationName: `${dest.name} Central Gateway`,
      price: destId === 'maldives' ? 180 : 85,
      durationMinutes: destId === 'maldives' ? 45 : 190,
      departureTime: '08:30 AM',
      arrivalTime: '11:40 AM',
      transfers: 0,
      comfortLevel: 'First Class',
      distanceKm: 260,
      bookingStatus: 'Good availability',
      emissionsKg: 8,
      cabinClass: 'First Class / Reserved Seat',
      baggageAllowance: 'Generous luggage racks with power outlets at seat',
      gateOrPlatform: 'Track 3 / Pier 1',
      rating: 4.8,
      reviewCount: 3100,
      amenities: ['Panoramic Scenery Windows', 'Quiet Working Zone', 'High-Speed Onboard WiFi', 'Dining Car Bar'],
      details: 'Punctual, zero-stress high-speed connection arriving right into the heart of the destination without airport security delays.'
    },
    // 3. Regional Coach / Bus
    {
      id: `bus-${destId}-${originSlug}`,
      type: 'bus',
      provider: `${dest.name} Regional Highway Coach & Express`,
      carrierCode: 'INTL-COACH',
      routeName: `${cleanOrigin} / Regional Hub → ${dest.name} Downtown Shuttle`,
      originName: cleanOrigin,
      destinationName: `${dest.name} Downtown`,
      price: 35,
      durationMinutes: 240,
      departureTime: 'Every Hour',
      arrivalTime: 'Scheduled',
      transfers: 0,
      comfortLevel: 'Standard',
      distanceKm: 180,
      bookingStatus: 'Available',
      emissionsKg: 14,
      cabinClass: 'Air-Conditioned Express Coach',
      baggageAllowance: '2 Large Suitcases per passenger',
      gateOrPlatform: 'Platform 4',
      rating: 4.3,
      reviewCount: 890,
      amenities: ['Free WiFi', 'USB Power Ports', 'Comfort Recline', 'Luggage Assistance'],
      details: 'Comfortable express highway coach offering budget travelers an economical, highly reliable alternative.'
    },
    // 4. Rental Car / Self-Drive
    {
      id: `selfdrive-${destId}-${originSlug}`,
      type: 'rental_car',
      provider: 'Europcar / Hertz International Rental',
      carrierCode: 'AUTO-RENT',
      routeName: `${cleanOrigin} Terminal → Scenic Drive to ${dest.name}`,
      originName: cleanOrigin,
      destinationName: `${dest.name} Destination`,
      price: 75,
      durationMinutes: 210,
      departureTime: 'Flexible Pickup',
      arrivalTime: 'Direct',
      transfers: 0,
      comfortLevel: 'Comfort',
      distanceKm: 210,
      bookingStatus: 'Available',
      emissionsKg: 32,
      cabinClass: 'Compact SUV / Premium Automatic Hybrid',
      baggageAllowance: '3 Large Bags + 2 Small Bags',
      gateOrPlatform: 'Rental Car Center Concourse',
      rating: 4.5,
      reviewCount: 1450,
      amenities: ['GPS Navigation Included', 'Unlimited Mileage', 'Air-Conditioning', 'Collision Damage Waiver'],
      details: 'Full flexibility to explore mountain passes, coastal routes, and secluded villages along your journey.'
    },
    // 5. VIP Private Chauffeur / Black Car
    {
      id: `taxi-${destId}-${originSlug}`,
      type: 'taxi',
      provider: `${dest.name} VIP Black Car Chauffeur`,
      carrierCode: 'VIP-SEDAN',
      routeName: `${cleanOrigin} Airport Terminal → Hotel Front Desk`,
      originName: cleanOrigin,
      destinationName: `Hotel in ${dest.name}`,
      price: 125,
      durationMinutes: 60,
      departureTime: 'On-Demand / Flight Tracking',
      arrivalTime: 'Direct',
      transfers: 0,
      comfortLevel: 'First Class',
      distanceKm: 55,
      bookingStatus: 'Available',
      emissionsKg: 18,
      cabinClass: 'Mercedes-Benz E-Class / Luxury Executive Van',
      baggageAllowance: '4 Large Bags + Carry-on',
      gateOrPlatform: 'Arrivals Hall Meet with Name Board',
      rating: 4.9,
      reviewCount: 1670,
      amenities: ['Flight Delay Tracking', '60 Min Complimentary Waiting', 'Bottled Mineral Water', 'Child Seats Available'],
      details: 'White-glove private greeting inside the terminal with luggage handling and direct transfer straight to your hotel reception.'
    },
    // 6. Shared Airport Transfer Shuttle
    {
      id: `shared-${destId}-${originSlug}`,
      type: 'transit',
      provider: `${dest.name} Airport Express Shared Shuttle`,
      carrierCode: 'AIR-SHUTTLE',
      routeName: `Arrivals Curbside → Hotel District Doorstops`,
      originName: cleanOrigin,
      destinationName: `${dest.name} Hotels`,
      price: 28,
      durationMinutes: 75,
      departureTime: 'Departs every 20 minutes',
      arrivalTime: 'Direct Drops',
      transfers: 0,
      comfortLevel: 'Standard',
      distanceKm: 50,
      bookingStatus: 'Available',
      emissionsKg: 12,
      cabinClass: 'Air-Conditioned Sprinter Van',
      baggageAllowance: '1 Checked Bag + 1 Handbag',
      gateOrPlatform: 'Shared Shuttle Lane 2',
      rating: 4.4,
      reviewCount: 780,
      amenities: ['Guaranteed Seat', 'Doorstep Hotel Drop', 'Luggage Loading Support', 'Low Flat Rate'],
      details: 'Cost-effective, dependable shared shuttle directly connecting arriving travelers to major city hotels.'
    }
  ];
}
