import styled from "styled-components";
import { clrBack, clrThi, grdBack } from "../../styles/varCSS";

export const StyledForms = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 32px;

    background-image: ${grdBack};

    h1 {
        color: ${clrThi};
        font-size: 48px;
    }
`

export const StyledInput = styled.input`
    border-radius: 30px 0 0 30px;
    border: none;
    outline: none;
`

export const SytledButton = styled.button`
    border-radius: 0 30px 30px 0;
    border: none;
    background-color: ${clrThi};
    color: ${clrBack};
    cursor: pointer;
`