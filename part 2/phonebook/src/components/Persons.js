//Shows Phonebook Persons list according to Filter

const Persons = (props) => {
    return (    
    <div>
        {props.personsToShow.map((person)=> {return <p key={person.id}>{person.name} {person.number}</p>})}
    </div>) 
}

export default Persons