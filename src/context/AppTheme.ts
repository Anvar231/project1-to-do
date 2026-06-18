import {createGlobalStyle} from "styled-components";
import type {DefaultTheme} from "styled-components";

export const AppTheme = createGlobalStyle`
    body {
      background-color: ${({theme}) => (theme.primary)};
      transition: ${({theme}) => (theme.transition)};
    }
`

export const lightMode: DefaultTheme = {
    primary: "#fff",
    secondary: "#000",
    transition: "0.3s"
}

export const darkMode: DefaultTheme = {
    primary: "#000",
    secondary: "#fff",
    transition: "0.3s"
}
