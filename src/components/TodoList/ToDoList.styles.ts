import styled from "styled-components";
import {Box, Select, Typography} from "@mui/material";

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

export const StyledTypography = styled(Typography)`
    color: ${({theme}) => (theme.secondary)};
`