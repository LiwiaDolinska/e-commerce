import { allProducts } from "../categoryPhotos"

function FavouritePage(props) {
    return <h1>{props.favouriteProducts.map(item => <div>{item.company}</div>)} </h1>

}

export default FavouritePage