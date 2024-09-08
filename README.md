# spark-starter-kit

<https://statusbrew.notion.site/StarterKit-Developer-Notes-328ce202863a4dbba987e0b718f869e6>

Eve - Collecting Events
Overview
This is a web application for listing and searching events built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to view a list of events, search and filter them, and see their locations on a map.

Features
Home Page: Displays a list of events with a search bar to filter and search for events.
Event Page: Shows detailed information about a specific event.
Map Integration: Shows locations of events on a map based on the search criteria.
Technologies
MongoDB Atlas: Cloud-based database service used to store event data.
Express.js: Framework used for building the backend server.
React: Frontend library for building user interfaces.
Node.js: JavaScript runtime used for building the backend.
Map Integration: Maps are integrated to display event locations.
Project Structure
bash
Copy code
/event-listing-app
│
├── /client               # React frontend code
│   ├── /src
│   │   ├── /components   # React components
│   │   ├── /pages        # React pages (Home.js, Event.js)
│   │   └── App.js        # Main React component
│   └── package.json      # Frontend dependencies and scripts
│
├── /server               # Node.js backend code
│   ├── /models           # Mongoose models (Event.js)
│   ├── /routes           # Express routes
│   ├── server.js         # Main server file for backend connections
│   └── package.json      # Backend dependencies and scripts
│
├── /config               # Configuration files
│   └── db.js             # MongoDB connection settings
│
└── README.md             # Project documentation
Installation
Clone the Repository


git clone https://github.com/singhgill/spark-starter-kit.git
cd spark-starter-kit
Setup Backend

bash
cd server
npm install
Create a .env file in the /server directory with your MongoDB Atlas connection string:

makefile
MONGO_URI=your_mongodb_atlas_connection_string


Start the backend server:
bash
npm start


Setup Frontend

bash
cd ../client
npm install
Start the React development server:

Usage
Home Page: Access the home page to view a list of events and use the search bar to filter events.
Event Page: Click on an event from the home page to view its details on a separate page.
Map Integration: Search for events and see their locations on the map.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).

Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.


Contact
For questions or suggestions, please contact msanyum@gmail.com.
