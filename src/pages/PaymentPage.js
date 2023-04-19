import styled from "styled-components"

const PaymentList = styled.ul`
list-style-type: none;

`

const PaymentChoice = styled.li`
display: grid;
grid-template-columns: 60px 60px 1fr 1fr;
grid-template-rows: 100px 100px 100px 100px;
`
const Input = styled.input`
grid-column: 1/2;
`

const Icon = styled.p`
grid-column: 2/3;
grid-row: 2/3
`

function PaymentPage() {
    function onChangeValue(event) {
        console.log(event.target.value)
    }
    return <>
        <h1>Wybierz płatność</h1>
        <PaymentList>
            <PaymentChoice>
                <div>
                    <Input
                        type="radio"
                        name="płatność"
                        value="gotówka"
                        onChange={onChangeValue}
                    />
                    <Icon>ikona</Icon>
                    <p>Gotówka</p>


                </div>
            </PaymentChoice>
            <li>
                <div>

                </div>
            </li>
            <li>
                <div>

                </div>
            </li>
            <li>
                <div>

                </div>
            </li>
        </PaymentList>
    </>
}

export default PaymentPage