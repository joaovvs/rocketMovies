import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;

    grid-template-rows: auto 100%;
    grid-template-areas: 
    "header"
    "content";
    
    main {
        grid-area: content;

        overflow-y: scroll;

        align-items: start;
        
        display: flex;
        flex-direction: column;
        gap: 4rem;
        

        padding: 4rem 12.4rem 8.5rem;


        h1 {
            font-size: 3.6rem;
            font-weight: 500;

            margin-top: 2.4rem;

            color: ${({theme}) => theme.COLORS.TEXT_GRAY_100}
        }
    }
`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 4rem;

    > div {
        display: flex;
        gap: 4rem;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 2.4rem;
    h2{
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.GRAY}
    }


    .marker-edition {
        width: 100%;
        
        display: flex;
        gap: 2.4rem;

        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        
        border-radius: 0.8rem;

        padding: 1.6rem;
    }
`;

export const Footer = styled.footer`
    width: 100%;

    
    
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;

    gap: 4rem;

    button{
        width: 100%;
    }

`;