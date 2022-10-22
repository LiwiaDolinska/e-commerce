import React from "react";
import styled from "styled-components";

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
`

function Header() {

    return <Heading>
        <Navigation>
            <List>
                <ListItem>Menu</ListItem>
                <ListItem>Szukaj</ListItem>
            </List>
            <List>
                <ListItem>Konto</ListItem>
                <ListItem>Ulubione</ListItem>
                <ListItem>Koszyk</ListItem>
            </List>

        </Navigation>
    </Heading>


}

export default Header