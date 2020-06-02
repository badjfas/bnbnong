import React from "react";
import styled from "styled-components";
import Tabs from "../../Routes/Category/components/Tabs"
const Container = styled.div`
    width:100%;

`;

export default ({data,loading}) => {
    return (
      <Container>
        <Tabs/>
      </Container>
    );
}