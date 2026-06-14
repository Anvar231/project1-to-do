import styled from "styled-components"
import {IconButton} from "@mui/material";

export const ThemeIconButton = styled(IconButton)<{$lightMode: boolean}>`
  && {
    border: 1px solid ${({$lightMode}) => ($lightMode? "black" : "white")};
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: ${({$lightMode}) => ($lightMode? "white": "black")};
    color: ${({$lightMode}) => ($lightMode? "black" : "white")};
  }
  &&:hover {
    background-color: ${({$lightMode}) => ($lightMode? "black" : "white")};
    color: ${({$lightMode}) => ($lightMode? "white": "black")};
  }
`