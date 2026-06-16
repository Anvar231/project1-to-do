import styled from "styled-components";
import {Typography} from "@mui/material";

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`

export const StyledTypography = styled(Typography)`
    color: ${({theme}) => (theme.secondary)};
`