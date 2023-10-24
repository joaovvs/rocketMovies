import styled from "styled-components";

export const Container = styled.span`
    width: fit-content;

    text-align: center;

    background: ${({theme}) => theme.COLORS.BACKGROUND_500};
    padding: .5rem 1.6rem;

    border-radius: .8rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.TEXT_GRAY_200};


`