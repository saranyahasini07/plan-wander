import React, { useState } from 'react';
import { TripOption, ItineraryDay, ItineraryActivity, Hotel, TransportationOption, Attraction } from '../types/travel';
import { InteractiveMap } from './InteractiveMap';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowUp, 
  ArrowDown, 
  Trash2, 
  Plus, 
  RotateCcw, 
  Building, 
  Train, 
  Navigation, 
  Map, 
  Sparkles,
  ChevronRight,
  ExternalLink,
  Edit2,
  Check
} from 'lucide-react';

interface ItineraryViewProps {
  trip: TripOption;
  availableHotels: Hotel[];
  availableTransports: TransportationOption[];
  availableAttractions: Attraction[];
  onUpdateTrip: (updatedTrip: TripOption) => void;
  onOpenAssistantWithPrompt?: (prompt: string) => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({
  trip,
  availableHotels,
  availableTransports,
  availableAttractions,
  onUpdateTrip,
  onOpenAssistantWithPrompt
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState(1);
  const [showMap, setShowMap] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [isTransportModalOpen, setIsTransportModalOpen] = useState(false);

  const activeDay = trip.dailySchedule.find(d => d.dayNumber === selectedDayNumber) || trip.dailySchedule[0];

  // Helper to reorder activities (Move Up / Down)
  const handleMoveActivity = (dayIndex: number, actIndex: number, direction: 'up' | 'down') => {
    const updatedDays = [...trip.dailySchedule];
    const targetDay = { ...updatedDays[dayIndex] };
    const activities = [...targetDay.activities];

    const targetIndex = direction === 'up' ? actIndex - 1 : actIndex + 1;
    if (targetIndex < 0 || targetIndex >= activities.length) return;

    // Swap
    const temp = activities[actIndex];
    activities[actIndex] = activities[targetIndex];
    activities[targetIndex] = temp;

    // Recalculate time slots slightly to stay coherent
    recalculateSchedule(activities);

    targetDay.activities = activities;
    updatedDays[dayIndex] = targetDay;

    recalculateTrip({ ...trip, dailySchedule: updatedDays });
  };

  // Helper to remove an activity
  const handleRemoveActivity = (dayIndex: number, actId: string) => {
    const updatedDays = [...trip.dailySchedule];
    const targetDay = { ...updatedDays[dayIndex] };
    targetDay.activities = targetDay.activities.filter(a => a.id !== actId);
    recalculateSchedule(targetDay.activities);
    updatedDays[dayIndex] = targetDay;

    recalculateTrip({ ...trip, dailySchedule: updatedDays });
  };

  // Helper to add a new attraction to current day
  const handleAddAttraction = (attr: Attraction) => {
    const dayIndex = selectedDayNumber - 1;
    const updatedDays = [...trip.dailySchedule];
    const targetDay = { ...updatedDays[dayIndex] };

    const newActivity: ItineraryActivity = {
      id: `act-custom-${Date.now()}`,
      title: attr.name,
      timeSlot: '03:30 PM',
      durationMinutes: attr.recommendedDurationMinutes || 90,
      category: attr.category,
      locationName: attr.name,
      coordinates: attr.coordinates,
      notes: attr.description,
      cost: attr.entryFee,
      attractionRefId: attr.id,
      travelTimeToNextMinutes: 20,
      travelDistanceKm: 2.2,
      transitModeToNext: 'Transit'
    };

    targetDay.activities.push(newActivity);
    recalculateSchedule(targetDay.activities);
    updatedDays[dayIndex] = targetDay;

    recalculateTrip({ ...trip, dailySchedule: updatedDays });
    setIsAddModalOpen(false);
  };

  // Change active hotel
  const handleChangeHotel = (hotel: Hotel) => {
    const diff = (hotel.pricePerNight - trip.hotel.pricePerNight) * trip.daysCount;
    const updatedTrip = {
      ...trip,
      hotel,
      totalEstimatedCost: Math.max(100, trip.totalEstimatedCost + diff),
      budgetBreakdown: {
        ...trip.budgetBreakdown,
        hotel: hotel.pricePerNight * trip.daysCount
      }
    };
    onUpdateTrip(updatedTrip);
    setIsHotelModalOpen(false);
  };

  // Change active transport
  const handleChangeTransport = (transport: TransportationOption) => {
    const diff = transport.price - trip.transportation.price;
    const updatedTrip = {
      ...trip,
      transportation: transport,
      totalEstimatedCost: Math.max(100, trip.totalEstimatedCost + diff),
      budgetBreakdown: {
        ...trip.budgetBreakdown,
        transport: transport.price * 2
      }
    };
    onUpdateTrip(updatedTrip);
    setIsTransportModalOpen(false);
  };

  // Recalculates consecutive times
  const recalculateSchedule = (activities: ItineraryActivity[]) => {
    let currentHour = 9;
    let currentMinute = 30;

    activities.forEach((act, idx) => {
      const ampm = currentHour >= 12 ? 'PM' : 'AM';
      const displayHour = currentHour > 12 ? currentHour - 12 : currentHour === 0 ? 12 : currentHour;
      const displayMin = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
      act.timeSlot = `${displayHour}:${displayMin} ${ampm}`;

      // Advance clock by duration + travel time
      const totalMins = act.durationMinutes + (act.travelTimeToNextMinutes || 20);
      currentMinute += totalMins;
      currentHour += Math.floor(currentMinute / 60);
      currentMinute = currentMinute % 60;
    });
  };

  // Recalculates total cost and activity counts
  const recalculateTrip = (newTrip: TripOption) => {
    let totalActCost = 0;
    let totalActivities = 0;

    newTrip.dailySchedule.forEach(day => {
      day.activities.forEach(act => {
        totalActCost += act.cost || 0;
        if (act.category !== 'logistics') totalActivities++;
      });
    });

    newTrip.activitiesCount = totalActivities;
    newTrip.budgetBreakdown.activities = totalActCost;
    newTrip.totalEstimatedCost = 
      newTrip.budgetBreakdown.hotel + 
      newTrip.budgetBreakdown.transport + 
      newTrip.budgetBreakdown.food + 
      totalActCost + 
      newTrip.budgetBreakdown.localTransit + 
      newTrip.budgetBreakdown.shopping + 
      newTrip.budgetBreakdown.misc;
    
    newTrip.estimatedDailySpending = Math.round(newTrip.totalEstimatedCost / newTrip.daysCount);

    onUpdateTrip(newTrip);
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Trip Overview Bar */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <span className="text-neutral-900 font-bold capitalize">{trip.type} Tier</span>
            <span>·</span>
            <span>{trip.daysCount} Days</span>
            <span>·</span>
            <span className="text-emerald-700 font-semibold">Active Itinerary</span>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 font-display">
            {trip.title}
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            {trip.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsHotelModalOpen(true)}
            className="px-3 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span className="truncate max-w-[130px]">{trip.hotel.name}</span>
          </button>

          <button
            onClick={() => setIsTransportModalOpen(true)}
            className="px-3 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Train className="w-3.5 h-3.5 text-purple-600" />
            <span className="truncate max-w-[130px]">{trip.transportation.provider}</span>
          </button>

          <button
            onClick={() => setShowMap(!showMap)}
            className={`px-3 py-2 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              showMap ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>{showMap ? 'Hide Map' : 'Show Map'}</span>
          </button>
        </div>
      </div>

      {/* Main Split Layout: Schedule on Left, Map on Right (or full schedule) */}
      <div className={`grid grid-cols-1 ${showMap ? 'lg:grid-cols-12' : 'lg:grid-cols-1'} gap-6`}>
        
        {/* Left Column: Day-by-Day Timeline */}
        <div className={`${showMap ? 'lg:col-span-7' : 'w-full'} space-y-5`}>
          
          {/* Day Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {trip.dailySchedule.map((day) => {
              const isSelected = day.dayNumber === selectedDayNumber;
              return (
                <button
                  key={day.dayNumber}
                  type="button"
                  onClick={() => setSelectedDayNumber(day.dayNumber)}
                  className={`px-4 py-2.5 rounded-xl border text-left shrink-0 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-75">
                    {day.dateStr}
                  </div>
                  <div className="text-xs font-bold whitespace-nowrap">
                    {day.theme}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Current Day Title Card */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div>
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                  Day {activeDay.dayNumber} Focus
                </span>
                <h3 className="text-lg font-bold text-neutral-900 font-display">
                  {activeDay.title}
                </h3>
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Stop</span>
              </button>
            </div>

            {/* Activities Timeline */}
            <div className="space-y-4 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-100">
              {activeDay.activities.map((act, actIdx) => {
                const isFood = act.category === 'food';
                const isLogistics = act.category === 'logistics';
                const isRelax = act.category === 'relaxation';

                return (
                  <div key={act.id} className="relative pl-11 group">
                    {/* Timeline bullet */}
                    <div className={`absolute left-3 top-2.5 w-4 h-4 rounded-full border-2 border-white shadow-sm -translate-x-1/2 flex items-center justify-center text-[9px] font-bold text-white ${
                      isFood ? 'bg-emerald-500' : isLogistics ? 'bg-purple-500' : isRelax ? 'bg-cyan-500' : 'bg-amber-500'
                    }`}>
                      {actIdx + 1}
                    </div>

                    {/* Activity Card */}
                    <div className="p-4 bg-neutral-50/70 hover:bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all shadow-none hover:shadow-sm space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-neutral-400" />
                            <span>{act.timeSlot}</span>
                            <span>·</span>
                            <span>{act.durationMinutes} min</span>
                            {act.cost > 0 && (
                              <>
                                <span>·</span>
                                <span className="text-neutral-900 font-bold">${act.cost}</span>
                              </>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-neutral-900 mt-0.5">
                            {act.title}
                          </h4>
                          <div className="text-xs text-neutral-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-neutral-400" />
                            <span>{act.locationName}</span>
                          </div>
                        </div>

                        {/* Interactive Reordering & Delete Controls */}
                        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            disabled={actIdx === 0}
                            onClick={() => handleMoveActivity(selectedDayNumber - 1, actIdx, 'up')}
                            className="p-1 rounded text-neutral-400 hover:text-neutral-800 hover:bg-neutral-200/60 disabled:opacity-30 cursor-pointer"
                            title="Move Up"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            disabled={actIdx === activeDay.activities.length - 1}
                            onClick={() => handleMoveActivity(selectedDayNumber - 1, actIdx, 'down')}
                            className="p-1 rounded text-neutral-400 hover:text-neutral-800 hover:bg-neutral-200/60 disabled:opacity-30 cursor-pointer"
                            title="Move Down"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveActivity(selectedDayNumber - 1, act.id)}
                            className="p-1 rounded text-rose-400 hover:text-rose-700 hover:bg-rose-50 cursor-pointer"
                            title="Remove Stop"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {act.notes && (
                        <p className="text-xs text-neutral-600 leading-relaxed bg-white/70 p-2 rounded-lg border border-neutral-100">
                          {act.notes}
                        </p>
                      )}

                      {/* Travel distance badge to next point */}
                      {act.travelTimeToNextMinutes && (
                        <div className="pt-1.5 flex items-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                          <Navigation className="w-3 h-3 text-neutral-400" />
                          <span>{act.travelTimeToNextMinutes} min travel ({act.travelDistanceKm || 1.8} km) to next stop</span>
                          {act.transitModeToNext && (
                            <span className="text-neutral-400">· {act.transitModeToNext}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map */}
        {showMap && (
          <div className="lg:col-span-5 sticky top-20 h-[560px] lg:h-[calc(100vh-140px)]">
            <InteractiveMap
              hotel={trip.hotel}
              activeDay={activeDay}
              centerCoordinates={trip.hotel.coordinates}
            />
          </div>
        )}

      </div>

      {/* Modal: Add Stop from Destination Catalog */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] flex flex-col border border-neutral-200 shadow-2xl">
            <h3 className="text-lg font-bold text-neutral-900 font-display mb-1">
              Add Attraction to Day {selectedDayNumber}
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Select any curated attraction from the destination catalog to insert into your schedule.
            </p>

            <div className="overflow-y-auto space-y-2.5 flex-1 pr-1">
              {availableAttractions.map((attr) => (
                <div
                  key={attr.id}
                  className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200/80 flex items-center justify-between gap-3 transition-colors"
                >
                  <div>
                    <div className="text-xs font-bold text-neutral-900">{attr.name}</div>
                    <div className="text-[11px] text-neutral-500">
                      {attr.category} · Entry: ${attr.entryFee} · {attr.recommendedDurationMinutes} min
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddAttraction(attr)}
                    className="px-3 py-1.5 bg-neutral-900 text-white rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 text-right">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Change Hotel */}
      {isHotelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full max-h-[85vh] flex flex-col border border-neutral-200 shadow-2xl">
            <h3 className="text-lg font-bold text-neutral-900 font-display mb-1">
              Switch Accommodation
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Changing your hotel automatically updates your daily basecamp, itinerary proximity and total budget.
            </p>

            <div className="overflow-y-auto space-y-3 flex-1 pr-1">
              {availableHotels.map((h) => {
                const isCurrent = h.id === trip.hotel.id;
                return (
                  <div
                    key={h.id}
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isCurrent ? 'border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900' : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-neutral-900">{h.name}</span>
                        <span className="text-xs font-bold text-neutral-500">★ {h.rating}</span>
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {h.distanceFromAttractions}
                      </div>
                      <div className="text-xs font-semibold text-neutral-800 mt-1">
                        ${h.pricePerNight} / night
                      </div>
                    </div>

                    <button
                      disabled={isCurrent}
                      onClick={() => handleChangeHotel(h)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                        isCurrent 
                          ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                          : 'bg-neutral-900 text-white hover:bg-neutral-800'
                      }`}
                    >
                      {isCurrent ? 'Selected' : 'Select Hotel'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 text-right">
              <button
                onClick={() => setIsHotelModalOpen(false)}
                className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Change Transportation */}
      {isTransportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full max-h-[85vh] flex flex-col border border-neutral-200 shadow-2xl">
            <h3 className="text-lg font-bold text-neutral-900 font-display mb-1">
              Switch Transportation Option
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Select an alternative transit mode to recalculate timing, arrival times, and cost.
            </p>

            <div className="overflow-y-auto space-y-3 flex-1 pr-1">
              {availableTransports.map((t) => {
                const isCurrent = t.id === trip.transportation.id;
                return (
                  <div
                    key={t.id}
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isCurrent ? 'border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900' : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-neutral-900">{t.provider}</span>
                        {t.carrierCode && (
                          <span className="font-mono text-[10px] bg-neutral-200 px-1.5 py-0.5 rounded font-bold text-neutral-700">
                            {t.carrierCode}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-neutral-600 font-medium">{t.routeName}</div>
                      {(t.originName || t.destinationName) && (
                        <div className="text-[11px] text-purple-700 font-semibold mt-0.5">
                          {t.originName || 'Origin'} ➔ {t.destinationName || 'Destination'}
                        </div>
                      )}
                      <div className="text-xs text-neutral-500 mt-1">
                        {t.comfortLevel} · {t.durationMinutes} min · Departure: {t.departureTime}
                      </div>
                      <div className="text-xs font-bold text-neutral-900 mt-1">
                        ${t.price} / person
                      </div>
                    </div>

                    <button
                      disabled={isCurrent}
                      onClick={() => handleChangeTransport(t)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                        isCurrent 
                          ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                          : 'bg-neutral-900 text-white hover:bg-neutral-800'
                      }`}
                    >
                      {isCurrent ? 'Selected' : 'Select Option'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 text-right">
              <button
                onClick={() => setIsTransportModalOpen(false)}
                className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
