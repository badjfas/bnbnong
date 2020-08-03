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
`;

const Item = styled.div`
  width:100%;
  font-size:28px;
  font-weight:600;
  padding:15px;
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
        <Item>{numberWithCommas(data[0].price_shipping)}</Item>
        <Item>{data[0].name}</Item>
      </Items>
    </Container>
  );
};

export default DetailCard;
