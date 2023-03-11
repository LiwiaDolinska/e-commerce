import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function SearchBar() {
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/search?phrase=${searchValue}`)

    }
    return <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ paddingRight: "10px" }} />
        <form onSubmit={handleSubmit}>
            <input placeholder='Szukaj' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}></input>
        </form>
    </div>
}

export default SearchBar