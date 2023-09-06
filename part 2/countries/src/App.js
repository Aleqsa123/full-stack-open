import { useState, useEffect } from 'react';
import getCountries from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const [newSearch, setNewSearch] = useState('')  
  
  //Takes value from searchbar and sets showAll's state to false 
  const handleSearch = (event) => {
    setNewSearch(event.target.value.toLowerCase());
    if (newSearch !== ''){return setShowAll(false)}
  }

  const [showAll, setShowAll] = useState(true)

  //Show only persons from searchbar
  const countryToShow = showAll
    ? countries
    : countries.filter((country) => country.name.common.toLowerCase().includes(newSearch));

    if (countryToShow.length > 10){
      return (<div>
                <form>
                  find countries: <input 
                                    value={newSearch} 
                                    onChange={handleSearch} 
                                  />
                </form>
                <p>Too many matches, specify another filter</p>
              </div>)
    } else if (countryToShow.length <= 10 && countryToShow.length > 1){
      return (
        <div>
          <div>
            <form>
              find countries: <input 
                                value={newSearch} 
                                onChange={handleSearch} 
                               />
            </form>
          </div>
          <ol>
          {countryToShow.map(country =>
              <li key={country.cca2}> {country.name.common} </li>
            )}
          </ol>
        </div>
      )
     }else if (countryToShow.length == 1){
      return (<div>
        <form>
          find countries: <input 
                            value={newSearch} 
                            onChange={handleSearch} 
                          />
        </form>
              <h1>{countryToShow[0].name.common} </h1> 
              <p> capital {countryToShow[0].capital[0]} </p>
              <p> area {countryToShow[0].area} </p>
        <div>languages: 

          <ul>
            {Object.values(countryToShow[0].languages).map( (l, index) => { return <li key = {index}> {l} </li> })}
          </ul>
        </div>
        <img src={countryToShow[0].flags.png} alt = {countryToShow[0].flags.alt} />

      </div>)
    }
    } 
  

export default App 