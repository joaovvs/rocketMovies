import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    width: 100%;

    
    display: flex;
    align-items: center;
    gap: 1.2rem;

    padding: 0  2.4rem;

    svg{
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_300};
    }

    input{
        background: none;
        border: none;

        padding: 1.9rem 0;
        border-radius: 1rem;

        font-size: 1.4rem;
        width: 100%;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};

        
        &::placeholder{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_300}
        }
    }
`; 