import { 
  TripOption, 
  UserPreferences,
  ItineraryDay,
  ItineraryActivity 
} from '../types/travel';

import heroJourneyImg from '../assets/images/hero_travel_journey_1790596880284.jpg';

export { DESTINATIONS, INDIA_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from './destinationsData';
export { HOTELS } from './hotelsData';
export { ATTRACTIONS } from './attractionsData';
export { RESTAURANTS } from './restaurantsData';
export { getTransportationForRoute } from './transportData';

import { DESTINATIONS } from './destinationsData';
import { HOTELS } from './hotelsData';
import { ATTRACTIONS } from './attractionsData';
import { RESTAURANTS } from './restaurantsData';
import { getTransportationForRoute } from './transportData';

export const HERO_IMAGE = heroJourneyImg;

// Default starter transportation options
export const TRANSPORTATION_OPTIONS = getTransportationForRoute('New York (JFK)', 'goa');

// Helper to generate 5 distinct personalized trip options
export function generateTripOptions(prefs: UserPreferences): TripOption[] {
  // Support aliases: if destId was 'kyoto', map to 'japan'
  let destId = prefs.destinationId || 'goa';
  if (destId === 'kyoto') destId = 'japan';
  if (destId === 'swiss_alps') destId = 'switzerland';

  const dest = DESTINATIONS.find(d => d.id === destId) || DESTINATIONS[0];
  
  // Safe hotel filtering with robust fallback
  let hotelsForDest = HOTELS.filter(h => h.destinationId === destId);
  if (hotelsForDest.length === 0) {
    hotelsForDest = HOTELS.slice(0, 3);
  }

  // Safe transportation options
  const transForDest = getTransportationForRoute(prefs.startingLocation || 'New York (JFK)', destId);
  
  // Safe attractions filtering with fallback
  let attrsForDest = ATTRACTIONS.filter(a => a.destinationId === destId);
  if (attrsForDest.length === 0) {
    attrsForDest = ATTRACTIONS.slice(0, 4);
  }

  // Safe restaurants filtering with fallback
  let restsForDest = RESTAURANTS.filter(r => r.destinationId === destId);
  if (restsForDest.length === 0) {
    restsForDest = RESTAURANTS.slice(0, 3);
  }

  const duration = prefs.durationDays || 4;
  const numTravelers = (prefs.travelers?.adults || 2) + (prefs.travelers?.children || 0);

  // 1. Budget Option
  const budgetHotel = hotelsForDest.find(h => h.tags.includes('budget')) || hotelsForDest[hotelsForDest.length - 1];
  const budgetTrans = transForDest.find(t => t.type === 'bus' || t.price < 50) || transForDest[1] || transForDest[0];
  const budgetFoodCost = 25 * duration * numTravelers;
  const budgetActCost = 15 * duration * numTravelers;
  const budgetHotelTotal = budgetHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const budgetTransTotal = budgetTrans.price * numTravelers;
  const budgetTransitCost = 10 * duration * numTravelers;
  const budgetMisc = 30 * numTravelers;
  const budgetShopping = 25 * numTravelers;
  const budgetTotal = budgetHotelTotal + budgetTransTotal + budgetFoodCost + budgetActCost + budgetTransitCost + budgetMisc + budgetShopping;

  // 2. Balanced Option (Recommended)
  const balancedHotel = hotelsForDest.find(h => h.tags.includes('balanced')) || hotelsForDest[1] || hotelsForDest[0];
  const balancedTrans = transForDest.find(t => t.type === 'train' || (t.price >= 40 && t.price <= 120)) || transForDest[0];
  const balancedFoodCost = 45 * duration * numTravelers;
  const balancedActCost = 35 * duration * numTravelers;
  const balancedHotelTotal = balancedHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const balancedTransTotal = balancedTrans.price * numTravelers;
  const balancedTransitCost = 20 * duration * numTravelers;
  const balancedMisc = 60 * numTravelers;
  const balancedShopping = 70 * numTravelers;
  const balancedTotal = balancedHotelTotal + balancedTransTotal + balancedFoodCost + balancedActCost + balancedTransitCost + balancedMisc + balancedShopping;

  // 3. Comfort / Luxury Option
  const luxuryHotel = hotelsForDest.find(h => h.tags.includes('luxury')) || hotelsForDest[0];
  const luxuryTrans = transForDest.find(t => t.type === 'taxi' || t.comfortLevel === 'First Class' || t.comfortLevel === 'Premium') || transForDest[0];
  const luxuryFoodCost = 110 * duration * numTravelers;
  const luxuryActCost = 75 * duration * numTravelers;
  const luxuryHotelTotal = luxuryHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const luxuryTransTotal = luxuryTrans.price * numTravelers;
  const luxuryTransitCost = 45 * duration * numTravelers;
  const luxuryMisc = 120 * numTravelers;
  const luxuryShopping = 180 * numTravelers;
  const luxuryTotal = luxuryHotelTotal + luxuryTransTotal + luxuryFoodCost + luxuryActCost + luxuryTransitCost + luxuryMisc + luxuryShopping;

  // 4. Adventure Option
  const adventureHotel = hotelsForDest.find(h => h.tags.includes('adventure') || h.tags.includes('nature') || h.tags.includes('boutique')) || balancedHotel;
  const adventureTrans = balancedTrans;
  const adventureFoodCost = 40 * duration * numTravelers;
  const adventureActCost = 60 * duration * numTravelers;
  const adventureHotelTotal = adventureHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const adventureTransTotal = adventureTrans.price * numTravelers;
  const adventureTransitCost = 25 * duration * numTravelers;
  const adventureMisc = 50 * numTravelers;
  const adventureShopping = 45 * numTravelers;
  const adventureTotal = adventureHotelTotal + adventureTransTotal + adventureFoodCost + adventureActCost + adventureTransitCost + adventureMisc + adventureShopping;

  // 5. Relaxed Option
  const relaxedHotel = balancedHotel;
  const relaxedTrans = balancedTrans;
  const relaxedFoodCost = 50 * duration * numTravelers;
  const relaxedActCost = 25 * duration * numTravelers;
  const relaxedHotelTotal = relaxedHotel.pricePerNight * duration * (prefs.roomCount || 1);
  const relaxedTransTotal = relaxedTrans.price * numTravelers;
  const relaxedTransitCost = 15 * duration * numTravelers;
  const relaxedMisc = 45 * numTravelers;
  const relaxedShopping = 60 * numTravelers;
  const relaxedTotal = relaxedHotelTotal + relaxedTransTotal + relaxedFoodCost + relaxedActCost + relaxedTransitCost + relaxedMisc + relaxedShopping;

  // Build schedules
  const buildDailySchedule = (style: 'budget' | 'balanced' | 'luxury' | 'adventure' | 'relaxed'): ItineraryDay[] => {
    const days: ItineraryDay[] = [];
    const mainHotel = style === 'budget' ? budgetHotel : style === 'luxury' ? luxuryHotel : balancedHotel;
    
    for (let d = 1; d <= duration; d++) {
      let activities: ItineraryActivity[] = [];
      const attr1 = attrsForDest[(d * 2 - 2) % attrsForDest.length] || attrsForDest[0];
      const attr2 = attrsForDest[(d * 2 - 1) % attrsForDest.length] || attrsForDest[1] || attr1;
      const lunchRest = restsForDest[d % restsForDest.length] || restsForDest[0];
      const dinnerRest = restsForDest[(d + 1) % restsForDest.length] || restsForDest[0];

      if (d === 1) {
        // Arrival day
        activities = [
          {
            id: `act-${d}-1`,
            title: `Arrival in ${dest.name} & Welcome Reception`,
            timeSlot: '09:30 AM',
            durationMinutes: 60,
            category: 'logistics',
            locationName: `${dest.name} Gateway Terminal`,
            coordinates: dest.coordinates,
            notes: 'Collect transit cards, meet local concierge or transfer shuttle.',
            cost: 0,
            travelTimeToNextMinutes: 25,
            travelDistanceKm: 3.2,
            transitModeToNext: 'Express Transfer'
          },
          {
            id: `act-${d}-2`,
            title: `Check-in & Refreshment at ${mainHotel.name}`,
            timeSlot: '11:00 AM',
            durationMinutes: 45,
            category: 'relaxation',
            locationName: mainHotel.name,
            coordinates: mainHotel.coordinates,
            notes: 'Unpack, refresh, and receive local neighborhood orientation.',
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
            transitModeToNext: 'Walking & Transit'
          },
          {
            id: `act-${d}-5`,
            title: `Sunset Golden Hour Walk at ${attr2.name}`,
            timeSlot: '05:30 PM',
            durationMinutes: 60,
            category: 'photography',
            locationName: attr2.name,
            coordinates: attr2.coordinates,
            notes: 'Prime photographic illumination and serene atmosphere.',
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
            cost: style === 'luxury' ? 85 : style === 'budget' ? 15 : 35,
            travelTimeToNextMinutes: 20,
            travelDistanceKm: 2.0,
            transitModeToNext: 'Return Transfer to Hotel'
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
            notes: 'Fresh morning breakfast followed by packing.',
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
            transitModeToNext: 'Local Transit'
          },
          {
            id: `act-${d}-3`,
            title: 'Souvenir & Artisanal Gift Shopping',
            timeSlot: '12:00 PM',
            durationMinutes: 60,
            category: 'shopping',
            locationName: 'Local Bazaar & Artisan Quarter',
            coordinates: dest.coordinates,
            notes: 'Pick up local crafts, spices, textiles, and keepsakes.',
            cost: 25,
            travelTimeToNextMinutes: 25,
            travelDistanceKm: 3.5,
            transitModeToNext: 'Gateway Transfer'
          },
          {
            id: `act-${d}-4`,
            title: `Depart from ${dest.name} for Return Journey`,
            timeSlot: '02:00 PM',
            durationMinutes: 60,
            category: 'logistics',
            locationName: `${dest.name} Departure Hub`,
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
            transitModeToNext: 'Local Transit'
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
            cost: style === 'luxury' ? 45 : style === 'budget' ? 12 : 24,
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
            title: style === 'adventure' ? 'Active Outdoor Trail' : style === 'relaxed' ? 'Tranquil Gardens & Tea Rest' : 'Local Craft & Heritage Walk',
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
            notes: `Dinner with local specialties. Cuisine: ${dinnerRest.cuisine}`,
            cost: style === 'luxury' ? 85 : style === 'budget' ? 18 : 36,
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
      whyItMatches: `Combines top-rated boutique stay near central attractions (${balancedHotel.name}) with convenient transit (${balancedTrans.routeName}), giving you optimal travel efficiency and rich cultural sights.`,
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
        'Handpicked boutique hotel within close proximity to prime landmarks',
        'High-speed seamless transport with reserved seating',
        'Curated top-tier sights and celebrated culinary recommendations'
      ],
      considerations: [
        'Popular restaurant tables recommended ahead of time during peak season',
        'Some walking required between historic alleyways and vistas'
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
        'Comfort-tier hostel/lodge with compact private rooms',
        'Longer transit duration with highway coach or train'
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
      tagline: 'Five-star indulgence, private chauffeurs & fine dining',
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
        'Fine-dining venues enforce smart-casual dress codes'
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
        'Requires moderate physical fitness and comfortable footwear',
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
        'May skip certain distant sights in favor of local calm'
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
