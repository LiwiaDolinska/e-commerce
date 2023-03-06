import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import logo from "../../assets/photos/logo.jpg";
import SearchBar from "../SearchBar/SearchBar";

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

const Image = styled.img`
width: 100px; 
`

function Header() {

    return <Heading>
        <Navigation>
            <List>
                <ListItem>Menu</ListItem>

                <ListItem><SearchBar></SearchBar></ListItem>
            </List>
            <Link to="/">
                <List>
                    <Image src={logo} alt="logo"></Image>
                </List>
            </Link>
            <List>
                <ListItem><FontAwesomeIcon icon={faUser} style={{ paddingRight: "10px" }} />Konto</ListItem>
                <ListItem><Link to="favourite"><FontAwesomeIcon icon={faHeart} style={{ paddingRight: "10px" }} />Ulubione</Link></ListItem>
                <ListItem><Link to="basket"> <FontAwesomeIcon icon={faBasketShopping} style={{ paddingRight: "10px" }} />Koszyk</Link></ListItem>
            </List>

        </Navigation>
    </Heading>


}

export default Header