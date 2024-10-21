import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        const newVisited = [...visitedCountries, country]
        setVisitedCountries(newVisited);
    }

    return (
        <div>
            <h2>Countries : {countries.length}</h2>

            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;