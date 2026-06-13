import styled from "styled-components";
import {Box, Card, Checkbox, IconButton} from "@mui/material";

export const ToDoCheckBox = styled(Checkbox)`
  && {
    transition: 0.2s;
  }
  
  &&.Mui-checked {
    color: black;
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
    color: black;
    transition: 0.2s;
  }
  &&:hover {
    transform: scale(1.3);
  }
`

export const ToDoCard = styled(Card)`
  && {
    border: 1px solid black;
    padding: 0 20px;
    border-radius: 5px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
    transition: 0.3s;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &&:hover {
    border: 1px solid blue;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  && ${ToDoCheckBox} {
    color: black;
  }
  
  &&:hover ${ToDoCheckBox} {
    color: white;
  }

  &&:hover ${ToDoIconButton} {
    color: white;
  }
`