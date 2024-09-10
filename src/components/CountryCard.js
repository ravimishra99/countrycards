import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CountryCard.css';

const CountryCard = ({ flag, name, population, region, capital }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${name}`);
  };

  return (
   
    <div className='card' onClick={handleClick}>
      <img src={flag} alt={`${name} flag`} className='flag' />
      <h2>{name}</h2>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Capital:</strong> {capital}</p>
    </div>
   
  );
};

export default CountryCard;
