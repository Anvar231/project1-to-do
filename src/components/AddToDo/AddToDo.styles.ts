import styled from "styled-components";
import {Box, IconButton, TextField, Typography} from "@mui/material";

export const AddIconButton = styled(IconButton)<{$lightMode: boolean}>`
  && {
    width: 50px;
    background-color: ${({$lightMode}) => ($lightMode? "white": "black")};
    color: ${({$lightMode}) => ($lightMode? "black" : "white")};
    border: 1px solid ${({$lightMode}) => ($lightMode? "black" : "white")};
    border-radius: 5px;
    transition: 0.3s;
  }
  
  &&:hover {
    border: 1px solid blue;
    background-color: ${({$lightMode}) => ($lightMode? "black" : "white")};
    color: ${({$lightMode}) => ($lightMode? "white": "black")};
  }
`

export const AddToDoBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
`

export const AddTextField = styled(TextField)<{$lightMode: boolean}>`
  && input {
    height: 100%;
    color: ${({$lightMode}) => ($lightMode? "black": "white")};
  }
  
  && {
    flex: 1;
    border-radius: 5px;
    background-color: ${({$lightMode}) => ($lightMode? "white" : "black")};
    transition: 0.3s;
  }
  
  && .MuiInputLabel-root {
    color: ${({$lightMode}) => ($lightMode? "black": "white")};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({$lightMode}) => ($lightMode? "black": "white")};
    }
    
    &:hover fieldset{
      border-color: ${({$lightMode}) => ($lightMode? "black": "white")};
    }
    
  }
`

export const Warning = styled(Typography)<{ $visible: boolean }>`
  flex-basis: 100%;
  opacity: ${({$visible}) => ($visible?1:0)};
`