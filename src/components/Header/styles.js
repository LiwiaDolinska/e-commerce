import styled from "styled-components";

export const headingHeight = 110;

export const Heading = styled.header`
display: flex;
height: ${headingHeight}px;
`

export const Navigation = styled.nav`
display: flex;
flex - direction: row;
justify - content: space - between;
width: 100 %;
`

export const List = styled.ul`
display: flex;
flex - direction: row;
list-style-type: none;
`

export const ListItem = styled.li`
padding: 25px;
font - family: 'Lato', sans - serif;
cursor: pointer;
`

export const Image = styled.img`
width: 100px;
`
export const Button = styled.button`
border: none;
background - color: white;
cursor: pointer;
font - family: 'Lato', sans - serif;
font - size: 17px;
`