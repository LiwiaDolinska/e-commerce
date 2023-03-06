import { allProducts } from "../categoryPhotos"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const GridContainer = styled.div`
display: grid;
grid-template-columns: 500px 1fr 1fr 1fr;
grid-template-rows: 200px 1fr 1fr 1fr;
row-gap: 30px;
`
const Item = styled.p`
align-self: center;
`
const ProductInfo = styled.div`
display: flex;
`

const Photo = styled.img`
width: 300px;
height: 400px;
object-fit: cover;
`
const QuantityDiv = styled.div`
margin: 16px;
display: flex;
`
const Button = styled.button`
width: 26px;
height: 25px;
`
const Quantity = styled.input`
height: 20px;
width: 30px;
margin-left: 5px;
margin-right: 5px;
`


function BasketPage(props) {
    const basketItems = props.productsInBasket.map(item => {
        const allProductInfo = allProducts.find(element => element.id === item.id)
        return { ...allProductInfo, ...item }

    })

    const handleIncrement = (id, prevQuantity) => {
        props.handleChangeQuantity(id, prevQuantity + 1)
    }

    const handleDecrement = (id, prevQuantity) => {
        if (prevQuantity > 0) {
            props.handleChangeQuantity(id, prevQuantity - 1);
        }
    }

    const handleQuantityChange = (id, quantity) => {
        props.handleChangeQuantity(id, quantity)
    }

    return <>
        <h1>KOSZYK</h1>
        <GridContainer>
            <Item>przedmiot</Item>
            <Item>cena</Item>
            <Item>ilość</Item>
            <Item>suma</Item>
            {basketItems.map(item => (<>
                <ProductInfo>
                    <Photo src={item.src}></Photo>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.company}</p>
                        <p>rozmiar: {item.size}</p>
                    </div>
                </ProductInfo>
                <p>{item.price}</p>
                <QuantityDiv>
                    <Button onClick={() => handleDecrement(item.id, item.quantity)} disabled={item.quantity === 0}><FontAwesomeIcon icon={faMinus} /></Button>
                    <label></label>
                    <Quantity value={item.quantity} onChange={(event) => handleQuantityChange(item.id, +event.target.value)}></Quantity>
                    <Button onClick={() => handleIncrement(item.id, item.quantity)}><FontAwesomeIcon icon={faPlus} /></Button>
                </QuantityDiv>
                <p>{item.price * item.quantity} </p>
            </>
            ))}
        </GridContainer>
    </>
}

export default BasketPage