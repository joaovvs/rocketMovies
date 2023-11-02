import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.BACKGROUND_PINK};

    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3.2rem;

    border-radius: 1.6rem;
    gap: 1.5rem;

    div:first-child{
        display: flex;
        flex-direction: column;
        margin: 0;
        h2 {
            font-size: 2.4rem;
            font-weight: bold;

            color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};

            margin-bottom: 0.8rem;
        }

    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        width: auto;
        height: 4rem;

        text-overflow: ellipsis;
        white-space: wrap;
        text-align: justify;
        overflow: hidden;


        color: ${({theme}) => theme.COLORS.GRAY};
    }

    .tags{
        display: flex;
        gap: .8rem;
    }
`; 