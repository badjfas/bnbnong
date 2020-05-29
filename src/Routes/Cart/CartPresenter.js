import React, { useContext, useEffect, useState } from "react";

import { Input } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../../store";

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
  td {
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
  background-color: #4caf50;
  color: white;
`;

const Empty = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const data = JSON.parse(localStorage.getItem("cart"));

const CartPresenter = ({ addList, deleteCart }) => {
  console.log(data);
  const [text, setText] = useState("");

  const [list, setList] = useState(0);

  let [value, setValue] = useState(0);

  const onChange = (e) => {
    value = e.target.value;
    setValue(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addList(data);
  };

  const onClick = (e) => {
    console.log(e)
    e.preventDefault();
    //deleteCart(data.id);
  };

  return (
    <Container>
      <Table id="customers" key="sdaf">
        <tr>
          <TableHeader>상품명</TableHeader>
          <TableHeader>단가</TableHeader>
          <TableHeader>수량</TableHeader>
          <TableHeader>담기</TableHeader>
        </tr>
        {data.map(({ data }) => {
          return (
            <tr>
              <td>{data.productname}</td>
              <td>{data.price}</td>
              <td>
                <Input />
              </td>
              <td>
                <button>담기</button>
                <button onClick={onClick}>삭제</button>
              </td>
            </tr>
          );
        })}
      </Table>

      <Table style={{ marginTop: 100 }} id="customers" key="sdaf">
        <tr>
          <TableHeader>상품명</TableHeader>
          <TableHeader>가격</TableHeader>
          <TableHeader>수량</TableHeader>
        </tr>
        <td></td>
      </Table>
    </Container>
  );
};
const getCurrentState = (state) => {
  console.log("cart - p");
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  
  return {
    deleteCart: () => dispatch(actionCreators.deleteCart()),
  };
};
export default connect(getCurrentState, mapDispatchToProps)(CartPresenter);
