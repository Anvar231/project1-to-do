import styled from "styled-components";
import {Box, Select} from "@mui/material";

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`

export const SortBox = styled(Box)`
  display: flex;
  gap: 20px;
`

export const StyledSelect = styled(Select)<{$lightMode}>`
    && {
      background-color: ${({$lightMode}) => ($lightMode? "white" : "black")};
      color: ${({$lightMode}) => ($lightMode? "black": "white")};
      border: 1px solid ${({$lightMode}) => ($lightMode? "black": "white")};

      && .MuiSvgIcon-root {
            color: ${({$lightMode}) => ($lightMode? "black": "white")};
        }
    }
`