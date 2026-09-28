import React, { useState } from 'react';
import { ATTRACTIONS } from '../data/mockData';
import { Attraction, AttractionCategory } from '../types/travel';
import { 
  Compass, 
  Clock, 
  MapPin, 
  Ticket, 
  Users, 
  Plus, 
  Check, 
  Sun,
  Filter
} from 'lucide-react';

interface PlacesToVisitHubProps {
  currentDestinationId?: string;
  onAddAttractionToItinerary?: (attraction: Attraction) => void;
  savedAttractionIds?: string[];
  onToggleSaveAttraction?: (attractionId: string) => void;
}

export const PlacesToVisitHub: React.FC<PlacesToVisitHubProps> = ({
  currentDestinationId = 'kyoto',
  onAddAttractionToItinerary,
  savedAttractionIds = [],
  onToggleSaveAttraction
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const destinationAttractions = ATTRACTIONS.filter(a => {
    if (currentDestinationId && a.destinationId !== currentDestinationId) return false;
    if (selectedCategory !== 'all' && a.category !== selectedCategory) return false;
    return true;
  });

  const categories: Array<{ id: string; label: string }> = [
    { id: 'all', label: 'All Sights' },
    { id: 'temples', label: 'Temples & Shrines' },
    { id: 'historical', label: 'Historical' },
    { id: 'nature', label: 'Nature & Gardens' },
    { id: 'mountains', label: 'Alpine & Peaks' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'beaches', label: 'Beaches' },
    { id: 'food', label: 'Food Markets' },
    { id: 'hidden_gem', label: 'Hidden Gems' }
  ];

  return (
    <div className="w-full space-y-6">
      
      {/* Header and Category Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            <span>Curated Landmarks & Cultural Sights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
            Must-Visit Places in {currentDestinationId.toUpperCase()}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Recommended based on scenic value, historical heritage, and optimal visiting windows.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinationAttractions.map((attr) => {
          const isSaved = savedAttractionIds.includes(attr.id);

          return (
            <div
              key={attr.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Quick Badges */}
              <div className="relative h-48 bg-neutral-100 overflow-hidden">
                <img
                  src={attr.image}
                  alt={attr.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  {attr.category}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-neutral-900 px-2 py-0.5 rounded text-[11px] font-bold shadow-sm">
                  {attr.entryFee === 0 ? 'Free Entry' : `$${attr.entryFee} Entry`}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-display">
                    {attr.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed line-clamp-3">
                    {attr.description}
                  </p>

                  {/* Metadata Specs */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5 text-xs text-neutral-500">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-neutral-700 font-medium">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Duration:</span>
                      </span>
                      <span className="font-semibold text-neutral-900">{attr.recommendedDurationMinutes} mins</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-neutral-700 font-medium">
                        <Sun className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Best Window:</span>
                      </span>
                      <span className="font-medium text-neutral-800 truncate max-w-[170px]">{attr.bestTimeOfDay}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-neutral-700 font-medium">
                        <Users className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Crowd:</span>
                      </span>
                      <span className="font-medium text-neutral-800">{attr.crowdLevel} Density</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  {onToggleSaveAttraction && (
                    <button
                      type="button"
                      onClick={() => onToggleSaveAttraction(attr.id)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                        isSaved ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                      }`}
                    >
                      {isSaved ? 'Favorited' : 'Save'}
                    </button>
                  )}

                  {onAddAttractionToItinerary && (
                    <button
                      type="button"
                      onClick={() => onAddAttractionToItinerary(attr)}
                      className="ml-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Itinerary</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
