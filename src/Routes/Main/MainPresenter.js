import React, { useState } from "react";
import Market from "./components/Market";
import Loader from "../../Component/Loader";
import useInput from "../../Component/useInput";
import Banners from "../../Component/Banners";
import Products from "../../Component/Products";

import styled from "styled-components";

const SwitchCointainer = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const MarketButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  font-size:30px;
  background-color: ${(props) =>
    props.isMarket === "market" ? "#f50" : "#eee"};
`;
const ProductButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  font-size:30px;
  background-color: ${(props) =>
    props.isMarket === "product" ? "#f50" : "#eee"};
`;

export default ({
  error,
  loading,
  numberWithCommas,
  FamilyCategoryList,
  getAllList,
  props,
  isMarket,
  switchPage,
}) => {
  console.log(isMarket);
  return (
    <>
      <SwitchCointainer>
        <MarketButton isMarket={isMarket} onClick={() => switchPage("market")}>
          농장으로 보기
        </MarketButton>
        <ProductButton
          isMarket={isMarket}
          onClick={() => switchPage("product")}
        >
          상품목록으로 보기
        </ProductButton>
      </SwitchCointainer>
      {isMarket === "market" ? <Banners /> : <Products/>}
      {loading ? (
        <Loader />
      ) : (
        <Market
          data={getAllList}
          numberWithCommas={numberWithCommas}
          FamilyCategoryList={FamilyCategoryList}
        />
      )}
    </>
  ) ;
};
