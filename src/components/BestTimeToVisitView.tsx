import React, { useState } from 'react';
import { DESTINATIONS } from '../data/mockData';
import { Destination } from '../types/travel';
import { 
  Sun, 
  CloudRain, 
  Users, 
  DollarSign, 
  Calendar, 
  Sparkles, 
  AlertTriangle, 
  Check, 
  Thermometer, 
  Info,
  Clock
} from 'lucide-react';

interface BestTimeToVisitViewProps {
  initialDestinationId?: string;
  userSelectedMonth?: string;
  onSelectDestination?: (dest: Destination) => void;
  onApplyIdealMonth?: (month: string) => void;
}

export const BestTimeToVisitView: React.FC<BestTimeToVisitViewProps> = ({
  initialDestinationId = 'kyoto',
  userSelectedMonth = 'October 2026',
  onSelectDestination,
  onApplyIdealMonth
}) => {
  const [regionFilter, setRegionFilter] = useState<'all' | 'india' | 'international'>('all');
  const [selectedDestId, setSelectedDestId] = useState(initialDestinationId);
  const currentDest = DESTINATIONS.find(d => d.id === selectedDestId) || DESTINATIONS[0];
  const info = currentDest.bestTime;

  const filteredDests = DESTINATIONS.filter(d => {
    if (regionFilter === 'india') return d.country === 'India';
    if (regionFilter === 'international') return d.country !== 'India';
    return true;
  });

  const isUserMonthIdeal = info.bestMonths.some(m => 
    userSelectedMonth.toLowerCase().includes(m.toLowerCase())
  );

  return (
    <div className="w-full space-y-6">
      
      {/* Category Pills & Destination Tabs */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-1.5 pb-1">
          <button
            type="button"
            onClick={() => setRegionFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              regionFilter === 'all'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
            }`}
          >
            All Places ({DESTINATIONS.length})
          </button>
          <button
            type="button"
            onClick={() => setRegionFilter('india')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              regionFilter === 'india'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
            }`}
          >
            🇮🇳 India (10)
          </button>
          <button
            type="button"
            onClick={() => setRegionFilter('international')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              regionFilter === 'international'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
            }`}
          >
            🌎 International (11)
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filteredDests.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => {
                setSelectedDestId(d.id);
                if (onSelectDestination) onSelectDestination(d);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedDestId === d.id
                  ? 'bg-neutral-900 text-white shadow-sm ring-2 ring-neutral-900/20'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {d.country === 'India' ? `🇮🇳 ${d.name}` : `🌎 ${d.name}`}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Destination Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900 text-white p-6 sm:p-8">
        <img
          src={currentDest.heroImage}
          alt={currentDest.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35 object-center"
        />
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seasonality & Climate Intelligence</span>
          </div>
          <h2 className="text-3xl font-bold font-display">
            Best Time to Visit {currentDest.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
            {currentDest.description}
          </p>
        </div>
      </div>

      {/* Date Advisory Banner for User's Selection */}
      <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
        isUserMonthIdeal
          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
          : 'bg-amber-50/80 border-amber-200 text-amber-950'
      }`}>
        {isUserMonthIdeal ? (
          <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        ) : (
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        )}
        <div className="text-xs space-y-1 flex-1">
          <div className="font-bold text-sm">
            {isUserMonthIdeal 
              ? `Your Travel Window (${userSelectedMonth}) is Prime Time!` 
              : `Your Window (${userSelectedMonth}) vs Ideal Season`}
          </div>
          <div className="leading-relaxed">
            {isUserMonthIdeal ? (
              <span>
                {currentDest.name} is in peak beauty during {userSelectedMonth}. Expect excellent sightseeing conditions, comfortable humidity, and vibrant cultural atmospheres.
              </span>
            ) : (
              <span>
                While visiting in {userSelectedMonth} is possible, {currentDest.name} achieves its optimal climate, scenic foliage, and pleasant strolling temperatures during <strong>{info.bestMonths.join(', ')}</strong>.
              </span>
            )}
          </div>
          {!isUserMonthIdeal && onApplyIdealMonth && (
            <button
              onClick={() => onApplyIdealMonth(info.bestMonths[0] + ' 2026')}
              className="mt-2 text-[11px] font-bold text-amber-900 underline hover:text-black cursor-pointer inline-flex items-center gap-1"
            >
              Switch target travel month to {info.bestMonths[0]} →
            </button>
          )}
        </div>
      </div>

      {/* 4 Core Climate & Seasonality Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Best Months */}
        <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Optimal Months</span>
          </div>
          <div className="text-xl font-bold text-neutral-900 font-display">
            {info.bestMonths.join(', ')}
          </div>
          <p className="text-xs text-neutral-500">
            Mild temperatures, clear skies, and outdoor accessibility.
          </p>
        </div>

        {/* Metric 2: Temperatures & Rainfall */}
        <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold">
            <Thermometer className="w-4 h-4 text-rose-500" />
            <span>Average Temp & Rain</span>
          </div>
          <div className="text-xl font-bold text-neutral-900 tabular-nums">
            {info.avgTempC.low}°C – {info.avgTempC.high}°C
          </div>
          <p className="text-xs text-neutral-500 flex items-center gap-1">
            <CloudRain className="w-3.5 h-3.5 text-neutral-400" />
            <span>{info.rainfallMm} mm monthly average</span>
          </p>
        </div>

        {/* Metric 3: Crowd Level */}
        <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold">
            <Users className="w-4 h-4 text-amber-500" />
            <span>Crowd Density</span>
          </div>
          <div className="text-xl font-bold text-neutral-900">
            {info.crowdLevel} Density
          </div>
          <p className="text-xs text-neutral-500">
            Early morning visits recommended for top spots.
          </p>
        </div>

        {/* Metric 4: Seasonal Price Delta */}
        <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-semibold">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span>Price Index</span>
          </div>
          <div className="text-sm font-bold text-neutral-900">
            Seasonal Variation
          </div>
          <p className="text-xs text-neutral-500 leading-snug">
            {info.priceDifferencePercent}
          </p>
        </div>

      </div>

      {/* Season Breakdown Details (Peak, Shoulder, Off-Season) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
            Peak Season
          </span>
          <h4 className="text-sm font-bold text-neutral-900">{info.peakSeason}</h4>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Highest vibrancy and most festive atmosphere. Accommodations require early booking.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            Shoulder Season (Recommended)
          </span>
          <h4 className="text-sm font-bold text-neutral-900">{info.shoulderSeason}</h4>
          <p className="text-xs text-neutral-500 leading-relaxed">
            The ideal balance of moderate prices, pleasant daytime climate, and fewer tourists.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
            Off-Season
          </span>
          <h4 className="text-sm font-bold text-neutral-900">{info.offSeason}</h4>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Lowest hotel rates and serene, uncrowded temples/streets. Cooler or warmer weather extremes.
          </p>
        </div>
      </div>

      {/* Major Festivals and Seasonal Highlights */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm space-y-5">
        <h3 className="text-lg font-bold text-neutral-900 font-display">
          Major Festivals & Seasonal Attractions in {currentDest.name}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Iconic Cultural Festivals
            </div>
            <div className="space-y-2.5">
              {info.majorFestivals.map((fest, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-900">{fest.name}</span>
                    <span className="text-[11px] font-semibold text-neutral-500">{fest.month}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {fest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Seasonal Natural Wonders
            </div>
            <div className="space-y-2.5">
              {info.seasonalAttractions.map((attr, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-2.5">
                  <span className="text-amber-500 text-sm">✦</span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {attr}
                  </p>
                </div>
              ))}
              
              <div className="p-3.5 bg-neutral-50/80 rounded-xl border border-neutral-100 text-xs text-neutral-600 space-y-1">
                <span className="font-semibold text-neutral-800">Pro Tip for Visitors: </span>
                <span>{info.tipsForVisitors}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
