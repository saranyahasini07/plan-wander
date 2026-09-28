import React, { useState, useEffect } from 'react';
import { DESTINATIONS, HOTELS, TRANSPORTATION_OPTIONS, ATTRACTIONS, RESTAURANTS, generateTripOptions } from './data/mockData';
import { TripOption, UserPreferences, Destination, Hotel, TransportationOption, Attraction } from './types/travel';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TripPlanningWizard } from './components/TripPlanningWizard';
import { TripComparisonView } from './components/TripComparisonView';
import { ItineraryView } from './components/ItineraryView';
import { BudgetPlanner } from './components/BudgetPlanner';
import { BestTimeToVisitView } from './components/BestTimeToVisitView';
import { HotelBookingHub } from './components/HotelBookingHub';
import { TransportationHub } from './components/TransportationHub';
import { PlacesToVisitHub } from './components/PlacesToVisitHub';
import { RestaurantsHub } from './components/RestaurantsHub';
import { UserTripsModal } from './components/UserTripsModal';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  ChevronRight,
  TrendingDown,
  Layers
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardDestId, setWizardDestId] = useState('kyoto');
  const [wizardStartLocation, setWizardStartLocation] = useState('New York (JFK)');
  const [isUserTripsModalOpen, setIsUserTripsModalOpen] = useState(false);

  // User Preferences
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    destinationId: 'kyoto',
    startingLocation: 'New York (JFK)',
    startDate: '2026-10-12',
    endDate: '2026-10-16',
    preferredMonth: 'October 2026',
    travelers: { adults: 2, children: 0 },
    budgetTier: 'balanced',
    budgetAmount: 3500,
    currency: 'USD ($)',
    durationDays: 4,
    roomCount: 1,
    roomType: '1 King Bed / Double',
    preferredTransport: ['train', 'transit'],
    travelStyle: 'balanced',
    interests: ['historical', 'temples', 'nature', 'food', 'photography'],
    foodPreferences: ['Local Specialties', 'Authentic Food Markets'],
    accommodationPreferences: ['Boutique Hotel', 'Breakfast Included'],
    pace: 'moderate',
    specialRequirements: ''
  });

  // Generated Trip Options (5 options: Balanced, Budget, Luxury, Adventure, Relaxed)
  const [tripOptions, setTripOptions] = useState<TripOption[]>(() => {
    return generateTripOptions({
      destinationId: 'kyoto',
      startingLocation: 'New York (JFK)',
      startDate: '2026-10-12',
      endDate: '2026-10-16',
      preferredMonth: 'October 2026',
      travelers: { adults: 2, children: 0 },
      budgetTier: 'balanced',
      budgetAmount: 3500,
      currency: 'USD ($)',
      durationDays: 4,
      roomCount: 1,
      roomType: '1 King Bed / Double',
      preferredTransport: ['train', 'transit'],
      travelStyle: 'balanced',
      interests: ['historical', 'temples', 'nature', 'food'],
      foodPreferences: ['Local Specialties'],
      accommodationPreferences: ['Boutique Hotel'],
      pace: 'moderate',
      specialRequirements: ''
    });
  });

  // Currently selected active trip
  const [activeTrip, setActiveTrip] = useState<TripOption>(tripOptions[0]);

  // Saved trips & favorites in state (synced with localStorage)
  const [savedTrips, setSavedTrips] = useState<TripOption[]>(() => {
    try {
      const stored = localStorage.getItem('planwander_saved_trips') || localStorage.getItem('voyager_saved_trips');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [favoriteHotelIds, setFavoriteHotelIds] = useState<string[]>([]);
  const [favoriteAttractionIds, setFavoriteAttractionIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Sync saved trips to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('planwander_saved_trips', JSON.stringify(savedTrips));
    } catch (e) {
      console.error(e);
    }
  }, [savedTrips]);

  // Handle generating new trips from wizard
  const handleGenerateTrips = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    const newOptions = generateTripOptions(preferences);
    setTripOptions(newOptions);
    // Auto select balanced or first option
    const balancedOption = newOptions.find(o => o.type === preferences.budgetTier) || newOptions[0];
    setActiveTrip(balancedOption);
    setActiveTab('itinerary');
    showToast(`Generated 5 tailored options for ${preferences.durationDays} days in ${preferences.destinationId.toUpperCase()}!`);
  };

  // Handle open wizard with selected destination
  const handleOpenWizardWithDest = (destId: string) => {
    setWizardDestId(destId);
    setUserPreferences(prev => ({ ...prev, destinationId: destId }));
    setIsWizardOpen(true);
  };

  // Handle open wizard with route (start location + destination)
  const handleOpenWizardWithRoute = (startLocation: string, destId: string) => {
    setWizardDestId(destId);
    setWizardStartLocation(startLocation);
    setUserPreferences(prev => ({ ...prev, destinationId: destId, startingLocation: startLocation }));
    setIsWizardOpen(true);
  };

  // Handle explore destination
  const handleExploreDest = (dest: Destination) => {
    setUserPreferences(prev => ({ ...prev, destinationId: dest.id }));
    setActiveTab('explore');
  };

  // Handle save current trip
  const handleSaveCurrentTrip = () => {
    if (!savedTrips.some(t => t.id === activeTrip.id)) {
      setSavedTrips(prev => [...prev, { ...activeTrip, id: `saved-${Date.now()}` }]);
      showToast('Itinerary saved to your Plan & Wander trips hub!');
    } else {
      showToast('This itinerary is already in your saved trips.');
    }
  };

  // Handle delete trip
  const handleDeleteTrip = (tripId: string) => {
    setSavedTrips(prev => prev.filter(t => t.id !== tripId));
    showToast('Saved trip removed.');
  };

  // Handle toggle favorite attraction
  const handleToggleFavoriteAttraction = (id: string) => {
    setFavoriteAttractionIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
    showToast('Updated favorites list');
  };

  // Available data filtered for the active destination
  const currentDestId = activeTrip.hotel.destinationId || userPreferences.destinationId || 'kyoto';
  const availableHotels = HOTELS.filter(h => h.destinationId === currentDestId);
  const availableTransports = TRANSPORTATION_OPTIONS[currentDestId] || TRANSPORTATION_OPTIONS['kyoto'];
  const availableAttractions = ATTRACTIONS.filter(a => a.destinationId === currentDestId);
  const favoriteHotels = HOTELS.filter(h => favoriteHotelIds.includes(h.id));
  const favoriteAttractions = ATTRACTIONS.filter(a => favoriteAttractionIds.includes(a.id));

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-[100] bg-neutral-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-neutral-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global 3-Zone Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenWizard={() => {
          setWizardDestId(activeTrip.hotel.destinationId || 'kyoto');
          setIsWizardOpen(true);
        }}
        favoritesCount={favoriteHotelIds.length + favoriteAttractions.length}
        savedTripsCount={savedTrips.length}
        onOpenSavedTrips={() => setIsUserTripsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-20">
        
        {/* TAB 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Large Hero Section */}
            <HeroSection
              initialStartLocation={userPreferences.startingLocation}
              onOpenWizardWithRoute={handleOpenWizardWithRoute}
              onExploreDest={handleExploreDest}
            />

            {/* Side-by-Side Trip Comparison Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
              <TripComparisonView
                options={tripOptions}
                selectedTripId={activeTrip.id}
                onSelectTrip={(trip) => {
                  setActiveTrip(trip);
                  showToast(`Switched active plan to "${trip.title}"`);
                }}
                onCustomizeTrip={(trip) => {
                  setActiveTrip(trip);
                  setActiveTab('itinerary');
                }}
              />
            </div>

            {/* Editorial Capabilities Section (Zero-Slop, Anti-Pill) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="border-t border-neutral-200 pt-12">
                <div className="max-w-2xl mb-8">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    01. Intelligent Trip Architecture
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 font-display">
                    Designed Around Real Travel Economics
                  </h2>
                  <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                    Most travel apps force you to cross-reference multiple browser tabs for flights, hotels, and maps. Plan &amp; Wander synthesizes your budget, dates, group size, and travel style into complete, realistic daily schedules that adapt as you edit.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-800">
                  <div className="space-y-2 border-l-2 border-neutral-900 pl-4">
                    <h3 className="text-base font-bold text-neutral-900">
                      Proximity-Grouped Daily Schedules
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Attractions are clustered geographically to minimize backtracking and taxi expenses, giving you more time on site.
                    </p>
                  </div>

                  <div className="space-y-2 border-l-2 border-neutral-900 pl-4">
                    <h3 className="text-base font-bold text-neutral-900">
                      Live Budget Recalculation
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Every time you swap a hotel, change transit, or add an attraction, the total trip cost and remaining budget update instantly.
                    </p>
                  </div>

                  <div className="space-y-2 border-l-2 border-neutral-900 pl-4">
                    <h3 className="text-base font-bold text-neutral-900">
                      Multi-Modal Transit &amp; Door-to-Door Routing
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Connects high-speed rail, regional trains, and direct flights calibrated specifically to your starting departure terminal.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: EXPLORE & BEST TIME TO VISIT */}
        {activeTab === 'explore' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
            <BestTimeToVisitView
              initialDestinationId={currentDestId}
              userSelectedMonth={userPreferences.preferredMonth}
              onSelectDestination={(dest) => {
                setUserPreferences(prev => ({ ...prev, destinationId: dest.id }));
              }}
              onApplyIdealMonth={(idealMonth) => {
                setUserPreferences(prev => ({ ...prev, preferredMonth: idealMonth }));
                showToast(`Updated target travel month to ${idealMonth}`);
              }}
            />

            {/* Places Catalog */}
            <div className="pt-8 border-t border-neutral-200">
              <PlacesToVisitHub
                currentDestinationId={currentDestId}
                savedAttractionIds={favoriteAttractionIds}
                onToggleSaveAttraction={handleToggleFavoriteAttraction}
                onAddAttractionToItinerary={(attr) => {
                  const updatedDays = [...activeTrip.dailySchedule];
                  if (updatedDays.length > 0) {
                    updatedDays[0].activities.push({
                      id: `act-add-${Date.now()}`,
                      title: attr.name,
                      timeSlot: '04:00 PM',
                      durationMinutes: attr.recommendedDurationMinutes,
                      category: attr.category,
                      locationName: attr.name,
                      coordinates: attr.coordinates,
                      notes: attr.description,
                      cost: attr.entryFee
                    });
                    setActiveTrip({ ...activeTrip, dailySchedule: updatedDays });
                    showToast(`Added "${attr.name}" to Day 1 of your active itinerary!`);
                  }
                }}
              />
            </div>
          </div>
        )}

        {/* TAB 3: ITINERARY BUILDER & BUDGET PLANNER */}
        {activeTab === 'itinerary' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Itinerary Schedule & Map View */}
            <ItineraryView
              trip={activeTrip}
              availableHotels={availableHotels}
              availableTransports={availableTransports}
              availableAttractions={availableAttractions}
              onUpdateTrip={(updated) => {
                setActiveTrip(updated);
                setTripOptions(prev => prev.map(t => t.id === updated.id ? updated : t));
                showToast('Itinerary and trip costs recalculated.');
              }}
            />

            {/* Interactive Budget Breakdown */}
            <BudgetPlanner
              trip={activeTrip}
              targetBudget={userPreferences.budgetAmount}
              travelersCount={(userPreferences.travelers?.adults || 2) + (userPreferences.travelers?.children || 0)}
              onApplySavings={(suggestion) => {
                showToast(`Applied optimization: ${suggestion}`);
              }}
            />
          </div>
        )}

        {/* TAB 4: HOTELS HUB */}
        {activeTab === 'hotels' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <HotelBookingHub
              currentDestinationId={currentDestId}
              tripDurationDays={activeTrip.daysCount}
              selectedHotelId={activeTrip.hotel.id}
              onSelectHotelForTrip={(hotel) => {
                const diff = (hotel.pricePerNight - activeTrip.hotel.pricePerNight) * activeTrip.daysCount;
                const updated = {
                  ...activeTrip,
                  hotel,
                  totalEstimatedCost: Math.max(100, activeTrip.totalEstimatedCost + diff),
                  budgetBreakdown: {
                    ...activeTrip.budgetBreakdown,
                    hotel: hotel.pricePerNight * activeTrip.daysCount
                  }
                };
                setActiveTrip(updated);
                setTripOptions(prev => prev.map(t => t.id === updated.id ? updated : t));
                showToast(`Selected "${hotel.name}" for your active trip itinerary!`);
              }}
            />
          </div>
        )}

        {/* TAB 5: TRANSPORTATION HUB */}
        {activeTab === 'transport' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <TransportationHub
              currentDestinationId={currentDestId}
              startLocation={userPreferences.startingLocation}
              selectedTransportId={activeTrip.transportation.id}
              travelersCount={(userPreferences.travelers?.adults || 2) + (userPreferences.travelers?.children || 0)}
              onChangeStartLocation={(newOrigin) => {
                setUserPreferences(prev => ({ ...prev, startingLocation: newOrigin }));
                const updatedOptions = generateTripOptions({
                  ...userPreferences,
                  startingLocation: newOrigin
                });
                setTripOptions(updatedOptions);
                const matching = updatedOptions.find(t => t.type === activeTrip.type) || updatedOptions[0];
                setActiveTrip(matching);
                showToast(`Re-calculated flights and trains from ${newOrigin}`);
              }}
              onSelectTransportForTrip={(trans) => {
                const travelers = (userPreferences.travelers?.adults || 2) + (userPreferences.travelers?.children || 0);
                const diff = (trans.price - activeTrip.transportation.price) * travelers;
                const updated = {
                  ...activeTrip,
                  transportation: trans,
                  totalEstimatedCost: Math.max(100, activeTrip.totalEstimatedCost + diff),
                  budgetBreakdown: {
                    ...activeTrip.budgetBreakdown,
                    transport: trans.price * travelers
                  }
                };
                setActiveTrip(updated);
                setTripOptions(prev => prev.map(t => t.id === updated.id ? updated : t));
                showToast(`Selected & reserved "${trans.provider}" for your itinerary!`);
              }}
            />
          </div>
        )}

      </main>

      {/* 8-Step Interactive Planning Wizard Modal */}
      <TripPlanningWizard
        initialDestinationId={wizardDestId}
        initialStartLocation={wizardStartLocation}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onGenerateTrips={handleGenerateTrips}
      />

      {/* User Saved Trips & Export Modal */}
      <UserTripsModal
        isOpen={isUserTripsModalOpen}
        onClose={() => setIsUserTripsModalOpen(false)}
        savedTrips={savedTrips}
        activeTrip={activeTrip}
        favoriteHotels={favoriteHotels}
        favoriteAttractions={favoriteAttractions}
        onLoadTrip={(trip) => {
          setActiveTrip(trip);
          setActiveTab('itinerary');
          showToast(`Loaded "${trip.title}"`);
        }}
        onDeleteTrip={handleDeleteTrip}
        onSaveCurrentTrip={handleSaveCurrentTrip}
      />

      {/* Quiet Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px]">
              P&amp;W
            </span>
            <span className="font-bold text-neutral-900">Plan &amp; Wander</span>
            <span>— Intelligent Multi-Option Travel Platform</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('home')} className="hover:text-neutral-900 cursor-pointer">Home</button>
            <button onClick={() => setActiveTab('explore')} className="hover:text-neutral-900 cursor-pointer">Destinations</button>
            <button onClick={() => setActiveTab('itinerary')} className="hover:text-neutral-900 cursor-pointer">Itinerary</button>
            <button onClick={() => setActiveTab('hotels')} className="hover:text-neutral-900 cursor-pointer">Hotels</button>
            <button onClick={() => setActiveTab('transport')} className="hover:text-neutral-900 cursor-pointer">Transit</button>
            <button onClick={() => setIsUserTripsModalOpen(true)} className="hover:text-neutral-900 cursor-pointer">Saved Trips</button>
          </div>

          <div className="text-neutral-400">
            © 2026 Plan &amp; Wander. All demo booking and pricing simulated for planning.
          </div>
        </div>
      </footer>

    </div>
  );
}
