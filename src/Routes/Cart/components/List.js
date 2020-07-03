import React from "react";
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

export default ({productname,src}) => {
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
                  <Th style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <input type="checkbox" style={{display:"flex",alignItems:"center",justifyContent:"center",height:14,width:14}} />
                    <Image src={src}/>
                  </Th>
                  <Th>{productname}</Th>
                  <Th>수량</Th>
                  <Th>상품금액</Th>
                  <Th></Th>
                </Tr>
              </Thead>
            </Table>
          </CartItems>
        </Form>
      </CartContainer>
    </Container>
  );
};
