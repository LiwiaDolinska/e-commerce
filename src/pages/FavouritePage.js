import { allProducts } from "../categoryPhotos"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ProductBox from "../components/ProductBox";


const FavouriteItem = styled.div`
display: inline-block;
margin: 30px;
`
const FavouritePhoto = styled.img`
width: 200px;
height: 300px;
object-fit: cover;
`
const TitleDescription = styled.p`
margin: 30px;
font-family:gfont,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
font-weight: 400;
font-size: 20px;
cursor: pointer;
`
const CompanyDescription = styled.p`
margin: 30px;
color: #747474!important;
`
const Price = styled.p`
text-align: right;
font-size: 15px;
`

const PhotoDiv = styled.div`
position: relative;
margin: 30px;
`
const Icon = styled.div`
position: absolute;
top: 10px;
right: 10px;
`

function FavouritePage(props) {
    const favouriteList = props.favouriteProducts.map(id => {
        const favouriteInfo = allProducts.find(element => element.id === id)
        return favouriteInfo
    })
    return <div>{favouriteList.map(favouriteElement => (
        <ProductBox product={favouriteElement} />

    ))}</div>

}


export default FavouritePage