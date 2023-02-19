import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
text-decoration: none;
`

const CategoryBox = styled.div`
display: flex;
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
text-decoration: none;
`
const ProductPrice = styled.h3`
color: black;
`

function CategoryPage(props) {
    return <>
        <h1>{props.title}</h1>
        <CategoryBox>
            {props.data.map((product) => <StyledLink to={`/product/${product.id}`}>
                <Photo src={product.src}></Photo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>

            </StyledLink>
            )}
        </CategoryBox>

    </>
}

export default CategoryPage;

