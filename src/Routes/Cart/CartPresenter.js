import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  margin-bottom:50px;
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
  width: 100%;
  font-family: "Do Hyeon", sans-serif;
`;
const TotalPriceHeader = styled.div`
  width: 20%;
  border: 1px solid #ddd;
  float: right;
`;
const TotalPrice = styled.div`
  float: right;
  width: 20%;
  border: 1px solid #ddd;
`;

export default ({ data, dataBucket, onBtnBucket }) => {
  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data, "data");
    onBtnBucket(data);
  };

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
            <TableHeader>담기</TableHeader>
          </tr>

          {data !== null ? (
            <>
              {data.cart.map((list) => {
                const [value, setValue] = useState(0);

                return (
                  <tr key={list.data.id}>
                    <td style={{ width: "60%" }}>{list.data.productname}</td>
                    <td style={{ width: "32%" }}>{list.data.price}원</td>
                    <td style={{ width: "18%", padding: 0 }}>
                      <form
                        onSubmit={(e) => {
                          onSubmit(e, list.data);
                        }}
                        style={{ width: "100%", padding: 0 }}
                      >
                        <button
                          style={{ width: "100%" }}
                          onClick={() => {
                            list.data.qty = value;
                            setValue(value);
                          }}
                        >
                          담기
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : null}
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <TableHeader>상품명</TableHeader>
            <TableHeader>단가</TableHeader>
            <TableHeader>담기</TableHeader>
          </tr>
          {dataBucket !== null ? (
            <>
              {dataBucket.bucket.map((list) => {
                console.log(list, "list");
                return (
                  <tr key={list.data.id}>
                    <td style={{ width: "60%" }}>{list.data.productname}</td>
                    <td style={{ width: "32%" }}>{list.data.price}원</td>
                    <td style={{ width: "18%", padding: 0 }}>
                      {list.data.qty}
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
          onClick={() => {}}
        >
          결제하기
        </button>
      </div>
    </Container>
  );
};
