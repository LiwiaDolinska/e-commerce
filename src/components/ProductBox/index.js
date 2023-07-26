import { StyledLink, Photo, ProductTitle, ProductCompany, ProductPrice } from "./styles"

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