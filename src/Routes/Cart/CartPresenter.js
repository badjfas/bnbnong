import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import CartList from "./components/CartList";
import ContextA from "./../../Component/Routes"
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

const CartPresenter = ({ onBtnDelete, data, bucket ,onBtnAdd }) => {
  const [value, setValue] = useState(0);

  const Save = () => {
    console.log(bucket, "SAVE");
    localStorage.setItem("bucket", JSON.stringify(bucket));
  };

  const Add = (data) => {
    console.log(data, "ADD");
    for (var count in bucket) {
      if (bucket[count].id === data.id) {
        bucket[count].qty++;
        Save();
        return;
      }
    }
    const newBucket = data;
    bucket.push(newBucket);
    Save();
  };

  
  return (
    <Container>
      <Table id="customers" key="sdaf">
        <tr>
          <TableHeader>상품번호</TableHeader>
          <TableHeader>상품명</TableHeader>
          <TableHeader>단가</TableHeader>
          <TableHeader>담기</TableHeader>
        </tr>

        {data !== null ? (
          <>
            {data.map((list) => {
              return (
                <tr>
                  <CartList key={list.id} {...list} />
                  <td>
                    <button
                      onClick={()=>onBtnAdd(list.data)}
                    >
                      담기
                    </button>
                    <button
                      onClick={() => {
                        window.location.reload();
                        onBtnDelete(list.data.id);
                      }}
                    >
                      빼기
                    </button>
                  </td>
                </tr>
              );
            })}
          </>
        ) : (
          <td> EMPTY </td>
        )}
      </Table>

      <Table style={{ marginTop: 100 }} id="customers" key="sdaf">
        <tr>
          <TableHeader>상품명</TableHeader>
          <TableHeader>가격</TableHeader>
          <TableHeader>수량</TableHeader>
        </tr>
      
      </Table>
    </Container>
  );
};
const getCurrentState = (state, ownProps) => {
  return {
    state,
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
