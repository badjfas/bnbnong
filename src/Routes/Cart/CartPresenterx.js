import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 150px;
`;

const Header = styled.div`
  text-align: center;
  width: 100%;
  border-bottom: 2px solid #c83bee;
`;

const HeaderTitle = styled.span`
  display: block;
  padding: 10px 0 14px;
  font: normal bold 40px/1.5 "Noto Sans" !important;
  color: #333;
`;

const SubTitle = styled.div`
  margin: 0 0 40px;
  font: normal 16px/18px "Noto Sans";
  color: #999;
  text-align: center;
`;

const CartContainer = styled.div`
  width: 100%;
  display: block;
`;

const Form = styled.form``;

const CartItems = styled.div``;

const Table = styled.table``;

const ColGroup = styled.colgroup``;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
  font-family: noto sans;
  font-weight: 600;
  padding:20px;
`;


export default () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>장바구니</HeaderTitle>
        <SubTitle>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</SubTitle>
      </Header>
      <CartContainer>
        <Form>
          <CartItems>
            <Table>
              <ColGroup>
                <col style={{ width: 432 }} />
                <col style={{ width: 432 }} />
                <col style={{ width: 300 }} />
                <col style={{ width: 200 }} />
                <col style={{ width: "auto" }} />
              </ColGroup>
              <Thead>
                <Tr>
                  <Th>
                    <input type="checkbox" />
                    전체 선택
                  </Th>
                  <Th>상품 정보</Th>
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
