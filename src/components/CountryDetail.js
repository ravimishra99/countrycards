import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = ({ countries }) => {
    const { name } = useParams();
    const navigate = useNavigate();
    const country = countries.find((c) => c.name === name);

    if (!country) return <div>Country not found</div>;

    const {
        flags = {},
        nativeName = 'N/A',
        population = 0,
        region = 'N/A',
        subregion = 'N/A',
        capital = 'N/A',
        topLevelDomain = [],
        currencies = [],
        languages = [],
        borders = []
    } = country;

    return (
        <div className='country-details'>
            <button className='back-btn' onClick={() => navigate(-1)}>
                &larr; Back
            </button>
            <div className='content'>
                <div className='flag-section'>
                    <img src={flags.png} alt={`${name} flag`} className='flag-img' />
                </div>
                <div className='info-section'>
                    <div className='info-section-upper'>
                        <div className='info-section-left'>
                            <h1>{name}</h1>
                            <p><strong>Native Name:</strong> {nativeName}</p>
                            <p><strong>Population:</strong> {population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {region}</p>
                            <p><strong>Sub Region:</strong> {subregion}</p>
                            <p><strong>Capital:</strong> {capital}</p>
                        </div>

                        <div className='info-section-right'>
                            <p><strong>Top Level Domain:</strong> {topLevelDomain.join(', ')}</p>
                            <p><strong>Currencies:</strong> {currencies.map(c => c.name).join(', ')}</p>
                            <p><strong>Languages:</strong> {languages.map(l => l.name).join(', ')}</p>
                        </div>
                    </div>
                    <div className='info-section-lower'>
                        <p><strong>Borders:</strong> {borders.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
