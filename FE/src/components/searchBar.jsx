/**
Elijah Atta-Konadu
*/
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Enter a city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
