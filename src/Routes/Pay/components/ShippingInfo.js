import React from "react";
import styled from "styled-components";
import { DaumPostcode } from "./DaumPost";

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

const Table = styled.table``;

const Tbody = styled.tbody``;

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

const Button = styled.button`
  height: 33px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 33px;
  color: #000;
  letter-spacing: -0.2px;
  vertical-align: top;
  border: 1px solid #5f0081;
  border-radius: 3px;
  background-color: #5f0080;
  color: #fff;
`;

export default () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>배송지 정보</HeaderTitle>
      </Header>

      <Table>
        <Tbody>
          <Tr>
            <Th>배송지 *</Th>
            <Td>
              <Input
                type="text"
                id="sample6_postcode"
                placeholder="우편번호"
                readOnly
              ></Input>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  DaumPostcode();
                  return;
                }}
              >
                입력
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Th>주소*</Th>
            <Td>
              <Input
                className="cinput"
                type="text"
                id="sample6_address"
                placeholder="주소"
                readOnly
              ></Input>
            </Td>
          </Tr>
          <Tr>
            <Th>상세 주소*</Th>
            <Td>
              <Input
                type="text"
                id="sample6_detailAddress"
                placeholder="상세주소"
              ></Input>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};
