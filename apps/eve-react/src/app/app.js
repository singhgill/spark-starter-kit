// src/app/App.tsx
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './OlaMap';  // Import HomePage with OlaMap
import './src/app/src/OlaMapsWebSDK/OlaMapsWebSDK/style.css';
import { OlaMaps } from './OlaMapsWebSDK/OlaMapsWebSDK';

export function App() {
  return (
    <div>
      <h1>title="eve-react"</h1>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
          <li>
            <Link to="/map">Map</Link> {/* Link to HomePage with OlaMap */}
          </li>
        </ul>
      </div>
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route 
          path="/page-2" 
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          } 
        />
        <Route path="/map" element={<HomePage />} /> {/* Render HomePage with OlaMap on the /map route */}
      </Routes>
    </div>
  );
}

export default App;
