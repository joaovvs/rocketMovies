import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    width: 100%;

    padding: 1.9rem 2.4rem;
    
    display: flex;
    align-items: center;
    gap: 1.2rem;

    svg{
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_300};
    }

    input{
        background: none;
        border: none;

        font-size: 1.4rem;
        width: 100%;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};

        
        &::placeholder{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_300}
        }
    }
`; 