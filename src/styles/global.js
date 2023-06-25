import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #F2F5F6;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
    }
`

export default GlobalStyle;