import { useNavigate } from "react-router-dom";
import { useState } from "react";
import glsLogo from "../../assets/photos/glsLogo.jpg";
import gotówka from "../../assets/photos/gotówka.png";
import blik from "../../assets/photos/blik.jpeg";
import karta from "../../assets/photos/karta.png";
import dpd from "../../assets/photos/dpd.png";
import inpost from "../../assets/photos/inpost.png";
import self from "../../assets/photos/self.png";
import { FormDiv, Section, FactureTitle, InputWithError, Label, Input, ErrorMessage, Form, DeliveryTitle, DeliveryList, SelfInput, InpostInput, GlsInput, DpdInput, DeliveryFirm, DeliveryDuration, Price, SelfIcon, InpostIcon, GlsIcon, DpdIcon, SelfTextDiv, InpostTextDiv, GlsTextDiv, DpdTextDiv, Title, PaymentList, CashInput, CardInput, CashIcon, BlikIcon, CardIcon, Name, RadioErrorMessage, ButtonDiv, PaymentButton, BlikInput } from "./styles";


export function ShoppingForm({ onSubmit }) {
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
            const data = { name, surname, mail, address, zipCode, city, country, number, delivery, payment }
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
                        <Input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="Nr tel. (format: 123-456-789)" value={number} onChange={event => setNumber(event.target.value)}></Input>
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

