import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function Marker({title, isNew, ...rest}){
    return(
        <Container $isNew={isNew}
        {...rest}>
            {title ? title : "Novo marcador"}
            <button> {isNew ?  <FiPlus/> : <FiX/>} </button>
        </Container>
    )
}