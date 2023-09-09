const Comp1 = ({countryToShow, i}) => {
    return (    
            <>
                <h1> {countryToShow[i].name.common}</h1> 
                <p> capital {countryToShow[i].capital[0]} </p>
                <p> area {countryToShow[i].area} </p>
                <div>languages: 
                    <ul>
                        {Object.values(countryToShow[i].languages).map( (l, index) => { return <li key = {index}> {l} </li> })}
                    </ul>
                </div>
                 <img src={countryToShow[i].flags.png} alt = {countryToShow[i].flags.alt} />

            </>
    ) 
}

export default Comp1