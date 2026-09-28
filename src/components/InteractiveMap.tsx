import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Hotel, Attraction, Restaurant, ItineraryDay } from '../types/travel';
import { MapPin, Navigation, Compass } from 'lucide-react';

interface InteractiveMapProps {
  hotel?: Hotel;
  activeDay?: ItineraryDay;
  attractions?: Attraction[];
  restaurants?: Restaurant[];
  centerCoordinates?: [number, number];
  zoom?: number;
  onSelectLocation?: (locationName: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  hotel,
  activeDay,
  attractions = [],
  restaurants = [],
  centerCoordinates = [35.0116, 135.7681],
  zoom = 13,
  onSelectLocation
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const routePolylineRef = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Initialize map with CartoDB Voyager tiles (clean, modern, light travel aesthetic)
      const map = L.map(mapContainerRef.current, {
        center: centerCoordinates,
        zoom: zoom,
        zoomControl: false,
        attributionControl: false
      });

      // Sleek travel-friendly CartoDB Voyager map tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      // Re-position zoom control to top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
      markersLayerRef.current = L.layerGroup().addTo(map);
    }

    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;

    if (!map || !markersLayer) return;

    // Clear old markers & polylines
    markersLayer.clearLayers();
    if (routePolylineRef.current) {
      routePolylineRef.current.remove();
      routePolylineRef.current = null;
    }

    const latLngBounds: L.LatLngExpression[] = [];

    // Helper to create modern custom SVG marker pins
    const createCustomIcon = (bgColor: string, symbol: string, label?: string) => {
      return L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -100%);">
            <div style="background-color: ${bgColor}; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.25); border: 2px solid white;">
              ${symbol}
            </div>
            ${label ? `<div style="background: white; color: #1e293b; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600; white-space: nowrap; margin-top: 2px; box-shadow: 0 2px 4px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.08);">${label}</div>` : ''}
            <div style="width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 6px solid ${bgColor}; margin-top: -1px;"></div>
          </div>
        `,
        iconSize: [32, 42],
        iconAnchor: [16, 42],
        popupAnchor: [0, -38]
      });
    };

    // 1. Plot Hotel
    if (hotel && hotel.coordinates) {
      const hotelPos: [number, number] = hotel.coordinates;
      latLngBounds.push(hotelPos);
      const hotelIcon = createCustomIcon('#2563eb', '🏨', 'Hotel');
      const hotelMarker = L.marker(hotelPos, { icon: hotelIcon }).addTo(markersLayer);

      hotelMarker.bindPopup(`
        <div style="min-width: 180px;">
          <div style="font-weight: 700; font-size: 13px; color: #0f172a; margin-bottom: 2px;">${hotel.name}</div>
          <div style="font-size: 11px; color: #64748b; margin-bottom: 6px;">★ ${hotel.rating} · ${hotel.starRating}-Star Stay</div>
          <div style="font-size: 11px; color: #334155;">${hotel.address}</div>
          <div style="font-weight: 600; color: #2563eb; margin-top: 4px; font-size: 12px;">$${hotel.pricePerNight}/night</div>
        </div>
      `);
    }

    // 2. Plot Day's Itinerary Route
    if (activeDay && activeDay.activities && activeDay.activities.length > 0) {
      const routePoints: [number, number][] = [];

      activeDay.activities.forEach((act, idx) => {
        if (act.coordinates) {
          routePoints.push(act.coordinates);
          latLngBounds.push(act.coordinates);

          let pinBg = '#f59e0b'; // Amber for attractions
          let pinSymbol = `${idx + 1}`;
          if (act.category === 'food') {
            pinBg = '#10b981'; // Emerald for dining
            pinSymbol = '🍴';
          } else if (act.category === 'logistics') {
            pinBg = '#8b5cf6'; // Purple for transit/airport
            pinSymbol = '✈️';
          } else if (act.category === 'relaxation') {
            pinBg = '#06b6d4'; // Cyan for rest
            pinSymbol = '☕';
          }

          const actIcon = createCustomIcon(pinBg, pinSymbol, act.timeSlot);
          const actMarker = L.marker(act.coordinates, { icon: actIcon }).addTo(markersLayer);

          actMarker.bindPopup(`
            <div style="min-width: 190px;">
              <div style="font-size: 10px; text-transform: uppercase; font-weight: 700; color: ${pinBg}; letter-spacing: 0.5px;">${act.timeSlot} · ${act.category}</div>
              <div style="font-weight: 700; font-size: 13px; color: #0f172a; margin: 2px 0;">${act.title}</div>
              <div style="font-size: 11px; color: #475569; margin-bottom: 4px;">📍 ${act.locationName}</div>
              ${act.travelTimeToNextMinutes ? `<div style="font-size: 10px; color: #64748b; background: #f8fafc; padding: 4px 6px; border-radius: 4px; border: 1px solid #e2e8f0; margin-top: 4px;">Next stop: ${act.travelTimeToNextMinutes} min (${act.travelDistanceKm || 1.5} km)</div>` : ''}
            </div>
          `);

          actMarker.on('click', () => {
            if (onSelectLocation) onSelectLocation(act.locationName);
          });
        }
      });

      // Connect stops with route polyline
      if (routePoints.length >= 2) {
        routePolylineRef.current = L.polyline(routePoints, {
          color: '#3b82f6',
          weight: 4,
          opacity: 0.8,
          dashArray: '8, 8',
          lineJoin: 'round'
        }).addTo(map);
      }
    } else {
      // Plot general attractions if no active day schedule
      attractions.slice(0, 8).forEach(attr => {
        if (attr.coordinates) {
          latLngBounds.push(attr.coordinates);
          const icon = createCustomIcon('#f59e0b', '📍', attr.name);
          const marker = L.marker(attr.coordinates, { icon }).addTo(markersLayer);
          marker.bindPopup(`
            <div>
              <div style="font-weight: 700; font-size: 13px; color: #0f172a;">${attr.name}</div>
              <div style="font-size: 11px; color: #64748b;">${attr.category} · Entry: $${attr.entryFee}</div>
              <div style="font-size: 11px; color: #334155; margin-top: 4px;">${attr.description}</div>
            </div>
          `);
        }
      });
    }

    // Auto-fit bounds if we have points
    if (latLngBounds.length > 0) {
      const bounds = L.latLngBounds(latLngBounds);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    } else {
      map.setView(centerCoordinates, zoom);
    }

  }, [hotel, activeDay, attractions, centerCoordinates, zoom, onSelectLocation]);

  return (
    <div className="relative w-full h-full min-h-[380px] rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      
      {/* Floating Map Legend */}
      <div className="absolute top-3 left-3 z-[1000] bg-white/95 backdrop-blur-sm rounded-lg p-2.5 shadow-md border border-neutral-200/80 text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-neutral-800 mb-2">
          <Compass className="w-3.5 h-3.5 text-neutral-500" />
          <span>Interactive Itinerary Map</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-neutral-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
            <span>Hotel Stay</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
            <span>Attraction</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span>Restaurant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
            <span>Station/Airport</span>
          </div>
        </div>
        {activeDay && (
          <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-blue-700 font-medium">
            <span className="flex items-center gap-1">
              <Navigation className="w-3 h-3" />
              Day {activeDay.dayNumber} Route
            </span>
            <span className="text-neutral-400 tabular-nums">{activeDay.activities.length} Stops</span>
          </div>
        )}
      </div>
    </div>
  );
};
