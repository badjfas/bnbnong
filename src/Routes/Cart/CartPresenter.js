import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "reactstrap";
import Payment from "./components/Payment";
import CartList from "./components/CartList";
import Spinner from "../../Component/Spinner";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  margin-top: 40px;
  flex-direction: column;
  &>button: hover {
    background-color: #ddd;
  }
`;
const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:10px;
`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  font-family: "Do Hyeon", sans-serif;
  line-height: 2;
  cursor: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
  border-bottom:2px solid #000;
`;

const Button = styled.button`
  float: right;
  margin-bottom: 10px;
  height: 40px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default ({ data, dataBucket, onBtnBucket, state }) => {

  return (
    <Container>
      <Spinner type="grow" color="primary" />
      <TextContainer>
        <Text>장바구니</Text>
      </TextContainer>
      <div style={{ width: "100%" }}>
        <Button
          onClick={(e) => {
            sessionStorage.removeItem("cart")
            sessionStorage.removeItem("bucket")
            window.location.reload();
          }}
        >
          장바구니 비우기
        </Button>
        <CartList state={state} onBtnBucket={onBtnBucket} data={data}/>
      </div>
      {state.visibilityPayment === "SHOW_PAYMENT" ? (
        <Payment dataBucket={dataBucket} />
      ) : null}
    </Container>
  );
};
