import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    html,body {
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
        background-color: ${({ theme }) => theme.colors.DarkSlateGrey};

        @media (max-width: 668px) {
            background-color: ${({ theme }) => theme.colors.White};
        }
    }

    button {
        border: none;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    input {
        outline: none;
        border: none;
    }
`;