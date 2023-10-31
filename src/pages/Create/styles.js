import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: auto auto;
    grid-template-areas: 
    "header"
    "content";
    
    > main {
        grid-area: content;

        overflow-y: auto;

        align-items: start;
        
        display: flex;
        flex-direction: column;
        gap: 4rem;
        

        padding: 4rem 10.6rem 8.5rem 12.3rem;

    }
`;

export const Form = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;


    gap: 4rem;


 

    header {
        display: flex;
        flex-direction: column;

        align-items: start;

        h1 {
            font-size: 3.6rem;
            font-weight: 500;

            margin-top: 2.4rem;

            color: ${({theme}) => theme.COLORS.TEXT_GRAY_100}
        }
    }

    > div{
        display: flex;
        gap: 4rem;
    }

`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    
    padding-right: 2.4rem;

    gap: 2.4rem;
    h2{
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.GRAY}
    }


    .marker-edition {
        width: 100%;
        
        display: flex;

        flex-wrap: wrap;
        gap: 2.4rem;

        background: ${({theme}) => theme.COLORS.BACKGROUND_900};
        
        border-radius: 0.8rem;

        padding: 1.6rem;
    }

    &::-webkit-scrollbar{
            width: .8rem;
            background: transparent;
    }

    &::-webkit-scrollbar-thumb{ 
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-track{
        background: transparent;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;

    gap: 4rem;

    a{
        width: 100%;
    }

`;