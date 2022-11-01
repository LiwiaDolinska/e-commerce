import React from "react";
import styled from "styled-components";
import womenPhoto from "../../assets/photos/women-photo.jpg";
import menPhoto from "../../assets/photos/men-photo.jpg";

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
`

const MenGender = styled.h1`
position: absolute;
font-size: 50px;
left: 50%;
`






function Hero() {


    return <Photos>
        <Section>
            <Image src={womenPhoto}></Image>
            <WomenGender>ONA</WomenGender>
        </Section>
        <Section>
            <Image src={menPhoto}></Image >
            <MenGender>ON</MenGender>
        </Section>
    </Photos >
}

export default Hero