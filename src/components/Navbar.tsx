import React from 'react';
import { Compass, Briefcase } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenWizard: () => void;
  favoritesCount: number;
  savedTripsCount: number;
  onOpenSavedTrips: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenWizard,
  favoritesCount,
  savedTripsCount,
  onOpenSavedTrips
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single Brand Wordmark element */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
          className="text-xl font-bold tracking-tight text-neutral-900 font-display flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-sm">
            P&amp;W
          </span>
          <span>Plan &amp; Wander</span>
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-neutral-900 ${
              activeTab === 'home' ? 'text-neutral-900 font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('explore')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-neutral-900 ${
              activeTab === 'explore' ? 'text-neutral-900 font-semibold' : ''
            }`}
          >
            Explore
          </button>
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-neutral-900 ${
              activeTab === 'itinerary' ? 'text-neutral-900 font-semibold' : ''
            }`}
          >
            Itinerary
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-neutral-900 ${
              activeTab === 'hotels' ? 'text-neutral-900 font-semibold' : ''
            }`}
          >
            Hotels
          </button>
          <button
            onClick={() => setActiveTab('transport')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-neutral-900 ${
              activeTab === 'transport' ? 'text-neutral-900 font-semibold' : ''
            }`}
          >
            Transportation
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSavedTrips}
            className="relative p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            title="My Saved Trips & Favorites"
          >
            <Briefcase className="w-4 h-4" />
            {(savedTripsCount > 0 || favoritesCount > 0) && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-600" />
            )}
          </button>

          <button
            onClick={onOpenWizard}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 active:scale-98 transition-all whitespace-nowrap cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Plan My Trip</span>
          </button>
        </div>

      </div>
    </header>
  );
};
