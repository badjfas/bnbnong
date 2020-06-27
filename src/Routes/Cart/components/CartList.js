import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "reactstrap";
import Spinner from "../../../Component/Spinner";

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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
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
  border-bottom: 2px solid #000;
`;

export default ({ state, data, onBtnBucket }) => {
  const onSubmit = (e, data) => {
    e.preventDefault();
    onBtnBucket(data);
  };
  return (
    <Container>
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
                            state.visibilityPayment = "SHOW_PAYMENT";
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
    </Container>
  );
};
