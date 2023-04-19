import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import glsLogo from "../assets/photos/glsLogo.jpg";



const FactureTitle = styled.h1`
font-family: Montserrat, sans-serif;
font-size: 25px;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 100px;
`

const Form = styled.div`
display: flex;
flex-direction: row;
gap: 15px;
margin-left: 10%;
margin-top: 30px;
`
const PersonalDataSection = styled.div`
width: 50%;
`

const Label = styled.label`
font-family: Montserrat, sans-serif;
letter-spacing: 3px;
color: #838383;
`

const Input = styled.input`
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px grey solid;
height: 30px;
margin-left: 20px;
outline: 0px;
`
const DeliverySection = styled.div`
width: 50%;

`

const DeliveryTitle = styled.h2`
font-family: Montserrat, sans-serif;
font-size: 25px;
letter-spacing: 2px;
margin-top: 100px;
margin-left: 30%;
margin-bottom: 100px;
`
const DeliveryList = styled.ul`
display: flex;
flex-direction: column;
`

const DeliveryChoice = styled.li`
height: 100px;
list-style-type: none;
display: flex;
box-sizing: border-box;
width: 600px;
border: 1px grey solid;
align-items: center;
`
const DeliveryInput = styled.input`
height: 30px;
width: 30px;
margin-left: 30px;
`

const DeliveryTextDiv = styled.div`
display: flex;
`
const DeliveryFirm = styled.p`
color: black;
font-family: Montserrat, sans-serif;
font-size: 18px;
letter-spacing: 1px;
line-height: 20px;
margin-left: 25px;
margin-right: 20px;
`

const DeliveryDuration = styled.p`
color: #838383;
font-family: Montserrat, sans-serif;
font-size: 15px;
font-size: 18px;

margin-left: 20px;
margin-right: 20px;
`

const Price = styled.p`
color: rgba(125,207,228,255);
font-family: Montserrat, sans-serif;
font-size: 18px;
`
const PaymentButton = styled.button`
background-color: black;
color: white;
border: 1px black solid;
height: 60px;
width: 150px;
font-size: 20px;
cursor: pointer;
`
const Icon = styled.img`
border: none;
height: 15px;
`

function FormPage() {
    function onChangeValue(event) {
        console.log(event.target.value)
    }
    const navigate = useNavigate();

    console.log(glsLogo)
    return <>
        <Form>
            <PersonalDataSection>
                <FactureTitle>dane do faktury</FactureTitle>
                <div>
                    <Label ></Label>
                    <Input type="text" placeholder="Imię"></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Nazwisko"></Input>
                </div>
                <div>
                    <Label>  </Label>
                    <Input type="email" placeholder="E-mail"></Input>
                </div>

                {/* <hr style={{ width: "50%" }}></hr> */}
                <p>adres dostawy</p>
                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Ulica i numer"></Input>
                </div>
                <div>
                    <Label>            </Label>
                    <Input type="number" placeholder="Kod pocztowy"></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Miasto"></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Kraj"></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="tel" placeholder="Nr telefonu"></Input>
                </div>

            </PersonalDataSection>
            <DeliverySection>
                <DeliveryTitle>dostawa</DeliveryTitle>
                <DeliveryList>
                    <DeliveryChoice>
                        <DeliveryInput
                            type="radio"
                            name="dostawa"
                            value="odbiór własny"
                            onChange={onChangeValue}
                        />
                        <DeliveryTextDiv>
                            <Icon />
                            <DeliveryFirm>Odbiór własny</DeliveryFirm>
                            <DeliveryDuration>1-5 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </DeliveryTextDiv>
                    </DeliveryChoice>
                    <DeliveryChoice>
                        <DeliveryInput
                            type="radio"
                            name="dostawa"
                            value="inpost"
                            onChange={onChangeValue}
                        />
                        <DeliveryTextDiv>
                            <DeliveryFirm>Inpost paczkomaty 24/7</DeliveryFirm>
                            <DeliveryDuration>1-3 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </DeliveryTextDiv>
                    </DeliveryChoice>
                    <DeliveryChoice>
                        <DeliveryInput
                            type="radio"
                            name="dostawa"
                            value="gls"
                            onChange={onChangeValue}
                        />
                        <DeliveryTextDiv>
                            <Icon src={glsLogo} />
                            <DeliveryFirm>Wysyłka kurierem GLS</DeliveryFirm>
                            <DeliveryDuration>1-3 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </DeliveryTextDiv>
                    </DeliveryChoice>
                    <DeliveryChoice>

                        <DeliveryInput
                            type="radio"
                            name="dostawa"
                            value="dpd"
                            onChange={onChangeValue}
                        />
                        <DeliveryTextDiv>
                            <DeliveryFirm>Wysyłka kurierem DPD</DeliveryFirm>
                            <DeliveryDuration>1-4 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </DeliveryTextDiv>
                    </DeliveryChoice>
                </DeliveryList>
            </DeliverySection>
        </Form >
        <PaymentButton onClick={() => navigate("/payment")}>Kupuję i płacę</PaymentButton>
    </>
}

export default FormPage