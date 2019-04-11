import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    -webkit-touch-callout: none;
}
html{
    font-family:Arial, Helvetica, sans-serif;
    font-size:18px;
    touch-action: manipulation;
}
body{
    width:100%;
    height:100vh;
    overflow: hidden;
}
#root{
    width:100%;
    height: 100%;
}
`;
export default GlobalStyle;
