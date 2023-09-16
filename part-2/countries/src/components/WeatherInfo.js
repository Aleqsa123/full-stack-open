const WeatherInfo = ({countryToShow, i, weather}) => {
    if (!weather) { 
        return null 
      }else{
        return (
        <>
            <h2>Weather in {countryToShow[i].capital[0]} </h2>
            <p>temperature {weather.main.temp} Celcius </p>
            <p>wind {weather.wind.speed} m/s </p>
        </>
    )}
}

export default WeatherInfo