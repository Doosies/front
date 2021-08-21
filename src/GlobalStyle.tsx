import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body{
        height:100vh;
        width:100vw;
        border:0;
        margin:0;
    }
    
    #root, .App{
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
        font-family: 'Nanum Gothic', sans-serif;
        height:100vh;
        width:100vw;
        border:0;
        margin:0;

    }
`;

export default GlobalStyle;