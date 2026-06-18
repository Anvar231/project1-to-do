import styled from "styled-components"
import {IconButton} from "@mui/material";

export const ThemeIconButton = styled(IconButton)`
  && {
    border: 1px solid ${({theme}) => (theme.secondary)};
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: ${({theme}) => (theme.primary)};
    color: ${({theme}) => (theme.secondary)};
  }
  &&:hover {
    background-color: ${({theme}) => (theme.secondary)};
    color: ${({theme}) => (theme.primary)};
  }
`