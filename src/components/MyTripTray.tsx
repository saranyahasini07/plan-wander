import React, { useState } from 'react';
import { TransportationOption, Hotel, Attraction, Restaurant } from '../types/travel';
import { 
  Briefcase, 
  ChevronUp, 
  ChevronDown, 
  X, 
  Sparkles, 
  Plane, 
  Train, 
  Building, 
  MapPin, 
  Utensils, 
  Trash2,
  ArrowRight,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface MyTripTrayProps {
  destinationName: string;
  selectedTransport: TransportationOption | null;
  selectedHotel: Hotel | null;
  selectedAttractions: Attraction[];
  selectedRestaurants: Restaurant[];
  onRemoveTransport: () => void;
  onRemoveHotel: () => void;
  onRemoveAttraction: (id: string) => void;
  onRemoveRestaurant: (id: string) => void;
  onClearAll: () => void;
  onBuildTrip: () => void;
  tripDurationDays?: number;
  travelersCount?: number;
  currencySymbol?: string;
}

export const MyTripTray: React.FC<MyTripTrayProps> = ({
  destinationName,
  selectedTransport,
  selectedHotel,
  selectedAttractions,
  selectedRestaurants,
  onRemoveTransport,
  onRemoveHotel,
  onRemoveAttraction,
  onRemoveRestaurant,
  onClearAll,
  onBuildTrip,
  tripDurationDays = 4,
  travelersCount = 2,
  currencySymbol = '$'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const totalItems = 
    (selectedTransport ? 1 : 0) + 
    (selectedHotel ? 1 : 0) + 
    selectedAttractions.length + 
    selectedRestaurants.length;

  if (totalItems === 0) return null;

  // Calculate rough live estimate
  const transportCost = selectedTransport ? selectedTransport.price * travelersCount : 0;
  const hotelCost = selectedHotel ? selectedHotel.pricePerNight * tripDurationDays : 0;
  const attractionsCost = selectedAttractions.reduce((sum, a) => sum + (a.entryFee * travelersCount), 0);
  const diningCost = selectedRestaurants.length * 25 * travelersCount * (tripDurationDays / 2);
  const totalEstimate = Math.round(transportCost + hotelCost + attractionsCost + diningCost);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-4">
        <div className="bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto transition-all duration-300">
          
          {/* Main Bar (Always Visible when items > 0) */}
          <div className="px-4 py-3 sm:px-6 flex items-center justify-between gap-3 text-white">
            
            {/* Left: Summary Title & Badges */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 font-display font-bold text-sm tracking-tight text-white hover:text-amber-400 transition-colors cursor-pointer shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-neutral-950 flex items-center justify-center font-bold text-xs shadow-sm">
                  🧳
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Custom Trip Builder</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>My Trip to {destinationName}</span>
                    <span className="bg-neutral-800 text-amber-300 text-[11px] px-2 py-0.5 rounded-full font-mono">
                      {totalItems} choice{totalItems > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </button>

              <div className="h-6 w-px bg-neutral-700 hidden sm:block shrink-0" />

              {/* Status Chips */}
              <div className="flex items-center gap-1.5 shrink-0 text-xs">
                {selectedTransport ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-900/40 border border-blue-500/40 text-blue-200 text-[11px] font-medium">
                    {selectedTransport.type === 'flight' ? <Plane className="w-3 h-3 text-blue-400" /> : <Train className="w-3 h-3 text-blue-400" />}
                    <span className="max-w-[100px] truncate">{selectedTransport.provider}</span>
                  </span>
                ) : (
                  <span className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-800 text-neutral-400 text-[11px]">
                    Transit: Unselected
                  </span>
                )}

                {selectedHotel ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-900/40 border border-purple-500/40 text-purple-200 text-[11px] font-medium">
                    <Building className="w-3 h-3 text-purple-400" />
                    <span className="max-w-[100px] truncate">{selectedHotel.name}</span>
                  </span>
                ) : (
                  <span className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-800 text-neutral-400 text-[11px]">
                    Hotel: Unselected
                  </span>
                )}

                {selectedAttractions.length > 0 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-900/40 border border-emerald-500/40 text-emerald-200 text-[11px] font-medium">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{selectedAttractions.length} Place{selectedAttractions.length > 1 ? 's' : ''}</span>
                  </span>
                )}

                {selectedRestaurants.length > 0 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-900/40 border border-amber-500/40 text-amber-200 text-[11px] font-medium">
                    <Utensils className="w-3 h-3 text-amber-400" />
                    <span>{selectedRestaurants.length} Dining</span>
                  </span>
                )}
              </div>
            </div>

            {/* Right: Price & Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              {totalEstimate > 0 && (
                <div className="text-right hidden sm:block mr-1">
                  <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Est. Choices Total</div>
                  <div className="text-sm font-bold text-amber-400 font-mono">
                    {currencySymbol}{totalEstimate.toLocaleString()}
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title={isExpanded ? 'Collapse tray' : 'Expand tray'}
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={onBuildTrip}
                className="px-4 py-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-md transition-all active:scale-98 cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 fill-neutral-950" />
                <span>Build My Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Expanded Drawer View */}
          {isExpanded && (
            <div className="border-t border-neutral-800 bg-neutral-950/90 p-4 sm:p-6 max-h-[380px] overflow-y-auto space-y-5 text-white">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="text-xs text-neutral-400">
                  Review and organize your selected options before generating your custom daily itinerary.
                </div>
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear Choices</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                
                {/* 1. Selected Transport */}
                <div className="bg-neutral-900/80 rounded-xl p-3 border border-neutral-800 space-y-2">
                  <div className="font-bold text-neutral-400 uppercase tracking-wider text-[10px] flex items-center justify-between">
                    <span>1. Transportation</span>
                    {selectedTransport && (
                      <button onClick={onRemoveTransport} className="text-neutral-500 hover:text-rose-400">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  {selectedTransport ? (
                    <div className="space-y-1">
                      <div className="font-bold text-neutral-100">{selectedTransport.provider}</div>
                      <div className="text-neutral-400 text-[11px] truncate">{selectedTransport.routeName}</div>
                      <div className="flex items-center justify-between pt-1 font-mono text-[11px]">
                        <span className="text-blue-300">{selectedTransport.departureTime} → {selectedTransport.arrivalTime}</span>
                        <span className="font-bold text-white">{currencySymbol}{selectedTransport.price}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-neutral-500 italic py-2">
                      No transit chosen yet. Go to <strong className="text-neutral-400 font-semibold">Transport</strong> tab to pick a flight or train.
                    </div>
                  )}
                </div>

                {/* 2. Selected Hotel */}
                <div className="bg-neutral-900/80 rounded-xl p-3 border border-neutral-800 space-y-2">
                  <div className="font-bold text-neutral-400 uppercase tracking-wider text-[10px] flex items-center justify-between">
                    <span>2. Hotel / Stay</span>
                    {selectedHotel && (
                      <button onClick={onRemoveHotel} className="text-neutral-500 hover:text-rose-400">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  {selectedHotel ? (
                    <div className="space-y-1">
                      <div className="font-bold text-neutral-100 truncate">{selectedHotel.name}</div>
                      <div className="text-neutral-400 text-[11px] truncate">{selectedHotel.address}</div>
                      <div className="flex items-center justify-between pt-1 font-mono text-[11px]">
                        <span className="text-purple-300">⭐ {selectedHotel.rating} / 5</span>
                        <span className="font-bold text-white">{currencySymbol}{selectedHotel.pricePerNight}/night</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-neutral-500 italic py-2">
                      No hotel chosen yet. Browse the <strong className="text-neutral-400 font-semibold">Hotels</strong> tab to choose your stay.
                    </div>
                  )}
                </div>

                {/* 3. Selected Attractions */}
                <div className="bg-neutral-900/80 rounded-xl p-3 border border-neutral-800 space-y-2">
                  <div className="font-bold text-neutral-400 uppercase tracking-wider text-[10px] flex items-center justify-between">
                    <span>3. Attractions ({selectedAttractions.length})</span>
                  </div>
                  {selectedAttractions.length > 0 ? (
                    <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                      {selectedAttractions.map(attr => (
                        <div key={attr.id} className="flex items-center justify-between bg-neutral-800/80 px-2 py-1.5 rounded-lg text-[11px]">
                          <span className="truncate max-w-[130px] font-medium text-neutral-200">{attr.name}</span>
                          <button
                            type="button"
                            onClick={() => onRemoveAttraction(attr.id)}
                            className="text-neutral-500 hover:text-rose-400 ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-neutral-500 italic py-2">
                      No places added. Explore <strong className="text-neutral-400 font-semibold">Places</strong> tab to add sights to your itinerary.
                    </div>
                  )}
                </div>

                {/* 4. Selected Restaurants */}
                <div className="bg-neutral-900/80 rounded-xl p-3 border border-neutral-800 space-y-2">
                  <div className="font-bold text-neutral-400 uppercase tracking-wider text-[10px] flex items-center justify-between">
                    <span>4. Dining ({selectedRestaurants.length})</span>
                  </div>
                  {selectedRestaurants.length > 0 ? (
                    <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                      {selectedRestaurants.map(rest => (
                        <div key={rest.id} className="flex items-center justify-between bg-neutral-800/80 px-2 py-1.5 rounded-lg text-[11px]">
                          <span className="truncate max-w-[130px] font-medium text-neutral-200">{rest.name}</span>
                          <button
                            type="button"
                            onClick={() => onRemoveRestaurant(rest.id)}
                            className="text-neutral-500 hover:text-rose-400 ml-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-neutral-500 italic py-2">
                      No dining added. Check the <strong className="text-neutral-400 font-semibold">Dining</strong> tab for culinary favorites.
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Clicking "Build My Trip" schedules your selected places and stay into daily chronological plans.</span>
                </div>
                <button
                  type="button"
                  onClick={onBuildTrip}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-neutral-950" />
                  <span>Generate Day-by-Day Itinerary Now</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
