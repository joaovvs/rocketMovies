import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%;
    

    main{

        padding: 5rem 12.3rem;
        grid-area: content;
        overflow-y: auto;

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
    }

`;