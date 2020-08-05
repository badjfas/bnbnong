import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: table;
  width:100%;
  padding: 30px;
  padding-top: 100px;
  font-family: noto sans;
`;

const ImgContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 100%;
  margin:0px auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Items = styled.div`
  background-color:#eee;
  width:100%;
  height:100%;
  min-height:200px;
`;

const Item = styled.div`
  font-size:28px;
  font-weight:600;
  padding:20px;
  &:last-child{
    float:right;
    padding:50px;
    color:#0f4c81;
  }
`;

const DetailList = styled.ul`
  font-weight: 600;
`;

const List = styled.li`
  border-bottom: 1px solid #eee;
  padding:20px;
`;



const DetailCard = ({ data, numberWithCommas }) => {
  console.log(data);
  return (
    <Container>
      <ImgContainer>
        <Image src={"http://bnbnong.com:4000/static/" + data[0].file_name} />
      </ImgContainer>
      <Items>
        <Item>{data[0].name}</Item>
        <Item>{numberWithCommas(data[0].price_shipping)}원</Item>
      </Items>
      <DetailList>
        <List>원산지 : </List>
        <List>배송방법 :</List>
        <List>배송비 :</List>
      </DetailList>
    </Container>
  );
};

export default DetailCard;
