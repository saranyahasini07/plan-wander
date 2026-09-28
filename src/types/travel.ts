export type TravelStyle = 'fast' | 'balanced' | 'relaxed';
export type BudgetTier = 'budget' | 'balanced' | 'luxury';
export type TransportType = 'flight' | 'train' | 'bus' | 'taxi' | 'rental_car' | 'transit';
export type AttractionCategory = 
  | 'historical' 
  | 'nature' 
  | 'beaches' 
  | 'mountains' 
  | 'adventure' 
  | 'shopping' 
  | 'food' 
  | 'museums' 
  | 'temples' 
  | 'nightlife' 
  | 'photography' 
  | 'hidden_gem' 
  | 'family';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'cafe' | 'street_food' | 'fine_dining';

export interface BestTimeInfo {
  bestMonths: string[];
  peakSeason: string;
  offSeason: string;
  shoulderSeason: string;
  weatherSummary: string;
  avgTempC: { high: number; low: number };
  rainfallMm: number;
  crowdLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  priceDifferencePercent: string;
  majorFestivals: Array<{ name: string; month: string; description: string }>;
  seasonalAttractions: string[];
  tipsForVisitors: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  heroImage: string;
  coordinates: [number, number]; // [lat, lng]
  bestTime: BestTimeInfo;
  popularInterests: AttractionCategory[];
  startingPricePerDay: number;
}

export interface RoomOption {
  type: string;
  capacity: string;
  pricePerNight: number;
  bedType: string;
}

export interface Hotel {
  id: string;
  name: string;
  destinationId: string;
  starRating: number;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  image: string;
  roomTypes: RoomOption[];
  amenities: string[];
  cancellationPolicy: string;
  distanceFromAttractions: string;
  coordinates: [number, number];
  address: string;
  tags: string[];
  breakfastIncluded: boolean;
  freeCancellation: boolean;
  description?: string;
  images?: string[];
  travelerReview?: TravelerReviewQuote;
}

export interface TransportationOption {
  id: string;
  type: TransportType;
  provider: string;
  routeName: string;
  price: number;
  durationMinutes: number;
  departureTime: string;
  arrivalTime: string;
  transfers: number;
  comfortLevel: 'Standard' | 'Comfort' | 'Premium' | 'First Class';
  distanceKm: number;
  bookingStatus: 'Available' | 'Few seats left' | 'Good availability';
  emissionsKg?: number;
  details?: string;
  carrierCode?: string;
  originName?: string;
  destinationName?: string;
  cabinClass?: string;
  baggageAllowance?: string;
  gateOrPlatform?: string;
  rating?: number;
  reviewCount?: number;
  amenities?: string[];
}

export interface LocalTransitOption {
  id: string;
  name: string;
  type: 'metro' | 'bus' | 'taxi' | 'auto_rickshaw' | 'scooter_rental' | 'car_rental' | 'walking';
  costRange: string;
  durationOrFrequency: string;
  bestFor: string;
  description: string;
  operatingHours: string;
  tips: string;
}

export interface TravelerReviewQuote {
  author: string;
  rating: number;
  text: string;
  date?: string;
  travelerType?: string;
}

export interface Attraction {
  id: string;
  destinationId: string;
  name: string;
  category: AttractionCategory;
  description: string;
  image: string;
  images?: string[];
  entryFee: number;
  openingHours: string;
  recommendedDurationMinutes: number;
  bestTimeOfDay: string;
  distanceFromCenterKm: number;
  crowdLevel: 'Low' | 'Moderate' | 'High';
  coordinates: [number, number];
  tags: string[];
  rating?: number;
  reviewCount?: number;
  travelerReview?: TravelerReviewQuote;
}

export interface Restaurant {
  id: string;
  destinationId: string;
  name: string;
  cuisine: string;
  priceLevel: '$' | '$$' | '$$$' | '$$$$';
  rating: number;
  reviewCount?: number;
  mealType: MealType;
  dietaryOptions: string[]; // ['Vegetarian', 'Vegan', 'Halal', 'Gluten-Free']
  distanceFromCenterKm: number;
  coordinates: [number, number];
  specialtyDish: string;
  popularDishes?: string[];
  address: string;
  image: string;
  images?: string[];
  travelerReview?: TravelerReviewQuote;
  tags?: string[];
}

export interface ItineraryActivity {
  id: string;
  title: string;
  timeSlot: string; // e.g. "09:30 AM"
  durationMinutes: number;
  category: AttractionCategory | 'food' | 'logistics' | 'relaxation';
  locationName: string;
  coordinates: [number, number];
  notes?: string;
  cost: number;
  travelTimeToNextMinutes?: number;
  travelDistanceKm?: number;
  transitModeToNext?: string;
  attractionRefId?: string;
  restaurantRefId?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  dateStr: string;
  title: string;
  theme: string;
  activities: ItineraryActivity[];
}

export interface BudgetBreakdown {
  transport: number;
  hotel: number;
  food: number;
  activities: number;
  shopping: number;
  localTransit: number;
  misc: number;
}

export interface TripOption {
  id: string;
  title: string;
  type: 'budget' | 'balanced' | 'luxury' | 'adventure' | 'relaxed' | 'custom';
  tagline: string;
  whyItMatches: string;
  totalEstimatedCost: number;
  daysCount: number;
  hotel: Hotel;
  transportation: TransportationOption;
  placesCount: number;
  activitiesCount: number;
  foodSuggestions: Restaurant[];
  dailySchedule: ItineraryDay[];
  estimatedDailySpending: number;
  pros: string[];
  considerations: string[];
  budgetBreakdown: BudgetBreakdown;
}

export interface UserPreferences {
  destinationId: string;
  startingLocation: string;
  startDate: string;
  endDate: string;
  preferredMonth: string;
  travelers: {
    adults: number;
    children: number;
  };
  budgetTier: BudgetTier;
  budgetAmount: number;
  currency: string;
  durationDays: number;
  roomCount: number;
  roomType: string;
  preferredTransport: TransportType[];
  travelStyle: TravelStyle;
  interests: AttractionCategory[];
  foodPreferences: string[];
  accommodationPreferences: string[];
  pace: 'relaxed' | 'moderate' | 'packed';
  specialRequirements: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  savedTrips: TripOption[];
  favoriteHotelIds: string[];
  favoriteAttractionIds: string[];
  defaultCurrency: string;
  preferences?: Partial<UserPreferences>;
}
