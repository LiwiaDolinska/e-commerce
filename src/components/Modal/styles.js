import styled from "styled-components";


export const ModalBox = styled.div`
position: fixed;
height: 300px;
width: 500px;
background-color: white;
left: 50%; 
top: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
font-family: Montserrat, sans-serif;
`

export const Text = styled.p`
letter-spacing: 1px;
margin-top: 50px;
font-size: 19px;
font-weight: 600;
`

export const ButtonBox = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;
`

export const Button = styled.button`
height: 80px;
width: 180px;
border: 1px solid black;
background-color: white;
cursor: pointer;
font-size: 17px;
`

export const ModalOverlay = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: grey;
opacity: 0.5;
`