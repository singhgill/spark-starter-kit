import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { geocodeService } from 'esri-leaflet-geocoder';

// Set the default icon options directly
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Define the type for the position prop
interface MapUpdaterProps {
  position: [number, number]; // LatLngTuple
}

// Component to update map center dynamically
const MapUpdater: React.FC<MapUpdaterProps> = ({ position }) => {
  const map = useMap();
  map.setView(position, 13);
  return null;
};

const LeafletMap: React.FC = () => {
  const [position, setPosition] = useState<[number, number]>([37.7749, -122.4194]); // Default to San Francisco
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim() === '') return;

    try {
      const result = await geocodeService().geocode().text(searchInput).run();
      if (result.results.length > 0) {
        const { latlng } = result.results[0];
        setPosition([latlng.lat, latlng.lng]);
      } else {
        alert('Location not found!');
      }
    } catch (error) {
      console.error('Error with geocoding:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for a location..."
        />
        <button type="submit">Search</button>
      </form>
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Location found: {searchInput}
          </Popup>
        </Marker>
        <MapUpdater position={position} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
