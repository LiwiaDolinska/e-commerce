import styled from "styled-components"

const SummaryDiv = styled.div`
font-family: Montserrat, sans-serif;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgb(187, 247, 247);
`

const SummaryTitle = styled.h1`
margin-bottom: 50px;
letter-spacing: 2px;
`

function SummaryPage(props) {
    const { formData } = props

    return <SummaryDiv>
        <SummaryTitle>Podsumowanie zamówienia</SummaryTitle>
        <p><strong>I m i ę :</strong> {formData.name}</p>
        <p>N a z w i s k o : {formData.surname}</p>
        <p>E - m a i l : {formData.mail}</p>
        <p>A d r e s : {formData.address}</p>
        <p>K o d  p o c z t o w y : {formData.zipCode}</p>
        <p>M i a s t o : {formData.city}</p>
        <p>K r a j : {formData.country}</p>
        <p>N u m e r : {formData.number}</p>
        <p> S p o s ó b  d o s t a w y : {formData.delivery}</p>
        <p>S p o s ó b  p ł a t n o ś c i : {formData.payment}</p>

    </SummaryDiv>
}

export default SummaryPage

