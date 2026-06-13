import styled from "styled-components";
import {Box, IconButton, TextField, Typography} from "@mui/material";

export const AddIconButton = styled(IconButton)`
  && {
    width: 50px;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  &&:hover {
    border: 1px solid blue;
    background-color: black;
    color: white;
  }
`

export const AddToDoBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  column-gap: 30px;
  row-gap: 10px;
`

export const AddTextField = styled(TextField)`
  && input {
    height: 100%;
  }
  && {
    flex: 1;
    border-radius: 5px;
  }
`

export const Warning = styled(Typography)<{ $visible: boolean }>`
  flex-basis: 100%;
  opacity: ${({$visible}) => ($visible?1:0)};
`