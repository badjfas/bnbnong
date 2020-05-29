import React, { useState } from "react";
import styled from "styled-components";

import {ShippingBox, ShippingTruck, ShippingMoney, Caution} from "../svgIcons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
const Container = styled.div`
  display:flex;
  padding: 30px;
  padding-top: 60px;
  width:100%;
  @media only screen and (max-width:768px) {
    display:grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);
  } 
`;
const ImgContainer = styled.div`
  border:1px  #D6DADA;
  display:flex;
  justify-content:center;
  align-items:center;
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
@media only screen and (max-width:768px) {
  padding : 0;  
} 
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

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
width:100%;
padding-top: 10px;
border-top: 1px solid #DBE1E1;
`;

const NaverButton = styled(Link)`
  width:45%;
  border-radius:10px;
  height:50px;
  padding: 10px;
  margin:0 auto;
  background-color:#4DDB49;
`;

const ExButton = styled(NaverButton)`
  background-color:#547BFF;
`;


const DetailCard =  ({data,id,category,state,addCart}) => {
  const [list,setList] = useState([])

  const onClick = (e) => {
    e.preventDefault();
    const {d} = data[id-1];
    setList([]);
   addCart(d);
  };
  
    switch(category) {
      case "1": 
      return (
        <Container>
          <ImgContainer>
            <Image src={data[id - 1].src} />
          </ImgContainer>
          <ContentContainer>
            <ProductName>{data[id - 1].productname}</ProductName>
            <ProductPrice>{data[id - 1].price}원</ProductPrice>
            <ProductWeight>중량: 500g</ProductWeight>
            <ProductCaution>
              <Caution /> 이상품은 ...
            </ProductCaution>
            <ProductContent>
              <ShippingTruck style={{ fontSize: 35 }} /> 배송 1~2일 소요
            </ProductContent>
            <ProductContent>
              <ShippingBox style={{ fontSize: 35 }} /> 튼튼한 박스 포장
            </ProductContent>
            <ProductContent>
              <ShippingMoney style={{ fontSize: 35 }} /> 배송비 2,500원
            </ProductContent>
            <ButtonContainer>
                <NaverButton onClick={onClick}>장바구니</NaverButton>
            </ButtonContainer>
          </ContentContainer>
        </Container>
      );
      case 2:
        return null;
      default :
      return null;
    }
}
const getCurrentState = (state) =>{
  return {
      state
  }
}
const mapDispatchToProps = (dispatch,props) => {
  const data = props.data[props.id-1]
  console.log(data,"dispatfch");
  return {
    addCart: () => dispatch(actionCreators.addCart(data)),
    deleteCart : ()=> dispatch(actionCreators.deleteCart())
  }
};
export default connect(getCurrentState,mapDispatchToProps)(DetailCard);