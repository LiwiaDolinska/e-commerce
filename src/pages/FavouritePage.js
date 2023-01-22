import { allProducts } from "../categoryPhotos"
import styled from "styled-components"

const FavouriteItem = styled.div`
display: inline-block;
margin: 30px;
`
const FavouritePhoto = styled.img`
width: 300px;
`
const FavouriteDescription = styled.p`
margin: 30px;
`

function FavouritePage(props) {
    const favouriteList = props.favouriteProducts.map(item => {
        const favouriteInfo = allProducts.find(element => element.id === item.id)
        return { ...favouriteInfo, ...item }
    })
    return <p>{favouriteList.map(favouriteElement => (
        <FavouriteItem>
            <FavouritePhoto src={favouriteElement.src}></FavouritePhoto>
            <FavouriteDescription>{favouriteElement.company}</FavouriteDescription>
            <FavouriteDescription>{favouriteElement.title}</FavouriteDescription>
        </FavouriteItem>
    )
    )}</p>

}


export default FavouritePage