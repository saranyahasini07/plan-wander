import React, { useState } from 'react';
import { HOTELS } from '../data/mockData';
import { Hotel, RoomOption } from '../types/travel';
import { 
  Building, 
  Star, 
  MapPin, 
  Check, 
  Coffee, 
  ShieldCheck, 
  SlidersHorizontal, 
  X,
  CreditCard,
  CheckCircle2,
  Calendar,
  Users
} from 'lucide-react';

interface HotelBookingHubProps {
  currentDestinationId?: string;
  tripDurationDays?: number;
  selectedHotelId?: string;
  onSelectHotelForTrip?: (hotel: Hotel) => void;
}

export const HotelBookingHub: React.FC<HotelBookingHubProps> = ({
  currentDestinationId = 'kyoto',
  tripDurationDays = 5,
  selectedHotelId,
  onSelectHotelForTrip
}) => {
  const [filterRating, setFilterRating] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(750);
  const [filterAmenity, setFilterAmenity] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [viewingHotel, setViewingHotel] = useState<Hotel | null>(null);
  const [bookingHotel, setBookingHotel] = useState<Hotel | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const hotels = HOTELS.filter(h => {
    if (currentDestinationId && h.destinationId !== currentDestinationId) return false;
    if (filterRating > 0 && h.rating < filterRating) return false;
    if (h.pricePerNight > maxPrice) return false;
    if (filterAmenity === 'breakfast' && !h.breakfastIncluded) return false;
    if (filterAmenity === 'freeCancel' && !h.freeCancellation) return false;
    if (selectedTag !== 'all' && !h.tags.includes(selectedTag)) return false;
    return true;
  });

  const handleConfirmDemoBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      if (bookingHotel && onSelectHotelForTrip) {
        onSelectHotelForTrip(bookingHotel);
      }
      setBookingHotel(null);
      setBookingSuccess(false);
    }, 1800);
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>Curated Stays & Lodging Inventory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
            Hotels & Resorts in {currentDestinationId.toUpperCase()}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Real prices calculated for a {tripDurationDays}-night stay. Instant reservation confirmation.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Tag Filter */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl">
            {['all', 'luxury', 'boutique', 'budget', 'couple', 'family'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-colors cursor-pointer ${
                  selectedTag === tag 
                    ? 'bg-white text-neutral-900 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Filter Sliders */}
      <div className="p-4 bg-white rounded-2xl border border-neutral-200/90 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div>
          <label className="font-semibold text-neutral-700 flex justify-between mb-1.5">
            <span>Max Price Per Night</span>
            <span className="font-bold text-neutral-900 tabular-nums">${maxPrice}</span>
          </label>
          <input
            type="range"
            min={60}
            max={800}
            step={20}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-neutral-900 cursor-pointer"
          />
        </div>

        <div>
          <label className="font-semibold text-neutral-700 block mb-1.5">
            Guest Rating
          </label>
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(Number(e.target.value))}
            className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-900 focus:outline-none cursor-pointer"
          >
            <option value={0}>All Ratings</option>
            <option value={4.5}>★ 4.5 & Above (Very Good)</option>
            <option value={4.8}>★ 4.8 & Above (Exceptional)</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-neutral-700 block mb-1.5">
            Key Amenities
          </label>
          <select
            value={filterAmenity}
            onChange={(e) => setFilterAmenity(e.target.value)}
            className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-900 focus:outline-none cursor-pointer"
          >
            <option value="all">All Amenities</option>
            <option value="breakfast">Breakfast Included Only</option>
            <option value="freeCancel">Free Cancellation Only</option>
          </select>
        </div>
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map((hotel) => {
          const totalStayPrice = hotel.pricePerNight * tripDurationDays;
          const isCurrentActive = hotel.id === selectedHotelId;

          return (
            <div
              key={hotel.id}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                isCurrentActive
                  ? 'border-neutral-900 ring-2 ring-neutral-900/10 shadow-lg'
                  : 'border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Image & Price Overlay */}
              <div className="relative h-48 bg-neutral-100 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{hotel.rating}</span>
                  <span className="opacity-75">({hotel.reviewCount})</span>
                </div>
                {hotel.freeCancellation && (
                  <div className="absolute top-3 right-3 bg-emerald-950/80 backdrop-blur-sm text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded text-[10px] font-semibold">
                    Free Cancellation
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-neutral-900 px-2.5 py-1 rounded-lg text-xs font-bold shadow-md">
                  ${hotel.pricePerNight} <span className="font-normal text-neutral-500">/ night</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-semibold mb-1">
                    <span>{hotel.starRating}-Star Hotel</span>
                    <span>·</span>
                    <span className="capitalize">{hotel.tags[0]}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 font-display line-clamp-1">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 flex items-start gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{hotel.distanceFromAttractions}</span>
                  </p>

                  {/* Amenities Preview */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-semibold">
                      Total ({tripDurationDays} Nights)
                    </div>
                    <div className="text-sm font-extrabold text-neutral-900 tabular-nums">
                      ${totalStayPrice.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewingHotel(hotel)}
                      className="px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => setBookingHotel(hotel)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal: View Hotel Details */}
      {viewingHotel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto border border-neutral-200 shadow-2xl p-6 space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                  {viewingHotel.starRating}-Star Hotel Profile
                </span>
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  {viewingHotel.name}
                </h3>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {viewingHotel.address}
                </div>
              </div>
              <button
                onClick={() => setViewingHotel(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-44 rounded-xl overflow-hidden bg-neutral-100">
              <img
                src={viewingHotel.image}
                alt={viewingHotel.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-xs">
              <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                Available Room Types
              </div>
              <div className="space-y-2">
                {viewingHotel.roomTypes.map((room, idx) => (
                  <div key={idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-neutral-900">{room.type}</div>
                      <div className="text-[11px] text-neutral-500">{room.capacity} · {room.bedType}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-neutral-900 tabular-nums">${room.pricePerNight}/night</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                In-Room & Property Amenities
              </div>
              <div className="grid grid-cols-2 gap-2 text-neutral-700">
                {viewingHotel.amenities.map((a, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600">
              <span className="font-semibold text-neutral-900">Cancellation Policy: </span>
              <span>{viewingHotel.cancellationPolicy}</span>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-neutral-400 font-medium">Nightly Rate</div>
                <div className="text-lg font-bold text-neutral-900 tabular-nums">
                  ${viewingHotel.pricePerNight} <span className="text-xs font-normal text-neutral-500">/ night</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setViewingHotel(null);
                  setBookingHotel(viewingHotel);
                }}
                className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-sm"
              >
                Proceed to Book Stay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Instant Booking Checkout (Demo Flow with clear notice) */}
      {bookingHotel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full border border-neutral-200 shadow-2xl p-6 space-y-5">
            {bookingSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  Reservation Confirmed!
                </h3>
                <p className="text-xs text-neutral-500">
                  Confirmation #VG-{Math.floor(100000 + Math.random() * 900000)} generated. Updated in your active itinerary.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmDemoBooking} className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                      Instant Stay Checkout
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 font-display">
                      {bookingHotel.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setBookingHotel(null)}
                    className="p-1 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Stay Duration:</span>
                    <span className="font-semibold text-neutral-800">{tripDurationDays} Nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Room Price:</span>
                    <span className="font-semibold text-neutral-800">${bookingHotel.pricePerNight} × {tripDurationDays}</span>
                  </div>
                  <div className="flex justify-between border-t border-neutral-200/80 pt-1.5 font-bold text-neutral-900">
                    <span>Total Demo Charge:</span>
                    <span className="tabular-nums">${bookingHotel.pricePerNight * tripDurationDays}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Guest Full Name
                    </label>
                    <input
                      required
                      defaultValue="Alex Morgan"
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Email Confirmation Address
                    </label>
                    <input
                      required
                      type="email"
                      defaultValue="alex.morgan@planwander.io"
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-xs"
                    />
                  </div>
                </div>

                {/* Clear demo label per rule #12 */}
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 text-[11px] text-neutral-500 leading-relaxed">
                  <strong>Demo Inventory Sandbox:</strong> This prototype simulates real-time booking confirmation and syncs directly into your trip itinerary without actual card charges.
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  <span>Confirm Instant Demo Reservation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
