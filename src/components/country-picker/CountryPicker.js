import React, { useState, useEffect } from "react";

import { fetchCountries } from "../../api";

import "./country-picker.style.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      setFetchedCountries(await fetchCountries());
    };
    getCountries();
  }, [setFetchedCountries]);

  return (
    <div className="country-picker">
      <select
        className="select"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option className="option" value="">
          Worldwide
        </option>
        {fetchedCountries.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountryPicker;
