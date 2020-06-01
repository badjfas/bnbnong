import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import CartList from "./components/CartList";
import BucketList from "./components/BucketList";
import { Input } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  margin-top: 40px;
  flex-direction: column;
  &> button : hover {
    background-color: #ddd;
  }
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: "Do Hyeon", sans-serif;
  & > th,
  td,
  * {
    border: 1px solid #ddd;
    text-align: center;
    padding: 8px;
  }

`;
const TableHeader = styled.th`
  padding-top: 12px;
  background-color: #ddd;
  padding-bottom: 12px;
  text-align: left;
  margin-left: 2px;
  color: black;
`;

const PriceContainer = styled.div`
  display:flex;
  width:30%;
  font-family: "Do Hyeon", sans-serif;
  border:1px solid #ddd;
`;
const TotalPriceHeader = styled.div`
  width:50%;
`;
const TotalPrice = styled.div`
width:50%;
  margin-left:10px;
`;

const CartPresenter = ({ cart, onBtnSave ,state}) => {
  const [value, setValue] = useState(0);
  let [price, setPrice] = useState(0);
  for(var count in cart){
    price = price + cart[count].data.totalPrice;
  }  
  state.result = price;
  console.log(state.result)
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <button
          style={{
            float: "right",
            marginBottom: 10,
            height: 30,
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: 5,
          }}
          onClick={() => {}}
        >
          장바구니 비우기
        </button>
      </div>
      <Table id="customers" key="1">
        <tbody>
          <tr>
            <TableHeader>상품명</TableHeader>
            <TableHeader>단가</TableHeader>
            <TableHeader>수량</TableHeader>
          </tr>

          {cart !== null ? (
            <>
              {cart.map((list) => {
                return (
                  <tr key={list.data.id}>
                    <td style={{ width: "60%" }}>{list.data.productname}</td>
                    <td style={{ width: "32%" }}>{list.data.price}</td>
                    <td style={{ width: "18%" }}>
                      <Input
                        type="number"
                        value={list.data.qty}
                        onChange={(e) => {
                          list.data.qty = e.target.value;
                          setValue(list.data.qty);
                          list.data.totalPrice =
                            parseInt(list.data.qty) * list.data.price;
                          localStorage.setItem("result", JSON.stringify(cart));
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </>
          ) : null}
        </tbody>
      </Table>
      <div style={{ width: "100%" }}>
        <button
          style={{
            float: "right",
            marginTop: 10,
            height: 50,
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: 5,
          }}
          onClick={() => {
            onBtnSave(cart);
          }}
        >
          결제하기
        </button>
      </div>
      <PriceContainer>
        <TotalPriceHeader>최종 가격</TotalPriceHeader>
        <TotalPrice>{price}원</TotalPrice>
      </PriceContainer>

    </Container>
  );
};
const getCurrentState = (state, ownProps) => {
console.log(ownProps);
  return {
    state,
    ownProps,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnSave: (data) => dispatch(actionCreators.saveCart(data)),
    totalPrice : () => dispatch(actionCreators.calTotalPrice())
  };
};

export default connect(getCurrentState, mapDispatchToProps)(CartPresenter);
