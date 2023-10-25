
import styled from "styled-components";

export const Container = styled.button`
    background: ${({theme, $isDelete}) => $isDelete ? theme.COLORS.BACKGROUND_900 :theme.COLORS.PINK};

    border-radius: 0.8rem;
    padding: 1.3rem 3.2rem;

    gap: .8rem;

    display:flex;
    align-items: center;
    justify-content: center;

    color: ${({theme, $isDelete}) => $isDelete ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};
    font-size: 1.6rem;

`;