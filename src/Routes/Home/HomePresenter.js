import React from "react";
import styled from "styled-components";
import Product1 from "./components/Product1"
import Product2 from "./components/Product2"
import Product3 from "./components/Product4";

const Container = styled.div`
  padding:15px;
`;


//👁👁👁👁👁👁👁👁Material Ui Component 👁👁👁👁👁👁👁👁

//👁👁👁👁👁👁👁👁👁👁👁
export default ({ data}) => {
  return (
    <Container>
      <Product1 data={data} />
      <Product2 data={data}/>
      <Product3 data={data}/>
    </Container>
  );
};
