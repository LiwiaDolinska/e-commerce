import styled from "styled-components"

const Background = styled.div`
background-color: rgb(187, 247, 247);
height: 500px;
width: auto;
margin-top: 130px;
display: flex;
justify-content: center;
`

const SummaryDiv = styled.div`
font-family: Montserrat, sans-serif;

`

const SummaryTitle = styled.h1`
margin-bottom: 50px;
letter-spacing: 2px;
`

function SummaryPage(props) {
    const { formData } = props

    return <>
        <Background>
            <SummaryDiv>
                <SummaryTitle>Podsumowanie zamówienia</SummaryTitle>
                <p><strong>Imię :</strong> {formData.name}</p>
                <p><strong>Nazwisko:</strong> {formData.surname}</p>
                <p><strong>E-mail:</strong> {formData.mail}</p>
                <p><strong>Adres:</strong> {formData.address}</p>
                <p><strong>Kod pocztowy:</strong> {formData.zipCode}</p>
                <p><strong>Miasto:</strong> {formData.city}</p>
                <p><strong>Kraj:</strong> {formData.country}</p>
                <p><strong>Numer telefonu:</strong> {formData.number}</p>
                <p><strong>Sposób dostawy:</strong> {formData.delivery}</p>
                <p><strong>Sposób płatności:</strong> {formData.payment}</p>

            </SummaryDiv>
        </Background>
    </>
}

export default SummaryPage

