import styled from "styled-components";
import ProductBox from "../components/ProductBox/index"

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

function CategoryPage(props) {
    return <>
        <Title>{props.title}</Title>
        <CategoryBox>
            <ProductBox />
        </CategoryBox>

    </>
}

export default CategoryPage

