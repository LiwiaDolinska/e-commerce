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

function Header() {

    return <Heading>
        <Navigation>
            <List>
                <li>Menu</li>
                <li>Szukaj</li>
            </List>
            <List>
                <li>Konto</li>
                <li>Ulubione</li>
                <li>Koszyk</li>
            </List>

        </Navigation>
    </Heading>


}

export default Header