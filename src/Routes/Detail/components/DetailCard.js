import React from "react";
import styled from "styled-components";

import {
  ShippingBox,
  ShippingTruck,
  ShippingMoney,
  Caution,
} from "../../../Component/svgIcons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../../store";
const Container = styled.div`
  display: flex;
  padding: 30px;
  padding-top: 200px;
  width: 100%;
  font-family: noto sans;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ImgContainer = styled.div`
  border: 1px #d6dada;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
`;
const ContentContainer = styled.div`
  display: table;
  padding-left: 20px;
  max-width:600px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
const Text = styled.p`
  padding: 10px;
`;
const ProductName = styled(Text)`
  font-weight: 700;
  font-size: 24px;
`;

const ProductPrice = styled(Text)`
  font-size 35px;
  font-weight: 700;
  border-bottom: 1px solid #dbe1e1;
  margin-bottom:20px;
`;

const ProductWeight = styled(Text)`
  font-size 20px;
  border-bottom: 1px solid #DBE1E1;
`;

const ProductCaution = styled(Text)`
  margin-top: 5px;
  background-color: #ffbc54;
  border-radius: 7px;
  padding: 3px;
  font-size: 17px;
  color: #f3f3f3;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
`;

const ProductContent = styled(Text)`
  color: #0b61d4;
  font-size: 23px;

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  border-top: 1px solid #dbe1e1;
`;

const NaverButton = styled(Link)`
  width: 45%;
  border-radius: 10px;
  height: 50px;
  padding: 10px;
  margin: 0 auto;
  background-color: #4ddb49;
`;

const DetailCard = ({ data, id,category }) => {

 console.log(data);
      return (
        <Container>
          <ImgContainer>
            <Image src={'http://bnbnong.com:4000/static/'+data[0].file_name} />
          </ImgContainer>
          <ContentContainer>
            <ProductName>{data[0].name}</ProductName>
            <ProductPrice>{data[0].price_shipping}원</ProductPrice>
            <ProductWeight>중량: 500g</ProductWeight>
            <ProductCaution>
              <Caution /> 이 상품은 바로 배송되지 않습니다. 제철 지정 일자에
              일괄 배송됩니다.
            </ProductCaution>
            <ProductContent>
              <ShippingTruck style={{ fontSize: 35 }} /> 2020 년 6 ~ 9 월 배송
              예정
            </ProductContent>
            <ProductContent>
              <ShippingBox style={{ fontSize: 35 }} /> 안전한 에어박스 포장
            </ProductContent>
            <ProductContent>
              <ShippingMoney style={{ fontSize: 35 }} /> 배송비 포함
            </ProductContent>
            <ButtonContainer>
              <NaverButton>장바구니</NaverButton>
            </ButtonContainer>
          </ContentContainer>
        </Container>
      );
return null;
};

export default DetailCard;
