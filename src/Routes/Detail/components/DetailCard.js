import React from "react";
import styled from "styled-components";

import {
  ShippingBox,
  ShippingTruck,
  ShippingMoney,
  Caution,
} from "../../../Component/svgIcons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../../store";
const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width:100%;
  padding: 30px;
  padding-top: 100px;
  margin:0px auto;
  font-family: noto sans;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ImgContainer = styled.div`
  width: 600px;
  height:600px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  width: 600px;
  height:600px;
`;

const Items = styled.div`
  display:table;
  justify-content:center;
  align-items:center;
  margin:0px auto;
`;

const Item = styled.div`
  width:100%;
`;

const DetailCard = ({ data, numberWithCommas, onClick, dummyData }) => {
  console.log(data);
  return (
    <Container>
      <ImgContainer>
        <Image src={"http://bnbnong.com:4000/static/" + data[0].file_name} />
      </ImgContainer>
      <Items>
        <Item>
          {data[0].name}
        </Item>
        <Item>
          {numberWithCommas(data[0].price_shipping)}
        </Item>
        <Item>
          {data[0].name}
        </Item>
      </Items>
    </Container>
  );
};

export default DetailCard;
