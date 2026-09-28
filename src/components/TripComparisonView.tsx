import React from 'react';
import { TripOption } from '../types/travel';
import { Check, ArrowRight, Sparkles, Building, Train, Clock, DollarSign, ShieldAlert, Award } from 'lucide-react';

interface TripComparisonViewProps {
  options: TripOption[];
  selectedTripId: string;
  onSelectTrip: (trip: TripOption) => void;
  onCustomizeTrip: (trip: TripOption) => void;
}

export const TripComparisonView: React.FC<TripComparisonViewProps> = ({
  options,
  selectedTripId,
  onSelectTrip,
  onCustomizeTrip
}) => {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Multi-Option Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
            Compare Your Complete Trip Options
          </h2>
          <p className="text-sm text-neutral-500 mt-1 max-w-2xl">
            Choose the trip style that fits your budget and rhythm. You can customize hotels, schedules, and activities on any plan.
          </p>
        </div>
      </div>

      {/* Grid of Trip Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {options.map((trip) => {
          const isSelected = trip.id === selectedTripId;
          const isBalanced = trip.type === 'balanced';

          return (
            <div
              key={trip.id}
              className={`relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? 'border-neutral-900 shadow-xl ring-2 ring-neutral-900/10'
                  : isBalanced
                  ? 'border-neutral-300 shadow-md hover:border-neutral-400'
                  : 'border-neutral-200 shadow-sm hover:border-neutral-300'
              }`}
            >
              {/* Highlight ribbon for balanced recommendation */}
              {isBalanced && (
                <div className="bg-neutral-900 text-amber-300 text-[11px] font-bold py-1 px-3 text-center flex items-center justify-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Plan &amp; Wander Balanced Recommendation</span>
                </div>
              )}

              <div className="p-6 flex-1 space-y-5">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-500 capitalize tracking-wide">
                      {trip.type} Plan · {trip.daysCount} Days
                    </span>
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <Check className="w-3 h-3" />
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 font-display mt-1">
                    {trip.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    {trip.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex items-baseline justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                      Estimated Total Cost
                    </div>
                    <div className="text-3xl font-extrabold text-neutral-900 tabular-nums">
                      ${trip.totalEstimatedCost.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-neutral-400 font-medium">Daily avg</div>
                    <div className="text-xs font-bold text-neutral-700 tabular-nums">
                      ~${trip.estimatedDailySpending}/day
                    </div>
                  </div>
                </div>

                {/* Why it matches you */}
                <div className="text-xs text-neutral-600 bg-neutral-50/70 p-3.5 rounded-xl border border-neutral-100 leading-relaxed">
                  <span className="font-semibold text-neutral-800">Why this fits: </span>
                  {trip.whyItMatches}
                </div>

                {/* Core inclusions summary */}
                <div className="space-y-2.5 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-neutral-900">{trip.hotel.name}</span>
                      <div className="text-[11px] text-neutral-500">
                        ★ {trip.hotel.rating} · ${trip.hotel.pricePerNight}/night · {trip.hotel.distanceFromAttractions}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Train className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-neutral-900">{trip.transportation.provider}</span>
                      <div className="text-[11px] text-neutral-500">
                        {trip.transportation.comfortLevel} · {Math.round(trip.transportation.durationMinutes / 60)} hrs transit · ${trip.transportation.price}/pax
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-600">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      <strong>{trip.placesCount}</strong> Curated Landmarks · <strong>{trip.activitiesCount}</strong> Scheduled Activities
                    </span>
                  </div>
                </div>

                {/* Pros and Considerations */}
                <div className="space-y-3 pt-3 border-t border-neutral-100">
                  <div>
                    <div className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Key Highlights
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-600">
                      {trip.pros.slice(0, 2).map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {trip.considerations.length > 0 && (
                    <div>
                      <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3 text-neutral-400" />
                        <span>Considerations</span>
                      </div>
                      <div className="text-xs text-neutral-500 italic">
                        {trip.considerations[0]}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => onCustomizeTrip(trip)}
                  className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Customize & View Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTrip(trip)}
                  className="w-full py-2 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  {isSelected ? 'Currently Selected' : 'Set as Active Plan'}
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
