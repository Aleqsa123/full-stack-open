import { useState, useEffect } from 'react';
import services from './services/services';
import Info from './components/Info';
import Searchbar from './components/Searchbar';
import SearchList from './components/SearchList';

const App = () => {
  const [countries, setCountries] = useState([]);

  //Fetches All Countries from RestCounties API and saves in "countries" state
  useEffect(() => {
    services
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  //Sets capital to fetch weather data for this capital
  const [capital, setCapital] = useState(null);

  //Fetches weather from OpenWeather API if capital is defined
  useEffect(() => {
      if(capital) {
        services
        .getWeath(capital)
        .then(data => {
          setWeather(data)
        })
      }
    }, [capital]);

  //Saves fetched weather from API
  const [weather, setWeather] = useState(null);

  //Takes value from searchbar input and sets showAll's state to false, and setI to -1
  const [newSearch, setNewSearch] = useState('')  
  const handleSearch = (event) => {
    setNewSearch(event.target.value.toLowerCase());
    setI(-1);
    if (newSearch !== ''){return setShowAll(false)}
  }

  
  //Show only countries from searchbar match
  const [showAll, setShowAll] = useState(true)
  const countryToShow = showAll
    ? countries
    : countries.filter((country) => country.name.common.toLowerCase().includes(newSearch));

  // Takes out and sets general index from CoutryList to select Country and show it's data on Button click
  const [i, setI] = useState(-1)  

  return (
  <>  
        <Searchbar newSearch = {newSearch} handleSearch = {handleSearch} />

        <p>{countryToShow.length > 10 ? "Too many matches, specify another filter" : ""}</p>

        {countryToShow.length <= 10 && countryToShow.length > 1 
        ? <SearchList countryToShow = {countryToShow} setCapital = {setCapital} setI = {setI} /> 
        : ""}

        {i >= 0 ? <Info countryToShow = {countryToShow} i = {i} weather = {weather} /> : ""}
          
        {countryToShow.length === 1 
        ? <SearchList countryToShow = {countryToShow} setCapital = {setCapital} setI = {setI} /> 
        : ""}
          
        {countryToShow.length === 1 ? <Info countryToShow = {countryToShow} i = {0} weather = {weather} /> : ""}
            
    </>)
    }
  

export default App 