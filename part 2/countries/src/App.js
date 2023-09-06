import { useState, useEffect } from 'react';
import getCountries from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([]);

  const [name, setName] = useState('new name...'); 

  useEffect(() => {
    getCountries
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])


  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <div>
        <form>
          find countries: <input 
                            value={name} 
                            onChange={handleChange} 
                           />
        </form>
      </div>
      <ol>
      {countries.map(country =>
          <li key={country.cca2}> {country.name.common} </li>
        )}
      </ol>
    </div>
  )
}

export default App 