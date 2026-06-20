import styled from "styled-components";

export const Box = styled.div`
  border: 3px solid red;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.secondary};
`