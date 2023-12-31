import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: fit-content;

    

    align-items: center;
    padding: 1.6rem;
    border-radius: 1rem;
    gap: 1.6rem;
    background: ${({theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    border: ${({theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.TEXT_GRAY_300}` : "none"};

    
    input {
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_300};
        }
    }

    >button{
        display: flex;
        width: 2.4rem;
        height: 2.4rem; 

        background: none;
        svg {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 2.4rem;
        }
    }
`;