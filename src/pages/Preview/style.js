import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    grid-template-areas: 
    "header"
    "content";
    grid-template-rows: 11.6rem auto;

    width: 100%;
    height: 100vh;
    
    main{
        grid-area: content;
        overflow-y: auto;
        padding-right: 10.6rem;
    }
`;

export const Section = styled.section`

    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 4rem 2.4rem 15.6rem 12.3rem;

    header {
        display: flex;
        flex-direction: column;
        
        align-items: start;

        gap: 2.4rem;

        
        .title-and-rating{
            display: flex;
            flex-direction: row;

            align-items: center;

            gap: 1.9rem;

            h1{
                font-size: 3.6rem;
                font-weight: 500;

                color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};
            }

        }

        .note-creation-infos{
            display: flex;
            align-items: center;

            gap: 0.8rem;


            img{
                width: 1.6rem;
                height: 1.6rem;

                border-radius: 50%;

                border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_400 };
            }

            p{
                font-family: 'Roboto', sans-serif;
                color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};
            }

            svg{
                color: ${({theme}) => theme.COLORS.PINK};
                font-size: 1.6rem;
            }
        }
        
    }

    .tag-list{
        display: flex;
        gap: 0.8rem;

        margin: 4rem 0;
    }

    p{
        text-align: justify;

        color: ${({theme}) => theme.COLORS.TEXT_GRAY_100};
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