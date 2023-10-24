import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;

    border-radius:1rem;
    padding: 1.9rem 1.6rem;

    border: none;

    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    
    color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};
    font-family: 'Roboto', sans-serif;

    resize: none;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_300};
    }
`;