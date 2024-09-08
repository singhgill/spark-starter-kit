import React from 'react';

const Event = () => {
  const event = {
    title: "Music Concert",
    location: "Central Park, NYC",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
    description: "A live music concert featuring famous bands."
  };

  return (
    <div className="page" style={styles.page}>
      <div style={styles.container}>
        <img src={event.image} alt="Event" style={styles.image} />
        <h1 style={styles.title}>{event.title}</h1>
        <div style={styles.details}>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Rating:</strong> {event.rating} / 5</p>
          <p>{event.description}</p>
        </div>

        <div className="Btns">
          <button style={styles.btn}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",  // Changed from align to textAlign
    background: "white",
    width: '80%',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  details: {
    marginTop: '20px',
  },
  btn: {
    color: "red",
    background: "lightgreen",
    borderRadius: "20px"
  },
  page: {
    background: "linear-gradient(45deg, red, blue)",
    height: "1000px"
  }
};

export default Event;