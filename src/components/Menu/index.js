import { useState } from "react"
import styled from "styled-components"
import { menCollectionPhotos, womenCollectionPhotos } from "../../collectionPhotos";
import { Link } from "react-router-dom";


const menuBoxWidth = 200
const menuSpacing = 2

const MenuBox = styled.div`
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
const MenuList = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
padding-inline-start: 0;
`

const MenuItem = styled.li`
display: flex;
justify-content: center;
list-style-type: none;
cursor: pointer;
width: 100%;
&:hover{
    background-color: rgb(187, 247, 247);
  }
`
const SubMenuItem = styled.div`
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
const CategoryList = styled.ul`
list-style-type: none;
padding-inline-start: 0;
width: 100%;
display: flex;
flex-direction: column;
`

const CategoryItem = styled.li`
&:hover{
  background-color: rgb(187, 247, 247);
}
text-transform: uppercase;
display: flex;
justify-content: center;
width: 100%;
color: black;
`


function Menu({ open }) {
  const [showMenCategory, setShowMenCategory] = useState(false)
  const [showWomenCategory, setShowWomenCategory] = useState(false)

  if (!open) {
    return null
  }


  function handleShowMenCategory() {
    setShowMenCategory(true)
  }

  function handleHideMenCategory() {
    setShowMenCategory(false)
  }

  function handleShowWomenCategory() {
    setShowWomenCategory(true)
  }

  function handleHideWomenCategory() {
    setShowWomenCategory(false)
  }


  return <MenuBox>
    <MenuList>
      <MenuItem onMouseEnter={handleShowMenCategory} onMouseLeave={handleHideMenCategory}>
        ON
        {showMenCategory ? <SubMenuItem><CategoryList>{menCollectionPhotos.map((item) => <Link style={{ textDecoration: "none" }} to={item.link}><CategoryItem>{item.title}</CategoryItem></Link>)}</CategoryList></SubMenuItem> : null}
      </MenuItem>
      <MenuItem onMouseEnter={handleShowWomenCategory} onMouseLeave={handleHideWomenCategory}>
        ONA
        {showWomenCategory ? <SubMenuItem><CategoryList>{womenCollectionPhotos.map((item) => <Link style={{ textDecoration: "none" }} to={item.link}><CategoryItem>{item.title}</CategoryItem></Link>)}</CategoryList></SubMenuItem> : null}
      </MenuItem>
    </MenuList>
  </MenuBox>
}

export default Menu