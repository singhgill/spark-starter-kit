import React, { useState, useEffect } from 'react';
import './Namaste.css';

const languages = ['नमस्ते', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'Hello', 'வணக்கம்', 'નમસ્તે', 'नमस्कार'];

function Namaste() {
  const [languageIndex, setLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="namaste-container">
      <h1>{languages[languageIndex]}</h1>
    </div>
  );
}

export default Namaste;
