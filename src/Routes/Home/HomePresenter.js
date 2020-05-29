import React from "react";
import styled from "styled-components";
import Product1 from "../../Component/Home/Product1"
import Product2 from "../../Component/Home/Product2"
import Product3 from "../../Component/Home/Product4";
import Dropdown from "../../Component/Dropdown";

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
