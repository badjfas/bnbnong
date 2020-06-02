import React, { useState } from "react";
import { Input } from "@material-ui/core";
import styled from "styled-components";
import Post from "./Post";

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

const TextContainer = styled.div`
  display:flex;
  padding-top:30px;
  width:100%;
  border-bottom:2px solid #000;
`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  cursor: none;
  font-family: "Do Hyeon", sans-serif;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
`;
export default ({dataBucket}) =>{
  const [value, setValue] = useState(0);
  let tp = 0;
  if(dataBucket){
    for( var count in dataBucket.bucket){
      tp = tp+dataBucket.bucket[count].data.totalPrice;
    }
  }
  return (
    <Container>
      <TextContainer>
        <Text>결제</Text>
      </TextContainer>
      <Table style={{ marginTop: 30 }}>
        <tbody>
          <tr>
            <TableHeader>상품명</TableHeader>
            <TableHeader>수량</TableHeader>
            <TableHeader>총 가격</TableHeader>
          </tr>
          {dataBucket !== null ? (
            <>
              {dataBucket.bucket.map((list) => {
                return (
                  <tr key={list.data.id}>
                    <td style={{ width: "60%" }}>{list.data.productname}</td>
                    <td style={{ width: "20%" }}>
                      <Input
                        type="number"
                        onChange={(e) => {
                          list.data.qty = e.target.value;
                          setValue(value + 1);
                          list.data.totalPrice =
                            list.data.qty * list.data.price;
                          localStorage.setItem(
                            "result",
                            JSON.stringify(dataBucket)
                          );
                        }}
                      />
                    </td>
                    <td style={{ width: "20%", padding: 0 }}>
                      {list.data.price * list.data.qty} 원
                    </td>
                  </tr>
                );
              })}
            </>
          ) : null}
        </tbody>
      </Table>
      <div style={{ width: "100%" }}>
        <span  style={{
            float: "right",
            marginTop: 10,
            width: 100,
            height:30,
            fontFamily: "Do Hyeon sans-serif",
            backgroundColor: "white",
            border: "1px solid #ddd",
          }}>{tp}원</span>
                  <span  style={{
            float: "right",
            marginTop: 10,
            width: 100,
            height:30,
            fontFamily: "Do Hyeon sans-serif",
            backgroundColor: "white",
            border: "1px solid #ddd",
          }}>총가격</span>
      </div>
      <Post/>
    </Container>
  );
}
