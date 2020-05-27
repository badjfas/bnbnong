import React, { useContext, useEffect , useState} from 'react';

import { Input } from '@material-ui/core';
import styled from 'styled-components';


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

const cart =[];

export default  () => {
  
  const saveCart = () => {
    localStorage.setItem("cart",JSON.stringify(cart))
  }

  const addListCart = (item) => {
    console.log(item,"func");
    for(var c in cart){
      if(cart[c].productname === item.productname){
        cart[c].qty = cart[c].qty + item.qty;
        saveCart();
        return console.log(cart[c],"func");
      }
    }
    const newItem = item;
    cart.push(newItem);
    saveCart();
  }

  const list= JSON.parse(sessionStorage.getItem("cart"));
  const cartItem = JSON.parse(localStorage.getItem("cart"));
  console.log(cartItem)
  const [listCount,setListCount] = useState(0);

  return (
    <Container>
      <Table id="customers" key="sdaf">
        <tr >
          <TableHeader>상품명</TableHeader>
          <TableHeader>단가</TableHeader>
          <TableHeader>수량</TableHeader>
          <TableHeader>담기</TableHeader>
        </tr>
        {list!==null?<>{list.map((l) => {
          var [value, setValue] = useState(0);
          return (
            <tr id={l.id}>
              <td>{l.productname}</td>
              <td style={{}}>{l.price}원</td>
              <td>
                <Input
                  type="number"
                  style={{}}
                  onChange={(e) => {
                    value = e.target.value;
                    return setValue(value);
                  }}
                />
              </td>
              <td>
                <button
                  style={{ width: "100%", height: 20 }}
                  onClick={() => {
                    l.qty = Number(value);
                    setListCount(listCount+1)
                    return addListCart(l);
                  }}
                />
              </td>
            </tr>
          );
        })}</> : <Empty>비어있음</Empty> }
      </Table>

      <Table style={{marginTop:100}} id="customers" key="sdaf">
        <tr >
          <TableHeader>상품명</TableHeader>
          <TableHeader>가격</TableHeader>
          <TableHeader>수량</TableHeader>
        </tr>
        {cartItem!==null ?         <>
            {cartItem.map((c) => {
              return (
                <tr id={c.id}>
                  <td>{c.productname}</td>
                  <td style={{}}>{c.price * c.qty}원</td>
                  <td style={{}}>{c.qty}개</td>
                </tr>
              );
            })}
          </> :<Empty>비어있음</Empty>}
      </Table>
    </Container>
  );
}