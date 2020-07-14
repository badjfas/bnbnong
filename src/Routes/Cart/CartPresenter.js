import React from "react";
import styled from "styled-components";
import List from "./components/List";
import { Link } from "react-router-dom";
import Loader from "../../Component/Loader"
const Container = styled.div`
  padding-top: 150px;
  max-width:1100px;
  margin:0px auto;
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

const Form = styled.form`
  width:100%;
`;

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

const ButtonContainer = styled(Link)`
  border-top: 2px solid #c83bee;
  width:100%;
  display:flex;
  aligin-items:center;
  justify-content:center;
`;

const Button = styled.button`
  display: block;
  width: 200px;
  height: 48px;
  margin: 0 auto;
  border: 0;
  background-color: #5f0080;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  letter-spacing: -0.3px;
  margin-top:50px;  

`;

const Input = styled.input`
  margin-right:15px
`;

export default ({ProductData,handleAllChecked,checked,error,loading,handleDelete}) => {
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <HeaderTitle>장바구니</HeaderTitle>
            <SubTitle>
              주문하실 상품명 및 수량을 정확하게 확인해 주세요.
            </SubTitle>
          </Header>
          <CartContainer>
            <Form onSubmit={() => null}>
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
                      <Th>
                        <Input
                          type="checkbox"
                          onChange={handleAllChecked}
                          checked={checked}
                        />
                        전체 선택
                      </Th>
                      <Th>상품 정보</Th>
                      <Th>수량</Th>
                      <Th>상품금액</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                </Table>
                {ProductData === null
                  ? console.log("is null")
                  : ProductData.map((data) => {
                      return (
                        <List
                          handleDelete={handleDelete}
                          id={data.id}
                          productname={data.name}
                          src={
                            "http://bnbnong.com:4000/static/" + data.file_name
                          }
                          price_shipping={data.price_shipping}
                        />
                      );
                    })}
              </CartItems>
              <ButtonContainer to={"/pay"}>
                <Button>주문 하기</Button>
              </ButtonContainer>
            </Form>
          </CartContainer>
        </>
      )}
    </Container>
  );
};
