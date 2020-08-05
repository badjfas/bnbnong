import React from "react";
import styled from "styled-components";
import MarketsTest from "../MarketsTest";

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-image: url('${(props) => props.src}');
  background-size:cover;
  background-position:center center;
  width:100%;
  height:100%;
  flex-wrap:wrap;
  padding-top:100px;
  `;
const Form = styled.div`
  display: table;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color:#eee;
  font-weight: 600;
  font-size: 60px;
  margin-bottom: 50px;
`;

const SubTitle = styled.div`
  display: flex;
  color:#eee;

  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 50px;
`;


export default () => {
    return (
      <Container src={""}>
        <MarketsTest />
      </Container>
    );
}