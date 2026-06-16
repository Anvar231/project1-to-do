import styled from "styled-components";
import {Box, Select} from "@mui/material";

export const SortBox = styled(Box)`
  display: flex;
  gap: 20px;
`

export const StyledSelect = styled(Select)`
    && {
      background-color: ${({theme}) => (theme.primary)};
      color: ${({theme}) => (theme.secondary)};
      border: 1px solid ${({theme}) => (theme.secondary)};
      transition: ${({theme}) => (theme.transition)};

      && .MuiSvgIcon-root {
            color: ${({theme}) => (theme.secondary)};
        }
    }
`

