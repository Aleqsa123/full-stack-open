const Searchbar = ({newSearch, handleSearch}) => {
    return (
        <div>
            <form>
              find countries: <input 
                                value={newSearch} 
                                onChange={handleSearch} 
                               />
            </form>
          </div>
    )

}

export default Searchbar;