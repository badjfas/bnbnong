import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width:1100px;
  margin:0px auto;
`;

const CartContainer = styled.div`
  width: 100%;
  display: block;
`;

const Form = styled.form``;
const CartItems = styled.div``;

const Table = styled.table`
  border-bottom: 2px solid #E9E9E9;
`;

const ColGroup = styled.colgroup``;
const Col = styled.col``;
const Thead = styled.thead``;
const Tr = styled.tr``;

const Th = styled.th`
  font-family: noto sans;
  font-weight: 600;
  padding: 20px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: cover;
  width: 90px;
  height: 100px;
`;

const Input = styled.input`
width: 38px;
height: 22px;
border: 0;
background-color: #fff;
font-size: 12px;
color: #000;
text-align: center;
letter-spacing: -.2px;
border: 1px solid #ddd;
`;
export default ({id,productname,src,price_shipping,handleDelete}) => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container>
      <CartContainer>
        <Form>
          <CartItems>
            <Table>
              <ColGroup>
                <Col style={{ width: 432 }} />
                <Col style={{ width: 432 }} />
                <Col style={{ width: 300 }} />
                <Col style={{ width: 200 }} />
                <Col style={{ width: "auto" }} />
              </ColGroup>
              <Thead>
                <Tr>
                  <Th
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{ marginRight: 15, height: 14, width: 14 }}
                    />
                    <Image src={src} />
                  </Th>
                  <Th>{productname}</Th>
                  <Th>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button onClick={(e) => e.preventDefault()}>-</button>
                      <Input placeholder="0" type="text" />
                      <button onClick={(e) => e.preventDefault()}>+</button>
                    </div>
                  </Th>
                  <Th>{numberWithCommas(price_shipping)}</Th>
                  <Th>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(id)
                      }}
                      style={{ backgroundColor: "transparent", border: 0 }}
                    >
                      X
                    </button>
                  </Th>
                </Tr>
              </Thead>
            </Table>
          </CartItems>
        </Form>
      </CartContainer>
    </Container>
  );
};
