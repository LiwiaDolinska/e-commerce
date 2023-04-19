import { allProducts } from "../categoryPhotos"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ProductBox from "../components/ProductBox";


const AllProducts = styled.div`
display: flex;
flex-wrap: wrap;
gap: 60px;
margin-top: 100px;
`

function FavouritePage(props) {
    const favouriteList = props.favouriteProducts.map(id => {
        const favouriteInfo = allProducts.find(element => element.id === id)
        return favouriteInfo
    })
    return <AllProducts>{favouriteList.map(favouriteElement => (
        <ProductBox product={favouriteElement} isMini isSmallTitle></ProductBox>

    ))}</AllProducts>

}


export default FavouritePage