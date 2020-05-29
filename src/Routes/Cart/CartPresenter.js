import React, { useContext, useEffect , useState} from 'react';

import { Input } from '@material-ui/core';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';


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
  font-family:'Do Hyeon', sans-serif;
  & > th,td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  &> tr:hover {
    background-color: #f5f5f5;
  }
`;
const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  margin-left:2px;
  background-color: #4caf50;
  color: white;
`;

const Empty = styled.div`
width:100%;
margin-top:20px;
display:flex;
justify-content:center;
align-items:center;
`;

const cart = JSON.parse(localStorage.getItem("cart"));
const CartPresenter =  ({addList,data}) => {
console.log(cart,"Cart");
const [text, setText] = useState("");

let [value,setValue] = useState(0)
const onChange = (e) => {
  value = e.target.value;
  setValue(value);
};
const onSubmit = (e) => {
  e.preventDefault();
  addList(data);  
}

  return (
    <Container>
      <Table id="customers" key="sdaf">
        <tr>
          <TableHeader>상품명</TableHeader>
          <TableHeader>단가</TableHeader>
          <TableHeader>수량</TableHeader>
          <TableHeader>담기</TableHeader>
        </tr>
        {cart.map(({data}) => {
          return <tr></tr>;
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
}
const getCurrentState = (state) =>{
  console.log("cart - p")
  return {
      state
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    addList: (data) => dispatch(actionCreators.addList(data)),
    deleteList : ()=> dispatch(actionCreators.deleteCart())
  }
};
export default connect(getCurrentState)(CartPresenter);