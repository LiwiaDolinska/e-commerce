import styled from "styled-components"
import gotówka from "../assets/photos/gotówka.png"
import blik from "../assets/photos/blik.jpeg"
import karta from "../assets/photos/karta.png"

const Title = styled.h1`
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

function PaymentPage() {
    function onChangeValue(event) {
        console.log(event.target.value)
    }
    return <>
        <Title>Wybierz płatność</Title>
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
    </>
}

export default PaymentPage