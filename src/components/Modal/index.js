import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";


const ModalBox = styled.div`
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

const Text = styled.p`
letter-spacing: 1px;
margin-top: 50px;
font-size: 19px;
font-weight: 600;
`
const ButtonBox = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;
`

const Button = styled.button`
height: 80px;
width: 180px;
border: 1px solid black;
background-color: white;
cursor: pointer;
font-size: 17px;
`
const ModalOverlay = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: grey;
opacity: 0.5;
`

function Modal(props) {
    if (!props.show) {
        return null
    }


    return <>
        <ModalOverlay onClick={props.onClose}></ModalOverlay>
        <ModalBox>
            <FontAwesomeIcon icon={faCircleCheck} size="3x" color="green" />
            <Text>Produkt został dodany do koszyka</Text>
            <ButtonBox>
                <Button onClick={props.onClose}>Kontynuuj zakupy</Button>
                <Link to="/basket"><Button>Przejdź do koszyka</Button></Link>
            </ButtonBox>
        </ModalBox>
    </>
}

export default Modal