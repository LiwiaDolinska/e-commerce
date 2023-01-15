import { allProducts } from "../categoryPhotos"

function BasketPage(props) {
    return <h1>{props.productsInBasket.map(item => <div>{item.id} , {item.size}</div>)}</h1>
}

export default BasketPage