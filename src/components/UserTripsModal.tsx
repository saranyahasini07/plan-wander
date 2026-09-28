import React, { useState } from 'react';
import { TripOption, Hotel, Attraction } from '../types/travel';
import { 
  Briefcase, 
  Heart, 
  Download, 
  Share2, 
  Trash2, 
  X, 
  Check, 
  Building, 
  MapPin, 
  Printer, 
  Copy,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface UserTripsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedTrips: TripOption[];
  activeTrip: TripOption;
  favoriteHotels: Hotel[];
  favoriteAttractions: Attraction[];
  onLoadTrip: (trip: TripOption) => void;
  onDeleteTrip: (tripId: string) => void;
  onSaveCurrentTrip: () => void;
}

export const UserTripsModal: React.FC<UserTripsModalProps> = ({
  isOpen,
  onClose,
  savedTrips,
  activeTrip,
  favoriteHotels,
  favoriteAttractions,
  onLoadTrip,
  onDeleteTrip,
  onSaveCurrentTrip
}) => {
  const [activeTab, setActiveTab] = useState<'trips' | 'favorites' | 'export'>('trips');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleCopyShareLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeTrip, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `plan-and-wander-itinerary-${activeTrip.title.toLowerCase().replace(/\s+/g, '-')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-neutral-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 px-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-neutral-800" />
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              My Travel Hub & Itineraries
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-neutral-100">
          <button
            type="button"
            onClick={() => setActiveTab('trips')}
            className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'trips'
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Saved Itineraries ({savedTrips.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('favorites')}
            className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'favorites'
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Saved Sights & Hotels ({favoriteHotels.length + favoriteAttractions.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('export')}
            className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'export'
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            Share & Export Trip
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB 1: SAVED TRIPS */}
          {activeTab === 'trips' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  Save your active customized trip to access anytime or compare variations.
                </span>
                <button
                  type="button"
                  onClick={onSaveCurrentTrip}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold cursor-pointer shrink-0 transition-colors"
                >
                  Save Current Plan
                </button>
              </div>

              {savedTrips.length === 0 ? (
                <div className="p-8 text-center text-neutral-400 text-xs border border-dashed border-neutral-200 rounded-xl space-y-1">
                  <div>No saved custom trips yet.</div>
                  <div>Click "Save Current Plan" above to keep your itinerary for later!</div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {savedTrips.map((trip) => {
                    const isActive = trip.id === activeTrip.id;
                    return (
                      <div
                        key={trip.id}
                        className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-neutral-900">{trip.title}</span>
                            {isActive && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                                Active
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5">
                            {trip.daysCount} Days · ${trip.totalEstimatedCost.toLocaleString()} · Hotel: {trip.hotel.name}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              onLoadTrip(trip);
                              onClose();
                            }}
                            className="px-3 py-1.5 bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 cursor-pointer transition-colors"
                          >
                            Load
                          </button>
                          <button
                            type="button"
                            onClick={() => onDeleteTrip(trip.id)}
                            className="p-1.5 text-neutral-400 hover:text-rose-600 rounded-lg cursor-pointer transition-colors"
                            title="Delete Saved Trip"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FAVORITES */}
          {activeTab === 'favorites' && (
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Favorite Sights & Landmarks
                </div>
                {favoriteAttractions.length === 0 ? (
                  <div className="text-xs text-neutral-400 italic">No saved attractions yet. Browse the Places hub to save landmarks.</div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {favoriteAttractions.map(attr => (
                      <div key={attr.id} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-xs text-neutral-900">{attr.name}</div>
                          <div className="text-[11px] text-neutral-500">{attr.category} · Entry: ${attr.entryFee}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <div className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Favorite Hotels
                </div>
                {favoriteHotels.length === 0 ? (
                  <div className="text-xs text-neutral-400 italic">No saved hotels yet. Bookmark hotels from the Hotel Booking hub.</div>
                ) : (
                  <div className="space-y-2">
                    {favoriteHotels.map(h => (
                      <div key={h.id} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-xs text-neutral-900">{h.name}</div>
                          <div className="text-[11px] text-neutral-500">${h.pricePerNight}/night · ★ {h.rating}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: SHARE & EXPORT */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-3">
                <div className="font-bold text-sm text-neutral-900">
                  Share Itinerary with Travel Companions
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Anyone with this link can view your customized daily schedule, hotel reservation details, and mapped routes.
                </p>

                <div className="flex items-center gap-2">
                  <input
                    readOnly
                    value={window.location.href}
                    className="flex-1 px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-mono text-neutral-600 truncate"
                  />
                  <button
                    type="button"
                    onClick={handleCopyShareLink}
                    className="px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="p-4 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl text-left transition-colors flex items-center gap-3 cursor-pointer group"
                >
                  <div className="p-2.5 bg-neutral-100 group-hover:bg-neutral-200 rounded-lg text-neutral-800">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-neutral-900">Print / Save as PDF</div>
                    <div className="text-[11px] text-neutral-500">Formatted clean paper itinerary</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="p-4 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl text-left transition-colors flex items-center gap-3 cursor-pointer group"
                >
                  <div className="p-2.5 bg-neutral-100 group-hover:bg-neutral-200 rounded-lg text-neutral-800">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-neutral-900">Export JSON Backup</div>
                    <div className="text-[11px] text-neutral-500">Download offline data copy</div>
                  </div>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-neutral-100 bg-neutral-50/70 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
