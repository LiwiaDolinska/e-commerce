import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import logo from "../../assets/photos/logo.jpg";
import SearchBar from "../SearchBar/SearchBar";
import Menu from "../Menu/index";
import { useState } from "react";
import { Heading, Navigation, List, ListItem, Image, Button } from "./styles"



function Header() {
    const [openMenu, setOpenMenu] = useState(false)


    function handleShowMenu() {
        setOpenMenu(true)

    }

    function handleHideMenu() {
        setOpenMenu(false)
    }

    return <Heading>
        <Navigation>
            <List>
                <div onMouseEnter={handleShowMenu} onMouseLeave={handleHideMenu}>
                    <ListItem><Button>Menu</Button></ListItem>
                    <Menu open={openMenu} />
                </div>
                <ListItem><SearchBar></SearchBar></ListItem>
            </List>
            <Link to="/">
                <List>
                    <Image src={logo} alt="logo"></Image>
                </List>
            </Link>
            <List>
                <ListItem><Link to="favourite" style={{ textDecoration: "none" }}><FontAwesomeIcon icon={faHeart} style={{ paddingRight: "10px" }} />Ulubione</Link></ListItem>
                <ListItem><Link to="basket" style={{ textDecoration: "none" }}> <FontAwesomeIcon icon={faBasketShopping} style={{ paddingRight: "10px" }} />Koszyk</Link></ListItem>
            </List>

        </Navigation>
    </Heading>


}

export default Header