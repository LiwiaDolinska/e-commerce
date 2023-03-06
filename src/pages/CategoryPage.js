import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
text-decoration: none;
`

const Title = styled.h1`
margin-left: 10%;
font-weight: 400;
font-size: 3rem;
letter-spacing: 2px;
line-height: 2em;
`

const CategoryBox = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
gap: 15px;
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

function CategoryPage(props) {
    return <>
        <Title>{props.title}</Title>
        <CategoryBox>
            {props.data.map((product) => <StyledLink to={`/product/${product.id}`}>
                <Photo src={product.src}></Photo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductCompany>{product.company}</ProductCompany>
                <ProductPrice>{product.price} zł</ProductPrice>

            </StyledLink>
            )}
        </CategoryBox>

    </>
}

export default CategoryPage;

