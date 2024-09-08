/*
import React, { useState } from 'react';
import EventList from './EventList';
import SearchBar from './SearchBar';
import UpcomingEvents from './UpcomingEvents';
import './App.css';

function App() {
  const [events, setEvents] = useState([
    { name: 'Tech Conference', location: 'Ludhiana', category: 'Technology', rating: 4.5, date: '2024-10-12' },
    { name: 'Music Fest', location: 'Amritsar', category: 'Music', rating: 4.0, date: '2024-11-15' },
    { name: 'Food Carnival', location: 'Chandigarh', category: 'Food', rating: 4.8, date: '2024-09-28' },
    // Add more events here...
  ]);

  const sortedEvents = [...events].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="app">
      <header className="app-header">
        <h1>Discover Local Events</h1>
      </header>
      <SearchBar setEvents={setEvents} />
      <EventList events={sortedEvents} />
      <UpcomingEvents />
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import Namaste from './Namaste';
import SearchBar from './SearchBar';
import EventList from './EventList';
import Review from './Reviews';
import ContactUs from './ContactUs';
import UpcomingEvents from './UpcomingEvents';
import FinalPage from './FinalPage';
import './App.css';

function App() {
  const [showNamaste, setShowNamaste] = useState(true);

  // After 5 seconds, hide the Namaste and show the main app content
  setTimeout(() => {
    setShowNamaste(false);
  }, 3000);

  return (
    <div className="app">
      {showNamaste ? (
        <Namaste />
      ) : (
        <>
          <SearchBar />
          <EventList />
          <Review />
          <UpcomingEvents />
          <ContactUs />
        </>
      )}
    </div>
  );
}

export default App;
