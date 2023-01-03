import { useParams } from "react-router-dom";
import styled from "styled-components";
import { allProducts } from "../categoryPhotos";

function ProductPage() {
    let params = useParams();
    const product = allProducts.find(product => product.id === params.productId)
    return <h1>{product.company}</h1>
}

export default ProductPage;