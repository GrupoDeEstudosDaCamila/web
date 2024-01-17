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
        padding: 8px;
        font-weight: 700;
        font-size: 24px;
    }
`;
