import React from 'react';
import './UpcomingEvents.css';

const upcomingEvents = [
  { name: 'Tech Meetup', location: 'Chandigarh', category: 'Technology', rating: 4.8, date: '2024-10-10' },
  // Add more upcoming events here
];

function UpcomingEvents() {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <ul>
        {upcomingEvents.map((event, index) => (
          <li key={index} className="event-card">
            <h3>{event.name}</h3>
            <p>Location: {event.location}</p>
            <p>Category: {event.category}</p>
            <p>Rating: {event.rating}</p>
            <p>Date: {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingEvents;
