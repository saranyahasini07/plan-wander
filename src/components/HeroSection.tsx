import React, { useState } from 'react';
import { DESTINATIONS, HERO_IMAGE } from '../data/mockData';
import { Destination } from '../types/travel';
import { Compass, Calendar, Users, Wallet, ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  initialStartLocation?: string;
  onOpenWizardWithRoute: (startLocation: string, destId: string) => void;
  onExploreDest: (dest: Destination) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  initialStartLocation = 'New York (JFK)',
  onOpenWizardWithRoute,
  onExploreDest
}) => {
  const [startingLocation, setStartingLocation] = useState(initialStartLocation);
  const [selectedDestId, setSelectedDestId] = useState('kyoto');
  const [selectedMonth, setSelectedMonth] = useState('October 2026');
  const [travelers, setTravelers] = useState(2);
  const [budgetTier, setBudgetTier] = useState<'budget' | 'balanced' | 'luxury'>('balanced');

  const popularHubs = [
    'Tokyo (HND/NRT)',
    'New York (JFK)',
    'London (LHR)',
    'Rome (FCO)',
    'Paris (CDG)',
    'Zurich (ZRH)',
    'Delhi (DEL)'
  ];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenWizardWithRoute(startingLocation, selectedDestId);
  };

  return (
    <div className="relative w-full">
      {/* Visual Hero Container with 16:9 Aspect Ratio on Desktop */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-neutral-900">
        
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Scenic mountain lake journey"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000 ease-out"
          />
          {/* Measured multi-stop gradient scrim to ensure WCAG AA contrast for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-900/40" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Content Carrier */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Brand Value Hook */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Next-Generation Multi-Option Trip Architecture</span>
          </div>

          {/* User's Exact Requested Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display max-w-4xl text-balance drop-shadow-sm leading-tight">
            Plan the trip. We'll handle the rest.
          </h1>

          {/* User's Exact Requested Subheading */}
          <p className="mt-5 text-lg sm:text-xl text-neutral-200 max-w-2xl text-balance font-normal leading-relaxed">
            Personalized trips, stays, transport and experiences — planned around you.
          </p>

          {/* Quick-Planner Bar / Fast Lead Funnel */}
          <form 
            onSubmit={handleQuickSubmit}
            className="mt-10 w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/40 text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3"
          >
            {/* Field 1: Start Location (Asked directly to book flights/trains) */}
            <div className="p-2 bg-neutral-50/90 rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-600" />
                <span>From (Departure)</span>
              </label>
              <input
                type="text"
                value={startingLocation}
                onChange={(e) => setStartingLocation(e.target.value)}
                placeholder="e.g. New York, Tokyo, London..."
                className="w-full bg-transparent text-xs sm:text-sm font-bold text-neutral-900 focus:outline-none placeholder:text-neutral-400 truncate"
              />
            </div>

            {/* Field 2: Destination */}
            <div className="p-2 bg-neutral-50/90 rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-500" />
                <span>To (Destination)</span>
              </label>
              <select
                value={selectedDestId}
                onChange={(e) => setSelectedDestId(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-bold text-neutral-900 focus:outline-none cursor-pointer"
              >
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}, {d.country}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Dates / Month */}
            <div className="p-2 bg-neutral-50/90 rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-neutral-500" />
                <span>Travel Dates</span>
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer"
              >
                <option value="October 2026">Oct 2026 (Ideal Season)</option>
                <option value="November 2026">Nov 2026 (Autumn Colors)</option>
                <option value="December 2026">Dec 2026 (Winter Season)</option>
                <option value="March 2027">Mar 2027 (Spring Bloom)</option>
                <option value="June 2027">Jun 2027 (Early Summer)</option>
              </select>
            </div>

            {/* Field 4: Travelers */}
            <div className="p-2 bg-neutral-50/90 rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <Users className="w-3 h-3 text-neutral-500" />
                <span>Travelers</span>
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer"
              >
                <option value={1}>1 Solo Explorer</option>
                <option value={2}>2 Couple / Pair</option>
                <option value={3}>3 Friends / Family</option>
                <option value={4}>4 Group (Family)</option>
                <option value={6}>6+ Large Group</option>
              </select>
            </div>

            {/* Field 5: Budget Tier */}
            <div className="p-2 bg-neutral-50/90 rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <Wallet className="w-3 h-3 text-neutral-500" />
                <span>Budget Tier</span>
              </label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value as any)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none cursor-pointer capitalize"
              >
                <option value="budget">Smart Budget ($)</option>
                <option value="balanced">Balanced Comfort ($$)</option>
                <option value="luxury">Luxury Elite ($$$)</option>
              </select>
            </div>

            {/* Primary Action Button */}
            <div className="flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[48px] px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Plan My Trip</span>
              </button>
            </div>
          </form>

          {/* Quick Departure Hub Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xs">
            <span className="text-neutral-300 font-medium text-[11px] mr-1">Popular departure hubs:</span>
            {popularHubs.map((hub) => (
              <button
                key={hub}
                type="button"
                onClick={() => setStartingLocation(hub)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  startingLocation === hub
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                    : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                {hub}
              </button>
            ))}
          </div>

          {/* Proof Adjacency Banner */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-neutral-300 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Multi-option side-by-side comparison</span>
            </div>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dynamic cost & travel time recalculation</span>
            </div>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct high-speed rail, flight &amp; hotel booking</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Destination Showcase Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide">
                  {dest.country}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-neutral-900 px-2.5 py-1 rounded-md text-xs font-bold shadow-sm">
                  From ${dest.startingPricePerDay}/day
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 font-display">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                    {dest.tagline}
                  </p>
                  
                  {/* Best Time Snippet */}
                  <div className="mt-3 pt-3 border-t border-neutral-100 text-xs text-neutral-600">
                    <span className="font-semibold text-neutral-800">Best Season: </span>
                    <span>{dest.bestTime.bestMonths.slice(0, 3).join(', ')}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 flex items-center justify-between gap-2 border-t border-neutral-100">
                  <button
                    onClick={() => onExploreDest(dest)}
                    className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
                  >
                    View Best Time & Weather
                  </button>
                  <button
                    onClick={() => onOpenWizardWithRoute(startingLocation, dest.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Generate Options</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
