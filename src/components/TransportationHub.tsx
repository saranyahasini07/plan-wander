import React, { useState } from 'react';
import { getTransportationForRoute, DESTINATIONS } from '../data/mockData';
import { TransportationOption, TransportType } from '../types/travel';
import { 
  Plane, 
  Train, 
  Bus, 
  Car, 
  Clock, 
  MapPin, 
  Check, 
  Leaf, 
  DollarSign,
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Luggage,
  Ticket,
  Users,
  X,
  CreditCard,
  Wifi,
  Sparkles,
  Info
} from 'lucide-react';

interface TransportationHubProps {
  currentDestinationId?: string;
  startLocation?: string;
  selectedTransportId?: string;
  travelersCount?: number;
  onSelectTransportForTrip?: (trans: TransportationOption) => void;
  onChangeStartLocation?: (newOrigin: string) => void;
}

export const TransportationHub: React.FC<TransportationHubProps> = ({
  currentDestinationId = 'kyoto',
  startLocation = 'New York (JFK)',
  selectedTransportId,
  travelersCount = 2,
  onSelectTransportForTrip,
  onChangeStartLocation
}) => {
  const [originInput, setOriginInput] = useState(startLocation);
  const [activeOrigin, setActiveOrigin] = useState(startLocation);
  const [filterType, setFilterType] = useState<string>('all');
  
  // Booking Modal State
  const [bookingModalTransport, setBookingModalTransport] = useState<TransportationOption | null>(null);
  const [passengerName, setPassengerName] = useState('Alex Morgan');
  const [seatClass, setSeatClass] = useState<'Standard' | 'Premium' | 'First / Green Car'>('Standard');
  const [seatPreference, setSeatPreference] = useState<'Window' | 'Aisle' | 'Forward Car'>('Window');
  const [isBookedConfirmed, setIsBookedConfirmed] = useState(false);
  const [confirmedBookingRef, setConfirmedBookingRef] = useState('');

  // Target Destination
  const currentDest = DESTINATIONS.find(d => d.id === currentDestinationId) || DESTINATIONS[0];

  // Dynamic transportation options calculated from origin and destination
  const allTransports = getTransportationForRoute(activeOrigin, currentDestinationId);

  const filtered = allTransports.filter(t => {
    if (filterType !== 'all' && t.type !== filterType) return false;
    return true;
  });

  const handleApplyOrigin = (newOrigin: string) => {
    setActiveOrigin(newOrigin);
    setOriginInput(newOrigin);
    if (onChangeStartLocation) {
      onChangeStartLocation(newOrigin);
    }
  };

  const getTransportIcon = (type: TransportType) => {
    switch (type) {
      case 'flight': return Plane;
      case 'train': return Train;
      case 'bus': return Bus;
      case 'taxi': return Car;
      case 'rental_car': return Car;
      default: return Train;
    }
  };

  const handleOpenBooking = (trans: TransportationOption) => {
    setBookingModalTransport(trans);
    setIsBookedConfirmed(false);
  };

  const handleConfirmReservation = () => {
    if (!bookingModalTransport) return;
    const ref = `TKT-${bookingModalTransport.type.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingRef(ref);
    setIsBookedConfirmed(true);

    if (onSelectTransportForTrip) {
      onSelectTransportForTrip(bookingModalTransport);
    }
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Starting Location & Route Control Banner */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-purple-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
            <Train className="w-4 h-4" />
            <span>Multi-Modal Journey Planner & Booking System</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight">
              Route & Transit Booking to {currentDest.name}
            </h2>
            <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
              Plan &amp; Wander searches real high-speed rail lines (Shinkansen, Frecciarossa, SBB), international and domestic flights, express shuttles, and private car connections based on your exact starting point.
            </p>
          </div>

          {/* Interactive Start Location Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-lg border border-white/10">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="flex-1">
                <div className="text-[10px] uppercase font-bold text-neutral-400">Departing From (Start Location)</div>
                <input
                  type="text"
                  value={originInput}
                  onChange={(e) => setOriginInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleApplyOrigin(originInput);
                  }}
                  placeholder="Enter starting city, airport code, or rail station"
                  className="w-full bg-transparent text-sm font-bold text-white placeholder-neutral-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center text-neutral-400 px-1">
              <ArrowRight className="w-4 h-4 text-purple-300" />
            </div>

            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-lg border border-white/10">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-[10px] uppercase font-bold text-neutral-400">Destination Hub</div>
                <div className="text-sm font-bold text-white">{currentDest.name}, {currentDest.country}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleApplyOrigin(originInput)}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs rounded-lg transition-colors cursor-pointer shrink-0 shadow-sm"
            >
              Search Routes
            </button>
          </div>

          {/* Popular Starting Origin Presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-neutral-400 font-semibold text-[11px]">Quick Starting Points:</span>
            {[
              'Tokyo (Tokyo Station / HND)',
              'New York (JFK / EWR)',
              'London (LHR / St Pancras)',
              'Rome (FCO / Termini)',
              'Paris (CDG / Gare de Lyon)',
              'Zurich (ZRH / HB)',
              'San Francisco (SFO)'
            ].map((hub) => (
              <button
                key={hub}
                type="button"
                onClick={() => handleApplyOrigin(hub)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                  activeOrigin === hub
                    ? 'bg-white text-neutral-950 font-bold shadow'
                    : 'bg-white/10 hover:bg-white/20 text-neutral-200'
                }`}
              >
                {hub}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Mode Filters & Route Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span className="font-bold text-neutral-900">{filtered.length} route options</span>
          <span>from <strong className="text-neutral-900">{activeOrigin}</strong> to <strong className="text-neutral-900">{currentDest.name}</strong></span>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl overflow-x-auto">
          {[
            { id: 'all', label: 'All Modes' },
            { id: 'train', label: 'Trains & Rail' },
            { id: 'flight', label: 'Flights' },
            { id: 'taxi', label: 'Private Cabs' },
            { id: 'bus', label: 'Buses' },
            { id: 'rental_car', label: 'Car Rental' }
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setFilterType(mode.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                filterType === mode.id
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* Transportation Options Cards */}
      <div className="space-y-4">
        {filtered.map((trans) => {
          const Icon = getTransportIcon(trans.type);
          const isSelected = trans.id === selectedTransportId;
          const totalForGroup = trans.price * travelersCount;

          return (
            <div
              key={trans.id}
              className={`bg-white rounded-2xl border transition-all duration-300 p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                isSelected
                  ? 'border-neutral-900 ring-2 ring-neutral-900/10 bg-neutral-50/40 shadow-md'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {/* Left Details */}
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-neutral-100 rounded-2xl text-neutral-900 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base font-bold text-neutral-900 font-display">
                      {trans.provider}
                    </span>
                    {trans.carrierCode && (
                      <span className="text-[11px] font-mono font-bold bg-neutral-100 px-2 py-0.5 rounded text-neutral-700">
                        {trans.carrierCode}
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      {trans.comfortLevel}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {trans.bookingStatus || 'Available'}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-neutral-800">
                    {trans.routeName}
                  </div>

                  {/* Route & Times Badge */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-xs">
                    <div>
                      <div className="text-[10px] font-bold text-neutral-400 uppercase">Departure</div>
                      <div className="font-bold text-neutral-900">{trans.departureTime}</div>
                      <div className="text-[11px] text-neutral-500 truncate">{trans.originName || activeOrigin}</div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-neutral-400 uppercase">Arrival</div>
                      <div className="font-bold text-neutral-900">{trans.arrivalTime}</div>
                      <div className="text-[11px] text-neutral-500 truncate">{trans.destinationName || currentDest.name}</div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-neutral-400 uppercase">Duration & Stops</div>
                      <div className="font-bold text-neutral-900">
                        {Math.floor(trans.durationMinutes / 60)}h {trans.durationMinutes % 60}m
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {trans.transfers === 0 ? 'Direct / Non-stop' : `${trans.transfers} Transfer`}
                      </div>
                    </div>
                  </div>

                  {/* Extra Specs */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 pt-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{trans.distanceKm} km</span>
                    </div>

                    {trans.baggageAllowance && (
                      <div className="flex items-center gap-1 text-neutral-600">
                        <Luggage className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{trans.baggageAllowance}</span>
                      </div>
                    )}

                    {trans.gateOrPlatform && (
                      <div className="flex items-center gap-1 text-purple-700 font-medium">
                        <Ticket className="w-3.5 h-3.5" />
                        <span>{trans.gateOrPlatform}</span>
                      </div>
                    )}

                    {trans.emissionsKg && (
                      <div className="flex items-center gap-1 text-emerald-700">
                        <Leaf className="w-3.5 h-3.5" />
                        <span>~{trans.emissionsKg} kg CO₂ / pax</span>
                      </div>
                    )}
                  </div>

                  {trans.details && (
                    <p className="text-xs text-neutral-500 pt-1 leading-relaxed max-w-2xl">
                      {trans.details}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Price & Booking Action */}
              <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-100 shrink-0">
                <div className="text-left lg:text-right">
                  <div className="text-2xl font-black text-neutral-900 tabular-nums">
                    ${trans.price}
                    <span className="text-xs font-normal text-neutral-500 ml-1">/ person</span>
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    ${totalForGroup} total for {travelersCount} travelers
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenBooking(trans)}
                    className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <Ticket className="w-3.5 h-3.5 text-amber-400" />
                    <span>Book Ticket</span>
                  </button>

                  <button
                    type="button"
                    disabled={isSelected}
                    onClick={() => onSelectTransportForTrip && onSelectTransportForTrip(trans)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-100 text-neutral-900 font-bold border border-neutral-300'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                    }`}
                    title="Select to include in active itinerary"
                  >
                    {isSelected ? (
                      <span className="flex items-center gap-1 text-emerald-700">
                        <Check className="w-3.5 h-3.5" />
                        <span>In Itinerary</span>
                      </span>
                    ) : (
                      <span>Add to Trip</span>
                    )}
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* TICKET BOOKING MODAL */}
      {bookingModalTransport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-900 text-white">
              <div className="flex items-center gap-2">
                <Ticket className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-base font-bold font-display">
                    {bookingModalTransport.type === 'flight' ? 'Flight Reservation & Booking' : 'Rail & Coach Ticket Reservation'}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Route: {activeOrigin} → {currentDest.name}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setBookingModalTransport(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {!isBookedConfirmed ? (
                <>
                  {/* Digital Ticket Header Preview */}
                  <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                      <div>
                        <div className="text-xs text-neutral-500 uppercase font-semibold">Carrier / Operator</div>
                        <div className="text-base font-bold text-neutral-900 flex items-center gap-2">
                          <span>{bookingModalTransport.provider}</span>
                          {bookingModalTransport.carrierCode && (
                            <span className="font-mono text-xs px-2 py-0.5 bg-neutral-200 rounded text-neutral-800">
                              {bookingModalTransport.carrierCode}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-neutral-500 uppercase font-semibold">Service Type</div>
                        <div className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded inline-block">
                          {bookingModalTransport.comfortLevel}
                        </div>
                      </div>
                    </div>

                    {/* Departure vs Arrival */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] text-neutral-400 font-bold uppercase">From (Origin)</div>
                        <div className="text-lg font-bold text-neutral-900">{bookingModalTransport.departureTime}</div>
                        <div className="text-xs font-semibold text-neutral-700">{bookingModalTransport.originName || activeOrigin}</div>
                        <div className="text-[11px] text-neutral-500">{bookingModalTransport.gateOrPlatform || 'Main Terminal'}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-[10px] text-neutral-400 font-bold uppercase">To (Destination)</div>
                        <div className="text-lg font-bold text-neutral-900">{bookingModalTransport.arrivalTime}</div>
                        <div className="text-xs font-semibold text-neutral-700">{bookingModalTransport.destinationName || currentDest.name}</div>
                        <div className="text-[11px] text-neutral-500">Central Hub</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-600">
                      <span>Total Travel Time: {Math.floor(bookingModalTransport.durationMinutes / 60)}h {bookingModalTransport.durationMinutes % 60}m</span>
                      <span>Distance: {bookingModalTransport.distanceKm} km</span>
                    </div>
                  </div>

                  {/* Passenger Information */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>Passenger & Booking Contact</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Primary Traveler Full Name
                        </label>
                        <input
                          type="text"
                          value={passengerName}
                          onChange={(e) => setPassengerName(e.target.value)}
                          className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Number of Passengers
                        </label>
                        <div className="px-3 py-2 bg-neutral-100 border border-neutral-200 rounded-xl text-sm font-semibold text-neutral-800">
                          {travelersCount} Travelers ({travelersCount} Adult Tickets)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Class & Seat Options */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                      <Luggage className="w-4 h-4 text-purple-600" />
                      <span>Class of Service & Seat Preference</span>
                    </h4>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'Standard', label: 'Standard / Economy', priceExtra: 0 },
                        { id: 'Premium', label: 'Premium Economy', priceExtra: 45 },
                        { id: 'First / Green Car', label: 'First / Green Car', priceExtra: 110 }
                      ].map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSeatClass(c.id as any)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            seatClass === c.id
                              ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
                              : 'border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-300'
                          }`}
                        >
                          <div className="font-bold text-xs">{c.label}</div>
                          <div className={`text-[10px] mt-1 ${seatClass === c.id ? 'text-amber-300' : 'text-neutral-500'}`}>
                            {c.priceExtra === 0 ? 'Included' : `+$${c.priceExtra}/pax`}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs pt-1">
                      <span className="font-semibold text-neutral-600">Seat Preference:</span>
                      {(['Window', 'Aisle', 'Forward Car'] as const).map((seat) => (
                        <label key={seat} className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="seatPref"
                            checked={seatPreference === seat}
                            onChange={() => setSeatPreference(seat)}
                            className="accent-neutral-900"
                          />
                          <span className="text-neutral-800">{seat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Included Amenities Badge */}
                  <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{bookingModalTransport.baggageAllowance || '2 Checked Bags (23kg)'}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Wifi className="w-4 h-4 text-purple-600" />
                      <span>Complimentary High-Speed Wi-Fi</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>Flexible Fare & Free Cancellation up to 24h</span>
                    </span>
                  </div>

                  {/* Cost Summary */}
                  <div className="bg-neutral-100 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-500">Total Booking Price</div>
                      <div className="text-2xl font-black text-neutral-900 tabular-nums">
                        ${(bookingModalTransport.price + (seatClass === 'Premium' ? 45 : seatClass === 'First / Green Car' ? 110 : 0)) * travelersCount}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Includes all taxes, seat reservations & carrier surcharges
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] font-semibold text-neutral-500">Demo Booking System</div>
                      <div className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-0.5">
                        Instant e-Ticket Generation
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Confirmed Booking State */
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 font-display">
                      Reservation Confirmed!
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                      Your tickets from <strong className="text-neutral-800">{activeOrigin}</strong> to <strong className="text-neutral-800">{currentDest.name}</strong> on <strong className="text-neutral-800">{bookingModalTransport.provider}</strong> have been secured.
                    </p>
                  </div>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 max-w-sm mx-auto text-left space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Booking Reference (PNR):</span>
                      <span className="font-mono font-bold text-neutral-900">{confirmedBookingRef}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Passenger:</span>
                      <span className="font-semibold text-neutral-900">{passengerName} ({travelersCount} pax)</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Seat & Class:</span>
                      <span className="font-semibold text-neutral-900">{seatClass} ({seatPreference})</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Status:</span>
                      <span className="font-bold text-emerald-600">Issued & Added to Itinerary</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-400 max-w-xs mx-auto">
                    Note: This is simulated demo reservation data for trip planning purposes. Live GDS/NDC booking APIs connect seamlessly in production.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setBookingModalTransport(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
              >
                {isBookedConfirmed ? 'Done' : 'Cancel'}
              </button>

              {!isBookedConfirmed ? (
                <button
                  type="button"
                  onClick={handleConfirmReservation}
                  className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all shadow cursor-pointer flex items-center gap-2"
                >
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Confirm Ticket & Add to Itinerary</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setBookingModalTransport(null)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>View in Itinerary</span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
