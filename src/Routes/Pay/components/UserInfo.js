import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding-top: 80px;
  max-width: 1100px;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 2px solid #c83bee;
`;

const HeaderTitle = styled.span`
  display: block;
  padding: 10px 0 14px;
  font: normal bold 25px/1.5 "Noto Sans" !important;
  color: #333;
`;

const Table = styled.table`
`;

const Tbody = styled.tbody`
`;

const Tr = styled.tr``;

const Th = styled.th`
  width: 190px;
  padding: 22px 0 0 20px;
  font-size: 14px;
  font-family: "Noto Sans";
  font-weight: 700;
  vertical-align: top;
`;

const Td = styled.td`
  padding-top: 20px;
  position: relative;
  padding: 16px 0 0 0;
  vertical-align: top;

`;

const Input = styled.input`
height: 33px;
    padding: 0 8px;
    border: 1px solid #ddd;
    background-color: #fff;
    font-size: 12px;
    line-height: 33px;
    color: #000;
    letter-spacing: -0.2px;
    vertical-align: top;
}
`;

export default () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>주문자 정보</HeaderTitle>
      </Header>

      <Table>
        <Tbody>
          <Tr>
            <Th>보내는 분*</Th>
            <Td>
              <Input></Input>
            </Td>
          </Tr>
          <Tr>
            <Th>휴대폰*</Th>
            <Td>
              <Input></Input>
              {"  "}
              <Input></Input>
              {"  "}
              <Input></Input>
            </Td>
          </Tr>
          <Tr>
            <Th>이메일*</Th>
            <Td>
              <Input></Input>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};
