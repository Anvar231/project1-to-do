import styled from "styled-components";
import {Box, IconButton, TextField, Typography} from "@mui/material";

export const AddIconButton = styled(IconButton)`
  && {
    width: 50px;
    background-color: ${({theme}) => (theme.primary)};
    color: ${({theme}) => (theme.secondary)};
    border: 1px solid ${({theme}) => (theme.secondary)};
    border-radius: 5px;
    transition: ${({theme}) => (theme.transition)};
  }
  
  &&:hover {
    border: 1px solid blue;
    background-color: ${({theme}) => (theme.secondary)};
    color: ${({theme}) => (theme.primary)};
  }
`

export const AddToDoBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
`

export const AddTextField = styled(TextField)`
  && input {
    height: 100%;
    color: ${({theme}) => (theme.secondary)};
  }
  
  && {
    flex: 1;
    border-radius: 5px;
    background-color: ${({theme}) => (theme.primary)};
    transition: ${({theme}) => (theme.transition)};
  }
  
  && .MuiInputLabel-root {
    color: ${({theme}) => (theme.secondary)};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({theme}) => (theme.secondary)};
    }
    
    &:hover fieldset{
      border-color: ${({theme}) => (theme.secondary)};
    }
    
  }
`

export const Warning = styled(Typography)<{ $visible: boolean }>`
  flex-basis: 100%;
  opacity: ${({$visible}) => ($visible?1:0)};
`