import React from "react";
import styled from "styled-components";
import ProductSwipe from "../../Component/Home/ProductSwipe";
import Banner from "../../Component/Home/Banner";
import Product1 from "../../Component/Home/Product1"
import Product2 from "../../Component/Home/Product2"
import Product3 from "../../Component/Home/Product3";

const Container = styled.div`
  padding:15px;
`;

const Text = styled.span`
  color: rgb(0, 0, 0);
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left:10px;
`;


//👁👁👁👁👁👁👁👁Material Ui Component 👁👁👁👁👁👁👁👁

//👁👁👁👁👁👁👁👁👁👁👁
export default ({ data,loading }) => {
  console.log(data);

  return (
    <Container>
      <Product1/>
      <Product2/>
      <Product3/>
    </Container>
  );
};
