import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Links= styled(Link)`
  display: table;
  width: 100%;
  height:100%;
  margin: 0 auto;
  margin-bottom:20px;
  margin-top:40px;
  z-index:1;
}
`;

const Img = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 450px;
  opacity: 0;
  transition: opacity 0.3s linear;
`;


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position:center center;
  background-color:#eee;
  cursor: pointer;
  &:hover {
    ${Img} {
      opacity: 1;
    }}

`;

const FarmName = styled.span`
  color: #494848;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const ImageContainer = styled.div`
  display:table;
`;

const Number = styled.div`
    color:black;
    display:flex;
    align-items:center;
    &:first-child{
        margin-right:20px;
    }
`;

const NumberText = styled.span`
    margin-left:10px;
    font-size:16px;
    color:black;
`;
const MarketCard = ({ name, family, id,src }) => {
  console.log(family);

  return (
    <Links to={`/${id}`}>
      <Container>
          <Img>
            <Number>
              <NumberText>
              {family}
              </NumberText>
            </Number>
          </Img>
      </Container>
      <ImageContainer>
        <FarmName>{name}</FarmName>
      </ImageContainer>
    </Links>
  );};

export default MarketCard;