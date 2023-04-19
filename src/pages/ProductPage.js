import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidFaHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { allProducts } from "../categoryPhotos";
import { useState } from 'react';
import Modal from '../components/Modal';


const Section = styled.div`
display: flex;
max-width: 100%;
justify-content: center;
margin-top: 50px;
`

const PhotoSection = styled.div`
margin: 20px;
margin-right: 50px;
`
const DescriptionSection = styled.div`
margin: 40px;
display: flex;
flex-direction: column;
`
const Photo = styled.img`
height: 700px;
width: 500px;
object-fit: cover;
`
const Company = styled.p`
font-size: 30px;
font-weight: 600;
`
const Title = styled.p`
font-size: 18px;
font-weight: 300;
`
const Price = styled.p`
font-size: 20px;
font-weight: 500;
`

const Select = styled.select`
width: 100%;
height: 35px;
border: 1px solid black;
background-color: white;
text-align-last: center;
margin: 5px;
`
const Basket = styled.button`
width: 80%;
height: 35px;
border: 1px solid black;
background-color: black;
color: white;
margin: 5px;
font-weight: 600;
cursor: pointer;
`
const HeartButton = styled.button`
width: 15%;
height: 35px;
margin: 1px;
border: 1px solid black;
cursor: pointer;

`
const Description = styled.p`
margin-top: 100px;
`


function ProductPage(props) {
    const { onAddToBasket, onAddToFavourite, onRemoveFromFavourite, favouriteProducts, onChangeQuantity, productsInBasket } = props
    let params = useParams();
    const product = allProducts.find(product => product.id === params.productId)
    const isFavourite = !!favouriteProducts.find(id => id === params.productId)
    const [size, setSize] = useState("XS");

    const handleClick = (item) => {
        const doubledProduct = productsInBasket.find(product => product.id === item.id)
        if (doubledProduct) {
            return onChangeQuantity(item.id, item.quantity + 1)
        } else {
            return onAddToBasket(item)
        }

    }

    const handleSelect = (event) => {
        console.log(event.target.value)
        setSize(event.target.value)
    }

    const handleClickFavourite = (item) => {
        if (isFavourite) {
            onRemoveFromFavourite(item)

        } else {
            onAddToFavourite(item)

        }
    }

    return <Section>
        <PhotoSection>
            <Photo src={product.src} />
        </PhotoSection>
        <DescriptionSection>
            <Company>{product.company}</Company>
            <Title>{product.title}</Title>
            <Price>{product.price} zł</Price>
            <Select onChange={handleSelect}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </Select>
            <div>
                <Basket onClick={() => handleClick({ id: product.id, size, quantity: 1 })}>Dodaj do koszyka</Basket>
                <HeartButton onClick={() => handleClickFavourite(product.id)}><FontAwesomeIcon icon={isFavourite ? solidFaHeart : faHeart} /></HeartButton>
            </div>
            <Description>{product.description}</Description>
        </DescriptionSection>
        <Modal />
    </Section>

}

export default ProductPage;