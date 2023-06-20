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
@media (max-width: 1000px) {
    flex-direction: column;
}
justify-content: center;
`

const InputWithError = styled.div`
display: flex;
flex-direction: column;
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
height: 40px;
outline: 0px;
`

const Section = styled.div`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
`

const DeliveryTitle = styled.h2`
font-family: Montserrat, sans-serif;
font-size: 25px;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 100px;
`
const DeliveryList = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: 50px 70px 300px;
grid-template-rows: 130px 130px 130px 130px;
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
font-size: 17px;
letter-spacing: 1px;
line-height: 15px;
margin-left: 20px;
margin-right: 20px;
`

const DeliveryDuration = styled.p`
color: #838383;
font-family: Montserrat, sans-serif;
font-size: 15px;
margin-left: 20px;
margin-right: 20px;
`

const Price = styled.p`
color: rgba(125,207,228,255);
font-family: Montserrat, sans-serif;
font-size: 17px;
margin-left: 20px;
margin-right: 20px;
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
align-self: center;
`
const InpostTextDiv = styled.div`
grid-column: 3/4;
grid-row: 2/3;
align-self: center;
`
const GlsTextDiv = styled.div`
grid-column: 3/4;
grid-row: 3/4;
align-self: center;
`
const DpdTextDiv = styled.div`
grid-column: 3/4;
grid-row: 4/5;
align-self: center;
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
grid-template-columns: 50px 70px 200px;
grid-template-rows: 80px 80px 80px;
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
const ErrorMessage = styled.span`
color: red;
font-size: 10px;
margin-top: 5px;
`

const RadioErrorMessage = styled.span`
color: red;
font-size: 12px;

`

const ButtonDiv = styled.div`
align-self: center;
margin-top: 50px;
`

const PaymentButton = styled.button`
background-color: black;
color: white;
border: 1px black solid;
height: 60px;
width: 300px;
font-size: 20px;
cursor: pointer;
`

function FormPage({ onSubmit }) {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [mail, setMail] = useState("")
    const [address, setAddress] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [number, setNumber] = useState("")
    const [delivery, setDelivery] = useState("")
    const [payment, setPayment] = useState("")
    const [nameError, setNameError] = useState(false)
    const [surnameError, setSurnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [zipCodeError, setZipCodeError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [countryError, setCountryError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [deliveryError, setDeliveryError] = useState(false)
    const [paymentError, setPaymentError] = useState(false)

    function onChangeDeliveryValue(event) {
        setDelivery(event.target.value)
    }
    function onChangePaymentValue(event) {
        setPayment(event.target.value)
    }

    function isFormValid() {
        let isValid = true
        if (name === "") {
            setNameError(true)
            isValid = false
        } else {
            setNameError(false)
        }
        if (surname === "") {
            setSurnameError(true)
            isValid = false
        } else {
            setSurnameError(false)
        }
        if (mail === "") {
            setEmailError(true)
            isValid = false
        } else {
            setEmailError(false)
        }
        if (address === "") {
            setAddressError(true)
            isValid = false
        } else {
            setAddressError(false)
        }
        if (zipCode === "") {
            setZipCodeError(true)
            isValid = false
        } else {
            setZipCodeError(false)
        }
        if (city === "") {
            setCityError(true)
            isValid = false
        } else {
            setCityError(false)
        }
        if (country === "") {
            setCountryError(true)
            isValid = false
        } else {
            setCountryError(false)
        }
        if (mail === "") {
            setEmailError(true)
            isValid = false
        } else {
            setEmailError(false)
        }
        if (number === "") {
            setNumberError(true)
            isValid = false
        } else {
            setNumberError(false)
        }
        if (delivery === "") {
            setDeliveryError(true)
            isValid = false
        } else {
            setDeliveryError(false)
        }
        if (payment === "") {
            setPaymentError(true)
            isValid = false
        } else {
            setPaymentError(false)
        }
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
                <Section>
                    <FactureTitle>dane do faktury</FactureTitle>
                    <InputWithError>
                        <Label></Label>
                        <Input type="text" placeholder="Imię" value={name} onChange={event => setName(event.target.value)}></Input>
                        {nameError ? <ErrorMessage>Uzupełnij imię</ErrorMessage> : null}
                    </InputWithError>
                    <InputWithError>
                        <Label></Label>
                        <Input type="text" placeholder="Nazwisko" value={surname} onChange={event => setSurname(event.target.value)}></Input>
                        {surnameError ? <ErrorMessage>Uzupełnij nazwisko</ErrorMessage> : null}
                    </InputWithError>
                    <InputWithError>
                        <Label></Label>
                        <Input type="email" placeholder="E-mail" value={mail} onChange={event => setMail(event.target.value)}></Input>
                        {emailError ? <ErrorMessage>Uzupełnij e-mail</ErrorMessage> : null}
                    </InputWithError>
                    <InputWithError>
                        <Label></Label>
                        <Input type="text" placeholder="Ulica i numer" value={address} onChange={event => setAddress(event.target.value)}></Input>
                        {addressError ? <ErrorMessage>Uzupełnij adres</ErrorMessage> : null}
                    </InputWithError>
                    <InputWithError>
                        <Label></Label>
                        <Input type="text" placeholder="Kod pocztowy" value={zipCode} onChange={event => setZipCode(event.target.value)}></Input>
                        {zipCodeError ? <ErrorMessage>Uzupełnij kod pocztowy</ErrorMessage> : null}
                    </InputWithError>
                    <InputWithError>
                        <Label></Label>
                        <Input type="text" placeholder="Miasto" value={city} onChange={event => setCity(event.target.value)}></Input>
                        {cityError ? <ErrorMessage>Uzupełnij nazwę miasta</ErrorMessage> : null}
                    </InputWithError>
                    <InputWithError>
                        <Label></Label>
                        <Input type="text" placeholder="Kraj" value={country} onChange={event => setCountry(event.target.value)}></Input>
                        {countryError ? <ErrorMessage>Uzupełnij kraj</ErrorMessage> : null}
                    </InputWithError>
                    <InputWithError>
                        <Label></Label>
                        <Input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="Nr tel - format: 123-456-789" value={number} onChange={event => setNumber(event.target.value)}></Input>
                        {numberError ? <ErrorMessage>Uzupełnij numer telefonu</ErrorMessage> : null}
                    </InputWithError>

                </Section>
                <Section>
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
                    {deliveryError ? <RadioErrorMessage>Wybierz sposób dostawy</RadioErrorMessage> : null}

                </Section>
                <Section>
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
                    {paymentError ? <RadioErrorMessage>Wybierz sposób płatności</RadioErrorMessage> : null}
                </Section>
            </FormDiv>
            <ButtonDiv>
                <PaymentButton type="submit">Kupuję</PaymentButton>
            </ButtonDiv>
        </Form >
    </>
}

export default FormPage