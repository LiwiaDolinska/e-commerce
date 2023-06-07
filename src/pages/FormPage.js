import styled from "styled-components"
import glsLogo from "../assets/photos/glsLogo.jpg";
import gotówka from "../assets/photos/gotówka.png"
import blik from "../assets/photos/blik.jpeg"
import karta from "../assets/photos/karta.png"
import dpd from "../assets/photos/dpd.png";
import inpost from "../assets/photos/inpost.png";
import self from "../assets/photos/self.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const FactureTitle = styled.h1`
font-family: Montserrat, sans-serif;
font-size: 25px;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 100px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 30px;

`
const FormDiv = styled.div`
display: flex;
@media (max-width: 850px) {
    flex-wrap: wrap;
}
`

const PersonalDataSection = styled.div`
width: 500px;
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
width: 500px;
padding-left: 20px;
`

const DeliveryTitle = styled.h2`
font-family: Montserrat, sans-serif;
font-size: 25px;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 100px;
padding-left: 70px;
`
const DeliveryList = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: 60px 100px 300px;
grid-template-rows: 150px 150px 150px 150px;
`

const SelfInput = styled.input`
grid-column: 1/2;
grid-row: 1/2;
align-self: center;
cursor: pointer;
margin-left: 30px;
`
const InpostInput = styled.input`
grid-column: 1/2;
grid-row: 2/3;
align-self: center;
cursor: pointer;
margin-left: 30px;
`
const GlsInput = styled.input`
grid-column: 1/2;
grid-row: 3/4;
align-self: center;
cursor: pointer;
margin-left: 30px;
`
const DpdInput = styled.input`
grid-column: 1/2;
grid-row: 4/5;
align-self: center;
cursor: pointer;
margin-left: 30px;
`

const DeliveryFirm = styled.p`
color: black;
font-family: Montserrat, sans-serif;
font-size: 18px;
letter-spacing: 1px;
line-height: 20px;
margin-left: 20px;
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
margin-left: 20px;
margin-right: 20px;
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
const SelfIcon = styled.img`
grid-column: 2/3;
grid-row: 1/2;
border: none;
height: 30px;
width: 40px;
align-self: center;
margin-left: 10px;
`
const InpostIcon = styled.img`
grid-column: 2/3;
grid-row: 2/3;
border: none;
height: 30px;
width: 30px;
align-self: center;
margin-left: 10px;
`
const GlsIcon = styled.img`
grid-column: 2/3;
grid-row: 3/4;
border: none;
height: 30px;
width: 60px;
align-self: center;
margin-left: 10px;
`
const DpdIcon = styled.img`
grid-column: 2/3;
grid-row: 4/5;
border: none;
height: 30px;
width: 60px;
align-self: center;
margin-left: 10px;
`
const SelfTextDiv = styled.div`
grid-column: 3/4;
grid-row: 1/2;
`
const InpostTextDiv = styled.div`
grid-column: 3/4;
grid-row: 2/3;
`
const GlsTextDiv = styled.div`
grid-column: 3/4;
grid-row: 3/4;
`
const DpdTextDiv = styled.div`
grid-column: 3/4;
grid-row: 4/5;
`

const PaymentSection = styled.div`
width: 500px;

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

function FormPage({ onSubmit }) {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [mail, setMail] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState()
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [number, setNumber] = useState()
    const [delivery, setDelivery] = useState("")
    const [payment, setPayment] = useState("")
    const [nameError, setNameError] = useState(false)

    function onChangeDeliveryValue(event) {
        setDelivery(event.target.value)
    }

    function onChangePaymentValue(event) {
        setPayment(event.target.value)
    }

    function isFormValid() {
        let isValid = true
        if (name === "") {
            console.log(name, name === "")
            setNameError(true)
            isValid = false
        }
        console.log(nameError)
        return isValid
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (isFormValid()) {
            const data = { name, surname, mail, zipCode, city, country, number, delivery, payment }
            onSubmit(data)
            navigate("/summary")
        }

    }

    return <>
        <Form onSubmit={handleSubmit}>
            <FormDiv>
                <PersonalDataSection>
                    <FactureTitle>dane do faktury</FactureTitle>
                    <div>
                        {nameError ? "Uzupełnij imię" : null}
                        <Label></Label>
                        <Input type="text" placeholder="Imię" value={name} onChange={event => setName(event.target.value)}></Input>
                    </div>
                    <div>
                        <Label></Label>
                        <Input type="text" placeholder="Nazwisko" value={surname} onChange={event => setSurname(event.target.value)}></Input>
                    </div>
                    <div>
                        <Label></Label>
                        <Input type="email" placeholder="E-mail" value={mail} onChange={event => setMail(event.target.value)}></Input>
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

                        <SelfInput
                            type="radio"
                            name="dostawa"
                            value="odbiór własny"
                            onChange={onChangeDeliveryValue}
                        />
                        <SelfIcon src={self} />
                        <SelfTextDiv>
                            <DeliveryFirm>Odbiór własny</DeliveryFirm>
                            <DeliveryDuration>1-5 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </SelfTextDiv>

                        <InpostInput
                            type="radio"
                            name="dostawa"
                            value="inpost"
                            onChange={onChangeDeliveryValue}
                        />
                        <InpostIcon src={inpost} />
                        <InpostTextDiv>
                            <DeliveryFirm>Inpost paczkomaty 24/7</DeliveryFirm>
                            <DeliveryDuration>1-3 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </InpostTextDiv>

                        <GlsInput
                            type="radio"
                            name="dostawa"
                            value="gls"
                            onChange={onChangeDeliveryValue}
                        />
                        <GlsIcon src={glsLogo} />
                        <GlsTextDiv>
                            <DeliveryFirm>Wysyłka kurierem GLS</DeliveryFirm>
                            <DeliveryDuration>1-3 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </GlsTextDiv>

                        <DpdInput
                            type="radio"
                            name="dostawa"
                            value="dpd"
                            onChange={onChangeDeliveryValue}
                        />
                        <DpdIcon src={dpd} />
                        <DpdTextDiv>
                            <DeliveryFirm>Wysyłka kurierem DPD</DeliveryFirm>
                            <DeliveryDuration>1-4 dni roboczych</DeliveryDuration>
                            <Price>ZA DARMO</Price>
                        </DpdTextDiv>
                    </DeliveryList>
                </DeliverySection>
                <PaymentSection>
                    <Title>wybierz płatność</Title>
                    <PaymentList>

                        <CashInput
                            type="radio"
                            name="płatność"
                            value="gotówka"
                            onChange={onChangePaymentValue}
                        />
                        <CashIcon src={gotówka}></CashIcon>
                        <Name>Gotówka</Name>
                        <BlikInput
                            type="radio"
                            name="płatność"
                            value="blik"
                            onChange={onChangePaymentValue}
                        />
                        <BlikIcon src={blik}></BlikIcon>
                        <Name>Blik</Name>
                        <CardInput
                            type="radio"
                            name="płatność"
                            value="card"
                            onChange={onChangePaymentValue}
                        />
                        <CardIcon src={karta}></CardIcon>
                        <Name>Karta debetowa</Name>
                    </PaymentList>
                </PaymentSection>
            </FormDiv>
            <div>
                <PaymentButton type="submit">Kupuję</PaymentButton>
            </div>
        </Form >
    </>
}

export default FormPage