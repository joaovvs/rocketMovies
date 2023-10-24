import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};

    border: none;
    
    svg{
        width: 1.6rem;
        height: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;