import styled from "styled-components"
import { headingHeight } from "../Header/styles";


export const Photos = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: stretch;
@media (max-width: 1000px) {
    flex-direction: column;
}
`

export const Section = styled.section`
position: relative;
height: calc(100vh - ${headingHeight}px);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: stretch;
cursor: pointer;
flex-grow: 1;
@media (max-width: 1000px) {
    height: 500px;
}
&:hover {
   flex-grow: 1.5;
}
`

export const Image = styled.img`
width: 100%;
cursor: pointer;
display: flex;
justify-content: row;
object-fit: cover;
`

export const Gender = styled.h1`
position: absolute;
font-size: 50px;
left: 0%;
transform: rotate(90deg);
font-family: 'Lato', sans-serif;
font-size: 80px;
color: white;
`

export const SectionLinks = styled.div`
position: absolute;
left: 5%;
top: 70%;
font-family: 'Lato', sans-serif;
color: white;
`

export const GoIn = styled.h2`
text-decoration: underline;
`
