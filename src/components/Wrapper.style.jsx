import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    
    @media (max-width: 668px) {
        display: block;
    }
`;