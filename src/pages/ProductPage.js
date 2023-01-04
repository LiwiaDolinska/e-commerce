import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { allProducts } from "../categoryPhotos";


const Section = styled.div`
display: flex;
max-width: 100%;
`

const PhotoSection = styled.div`
margin: 20px;
`
const DescriptionSection = styled.div`
margin: 40px;
display: flex;
flex-direction: column;
`
const Photo = styled.img`
height: 600px;
width: 400px;
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
`
const HeartButton = styled.button`
width: 15%;
height: 35px;
margin: 1px;
border: 1px solid black;
`
const Description = styled.p`
margin-top: 100px;
`

function ProductPage() {
    let params = useParams();
    const product = allProducts.find(product => product.id === params.productId)
    return <Section>
        <PhotoSection>
            <Photo src={product.src} />
        </PhotoSection>
        <DescriptionSection>
            <Company>{product.company}</Company>
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
            <Select>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </Select>
            <div>
                <Basket>Dodaj do koszyka</Basket>
                <HeartButton><FontAwesomeIcon icon={faHeart} /></HeartButton>
            </div>
            <Description>{product.description}</Description>
        </DescriptionSection>
    </Section>
}

export default ProductPage;