
import { Container } from "./styles";


export function Button({icon: Icon,title,isDelete , ...rest}){
    return(
            <Container 
                $isDelete={isDelete}
                {...rest}
                >
                    {Icon && <Icon size={16}/>}
                    {title}      
            </Container>
        
    )
}