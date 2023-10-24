import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        gap: .6rem;

        align-items: center;
        
        color: ${({theme}) => theme.COLORS.PINK};

        font-size: 1.2rem;
        
       > svg{
            fill: ${({theme}) => theme.COLORS.PINK};
            
        }

        >svg:nth-child(5){
            fill: none;
        }
`;