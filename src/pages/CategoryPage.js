import ProductBox from "../components/ProductBox/index"
import Listing from "../components/Listing"
import styled from "styled-components";


const Title = styled.h1`
margin-left: 10%;
font-weight: 400;
font-size: 3rem;
letter-spacing: 2px;
line-height: 2em;
`



function CategoryPage(props) {
    return <>
        <Title>{props.title}</Title>
        <Listing>
            {props.data.map((product) =>
                <ProductBox product={product} />

            )}
        </Listing>

    </>
}

export default CategoryPage

