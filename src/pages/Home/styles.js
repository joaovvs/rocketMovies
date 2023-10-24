import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    grid-template-areas: 
    "header"
    "content";
    grid-template-rows: auto auto;
    width: 100%;
    

    >main{

        grid-area: content;
        overflow-y: auto;
        padding: 5rem 12.3rem;
        

        header{
            display: flex;
            justify-content: space-between;

            margin-bottom: 5rem;

            h1{
                color: ${({theme})=> theme.COLORS.WHITE};
                font-size: 3.2rem;
                font-weight: normal;
            }
        }

        .movie-card-list{
            display: flex;
            flex-direction: column;

            gap: 2.4rem;
        }
    }

`;