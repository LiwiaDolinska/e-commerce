import { allProducts } from "../categoryPhotos"
import styled from "styled-components"

const ItemBox = styled.div`
display: flex;
justify-content: space-around;
`

const Item = styled.p`
`

function BasketPage(props) {
    const basketItems = props.productsInBasket.map(item => {
        const allProductInfo = allProducts.find(element => element.id === item.id)
        return { ...allProductInfo, ...item }
    })
    return <>
        <h1>KOSZYK</h1>
        <ItemBox>
            <Item>przedmiot</Item>
            <Item>cena</Item>
            <Item>ilość</Item>
            <Item>suma</Item>
        </ItemBox>
        <h1>{basketItems.map(item => (
            <div>
                <img src={item.src}></img>{item.title}  {item.size}
            </div>
        ))}
        </h1>
    </>
}

export default BasketPage