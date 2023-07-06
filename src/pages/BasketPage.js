import { allProducts } from "../categoryPhotos"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard, faCcVisa, faPaypal, faGooglePay } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";


const Title = styled.h1`
text-align: center;
font-family: Montserrat, sans-serif;
font-weight: 500;
margin-top: 100px;
`

const Container = styled.div`
display: flex;
`

const GridContainer = styled.div`
flex-grow: 2;
display: grid;
grid-template-columns: 550px 1fr 1fr 1fr;
grid-template-rows: 200px 1fr;
grid-auto-rows: auto;
row-gap: 30px;
font-family: Montserrat, sans-serif;
letter-spacing: 2px;
`

const SumUpContainer = styled.div`
background-color: #f0ffff;
flex-grow: 1;
height: auto;
font-family: Montserrat, sans-serif;
letter-spacing: 3px;
font-weight: 400;
`

const Item = styled.p`
align-self: center;
font-weight: 600;
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
margin-top: 15px;
display: flex;
`
const Button = styled.button`
width: 26px;
height: 25px;
border: none;
background-color: white;
cursor: pointer;
`
const Quantity = styled.input`
height: 25px;
width: 30px;
margin-left: 5px;
margin-right: 5px;
border: none;
text-align: center;
`
const InformationProductDiv = styled.div`
margin-left: 10px;
`

const SumUpButton = styled.button`
margin: 20px ;
width: 70%;
height: 40px;
background-color: black;
border: black 2px;
color: white;
font-size: 17px;
cursor: pointer;
margin-bottom:40px;
`
const Icon = styled.button`
margin: 5px;
border: none;
background-color: #f0ffff;
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
    const sumUpProducts = () => {
        let sum = 0;
        basketItems.forEach(product => {
            sum += product.price * product.quantity
        })
        return sum
    }

    const sumUpAll = () => {
        let sum = 0;
        basketItems.forEach(product => {
            sum = sum + product.price * product.quantity
        })
        return sum + 10
    }

    return <>
        <Title>KOSZYK</Title>
        <Container>
            <GridContainer>
                <Item>przedmiot</Item>
                <Item>cena</Item>
                <Item>ilość</Item>
                <Item>suma</Item>
                {basketItems.map(item => (<>
                    <ProductInfo>
                        <Photo src={item.src}></Photo>
                        <InformationProductDiv>
                            <p>{item.title}</p>
                            <p>{item.company}</p>
                            <p>rozmiar: {item.size}</p>
                        </InformationProductDiv>
                    </ProductInfo>
                    <p>{item.price} zł</p>
                    <QuantityDiv>
                        <Button onClick={() => handleDecrement(item.id, item.quantity)} disabled={item.quantity === 0}><FontAwesomeIcon icon={faMinus} /></Button>
                        <label></label>
                        <Quantity value={item.quantity} onChange={(event) => handleQuantityChange(item.id, +event.target.value)}></Quantity>
                        <Button onClick={() => handleIncrement(item.id, item.quantity)}><FontAwesomeIcon icon={faPlus} /></Button>
                    </QuantityDiv >
                    <p>{item.price * item.quantity} zł</p>
                </>
                ))}
            </GridContainer>
            <SumUpContainer>
                <p>cena produktów: {sumUpProducts()} zł</p>
                <p>dostawa: 10 zł </p>
                <br></br>
                <p>łączna kwota: {sumUpAll()} zł</p>
                <Link to="/form"><SumUpButton>przejdź do kasy</SumUpButton></Link>
                <hr style={{ borderTop: "1px solid rgb(232, 232, 232)" }}></hr>
                <p>akceptowane płatności</p>
                <Icon><FontAwesomeIcon icon={faPaypal} /></Icon>
                <Icon><FontAwesomeIcon icon={faCcMastercard} /></Icon>
                <Icon><FontAwesomeIcon icon={faCcVisa} /></Icon>
                <Icon><FontAwesomeIcon icon={faGooglePay} /></Icon>
            </SumUpContainer>
        </Container >
    </>
}

export default BasketPage