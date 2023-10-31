import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    header{
        background: ${({theme}) => theme.COLORS.BACKGROUND_PINK};

        display: flex;

        padding: 6.4rem 16.8rem;

    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    max-width: 34rem;

    justify-content: center;
    margin: -10rem auto 0;

    gap: 0.8rem;

    >div:nth-child(4), button{
        margin-top: 1.6rem;
   }
   button,a{
    width: 100%;
   }

`;

export const Avatar = styled.div`
    position: relative;

    margin: 0 auto 6.4rem; 

    
    >img {
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    }
    
    label {
       
        background-color: ${({theme}) => theme.COLORS.PINK};
        width: 4.8rem;
        height: 4.8rem;

        padding: 1.4rem;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({theme}) => theme.COLORS.BACKGROUND_500};

        position: absolute;

        bottom: 0.7rem;
        right: 0.7rem;

        cursor: pointer;
    }

    input{
        display: none;
    }

   
`;