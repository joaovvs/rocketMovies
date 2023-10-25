import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
    display: flex;

    justify-content: center;
    align-items: center;
    
    gap: 0.8rem;

    background: none;
    color: ${({theme}) => theme.COLORS.PINK};

    border: none;
    
    svg{
        width: 1.6rem;
        height: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;