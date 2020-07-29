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
  position:relative;
  padding:100px;
  right:-70%;
  `;

const MarketButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  font-size:25px;
  padding:5px;
  background-color: ${(props) =>
    props.isMarket ? "#f50" : "#eee"};
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
      <SwitchCointainer>
        <MarketButton isMarket={isMarket} onClick={() => !switchPage()}>
          {isMarket ? "농장" : "마켓" }
        </MarketButton>
      </SwitchCointainer> 
      <Category/>
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
