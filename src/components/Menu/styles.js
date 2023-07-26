import styled from "styled-components"

const menuBoxWidth = 200
const menuSpacing = 2

export const MenuBox = styled.div`
height: 100px;
width: ${menuBoxWidth}px;
align-items: center;
background-color: #fff;
color: black;
box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
line-height: 3;
position: absolute;
top: 65px;
left: 70px;
z-index: 1;
`

export const MenuList = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
padding-inline-start: 0;
`

export const MenuItem = styled.li`
display: flex;
justify-content: center;
list-style-type: none;
cursor: pointer;
width: 100%;
&:hover{
    background-color: rgb(187, 247, 247);
  }
`

export const SubMenuItem = styled.div`
  width: ${menuBoxWidth}px;
  align-items: center;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  line-height: 3;
  position: absolute;
  top: 0;
  left: ${menuBoxWidth + menuSpacing}px;
`

export const CategoryList = styled.ul`
list-style-type: none;
padding-inline-start: 0;
width: 100%;
display: flex;
flex-direction: column;
`

export const CategoryItem = styled.li`
&:hover{
  background-color: rgb(187, 247, 247);
}
text-transform: uppercase;
display: flex;
justify-content: center;
width: 100%;
color: black;
`
