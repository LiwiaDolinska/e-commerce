import React from "react";
import styled from "styled-components";
import womenPhoto from "../../assets/photos/women-photo.jpg";
import menPhoto from "../../assets/photos/men-photo.jpg";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Photos = styled.div`
width: 100vw;
height: calc(100vh - 100px);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: stretch;
`

const Section = styled.section`
width: 100vw;
height: calc(100vh - 100px);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: stretch;
cursor: pointer;
&:hover {
    background-color: blue;
}
`

const Image = styled.img`
position: relative;
width: 100%;
cursor: pointer;
display: flex;
justify-content: row;
object-fit: cover;
`
const WomenGender = styled.h1`
position: absolute;
font-size: 50px;
left: 0%;
transform: rotate(90deg);
font-family: 'Lato', sans-serif;
font-size: 80px;
`

const MenGender = styled.h1`
position: absolute;
font-size: 50px;
left: 50%;
transform: rotate(90deg);
color: white;
font-family: 'Lato', sans-serif;
font-size: 80px;
`
const WomenCollectionSection = styled.h2`
position: absolute;
left: 0%;
top: 70%;
font-family: 'Lato', sans-serif;
`

const GoInWomen = styled.h2`
position: absolute;
left: 0;
top: 80%;
text-decoration: underline;
font-family: 'Lato', sans-serif;
`

const MenCollectionSection = styled.h2`
position: absolute;
left: 50%;
top: 70%;
color: white;
font-family: 'Lato', sans-serif;
`

const GoInMen = styled.h2`
position: absolute;
left: 50%;
top: 80%;
text-decoration: underline;
color: white;
font-family: 'Lato', sans-serif;
`





function Hero() {


    return <Photos>
        <Section>
            <Image src={womenPhoto}></Image>
            <WomenGender>ONA</WomenGender>
            <WomenCollectionSection>KOLEKCJA DAMSKA</WomenCollectionSection>
            <GoInWomen>zobacz<FontAwesomeIcon icon={faCircleArrowRight} style={{ paddingLeft: "10px" }}></FontAwesomeIcon></GoInWomen>
        </Section>
        <Section>
            <Image src={menPhoto}></Image >
            <MenGender>ON</MenGender>
            <MenCollectionSection>KOLEKCJA MĘSKA</MenCollectionSection>
            <GoInMen>zobacz<FontAwesomeIcon icon={faCircleArrowRight} style={{ paddingLeft: "10px" }}></FontAwesomeIcon></GoInMen>
        </Section>
    </Photos >
}

export default Hero