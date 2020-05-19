import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-top: 1px solid #DBE1E1;
  width:100%;
`;

export default () => {
    return(
        <Container>
            <Tabs/>
        </Container>
    )
}