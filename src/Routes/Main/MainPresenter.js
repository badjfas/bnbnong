import React, { useState } from "react";
import Product from "../../Component/Product";
import Loader from "../../Component/Loader";
import Category from "../../Component/Category";
import styled from "styled-components";

const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  align-itmes:center;
  padding-top:100px;
`;

const Title = styled.div``;

const SwitchCointainer = styled.div`
  float:right;
  width:100%;
  padding:20px;
  border:0px;
  `;

const MarketButton = styled.div`
  text-align:center;
  width: 200px;
  font-size: 25px;
  padding: 5px;
  border: 2px solid ${(props) => (props.isMarket ? "#2E86C1" : "#17A589")};
  border-radius: 5px;
  margin-right:15%;
  float:right;
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
        산지 직송
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
