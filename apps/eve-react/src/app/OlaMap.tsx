import React, { useEffect } from 'react';

const loadOlaMapsScript = () => {
  const script = document.createElement('script');
  script.src = 'https://maps.olamaps.com/api/sdk';
  script.async = true;
  document.body.appendChild(script);

  return script;
};

const OlaMap: React.FC = () => {
  useEffect(() => {
    const script = loadOlaMapsScript();

    script.onload = () => {
      // Access OlaMaps from the window object
      if (window.OlaMaps) {
        const map = new window.OlaMaps.Map({
          container: 'ola-map',
          center: [12.9715987, 77.5945627], // Example center (Bangalore)
          zoom: 10,
        });
      } else {
        console.error('OlaMaps SDK failed to load');
      }
    };
  }, []);

  return <div id="ola-map" style={{ width: '100%', height: '500px' }}></div>;
};

export default OlaMap;
