import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
text-decoration: none;
`

const Photo = styled.img`
height: 400px;
width: 400px;
object-fit: cover;
justify-content: flex-start;
`
const ProductTitle = styled.h2`
color: black;
font-size: 30px;
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
    return <StyledLink to={`/product/${props.product.id}`}>
        <Photo src={props.product.src}></Photo>
        <ProductTitle>{props.product.title}</ProductTitle>
        <ProductCompany>{props.product.company}</ProductCompany>
        <ProductPrice>{props.product.price} zł</ProductPrice>
    </StyledLink>
}
export default ProductBox