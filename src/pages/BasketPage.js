import { allProducts } from "../categoryPhotos"
import styled from "styled-components"

const GridContainer = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
`

const Photo = styled.img`
width: 200px;
height: 300px;
object-fit: cover;
margin: 15px;
grid-column: 1/2;
grid-row: 2/3;

`
const ProductDescription = styled.div`
display: flex;
grid-column; 2/3;
grid-row:2/3;

`
const ProductTitle = styled.p`
margin: 20px 10px;
font-family:gfont,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
font-weight: 400;
font-size: 20px;
`
const ProductCompany = styled.p`
color: #747474!important;
font-size: 17px;
margin: 20px 10px
`
const ProductSize = styled.p`
font-size: 19px;
font-weight: 300;
margin-top: 50px;
margin-left: 10px;
`

const Item = styled.p`
text-decoration: underline;
`
const ProductPrice = styled.p`
font-size: 18px;
margin-top: 20px;
font-weight: 300;
grid-column: 2/3;
grid-row: 2/3;
`

function BasketPage(props) {
    const basketItems = props.productsInBasket.map(item => {
        const allProductInfo = allProducts.find(element => element.id === item.id)
        return { ...allProductInfo, ...item }
    })
    return <>
        <h1>KOSZYK</h1>
        <GridContainer>
            <Item>przedmiot</Item>
            <Item>cena</Item>
            <Item>ilość</Item>
            <Item>suma</Item>
            {basketItems.map(item => (
                <ProductDescription>
                    <Photo src={item.src}></Photo>

                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductCompany>{item.company}</ProductCompany>
                    <ProductSize>rozmiar: {item.size}</ProductSize>

                    <ProductPrice>{item.price}</ProductPrice>

                    <button>plus</button>
                    <span>{item.quantity}</span>
                    <button>minus</button>

                </ProductDescription>
            ))}
        </GridContainer>
    </>
}

export default BasketPage