import React, { useContext, useEffect, useState } from "react";

import { Input } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import CartList from "../../Component/CartList";

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
  & > th, td ,* {
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

const CartPresenter = ({ addList, onBtnDelete,data}) => {
  const [value,setValue] = useState(0);

  return (
    <Container>
      <Table id="customers" key="sdaf">
        <tr>
          <TableHeader>상품번호</TableHeader>
          <TableHeader>상품명</TableHeader>
          <TableHeader>단가</TableHeader>
          <TableHeader>담기</TableHeader>
        </tr>
     
          {data.map(list => {
            return (<CartList key={list.id} {...list}/>)})}
      
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
const getCurrentState = (state,ownProps) => {
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch,ownProps) => {
  const {data} = ownProps;
  console.log(data)
  return {
    onBtnDelete: () => dispatch(actionCreators.deleteCart()),
  };
};
export default connect(getCurrentState, mapDispatchToProps)(CartPresenter);
