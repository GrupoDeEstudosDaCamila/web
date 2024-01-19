import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        font-family: "Roboto", sans-serif;
    }

    input, button {
        font-family: "Roboto", sans-serif;
        padding: 15px;
        font-weight: 700;
        font-size: 20px;
    }

    input:focus{
        background: #1c1c1c;
        color: #ffffff;
    }

    button:hover{
        background: #054f77;
    }

    button:active{
        background: #1c1c1c;
    }
`;
