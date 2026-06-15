import styled from "styled-components";
import {Box, Card, Checkbox, IconButton, TextField} from "@mui/material";

export const ToDoCheckBox = styled(Checkbox)`
  && {
    transition: 0.2s;
  }

  &&:hover {
    transform: scale(1.3);
  }
`

export const ToDoInfo = styled(Box)`
  display: grid;
  width: 50%;
  grid-template-columns: auto 1fr 200px;
  align-items: center;
  gap: 10px;
`

export const ToDoActions = styled(Box)`
  display: flex;
  gap: 10px;
`

export const ToDoIconButton = styled(IconButton)`
  && {
    color: ${({theme}) => (theme.secondary)};
    transition: ${({theme}) => (theme.transition)};
  }
  &&:hover {
    transform: scale(1.3);
  }
`

export const TodoTextField = styled(TextField)`
  && {
    height: 100%;
  }

  && * {
    border-radius: 5px;
  }
      & .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${({theme}) => (theme.secondary)};
      }

      &&:hover .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${({theme}) => (theme.secondary)};
      }

      && div {
        height: 100%;
      }
      
      && input {
        padding: 0 10px;
        height: 100%;
        background-color: ${({theme}) => (theme.primary)};
        color: ${({theme}) => (theme.secondary)};
      }

      && input:hover {
        padding: 0 10px;
        height: 100%;
        background-color: ${({theme}) => (theme.primary)};
        color: ${({theme}) => (theme.secondary)};
      }
  
`

export const ToDoCard = styled(Card)`
  && {
    border: 1px solid ${({theme}) => (theme.secondary)};
    padding: 0 20px;
    border-radius: 5px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
    transition: ${({theme}) => (theme.transition)};
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => (theme.primary)};
    color: ${({theme}) => (theme.secondary)};
    color: ${({theme}) => (theme.secondary)};
  }

  &&:hover {
    border: 1px solid blue;
    background-color: ${({theme}) => (theme.secondary)};
    color: ${({theme}) => (theme.primary)};
    cursor: pointer;
  }

  && ${ToDoCheckBox} {
    color: ${({theme}) => (theme.secondary)};
  }
  
  &&:hover ${ToDoCheckBox} {
    color: ${({theme}) => (theme.primary)};
  }

  &&:hover ${ToDoIconButton} {
    color: ${({theme}) => (theme.primary)};
  }

  &&:hover ${TodoTextField} div {
    background-color: ${({theme}) => (theme.secondary)};
  }
`