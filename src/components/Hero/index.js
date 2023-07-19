import React from "react";
import styled from "styled-components";
import womenPhoto from "../../assets/photos/women-photo.jpg";
import menPhoto from "../../assets/photos/men-photo.jpg";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { headingHeight } from "../Header";


const Photos = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: stretch;
@media (max-width: 1000px) {
    flex-direction: column;

}
`

const Section = styled.section`
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

const Image = styled.img`
width: 100%;
cursor: pointer;
display: flex;
justify-content: row;
object-fit: cover;
`

const Gender = styled.h1`
position: absolute;
font-size: 50px;
left: 0%;
transform: rotate(90deg);
font-family: 'Lato', sans-serif;
font-size: 80px;
color: white;
`
const SectionLinks = styled.div`
position: absolute;
left: 5%;
top: 70%;
font-family: 'Lato', sans-serif;
color: white;
`

const GoIn = styled.h2`
text-decoration: underline;
`




function Hero() {


    return <Photos>
        <Link to="/collection/women">
            <Section>
                <Image src={womenPhoto}></Image>
                <Gender>ONA</Gender>
                <SectionLinks>
                    <h2>KOLEKCJA DAMSKA</h2>
                    <GoIn>zobacz<FontAwesomeIcon icon={faCircleArrowRight} style={{ paddingLeft: "10px" }}></FontAwesomeIcon></GoIn>
                </SectionLinks>
            </Section>
        </Link>
        <Link to="/collection/men">
            <Section>
                <Image src={menPhoto}></Image >
                <Gender>ON</Gender>
                <SectionLinks>
                    <h2>KOLEKCJA MĘSKA</h2>
                    <GoIn>zobacz<FontAwesomeIcon icon={faCircleArrowRight} style={{ paddingLeft: "10px" }}></FontAwesomeIcon></GoIn>
                </SectionLinks>
            </Section>
        </Link>
    </Photos >
}

export default Hero