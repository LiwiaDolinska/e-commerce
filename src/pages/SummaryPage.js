function SummaryPage(props) {
    const { formData } = props

    return <>
        <h1>Podsumowanie</h1>
        <h2>Twoje dane</h2>
        <p>Imię: {formData.name}</p>
        <p>Nazwisko: {formData.surname}</p>
        <p>E-mail: {formData.mail}</p>
        <p>Adres: {formData.address}</p>
        <p>Kod pocztowy: {formData.zipCode}</p>
        <p>Miasto: {formData.city}</p>
        <p>Kraj: {formData.country}</p>
        <p>Numer: {formData.number}</p>
        <p> Sposób dostawy: {formData.delivery}</p>
        <p>Sposób płatności: {formData.payment}</p>

    </>
}

export default SummaryPage

