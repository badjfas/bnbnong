import React, { useState } from "react";
import Product from "../../Component/Product";
import Loader from "../../Component/Loader";
import Category from "../../Component/Category";
import styled from "styled-components";

const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  align-itmes:center;
  font-weight: 600;
  font-size: 25px;
  padding-top:150px;
  padding-bottom:50px;

`;

const Title = styled.span`
border-bottom:1px solid #0f4c81;
padding-bottom:5px;
`;

const SwitchCointainer = styled.div`
  float:right;
  width:100%;
  padding:20px;
  border:0px;
  `;

const MarketButton = styled.div`
  cursor: pointer;
  user-select:none;
  text-align: center;
  width: 200px;
  font-size: 25px;
  padding: 5px;
  border: 1px solid ${(props) => (props.isMarket ? "#0f4c81" : "#0f4c81")};
  border-radius: 10px;
  margin-right: 15%;
  float: right;
  &:hover{
    background-color:#0f4c81;
    color:white;
  }
`;

export default ({
  error,
  loading,
  numberWithCommas,
  FamilyCategoryList,
  getAllList,
  props,
  isMarket,
  marketList,
  switchPage,
}) => {
  return (
    <>
      <TitleContainer>
        <Title>
        품목군
        </Title>
      </TitleContainer>
      <Category/>
      <SwitchCointainer>
        <MarketButton isMarket={isMarket} onClick={() => !switchPage()}>
          {isMarket ? "농장으로 보기" : "마켓으로 보기" }
        </MarketButton>
      </SwitchCointainer> 
      {loading ? (
        <Loader />
      ) : (
        <Product
          data={isMarket ? marketList : getAllList}
          numberWithCommas={numberWithCommas}
          FamilyCategoryList={FamilyCategoryList}
          isMarket={isMarket}
        />
      )}
    </>
  ) ;
};
