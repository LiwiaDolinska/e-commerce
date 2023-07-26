import styled from "styled-components"


export const FactureTitle = styled.h1`
font-family: Montserrat, sans-serif;
font-size: 25px;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 100px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 30px;
`

export const FormDiv = styled.div`
display: flex;
@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
}
justify-content: center;
`

export const InputWithError = styled.div`
display: flex;
flex-direction: column;
`

export const Label = styled.label`
font-family: Montserrat, sans-serif;
letter-spacing: 3px;
color: #838383;
`

export const Input = styled.input`
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px grey solid;
height: 40px;
width: 200px;
outline: 0px;
@media (max-width: 1000px) {
    width: 300px;
}
`

export const Section = styled.div`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
`

export const DeliveryTitle = styled.h2`
font-family: Montserrat, sans-serif;
font-size: 25px;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 100px;
`

export const DeliveryList = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: 50px 70px 300px;
grid-template-rows: 130px 130px 130px 130px;
`

export const SelfInput = styled.input`
grid-column: 1/2;
grid-row: 1/2;
align-self: center;
cursor: pointer;
margin-left: 30px;
`

export const InpostInput = styled.input`
grid-column: 1/2;
grid-row: 2/3;
align-self: center;
cursor: pointer;
margin-left: 30px;
`

export const GlsInput = styled.input`
grid-column: 1/2;
grid-row: 3/4;
align-self: center;
cursor: pointer;
margin-left: 30px;
`

export const DpdInput = styled.input`
grid-column: 1/2;
grid-row: 4/5;
align-self: center;
cursor: pointer;
margin-left: 30px;
`

export const DeliveryFirm = styled.p`
color: black;
font-family: Montserrat, sans-serif;
font-size: 17px;
letter-spacing: 1px;
line-height: 15px;
margin-left: 20px;
margin-right: 20px;
`

export const DeliveryDuration = styled.p`
color: #838383;
font-family: Montserrat, sans-serif;
font-size: 15px;
margin-left: 20px;
margin-right: 20px;
`

export const Price = styled.p`
color: rgba(125,207,228,255);
font-family: Montserrat, sans-serif;
font-size: 17px;
margin-left: 20px;
margin-right: 20px;
`

export const SelfIcon = styled.img`
grid-column: 2/3;
grid-row: 1/2;
border: none;
height: 30px;
width: 40px;
align-self: center;
margin-left: 10px;
`

export const InpostIcon = styled.img`
grid-column: 2/3;
grid-row: 2/3;
border: none;
height: 30px;
width: 30px;
align-self: center;
margin-left: 10px;
`

export const GlsIcon = styled.img`
grid-column: 2/3;
grid-row: 3/4;
border: none;
height: 30px;
width: 60px;
align-self: center;
margin-left: 10px;
`

export const DpdIcon = styled.img`
grid-column: 2/3;
grid-row: 4/5;
border: none;
height: 30px;
width: 60px;
align-self: center;
margin-left: 10px;
`

export const SelfTextDiv = styled.div`
grid-column: 3/4;
grid-row: 1/2;
align-self: center;
`

export const InpostTextDiv = styled.div`
grid-column: 3/4;
grid-row: 2/3;
align-self: center;
`

export const GlsTextDiv = styled.div`
grid-column: 3/4;
grid-row: 3/4;
align-self: center;
`

export const DpdTextDiv = styled.div`
grid-column: 3/4;
grid-row: 4/5;
align-self: center;
`

export const Title = styled.h2`
font-family: Montserrat, sans-serif;
letter-spacing: 2px;
margin-top: 100px;
margin-bottom: 80px;
margin-left: 20px;
`

export const PaymentList = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: 50px 70px 200px;
grid-template-rows: 80px 80px 80px;
`

export const CashInput = styled.input`
grid-column: 1/2;
grid-row: 1/2;
align-self: center;
cursor: pointer;
`

export const BlikInput = styled.input`
grid-column: 1/2;
grid-row: 2/3;
align-self: center;
cursor: pointer;
`

export const CardInput = styled.input`
grid-column: 1/2;
grid-row: 3/4;
align-self: center;
cursor: pointer;
`

export const CashIcon = styled.img`
grid-column: 2/3;
grid-row: 1/2;
height: 40px;
width: 40px;
align-self: center;
`

export const BlikIcon = styled.img`
grid-column: 2/3;
grid-row: 2/3;
height: 40px;
width: 40px;
align-self: center;
`

export const CardIcon = styled.img`
grid-column: 2/3;
grid-row: 3/4;
height: 40px;
width: 60px;
align-self: center;
`

export const Name = styled.p`
align-self: center;
font-family: Montserrat, sans-serif;
letter-spacing: 1px;
`

export const ErrorMessage = styled.span`
color: red;
font-size: 10px;
margin-top: 5px;
`

export const RadioErrorMessage = styled.span`
color: red;
font-size: 12px;
`

export const ButtonDiv = styled.div`
align-self: center;
margin-top: 50px;
`

export const PaymentButton = styled.button`
background-color: black;
color: white;
border: 1px black solid;
height: 60px;
width: 300px;
font-size: 20px;
cursor: pointer;
`