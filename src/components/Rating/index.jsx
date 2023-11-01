import { Container } from "./styles";

import { FiStar } from "react-icons/fi";

export function Rating({rating,...rest}){
    
    const starsFilled = new Array(5);
      
    for(var i=0; i<5; i++){
        if(i<rating){
            starsFilled[i] = "#FF859B"
        }
        else {
            starsFilled[i] = "none"
        }
    };

    return (
        
        <Container {...rest}>
            { 
               starsFilled.map((value,index) => (                     
                        <FiStar key={index}
                        fill={value} /> 

                ))
            }
        </Container>
    )
}