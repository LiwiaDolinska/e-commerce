import { useState } from "react"
import { menCollectionPhotos, womenCollectionPhotos } from "../../collectionPhotos";
import { Link } from "react-router-dom";
import { MenuBox, MenuList, MenuItem, SubMenuItem, CategoryItem, CategoryList } from "./styles";


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