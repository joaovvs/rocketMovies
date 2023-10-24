import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    height: 100vh;
    margin: auto 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    padding: 0 13.6rem;

    h1{
        font-size: 4.9rem;
        color:  ${({theme}) => theme.COLORS.PINK};
    }

    h2{
        color:  ${({theme}) => theme.COLORS.TEXT_GRAY_100};
        font-size: 2.4rem;
        font-weight: 500;

        margin: 4.8rem 0;
    }

    p{
        color:  ${({theme}) => theme.COLORS.TEXT_GRAY_200};
        font-size: 1.4rem;
    }


    button{ 
        margin-top: 1.6rem;
    }
    /*Input's div margin*/ 
    div + div{
        margin-top: 0.8rem;
    }




`;

