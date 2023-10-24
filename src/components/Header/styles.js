import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100%;
    
    padding: 2.4rem 12.3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 6.4rem;

    h1 {
        font-size: 2.4rem;
        font-weight: bold;
        
        color: ${({theme}) => theme.COLORS.PINK};


    }

`

export const Search = styled.div`
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: .9rem;



    >div {
        display: flex;
        flex-direction: column;
        text-align: right;

        font-family: 'Roboto Slab', serif;
        font-size: 1.4rem;
        font-weight: bold;

        span{
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};
        }

        a{
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_300};
        }
    }

    img {
        width: 6.4rem;
        height: 6.4rem;

        border-radius: 50%;
    }
`;