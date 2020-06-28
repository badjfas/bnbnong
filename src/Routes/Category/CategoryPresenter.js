import React from "react";
import styled from "styled-components";
import Tabs from "../../Routes/Category/components/Tabs";
import Tabtest from "./components/Tabtest";
const Container = styled.div`
  width: 100%;
`;

export default ({ data, loading }) => {
  console.log(data,"data");
  return <Container></Container>;
};
