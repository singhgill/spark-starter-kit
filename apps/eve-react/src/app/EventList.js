import React, { useState } from 'react';
import './EventList.css';

const events = [
  { name: 'Music Festival', location: 'Ludhiana', category: 'Music', rating: 4.5, date: '2024-09-10' },
  { name: 'Art Exhibition', location: 'Amritsar', category: 'Art', rating: 4.7, date: '2024-09-12' },
  // Add more events here
];

function EventList() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToList = () => {
    setSelectedEvent(null);  // Go back to the event list
  };

  // Conditionally render the event details if one is selected
  if (selectedEvent) {
    return (
      <div className="event-details">
        <h1>{selectedEvent.name}</h1>
        <p>Location: {selectedEvent.location}</p>
        <p>Category: {selectedEvent.category}</p>
        <p>Rating: {selectedEvent.rating}</p>
        <p>Date: {selectedEvent.date}</p>
        <button className='btn' onClick={handleBackToList}>Back to Events</button>
      </div>
    );
  }

  // Otherwise, render the event list
  return (
    <div className="event-list">
      <h2>Events</h2>
      <ul>
        {events.sort((a, b) => a.name.localeCompare(b.name)).map((event, index) => (
          <li key={index} className="event-card">
            <h3>{event.name}</h3>
            <p>Location: {event.location}</p>
            <p>Category: {event.category}</p>
            <p>Rating: {event.rating}</p>
            <p>Date: {event.date}</p>
            <button className='btn' onClick={() => handleViewDetails(event)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
