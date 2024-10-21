import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, area, population, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{ color: visited ? 'black' : 'white' }}>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p style={{ color: visited ? 'black' : 'white' }}>Area : {area} sqrkm</p>
            <p style={{ color: visited ? 'black' : 'white' }}>Population : {population}</p>
            <p style={{ color: visited ? 'black' : 'white' }}><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br /> <br />
            <button onClick={handleVisited} >{visited ? 'Have visited' : 'Want to visit'}</button>
        </div>
    );
};

export default Country;