import React from "react";
import styled from "styled-components";
import Markets from "../Markets";

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-image: url('${(props) => props.src}');
  background-size:cover;
  background-position:center center;
  width:100%;
  height:900px;
  flex-wrap:wrap;
  `;
const Form = styled.form`
  display: table;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 60px;
  margin-bottom: 50px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 50px;
`;

const Search = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 36px;
  width: 400px;
  background-color: #f7f7f7;
  border: 1px solid #f7f7f6;
  z-index: 1;
  margin: 0px auto;
`;

export default () => {
    return (
      <Container src={null}>
        <Form>
          <Title>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Title>
          <SubTitle>Lorem Ipsum has been the industry's</SubTitle>
          <Search placeholder="농장 이름..." />
        </Form>
        <Markets />
      </Container>
    );
}