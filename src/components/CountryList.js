import React, { useState } from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
    const regions = Array.from(new Set(countries.map(country => country.region))); // Get unique regions

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter countries based on selected region and search term
    const filteredCountries = countries.filter(country => {
        const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
        const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRegion && matchesSearch;
    });

    return (
        <div className='container'>

            <div className='top-container'>
                <div className='search-section'>
                    <input
                        type='text'
                        placeholder='Search by country name'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='search-input'
                    />
                </div>


                <div className='filter-section'>
                    <select value={selectedRegion} onChange={handleRegionChange} className='region-dropdown'>
                        <option value=''>Filter by Region</option>
                        {regions.map((region, index) => (
                            <option key={index} value={region}>{region}</option>
                        ))}
                    </select>
                </div>
            </div>


            <div className='main-container'>
                {filteredCountries.map((country, index) => (
                    <CountryCard
                        key={index}
                        flag={country.flags?.png}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountryList;
