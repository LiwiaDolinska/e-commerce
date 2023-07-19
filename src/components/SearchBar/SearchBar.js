import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Input = styled.input`
border: none;
&:focus {
outline: none;
}
`


function SearchBar() {
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/search?phrase=${searchValue}`)

    }
    return <div>
        <form onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ paddingRight: "10px" }} />
            <Input placeholder='Szukaj' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}></Input>
        </form>
    </div>
}

export default SearchBar