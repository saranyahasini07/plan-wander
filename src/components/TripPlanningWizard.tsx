import React, { useState } from 'react';
import { DESTINATIONS } from '../data/mockData';
import { UserPreferences, AttractionCategory, TransportType, BudgetTier } from '../types/travel';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Wallet, 
  Heart, 
  Train, 
  Home, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  AlertTriangle,
  Info,
  X
} from 'lucide-react';

interface TripPlanningWizardProps {
  initialDestinationId?: string;
  initialStartLocation?: string;
  isOpen: boolean;
  onClose: () => void;
  onGenerateTrips: (preferences: UserPreferences) => void;
}

export const TripPlanningWizard: React.FC<TripPlanningWizardProps> = ({
  initialDestinationId = 'kyoto',
  initialStartLocation = 'New York (JFK)',
  isOpen,
  onClose,
  onGenerateTrips
}) => {
  const [step, setStep] = useState(1);

  // Form State
  const [destinationId, setDestinationId] = useState(initialDestinationId);
  const [startingLocation, setStartingLocation] = useState(initialStartLocation);
  const [startDate, setStartDate] = useState('2026-10-12');
  const [endDate, setEndDate] = useState('2026-10-16');
  const [preferredMonth, setPreferredMonth] = useState('October 2026');
  const [durationDays, setDurationDays] = useState(5);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [roomType, setRoomType] = useState('1 King Bed / Double');
  const [budgetTier, setBudgetTier] = useState<BudgetTier>('balanced');
  const [budgetAmount, setBudgetAmount] = useState(3500);
  const [currency, setCurrency] = useState('USD ($)');
  const [interests, setInterests] = useState<AttractionCategory[]>([
    'historical', 'temples', 'nature', 'food', 'photography'
  ]);
  const [travelStyle, setTravelStyle] = useState<'fast' | 'balanced' | 'relaxed'>('balanced');
  const [pace, setPace] = useState<'relaxed' | 'moderate' | 'packed'>('moderate');
  const [preferredTransport, setPreferredTransport] = useState<TransportType[]>([
    'train', 'flight', 'transit'
  ]);
  const [accommodationPreferences, setAccommodationPreferences] = useState<string[]>([
    'Boutique Hotel', 'Breakfast Included', 'Centrally Located'
  ]);
  const [foodPreferences, setFoodPreferences] = useState<string[]>([
    'Local Specialties', 'Authentic Food Markets'
  ]);
  const [specialRequirements, setSpecialRequirements] = useState('');

  if (!isOpen) return null;

  const currentDest = DESTINATIONS.find(d => d.id === destinationId) || DESTINATIONS[0];

  // Check if selected travel month matches best time
  const isMonthIdeal = currentDest.bestTime.bestMonths.some(m => 
    preferredMonth.toLowerCase().includes(m.toLowerCase())
  );

  const toggleInterest = (interest: AttractionCategory) => {
    setInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const toggleTransport = (t: TransportType) => {
    setPreferredTransport(prev => 
      prev.includes(t) ? prev.filter(item => item !== t) : [...prev, t]
    );
  };

  const toggleFoodPref = (f: string) => {
    setFoodPreferences(prev => 
      prev.includes(f) ? prev.filter(item => item !== f) : [...prev, f]
    );
  };

  const handleFinalSubmit = () => {
    const preferences: UserPreferences = {
      destinationId,
      startingLocation,
      startDate,
      endDate,
      preferredMonth,
      durationDays,
      travelers: { adults, children },
      budgetTier,
      budgetAmount,
      currency,
      roomCount,
      roomType,
      preferredTransport,
      travelStyle,
      interests,
      foodPreferences,
      accommodationPreferences,
      pace,
      specialRequirements
    };
    onGenerateTrips(preferences);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header with Step Indicator */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/70">
          <div>
            <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
              <span>Step {step} of 8</span>
              <span>·</span>
              <span className="text-neutral-900 font-semibold">
                {step === 1 && 'Where are you going?'}
                {step === 2 && 'When are you traveling?'}
                {step === 3 && 'Who is traveling?'}
                {step === 4 && 'What is your budget?'}
                {step === 5 && 'What do you enjoy?'}
                {step === 6 && 'How do you want to travel?'}
                {step === 7 && 'Stays & Food preferences'}
                {step === 8 && 'Generate your trips'}
              </span>
            </div>
            <h2 className="text-lg font-bold text-neutral-900 font-display">
              {step === 1 && 'Select Destination & Departure'}
              {step === 2 && 'Dates, Duration & Seasonality'}
              {step === 3 && 'Travelers & Room Configurations'}
              {step === 4 && 'Trip Budget & Spending Comfort'}
              {step === 5 && 'Interests & Passion Points'}
              {step === 6 && 'Travel Style, Pace & Transport'}
              {step === 7 && 'Accommodation Style & Dietary Notes'}
              {step === 8 && 'Review & Generate Tailored Plans'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-neutral-100 h-1">
          <div 
            className="bg-neutral-900 h-1 transition-all duration-300"
            style={{ width: `${(step / 8) * 100}%` }}
          />
        </div>

        {/* Wizard Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* STEP 1: Destination & Starting Location */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Choose Target Destination
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DESTINATIONS.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => setDestinationId(dest.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        destinationId === dest.id
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                          : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-800'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{dest.name}</div>
                        <div className={`text-xs ${destinationId === dest.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {dest.country}
                        </div>
                      </div>
                      <div className={`text-[11px] mt-3 pt-2 border-t font-medium ${destinationId === dest.id ? 'border-neutral-700 text-amber-300' : 'border-neutral-100 text-neutral-600'}`}>
                        From ${dest.startingPricePerDay}/day
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Departure Starting Location (Airport or Train Station)</span>
                  </label>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                    Required for flight & train booking
                  </span>
                </div>
                
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Enter your departure city or airport/rail terminal. Plan &amp; Wander matches direct and connecting flights, high-speed rail lines, and ground transfers specific to this origin.
                </p>

                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={startingLocation}
                    onChange={(e) => setStartingLocation(e.target.value)}
                    placeholder="e.g. New York (JFK), Tokyo Station, London (LHR), Paris, Rome"
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-neutral-300 rounded-xl text-sm font-semibold text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors shadow-sm"
                  />
                </div>

                {/* Popular Departure Hub Chips */}
                <div>
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Popular Departure Hubs:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Tokyo (Tokyo Stn / HND)',
                      'New York (JFK / EWR)',
                      'London (LHR / St Pancras)',
                      'Paris (CDG / Gare de Lyon)',
                      'Rome (FCO / Termini)',
                      'Zurich (ZRH / HB)',
                      'San Francisco (SFO)',
                      'Delhi (DEL / NDLS)',
                      'Singapore (SIN)'
                    ].map((hub) => (
                      <button
                        key={hub}
                        type="button"
                        onClick={() => setStartingLocation(hub)}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all cursor-pointer ${
                          startingLocation === hub
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
                        }`}
                      >
                        {hub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Route Summary Badge */}
                <div className="pt-2 border-t border-amber-200/50 flex items-center justify-between text-xs text-neutral-700">
                  <span className="font-medium text-neutral-500">Planned Route:</span>
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <span className="truncate max-w-[140px] sm:max-w-[200px]">{startingLocation || 'Departure'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                    <span>{currentDest.name}, {currentDest.country}</span>
                  </div>
                </div>
              </div>

              {/* Destination preview summary */}
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-600 leading-relaxed">
                  <strong className="text-neutral-800">{currentDest.name} Overview:</strong> {currentDest.description}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: When are you traveling? */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Trip Duration (Days)
                  </label>
                  <div className="flex items-center gap-2">
                    {[3, 4, 5, 7, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setDurationDays(num)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          durationDays === num
                            ? 'bg-neutral-900 text-white border-neutral-900'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        {num} Days
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Preferred Travel Window / Season
                  </label>
                  <select
                    value={preferredMonth}
                    onChange={(e) => setPreferredMonth(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                  >
                    <option value="October 2026">October 2026 (Autumn Foliage)</option>
                    <option value="November 2026">November 2026 (Peak Foliage)</option>
                    <option value="December 2026">December 2026 (Winter Season)</option>
                    <option value="March 2027">March 2027 (Spring Bloom)</option>
                    <option value="April 2027">April 2027 (Sakura Season)</option>
                    <option value="July 2027">July 2027 (Mid-Summer)</option>
                  </select>
                </div>
              </div>

              {/* Best Time Seasonality Advisory */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                isMonthIdeal 
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50/80 border-amber-200 text-amber-900'
              }`}>
                {isMonthIdeal ? (
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div className="text-xs space-y-1">
                  <div className="font-bold">
                    {isMonthIdeal ? 'Ideal Travel Window Confirmed' : 'Seasonality Advisory'}
                  </div>
                  <div>
                    {currentDest.name}’s recommended peak months are{' '}
                    <strong>{currentDest.bestTime.bestMonths.join(', ')}</strong>.
                    {' '}{currentDest.bestTime.weatherSummary}
                  </div>
                  {!isMonthIdeal && (
                    <div className="text-[11px] text-amber-800 font-medium">
                      Tip: Traveling in {currentDest.bestTime.bestMonths[0]} or {currentDest.bestTime.bestMonths[1]} offers the most pleasant temperatures and festival events.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Who is traveling? */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Adults (Age 13+)
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-neutral-900 tabular-nums">{adults}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 rounded-lg bg-white border border-neutral-200 text-neutral-700 font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded-lg bg-white border border-neutral-200 text-neutral-700 font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">
                    Children (Age 0-12)
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-neutral-900 tabular-nums">{children}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 rounded-lg bg-white border border-neutral-200 text-neutral-700 font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded-lg bg-white border border-neutral-200 text-neutral-700 font-bold hover:bg-neutral-100 flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Number of Rooms
                  </label>
                  <select
                    value={roomCount}
                    onChange={(e) => setRoomCount(Number(e.target.value))}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                  >
                    <option value={1}>1 Room</option>
                    <option value={2}>2 Rooms</option>
                    <option value={3}>3 Rooms</option>
                    <option value={4}>4+ Rooms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Preferred Room Configuration
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                  >
                    <option value="1 King Bed / Double">1 King Bed (Couple)</option>
                    <option value="2 Twin Beds">2 Separate Twin Beds</option>
                    <option value="Family Suite with Extra Bed">Family Suite with Extra Bed</option>
                    <option value="Traditional Tatami / Ryokan Futons">Traditional Tatami / Ryokan</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Budget Planner */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Select Budget Comfort Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => { setBudgetTier('budget'); setBudgetAmount(1800); }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      budgetTier === 'budget'
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <div className="font-bold text-sm">Smart Budget</div>
                    <div className={`text-xs mt-1 ${budgetTier === 'budget' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Value stays, trains/buses & street gastronomy
                    </div>
                    <div className={`text-xs font-bold mt-3 ${budgetTier === 'budget' ? 'text-amber-300' : 'text-neutral-900'}`}>
                      ~$1,200 – $2,000 total
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setBudgetTier('balanced'); setBudgetAmount(3500); }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      budgetTier === 'balanced'
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <div className="font-bold text-sm">Balanced Comfort</div>
                    <div className={`text-xs mt-1 ${budgetTier === 'balanced' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      4-star boutique hotels, express transit & top restaurants
                    </div>
                    <div className={`text-xs font-bold mt-3 ${budgetTier === 'balanced' ? 'text-amber-300' : 'text-neutral-900'}`}>
                      ~$2,500 – $4,500 total
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setBudgetTier('luxury'); setBudgetAmount(7500); }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      budgetTier === 'luxury'
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <div className="font-bold text-sm">Luxury Sanctuary</div>
                    <div className={`text-xs mt-1 ${budgetTier === 'luxury' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      5-star resorts, private chauffeurs & bespoke tasting menus
                    </div>
                    <div className={`text-xs font-bold mt-3 ${budgetTier === 'luxury' ? 'text-amber-300' : 'text-neutral-900'}`}>
                      ~$6,000+ total
                    </div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Target Total Trip Budget
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-neutral-500 text-sm font-semibold">$</span>
                    <input
                      type="number"
                      value={budgetAmount}
                      onChange={(e) => setBudgetAmount(Number(e.target.value))}
                      className="w-full pl-7 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-bold text-neutral-900 focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Display Currency
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                  >
                    <option value="USD ($)">USD ($) - US Dollar</option>
                    <option value="EUR (€)">EUR (€) - Euro</option>
                    <option value="GBP (£)">GBP (£) - British Pound</option>
                    <option value="JPY (¥)">JPY (¥) - Japanese Yen</option>
                    <option value="INR (₹)">INR (₹) - Indian Rupee</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Interests & Activities */}
          {step === 5 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Select Your Main Travel Interests (Choose all that apply)
                </label>
                <p className="text-xs text-neutral-500 mb-3">
                  We customize the daily attraction stops and schedules around these tags.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'historical', label: 'Historical Places', icon: '🏛️' },
                    { id: 'nature', label: 'Nature & Parks', icon: '🌿' },
                    { id: 'beaches', label: 'Beaches & Ocean', icon: '🏖️' },
                    { id: 'mountains', label: 'Mountains & Peaks', icon: '⛰️' },
                    { id: 'adventure', label: 'Adventure Sports', icon: '🧗' },
                    { id: 'shopping', label: 'Artisan & Shopping', icon: '🛍️' },
                    { id: 'food', label: 'Food & Culinary', icon: '🍜' },
                    { id: 'museums', label: 'Museums & Art', icon: '🎨' },
                    { id: 'temples', label: 'Temples & Shrines', icon: '⛩️' },
                    { id: 'nightlife', label: 'Nightlife & Lounges', icon: '🍸' },
                    { id: 'photography', label: 'Scenic Photography', icon: '📷' },
                    { id: 'hidden_gem', label: 'Hidden Local Gems', icon: '✨' },
                    { id: 'family', label: 'Family Activities', icon: '👨‍👩‍👦' }
                  ].map((item) => {
                    const isSelected = interests.includes(item.id as AttractionCategory);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleInterest(item.id as AttractionCategory)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Travel Style & Transportation */}
          {step === 6 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Trip Pace
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'relaxed', title: 'Relaxed', desc: '1–2 stops/day, ample leisure' },
                    { id: 'moderate', title: 'Balanced', desc: '3–4 sights/day, well-paced' },
                    { id: 'packed', title: 'High-Energy', desc: '5+ sights, maximum coverage' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPace(p.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        pace === p.id
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-bold text-sm">{p.title}</div>
                      <div className={`text-[11px] mt-1 ${pace === p.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {p.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Preferred Transportation Modes
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'flight', label: 'Flights' },
                    { id: 'train', label: 'High-Speed Trains' },
                    { id: 'bus', label: 'Buses & Coaches' },
                    { id: 'taxi', label: 'Private Cabs' },
                    { id: 'rental_car', label: 'Rental Cars' },
                    { id: 'transit', label: 'Public Metro / Ferries' }
                  ].map((t) => {
                    const isSelected = preferredTransport.includes(t.id as TransportType);
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => toggleTransport(t.id as TransportType)}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <span>{t.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: Stays & Food */}
          {step === 7 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Dietary & Dining Preferences
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    'No Dietary Restrictions',
                    'Vegetarian Only',
                    'Vegan Only',
                    'Halal Options',
                    'Gluten-Free',
                    'Authentic Street Food',
                    'Fine Dining Tasting',
                    'Cosy Local Cafes'
                  ].map((diet) => {
                    const isSelected = foodPreferences.includes(diet);
                    return (
                      <button
                        key={diet}
                        type="button"
                        onClick={() => toggleFoodPref(diet)}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-left flex items-center justify-between ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <span>{diet}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Any Special Requirements or Notes
                </label>
                <textarea
                  rows={2}
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  placeholder="e.g. Traveling for 10th anniversary, require wheelchair accessibility, prefer quiet hotel floors..."
                  className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>
            </div>
          )}

          {/* STEP 8: Review & Generate */}
          {step === 8 && (
            <div className="space-y-5">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-xs font-semibold text-neutral-500">Destination</span>
                  <span className="text-sm font-bold text-neutral-900">{currentDest.name}, {currentDest.country}</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-xs font-semibold text-neutral-500">Travel Period</span>
                  <span className="text-sm font-bold text-neutral-900">{durationDays} Days ({preferredMonth})</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-xs font-semibold text-neutral-500">Party</span>
                  <span className="text-sm font-bold text-neutral-900">{adults} Adults {children > 0 ? `, ${children} Children` : ''} · {roomCount} Room</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-xs font-semibold text-neutral-500">Budget Target</span>
                  <span className="text-sm font-bold text-neutral-900">${budgetAmount.toLocaleString()} ({budgetTier.toUpperCase()})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-500">Selected Interests</span>
                  <span className="text-xs font-semibold text-neutral-800 text-right max-w-xs truncate">
                    {interests.join(', ')}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>Generating 5 Complete Options:</strong> We will construct a Budget Trip, Balanced Trip, Comfort/Luxury Trip, Adventure Trip, and Relaxed Trip with custom hotels, transport, hour-by-hour schedules, and exact cost calculations.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50/70 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 8 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all shadow-sm active:scale-98 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinalSubmit}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all shadow-md active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Generate My Itineraries</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
