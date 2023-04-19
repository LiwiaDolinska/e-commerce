import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
text-decoration: none;
`

const Photo = styled.img`
height: ${props => props.isSmall ? "200px" : "400px"};
width: ${props => props.isSmall ? "200px" : "400px"};
object-fit: cover;
justify-content: flex-start;
`
const ProductTitle = styled.h2`
color: black;
font-size: ${props => props.smallTitle ? "20px" : "30px"};
font-weight: 400;
text-decoration: none;
`
const ProductCompany = styled.p`
color: grey;
font-weight: 500;
`

const ProductPrice = styled.h3`
color: black;
font-weight: 300;
`

function ProductBox(props) {
    console.log(props)
    return <StyledLink to={`/product/${props.product.id}`}>
        <Photo isSmall={props.isMini} src={props.product.src}></Photo>
        <ProductTitle smallTitle={props.isSmallTitle}>{props.product.title}</ProductTitle>
        <ProductCompany>{props.product.company}</ProductCompany>
        <ProductPrice>{props.product.price} zł</ProductPrice>
    </StyledLink>
}
export default ProductBox