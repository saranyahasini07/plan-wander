import React, { useState } from 'react';
import { RESTAURANTS, DESTINATIONS } from '../data/mockData';
import { Restaurant, MealType } from '../types/travel';
import { 
  Utensils, 
  Star, 
  MapPin, 
  DollarSign, 
  Coffee, 
  Sparkles,
  Check
} from 'lucide-react';

interface RestaurantsHubProps {
  currentDestinationId?: string;
  onSelectRestaurant?: (restaurant: Restaurant) => void;
}

export const RestaurantsHub: React.FC<RestaurantsHubProps> = ({
  currentDestinationId = 'kyoto',
  onSelectRestaurant
}) => {
  const [selectedMeal, setSelectedMeal] = useState<string>('all');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');

  const restaurants = RESTAURANTS.filter(r => {
    if (currentDestinationId && r.destinationId !== currentDestinationId) return false;
    if (selectedMeal !== 'all' && r.mealType !== selectedMeal) return false;
    if (selectedDiet !== 'all' && !r.dietaryOptions.some(d => d.toLowerCase().includes(selectedDiet.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="w-full space-y-6">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <Utensils className="w-3.5 h-3.5 text-emerald-600" />
            <span>Gastronomy & Culinary Directory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">
            Recommended Dining in {DESTINATIONS.find(d => d.id === currentDestinationId)?.name || currentDestinationId}
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Handpicked breakfast spots, authentic lunches, street stalls and fine-dining tasting menus.
          </p>
        </div>

        {/* Dietary and Meal Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Meal Type Filter */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl overflow-x-auto">
            {[
              { id: 'all', label: 'All Meals' },
              { id: 'breakfast', label: 'Breakfast' },
              { id: 'lunch', label: 'Lunch' },
              { id: 'dinner', label: 'Dinner' },
              { id: 'cafe', label: 'Cafes' },
              { id: 'fine_dining', label: 'Fine Dining' }
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMeal(m.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedMeal === m.id
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Diet Filter */}
          <select
            value={selectedDiet}
            onChange={(e) => setSelectedDiet(e.target.value)}
            className="px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-800 cursor-pointer"
          >
            <option value="all">All Diets</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((rest) => (
          <div
            key={rest.id}
            className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-44 bg-neutral-100 overflow-hidden">
              <img
                src={rest.image}
                alt={rest.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                {rest.mealType.replace('_', ' ')}
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-neutral-900 px-2.5 py-1 rounded-md text-xs font-bold shadow-sm">
                {rest.priceLevel}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-neutral-500">{rest.cuisine}</span>
                  <span className="text-xs font-bold text-neutral-900 flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{rest.rating}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 font-display mt-1">
                  {rest.name}
                </h3>

                <div className="mt-2.5 p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                    Signature Specialty
                  </div>
                  <div className="font-semibold text-neutral-800">
                    {rest.specialtyDish}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {rest.dietaryOptions.map((diet, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded font-medium"
                    >
                      {diet}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span className="truncate max-w-[200px]">{rest.address}</span>
                <span className="font-semibold text-neutral-800 shrink-0">~{rest.distanceFromCenterKm} km</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
