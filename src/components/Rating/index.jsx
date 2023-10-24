import { Container } from "./styles";

import { FiStar } from "react-icons/fi";

export function Rating({rating, ...rest}){
    return (
        <Container {...rest}>
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
        </Container>
    )
}