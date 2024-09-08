import React, { useEffect } from 'react';

// Function to load the OlaMaps SDK script
const loadOlaMapsScript = () => {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[src="https://maps.olamaps.com/api/sdk"]');
    
    if (existingScript) {
      resolve(existingScript);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://maps.olamaps.com/api/sdk'; // SDK URL
    script.async = true;

    script.onload = () => {
      resolve(script); // Script loaded successfully
    };
    script.onerror = () => {
      reject(new Error('OlaMaps SDK failed to load'));
    };

    document.body.appendChild(script);
  });
};

const OlaMap: React.FC = () => {
  useEffect(() => {
    // Load the OlaMaps SDK
    loadOlaMapsScript()
      .then(() => {
        // Poll to ensure window.OlaMaps is available
        const interval = setInterval(() => {
          if (window.OlaMaps) {
            // Initialize the map after SDK is fully loaded
            const map = new window.OlaMaps.Map({
              container: 'ola-map',
              style: 'https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json',
              center: [77.61648476788898, 12.931423492103944], // Coordinates
              zoom: 15,
            });
            clearInterval(interval); // Stop polling once initialized
          }
        }, 100); // Poll every 100ms
      })
      .catch(error => {
        console.error('Error loading OlaMaps SDK:', error);
      });

    return () => {
      // Optional: Clean up if the component unmounts
      const script = document.querySelector('script[src="https://maps.olamaps.com/api/sdk"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="ola-map" style={{ width: '100%', height: '500px' }}></div>;
};

export default OlaMap;
