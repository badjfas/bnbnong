import React from "react";
import styled from "styled-components";

const Container = styled.div`
height: 100%;
width: 100vw;
display: flex;
justify-content: center;
font-size:96px;
margin-top:150px;
`;

export default ({text}) => {
    console.log(text);
    return (
      <Container>
        <span role="img" aria-label="Loading">
        😵
        </span>
      </Container>
    );
}