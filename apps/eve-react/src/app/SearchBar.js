
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setEvents }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
      console.log("search");
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search by category or location" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;


// import React, { useState } from 'react';
// import './SearchBar.css';

// function SearchBar({ onSearch }) {
//   const [location, setLocation] = useState('');
//   const [category, setCategory] = useState('');

//   const handleSearch = () => {
//     onSearch({ location, category });
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search by location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Search by category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBar;
