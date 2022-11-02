import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faHeart, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Heading = styled.header`
display: flex;
`
const Navigation = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

const List = styled.ul`
display: flex;
flex-direction: row;
list-style-type: none;
`

const ListItem = styled.li`
padding: 25px;
font-family: 'Lato', sans-serif;
`

function Header() {

    return <Heading>
        <Navigation>
            <List>
                <ListItem>Menu</ListItem>

                <ListItem><FontAwesomeIcon icon={faMagnifyingGlass} style={{ paddingRight: "10px" }} />Szukaj</ListItem>
            </List>
            <List>
                <ListItem><FontAwesomeIcon icon={faUser} style={{ paddingRight: "10px" }} />Konto</ListItem>
                <ListItem><FontAwesomeIcon icon={faHeart} style={{ paddingRight: "10px" }} />Ulubione</ListItem>
                <ListItem><FontAwesomeIcon icon={faBasketShopping} style={{ paddingRight: "10px" }} />Koszyk</ListItem>
            </List>

        </Navigation>
    </Heading>


}

export default Header