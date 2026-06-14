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

export const ToDoIconButton = styled(IconButton)<{$lightMode: boolean}>`
  && {
    color: ${({$lightMode}) => ($lightMode? "black": "white")};
    transition: 0.2s;
  }
  &&:hover {
    transform: scale(1.3);
  }
`

export const TodoTextField = styled(TextField)<{$lightMode}>`
  && {
    height: 100%;
  }

  && * {
    border-radius: 5px;
  }
      & .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${({$lightMode}) => ($lightMode? "black" : "white")};
      }

      &&:hover .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${({$lightMode}) => ($lightMode? "black" : "white")};
      }

      && div {
        height: 100%;
      }
      
      && input {
        padding: 0 10px;
        height: 100%;
        background-color: ${({$lightMode}) => ($lightMode? "white" : "black")};
        color: ${({$lightMode}) => ($lightMode? "black": "white")};
      }

      && input:hover {
        padding: 0 10px;
        height: 100%;
        background-color: ${({$lightMode}) => ($lightMode? "white" : "black")};
        color: ${({$lightMode}) => ($lightMode? "black": "white")};
      }
  
`

export const ToDoCard = styled(Card)<{$lightMode}>`
  && {
    border: 1px solid ${({$lightMode}) => ($lightMode? "black": "white")};
    padding: 0 20px;
    border-radius: 5px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
    transition: 0.3s;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({$lightMode}) => ($lightMode? "white" : "black")};
    color: ${({$lightMode}) => ($lightMode? "black": "white")};
    color: ${({$lightMode}) => ($lightMode? "black": "white")};
  }

  &&:hover {
    border: 1px solid blue;
    background-color: ${({$lightMode}) => ($lightMode? "black": "white")};
    color: ${({$lightMode}) => ($lightMode? "white": "black")};
    cursor: pointer;
  }

  && ${ToDoCheckBox} {
    color: ${({$lightMode}) => ($lightMode? "black": "white")};
  }
  
  &&:hover ${ToDoCheckBox} {
    color: ${({$lightMode}) => ($lightMode? "white" : "black")};
  }

  &&:hover ${ToDoIconButton} {
    color: ${({$lightMode}) => ($lightMode? "white" : "black")};
  }

  &&:hover ${TodoTextField} div {
    background-color: ${({$lightMode}) => ($lightMode? "black": "white")};
  }
`