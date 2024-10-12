import styled from "styled-components";

export const Boxmessage = styled.div`
    background-color: ${({theme}) => theme.colors.White};
    border-radius: 25px;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 500px;
    max-width: 90%;

    @media (max-width: 668px) {
        max-width: 100%;
    }
`;

export const Iconsuccess = styled.img`
    width: 60px;
    max-width: 90%;
    border-radius: 50%;
`;

export const Title = styled.h1`
    font-size: ${({theme}) => theme.sizes.large};
    font-weight: ${({theme}) => theme.weigths.bold};
    color: ${({theme}) => theme.colors.DarkSlateGrey};
`;

export const Paragrafy = styled.p`
    font-size: ${({theme}) => theme.sizes.small};
    font-weight: ${({theme}) => theme.weigths.normal};
    color: ${({theme}) => theme.colors.DarkSlateGrey};
    line-height: 25px;
`;

export const ButtonClose = styled.a`
    width: 100%;
    background-color: ${({theme}) => theme.colors.DarkSlateGrey};
    padding: 12px 20px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    text-align: center;
    display: block;

    :hover {
        background-color: ${({theme}) => theme.colors.Tomato};
    }
`;