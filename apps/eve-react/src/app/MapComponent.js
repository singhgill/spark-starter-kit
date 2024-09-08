import React, { useEffect, useRef } from 'react';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.OlaMaps && mapRef.current) {
      const map = new window.OlaMaps.Map(mapRef.current, {
        center: [latitude, longitude], // Set initial center
        zoom: 10, // Set initial zoom level
        // Add other options if needed
      });

      // Add map controls, markers, etc. here

      // Cleanup on unmount
      return () => {
        map.remove();
      };
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;
