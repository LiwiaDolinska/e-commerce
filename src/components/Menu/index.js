import { useState } from "react"
import styled from "styled-components"

const MenuBox = styled.div`
height: 100px;
  width: 200px;
  align-items: center;
  position: relative;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  line-height: 3;
  
`
const MenuList = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`

const MenuItem = styled.li`
list-style-type: none;
cursor: pointer;
width: 100%;
&:hover{
    background-color: rgb(187, 247, 247);
  }
`

function Menu({ open }) {
    if (!open) {
        return null
    }

    return <MenuBox>
        <MenuList>
            <MenuItem>ON</MenuItem>
            <MenuItem>ONA</MenuItem>
        </MenuList>
    </MenuBox>
}

export default Menu