const SearchList = ({ countryToShow, setCapital, setI }) => {
    if (countryToShow.length === 1) {
      return (
        <ul>
          {countryToShow.map((country, i) =>
              { return <li key={country.cca2} onChange = {()=> {setI(i); setCapital(country.capital)}}> {country.name.common} </li>}
            )}
          </ul>
      )
    }
  
    return (
        <ul>
          {countryToShow.map((country, i) =>
              { return <li key={country.cca2}> {country.name.common}  <button onClick = {()=> {setI(i); setCapital(country.capital)}}> show </button> </li>}
            )}
        </ul>    )
  }

  export default SearchList;