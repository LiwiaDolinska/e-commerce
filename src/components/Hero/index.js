import React from "react";
import styled from "styled-components";

const Photos = styled.div`
width: 100vw;
height: calc(100vh - 100px);
display: flex;
flex-direction: row;
justify-content: stretch;
align-items: stretch;
`

const Image = styled.img`
position: relative;
width: 35%;
cursor: pointer;
display: flex;
justify-content: row;
&.women {align-self: left };
&.men {align-self: right};
`


function Hero() {


    return <Photos>
        <Image src="../../photos/women-clothes.jpg" className="women"></Image>
        <Image src="../../photos/men-clothes.jpg" className="men"></Image >

    </Photos >
}

export default Hero