import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";


function SearchBar() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState('')
    console.log(searchParams)
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/search?phrase=${searchValue}`)
        let params = searchValue
        setSearchParams(params)
        console.log(params)
    }
    return <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ paddingRight: "10px" }} />
        <form onSubmit={handleSubmit}>
            <input placeholder='Szukaj' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}></input>
        </form>
    </div>
}

export default SearchBar