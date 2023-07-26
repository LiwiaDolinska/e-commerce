import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { ModalOverlay, ModalBox, Text, ButtonBox, Button } from './styles';


function Modal(props) {
    if (!props.show) {
        return null
    }


    return <>
        <ModalOverlay onClick={props.onClose}></ModalOverlay>
        <ModalBox>
            <FontAwesomeIcon icon={faCircleCheck} size="3x" color="green" />
            <Text>Produkt został dodany do koszyka</Text>
            <ButtonBox>
                <Button onClick={props.onClose}>Kontynuuj zakupy</Button>
                <Link to="/basket"><Button>Przejdź do koszyka</Button></Link>
            </ButtonBox>
        </ModalBox>
    </>
}

export default Modal