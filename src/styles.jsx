import styled from "styled-components";

export const Card = styled.div`
    background-color: ${({theme}) => theme.colors.White};
    color: ${({theme}) => theme.colors.DarkSlateGrey};
    width: 800px;
    max-width: 90%;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 668px) {
        flex-direction: column-reverse;
        padding: 0px;
        max-width: 100%;

        picture {
        width: 100%;
        height: 100%;
    }
    }
`

export const Description = styled.div`
    padding: 30px;

    h1 {
        font-size: ${({theme}) => theme.sizes.large};
        font-weight: ${({theme}) => theme.weigths.bold};
        margin-bottom: 20px;

        @media (max-width: 450px) {
            font-size: 35px;
        }
    }

    p {
        font-size: ${({theme}) => theme.sizes.small};
        line-height: 20px;
        margin-bottom: 20px;
    }
`;

export const Benefits = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: ${({theme}) => theme.sizes.small};
    margin-bottom: 10px;
`;

export const Ilustration = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px;

    @media (max-width: 668px) {
        border-radius: 0px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: ${({theme}) => theme.sizes.small};
    margin-top: 40px;

    label {
        font-weight: ${({theme}) => theme.weigths.bold};
    }

    .input-email {
        padding: 15px 20px;
        background: none;
        border: 1px solid ${({theme}) => theme.colors.Grey};
        border-radius: 5px;
        margin-bottom: 15px;
        opacity: 0.7;
    }

    .btn-submit {
        width: 100%;
        padding: 15px 20px;
        background-color: ${({theme}) => theme.colors.DarkSlateGrey};
        color: ${({theme}) => theme.colors.White};
        font-weight: ${({theme}) => theme.weigths.bold};
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    .btn-submit:hover {
        background-color: ${({theme}) => theme.colors.Tomato};
        color: ${({theme}) => theme.colors.White};
    }
`;

export const ContainerLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

    .text-error {
        opacity: 1;
        visibility: visible;
        transition: 0.2s ease-in-out;
        color: ${({theme}) => theme.colors.error};
        font-weight: ${({theme}) => theme.weigths.bold};
    }

    .text-error.hide {
        opacity: 0;
        visibility: hidden;
    }
`;

export const Modal = styled.div`
    background-color: #fff;
    color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 200px;
    box-shadow: 0 0 10px rgba(0,0,0,0.500);
    border-radius: 10px;
    text-align: center;
    transition: 0.2s ease-in-out;

    h2 {
        font-size: 22px;
        font-weight: ${({theme}) => theme.weigths.bold};
        
    }
`;

export const Fade = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.500);
`;