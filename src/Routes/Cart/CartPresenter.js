import React, { useState } from "react";
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
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: "Do Hyeon", sans-serif;
  & > th,
  td,
  * {
    border: 1px solid #ddd;
    padding: 8px;
  }
  & > tr:hover {
    background-color: #f5f5f5;
  }
`;
const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  margin-left: 2px;
  color: black;
`;

const Empty = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartPresenter = ({ cart, result }) => {
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <Container>
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
                    <td style={{ width: "20%" }}>{list.data.price}</td>
                    <td style={{ width: "20%" }}>
                      <Input
                        type="number"
                        value={list.data.qty}
                        onChange={(e) => {
                          list.data.qty = e.target.value;
                          setValue(list.data.qty);
                          list.data.totalprice =
                            parseInt(list.data.qty) * list.data.price;
                          setPrice(list.data.totalprice);
                          localStorage.setItem("result", JSON.stringify(cart));
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <td> EMPTY </td>
          )}
        </tbody>
      </Table>

      <button
        onClick={() => {
          window.location.reload();
          localStorage.setItem("copyResult", JSON.stringify(cart));
        }}
      >
        구매확정
      </button>

      <Table style={{ marginTop: 100 }} id="customers" key="2">
        <tbody>
          <tr>
            <TableHeader>상품명</TableHeader>
            <TableHeader>수량</TableHeader>
            <TableHeader>총 가격</TableHeader>
          </tr>
          {result !== undefined && result !== null ? (
            <>
              {result.map((list) => {
                if (list.data.qty > 0)
                  return (
                    <tr>
                      <td>{list.data.productname}</td>
                      <td>{list.data.qty}</td>
                      <td>{list.data.totalprice}</td>
                    </tr>
                  );
              })}
            </>
          ) : null}
        </tbody>
      </Table>
    </Container>
  );
};
const getCurrentState = (state, ownProps) => {
  return {
    state,
    ownProps,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { data } = ownProps;
  console.log(data, "CartPresenter : cartownProps");
  return {
    onBtnDelete: (id) => dispatch(actionCreators.deleteCart(id)),
    onBtnAdd: (list) => dispatch(actionCreators.addCart(list)),
  };
};

export default connect(getCurrentState, mapDispatchToProps)(CartPresenter);
