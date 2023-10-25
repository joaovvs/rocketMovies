
import { Container } from "./styles";

import { Link } from "react-router-dom";

export function Button({icon: Icon,title,isDelete , to, ...rest}){
    return(
        <Link to={to}>
            <Container 
                $isDelete={isDelete}
                {...rest}
                >
                    {Icon && <Icon size={16}/>}
                    {title}      
            </Container>
        </Link> 
        
    )
}