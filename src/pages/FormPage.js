import styled from "styled-components"
import glsLogo from "../assets/photos/glsLogo.jpg";
import gotówka from "../assets/photos/gotówka.png"
import blik from "../assets/photos/blik.jpeg"
import karta from "../assets/photos/karta.png"
import dpd from "../assets/photos/dpd.png";
import inpost from "../assets/photos/inpost.png";
import self from "../assets/photos/self.png";
import { Link } from "react-router-dom";
import { useState } from "react";


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
margin-top: 30px;
`
const PersonalDataSection = styled.div`
width: 20%;
margin-left: 10px;
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
width: 45%;
margin-left: 0px;
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
width: 600px;
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
height: 30px;
width: auto;
align-self: center;
margin-left: 10px;
`
const PaymentSection = styled.div`
width: 33%;
`

const Title = styled.h2`
font-family: Montserrat, sans-serif;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 80px;
margin-left: 20px;
`

const PaymentList = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: 60px 100px 500px;
grid-template-rows: 100px 100px 100px;
`

const CashInput = styled.input`
grid-column: 1/2;
grid-row: 1/2;
align-self: center;
`
const BlikInput = styled.input`
grid-column: 1/2;
grid-row: 2/3;
align-self: center;

`
const CardInput = styled.input`
grid-column: 1/2;
grid-row: 3/4;
align-self: center;

`
const CashIcon = styled.img`
grid-column: 2/3;
grid-row: 1/2;
height: 40px;
width: 40px;
align-self: center;

`
const BlikIcon = styled.img`
grid-column: 2/3;
grid-row: 2/3;
height: 40px;
width: 40px;
align-self: center;

`
const CardIcon = styled.img`
grid-column: 2/3;
grid-row: 3/4;
height: 40px;
width: 60px;
align-self: center;
`
const Name = styled.p`
align-self: center;
font-family: Montserrat, sans-serif;
letter-spacing: 1px;
`

function FormPage() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [mail, setMail] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState()
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [number, setNumber] = useState()

    function onChangeValue(event) {
        console.log(event.target.value)
    }

    return <>
        <Form>
            <PersonalDataSection>
                <FactureTitle>dane do faktury</FactureTitle>
                <div>
                    <Label ></Label>
                    <Input type="text" placeholder="Imię" value={name} onChange={event => setName(event.target.value)}></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Nazwisko" value={surname} onChange={event => setSurname(event.target.value)}></Input>
                </div>
                <div>
                    <Label>  </Label>
                    <Input type="email" placeholder="E-mail" value={mail} onChange={setMail}></Input>
                </div>

                <p>adres dostawy</p>

                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Ulica i numer" value={address} onChange={event => setAddress(event.target.value)}></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="number" placeholder="Kod pocztowy" value={zipCode} onChange={event => setZipCode(event.target.value)}></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Miasto" value={city} onChange={event => setCity(event.target.value)}></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="text" placeholder="Kraj" value={country} onChange={event => setCountry(event.target.value)}></Input>
                </div>
                <div>
                    <Label></Label>
                    <Input type="tel" placeholder="Nr telefonu" value={number} onChange={event => setNumber(event.target.value)}></Input>
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
                            <Icon src={self} />
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
                            <Icon src={inpost} />
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
                            <Icon src={dpd} />
                            <DeliveryFirm>Wysyłka kurierem DPD</DeliveryFirm>
                            <DeliveryDuration>1-4 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </DeliveryTextDiv>
                    </DeliveryChoice>
                </DeliveryList>
            </DeliverySection>
            <PaymentSection>
                <Title>wybierz płatność</Title>
                <PaymentList>

                    <CashInput
                        type="radio"
                        name="płatność"
                        value="gotówka"
                        onChange={onChangeValue}
                    />
                    <CashIcon src={gotówka}></CashIcon>
                    <Name>Gotówka</Name>
                    <BlikInput
                        type="radio"
                        name="blik"
                        value="blik"
                        onChange={onChangeValue}
                    />
                    <BlikIcon src={blik}></BlikIcon>
                    <Name>Blik</Name>
                    <CardInput
                        type="radio"
                        name="card"
                        value="card"
                        onChange={onChangeValue}
                    />
                    <CardIcon src={karta}></CardIcon>
                    <Name>Karta debetowa</Name>
                </PaymentList>
            </PaymentSection>
        </Form >
        <Link to="/summary"><PaymentButton>Kupuję</PaymentButton></Link>
    </>
}

export default FormPage