import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
text-decoration: none;
`

export const Photo = styled.img`
height: ${props => props.isSmall ? "200px" : "400px"};
width: ${props => props.isSmall ? "200px" : "400px"};
object-fit: cover;
justify-content: flex-start;
`

export const ProductTitle = styled.h2`
color: black;
font-size: ${props => props.smallTitle ? "20px" : "30px"};
font-weight: 400;
text-decoration: none;
`

export const ProductCompany = styled.p`
color: grey;
font-weight: 500;
`

export const ProductPrice = styled.h3`
color: black;
font-weight: 300;
`