import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Backdrop } from "@material-ui/core";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {ShippingBox, ShippingTruck, ShippingMoney, Caution} from "./../../Component/svgIcons";
import { Link } from "react-router-dom";
const Container = styled.div`
  display:flex;
  padding: 30px;
  padding-top: 60px;
  width:100%;
`;
const ImgContainer = styled.div`
  border:1px  #D6DADA;
  width:100%;
`;
const Image = styled.img`
  width:100%;
  height:100%;
  max-width:450px;
  max-height:500px;
`;
const ContentContainer = styled.div`
display: table;
padding-left:70px;
width:100%;

  `;
const Text = styled.p`
padding:10px;
`;
const ProductName = styled(Text)`
font-size: 50px;
margin-bottom:20px;
border-bottom: 1px solid #DBE1E1;
`;

const ProductPrice = styled(Text)`
  font-size 35px;
`;

const ProductWeight = styled(Text)`
  font-size 20px;
  border-bottom: 1px solid #DBE1E1;
`;

const ProductCaution = styled(Text)`
  margin-top:5px;
  background-color:#FFBC54;
  border-radius:7px;
  padding:3px;
  font-size:24px;
  color:#F3F3F3;
`;

const ProductContent =styled(Text)`
  color:#0B61D4;
  font-size:  23px;
`;

const ButtonContainer = styled(Link)`
display:flex;
width:100%;
border-top: 1px solid #DBE1E1;
`;

const NaverButton = styled.img``;
export default ({ data,loading }) => {
  const [count,setCount] = useState(0)
 
  return (
    <>
    <Container>
        <ImgContainer>
          <Image src={"https://m.organic-story.com/web/product/big/201901/d76c22fc86ea008266e16cc58b1d2b5e.jpg"}/>
        </ImgContainer>
        <ContentContainer>
              <ProductName>제주 딸기 잼</ProductName>
              <ProductPrice>9,000원</ProductPrice>
              <ProductWeight>중량: 500g</ProductWeight>
              <ProductCaution><Caution/> 이상품은   ...</ProductCaution>
              <ProductContent><ShippingTruck style={{fontSize:35}}/> 배송 1~2일 소요</ProductContent>
              <ProductContent><ShippingBox style={{fontSize:35}}/> 튼튼한 박스 포장</ProductContent>
              <ProductContent><ShippingMoney style={{fontSize:35}}/> 배송비 2,500원</ProductContent>
            <ButtonContainer>
                <NaverButton src={"https://developer.pay.naver.com/static/img/sp_btn_default_20180916.png"}/>
            </ButtonContainer>
        </ContentContainer>
    </Container>
  </>
  )
};
