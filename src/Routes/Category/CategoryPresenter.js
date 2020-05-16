import React from "react";
import styled from "styled-components";
import Tabs from "../../Component/Category/Tabs"
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