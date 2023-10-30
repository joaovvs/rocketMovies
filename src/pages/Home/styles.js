import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    grid-template-areas: 
    "header"
    "content";
    grid-template-rows: 11.6rem auto;
    width: 100%;
    height: 100vh;
    

    >main{
        grid-area: content;
        overflow-y: auto;
        padding: 0 10.6rem 0 12.3rem ;

        header{
            display: flex;
            justify-content: space-between;

            margin: 5rem 0;

            h1{
                color: ${({theme})=> theme.COLORS.WHITE};
                font-size: 3.2rem;
                font-weight: normal;
            }
            button{
                width: fit-content;
            }
        }
    }

`;

export const CardList = styled.section`

    flex-direction: column;
    display: flex;
    height: 80%;
    overflow-y: auto;


    gap: 2.4rem;
    padding-bottom: 5rem;
    padding-right: 1.6rem;

    &::-webkit-scrollbar{
        position: fixed;
        right: .8rem;
        top: 6.4rem;
        background: transparent;
        width: .6rem;


        
    }
    &::-webkit-scrollbar-thumb{ 
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-track{
        background: transparent;
    }
`;