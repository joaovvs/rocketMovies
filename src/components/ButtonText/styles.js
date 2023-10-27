import styled from "styled-components";


export const Container = styled.button`
    display: flex;

    justify-content: center;
    align-items: center;
    
    gap: 0.8rem;

    background: none;
    color: ${({theme}) => theme.COLORS.PINK};

    border: none;
    
    svg{
        width: 1.6rem;
        height: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;