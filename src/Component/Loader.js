import React from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0%{
      opacity:0
  }
  50%{
      opacity:1
  }
  100%{
      opacity:0
  }
`;

const Loader = styled.div`
  animation: ${Animation} 1.5s linear infinite;
  height: 150vh;
  width: 100%;
  display: flex;
  padding-top:200px;
  justify-content: center;
  font-size:100px;
  margin-top:20px;
`;

export default () => (
  <Loader>
      <span role="img" aria-label="Loading">😁</span>
  </Loader>
);
