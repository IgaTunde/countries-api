import { createContext, useState } from "react";
import data from "../data.json";

export const CountryContext = createContext({
  searchText: "",
  setSearchText: () => {},
  getCountry: () => {},
  setCountry: () => {},
  inputHandler: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
  filterByRegion: () => {},
});

export default function CountryProvider({ children }) {
  const [country, setCountry] = useState();
  const [searchText, setSearchText] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(data);

  function getCountry() {
    return country;
  }

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
    filterCountries(lowerCase);
  };

  const filterCountries = (searchText, region = "") => {
    const filtered = data.filter((country) => {
      const nameMatch = country.name.toLowerCase().includes(searchText);
      const regionMatch = region === "" || country.region === region;
      return nameMatch && regionMatch;
    });
    setFilteredCountries(filtered);
  };

  const filterByRegion = (region) => {
    filterCountries(searchText, region);
  };

  return (
    <CountryContext.Provider
      value={{
        getCountry,
        setCountry,
        searchText,
        setSearchText,
        inputHandler,
        filteredCountries,
        setFilteredCountries,
        filterByRegion,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
