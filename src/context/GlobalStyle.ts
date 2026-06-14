import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle<{$lightMode: boolean}>`
    body {
      background-color: ${({$lightMode}) => ($lightMode? "white": "black")};
    }
`