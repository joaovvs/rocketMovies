import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
        
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        outline: none;
    } 
    
    body{
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        font-size: 1.6rem;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        border: none;
        text-decoration: none;
    }

    button:hover, a:hover{
        filter: brightness(0.7);
    }

`;